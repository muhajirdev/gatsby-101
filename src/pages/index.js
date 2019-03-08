import React from "react";
import { Link } from "gatsby";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Icon from '../components/icon'
import styled from "styled-components";

const BigButton = styled.button`
  background-color: red;
  height: 50px;
  width: 500px;
  padding: 5px;
`;

function BlueBox(props) {
  return (
    <div style={{ backgroundColor: "blue", width: 50, height: 50 }}>
      <h1>{props.text}</h1>
    </div>
  );
}

const StyledLink = styled(Link)`
  font-size: 9;
  text-decoration: none;
  color: #FF8000;
`;

const Card = props => {
  const imageUrl = `url(https://cdn-images-1.medium.com/max/500//0*U1UDCKJqqm2KJT-2)`;
  console.log(imageUrl);
  return (
    <div>
      <div
        style={{
          height: props.big ? 300 : 150,
          backgroundPosition: "50% 50%",
          backgroundImage: imageUrl
        }}
      />
      <h4>{props.title}</h4>
      <h5 style={{ color: "grey" }}>by {props.author}</h5>
    </div>
  );
};

const posts = [
  {
    img:
      "https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg",
    title: "Halo",
    author: "jamie"
  },
  {
    img:
      "https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg",
    title: "abcdef",
    author: "jamie"
  },
  {
    img:
      "https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg",
    title: "abcdef",
    author: "jamie"
  },
  {
    img:
      "https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg",
    title: "abcdef",
    author: "jamie"
  },
  {
    img:
      "https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg",
    title: "abcdef",
    author: "jamie"
  }
];

const IndexPage = () => (
  <Layout type="home">
    <SEO title="Boost" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        zIndex: 100
      }}
    />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        width: "100%",
        background:
          "linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6))",
        position: "absolute",
        textAlign: 'center',
        zIndex: 100
      }}
    >
      <Typography variant="display2" style={{ color: "#fff", maxWidth:"20em"}}>Wie man systematisch & entspannt in Aktien investiert - Boost</Typography>
      <Typography variant="subheading" style={{ color: "#FF8000" }}><StyledLink to="/page-2">Mehr erfahren</StyledLink></Typography>
      <StyledLink to="/page-2"><Icon source={require('../icons/bulb.svg')} /></StyledLink>
    </div>
    <div
      source={require('../images/brooklyn-bridge.jpg')}         
      style={{
        position: "relative",
        backgroundImage:
        "url(../images/brooklyn-bridge.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100%",
        width: "100%"
      }}
    />
  </Layout>
);

export default IndexPage;
