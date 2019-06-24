import * as sendgrid from "@sendgrid/client";
import * as functions from "firebase-functions";

const SENDGRID_KEY = functions.config().sendgrid.key;
sendgrid.setApiKey(SENDGRID_KEY);

interface IData {
  email: string;
  first_name: string;
  last_name: string;
}

export const addRecipients = (data: IData[]) => {
  const request = {
    method: "POST",
    url: "/v3/contactdb/recipients",
    body: [...data]
  };

  return sendgrid
    .request(request)
    .then(([_, body]) => body.persisted_recipients) as Promise<string[]>;
};

export const addRecipientsToList = (recipientsId: string[], listId: string) => {
  const request = {
    method: "POST",
    url: `/v3/contactdb/lists/${listId}/recipients`,
    body: recipientsId
  };

  return sendgrid.request(request);
};

export const SUBSCRIBER_LIST_ID = "6574827";

/**
 * Example Use case
 */

// addRecipients([
//   {
//     email: "test3@test3.com",
//     first_name: "Another Cool",
//     last_name: "Boy"
//   }
// ])
//   .then(recipients => addRecipientsToList(recipients, SUBSCRIBER_LIST_ID))
//   .then(_ => console.log("it works"))
//   .catch(console.error);
