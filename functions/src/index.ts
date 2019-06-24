import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
// import * as sendgrid from "@sendgrid/mail";

// const SENDGRID_KEY = functions.config().sendgrid.key;
// sendgrid.setApiKey(SENDGRID_KEY);

admin.initializeApp();

import { getContract, getCostumer } from "./billwerk";
import {
  addRecipients,
  addRecipientsToList,
  SUBSCRIBER_LIST_ID,
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
