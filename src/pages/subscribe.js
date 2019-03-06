import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SubscribeForm from "../components/subscribeForm";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div
      style={{
        backgroundColor: "pink",
        height: "30rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        <SubscribeForm />
      </div>
    </div>
  </Layout>
);

export default SecondPage;
