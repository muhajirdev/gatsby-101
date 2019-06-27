import * as functions from "firebase-functions";
import { createClient } from "contentful";

const CONTENTFUL_KEY = functions.config().contentful.key;
const client = createClient({
  space: "xy0rm86pahno",
  accessToken: CONTENTFUL_KEY
});

export default functions.https.onCall(async () => {
  const data = await client.getEntries({
    content_type: "stockboost",
    "fields.month": "June",
    "fields.year": "2019"
  });

  return data;
});
