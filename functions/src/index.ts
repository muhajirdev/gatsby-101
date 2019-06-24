import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

import { getContract, getCostumer } from "./billwerk";

const addSubscriber = (email: string) =>
  admin
    .firestore()
    .collection("subscribers")
    .doc(email)
    .set({
      allowed: true
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
    .then(costumer => costumer.EmailAddress)
    .then(addSubscriber)
    .then(_ => {
      console.log("ok");
      response.send("ok");
    })
    .catch(e => {
      console.error(e);
      response.status(422).send("Required field 'ContractId' is not defined");
    });
});
