import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as client from "@sendgrid/client";

import getContentfulDataFunction from "./get-contentful-data";
export const getContentfulData = getContentfulDataFunction;

const SENDGRID_KEY = functions.config().sendgrid.key;
client.setApiKey(SENDGRID_KEY);

admin.initializeApp();

import {
  getContract,
  getCostumer,
  getContractSandbox,
  getCostumerSandbox
} from "./billwerk";
import {
  addRecipients,
  addRecipientsToList,
  SUBSCRIBER_LIST_ID
} from "./sendgrid";

interface ISubscriber {
  firstName: string;
  lastName: string;
  email: string;
}

const addSubscriber = (subscriber: ISubscriber) =>
  admin
    .firestore()
    .collection("subscribers")
    .doc(subscriber.email)
    .set({
      allowed: true,
      firstName: subscriber.firstName,
      lastName: subscriber.lastName
    })
    .catch(e => {
      console.error(e);
      return e;
    });

const getMsg = ({
  templateId,
  firstName,
  url,
  email,
  lastName,
  senderEmail,
  senderName
}: {
  templateId: string;
  firstName: string;
  url: string;
  email: string;
  lastName: string;
  senderEmail: string;
  senderName: string;
}) => {
  return {
    template_id: templateId,
    personalizations: [
      {
        dynamic_template_data: {
          first_name: firstName,
          url,
          last_name: lastName
        },
        to: [
          {
            email: email,
            name: `${lastName} ${lastName}`
          }
        ]
      }
    ],
    from: {
      email: senderEmail,
      name: senderName
    }
  };
};

// await client.request(request);

export const orderSucceeded = functions.https.onRequest((request, response) => {
  const { ContractId } = request.body;
  getContract(ContractId)
    .then(contract => contract.CustomerId)
    .then(getCostumer)
    .then(async costumer => {
      await addSubscriber({
        email: costumer.EmailAddress,
        firstName: costumer.FirstName,
        lastName: costumer.LastName
      });
      const requestSendgrid = {
        body: getMsg({
          email: costumer.EmailAddress,
          firstName: costumer.FirstName,
          lastName: costumer.LastName,
          senderEmail: "info@stockboost.de",
          senderName: "StockBoost",
          templateId: "d-ee74400bb6b445feb2b8f129cb573f1e",
          url: `https://stockboost.de/MyStockBoost/signup/?email=${
            costumer.EmailAddress
          }`
        }),
        method: "POST",
        url: "/v3/mail/send"
      };
      await client.request(requestSendgrid);
      return addRecipients([
        {
          email: costumer.EmailAddress,
          first_name: costumer.FirstName,
          last_name: costumer.LastName
        }
      ]).then(recipients =>
        addRecipientsToList(recipients, SUBSCRIBER_LIST_ID)
      );
    })
    .then(_ => {
      console.log("ok");
      response.send("ok");
    })
    .catch(e => {
      console.error(e);
      response.status(422).send("Required field 'ContractId' is not defined");
    });
});

export const orderSucceededSandbox = functions.https.onRequest(
  (request, response) => {
    const { ContractId } = request.body;
    getContractSandbox(ContractId)
      .then(contract => contract.CustomerId)
      .then(getCostumerSandbox)
      .then(async costumer => {
        await addSubscriber({
          email: costumer.EmailAddress,
          firstName: costumer.FirstName,
          lastName: costumer.LastName
        });
        const requestSendgrid = {
          body: getMsg({
            email: costumer.EmailAddress,
            firstName: costumer.FirstName,
            lastName: costumer.LastName,
            senderEmail: "info@stockboost.de",
            senderName: "StockBoost",
            templateId: "d-ee74400bb6b445feb2b8f129cb573f1e",
            url: `https://stockboost.de/MyStockBoost/signup/?email=${
              costumer.EmailAddress
            }`
          }),
          method: "POST",
          url: "/v3/mail/send"
        };
        await client.request(requestSendgrid);
        return addRecipients([
          {
            email: costumer.EmailAddress,
            first_name: costumer.FirstName,
            last_name: costumer.LastName
          }
        ]).then(recipients =>
          addRecipientsToList(recipients, SUBSCRIBER_LIST_ID)
        );
      })
      .then(_ => {
        console.log("ok");
        response.send("ok");
      })
      .catch(e => {
        console.error(e);
        response.status(422).send("Required field 'ContractId' is not defined");
      });
  }
);
