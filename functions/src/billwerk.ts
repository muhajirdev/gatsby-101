import axios from "axios";
import * as functions from "firebase-functions";

const AUTH = functions.config().billwerk.auth;
const SANDBOX_AUTH = functions.config().billwerk.sandbox_auth;

export const getContract = (contractId: string) =>
  axios
    .get(`https://app.billwerk.com/api/v1/Contracts/${contractId}`, {
      headers: {
        Authorization: AUTH
      }
    })
    .then(response => response.data)
    .catch(console.error);

export const getContractSandbox = (contractId: string) =>
  axios
    .get(`https://sandbox.billwerk.com/api/v1/Contracts/${contractId}`, {
      headers: {
        Authorization: SANDBOX_AUTH
      }
    })
    .then(response => response.data)
    .catch(console.error);

export const getCostumer = (customerId: string) =>
  axios
    .get(`https://app.billwerk.com/api/v1/Customers/${customerId}`, {
      headers: {
        Authorization: AUTH
      }
    })
    .then(response => response.data)
    .then(data => data)
    .catch(console.error);

export const getCostumerSandbox = (customerId: string) =>
  axios
    .get(`https://sandbox.billwerk.com/api/v1/Customers/${customerId}`, {
      headers: {
        Authorization: SANDBOX_AUTH
      }
    })
    .then(response => response.data)
    .then(data => data)
    .catch(console.error);

/**
 * Example Usage to get customer's email
 */

// const CONTRACT_ID = "5d0edf459cc9ba1ccc66ece0";
//
// getContract(CONTRACT_ID)
//   .then(contract => contract.CustomerId)
//   .then(getCostumer)
//   .then(costumer => costumer.EmailAddress)
//   .then(console.log)
//   .catch(console.error);
