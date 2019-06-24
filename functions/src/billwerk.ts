import axios from "axios";

// TODO: Update access token. And remove this from repo
const AUTH =
  "Bearer 2S-6yPtyC6FsBgv9Aq8BzueidtF5VElZU97r0qAYZuWo5EBrxgcPTi5UqYkF6zQkn72a1yME6DTtVozltr9yMg==";

export const getContract = (contractId: string) =>
  axios
    .get(`https://sandbox.billwerk.com/api/v1/Contracts/${contractId}`, {
      headers: {
        Authorization: AUTH
      }
    })
    .then(response => response.data)
    .catch(console.error);

export const getCostumer = (customerId: string) =>
  axios
    .get(`https://sandbox.billwerk.com/api/v1/Customers/${customerId}`, {
      headers: {
        Authorization: AUTH
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
