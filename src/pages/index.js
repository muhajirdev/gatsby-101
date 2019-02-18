import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components";

const BigButton = styled.button`
  background-color: red;
  height: 50px;
  width: 500px;
  padding: 5px;
`;


const redBoxStyle = {
  backgroundColor: "red",
  width: 50,
  height: 50
};

const RedBox = props => (
  <div style={redBoxStyle}>
    <h1>{props.text}</h1>
  </div>
);

function BlueBox(props) {
  return (
    <div style={{ backgroundColor: "blue", width: 50, height: 50 }}>
      <h1>{props.text}</h1>
    </div>
  );
}

const Card = props => {
  const imageUrl  = `url(https://cdn-images-1.medium.com/max/500//0*U1UDCKJqqm2KJT-2)`
  console.log(imageUrl)
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
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Airbnb Engineering & Data Science</h1>
    <h4>
      Creative engineers and data scientists building a world where you can
      belong anywhere
    </h4>
    <div>
      <Card
        big
        src="https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg"
      />
    </div>
    <div style={{ display: "flex", marginLeft: -20, marginRight: -20 }}>
      {posts.map(post => (
        <div key={post.title} style={{ width: "25%", paddingLeft: 20, paddingRight: 20 }}>
          <Card src={post.img} title={post.title} author={post.author} />
        </div>
      ))}
    </div>
  </Layout>
);

export default IndexPage;