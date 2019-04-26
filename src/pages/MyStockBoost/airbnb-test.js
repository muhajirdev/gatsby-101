import React, { useEffect, useState, useContext } from "react";
import Unsplash, { toJson } from "unsplash-js";
import { useStaticQuery, StaticQuery, graphql, navigate } from "gatsby";
import { Box } from "rebass";
import BackgroundImage from "../../components/background-image";
import { AuthContext } from "../../layouts/index";

import PageLayout from "../../components/layouts/bloglayouts";

import styled from "styled-components";
// import PageLayout from "../../components/layouts/pagelayouts/index";
// import PageLayout from "../../components/layouts/layout";

const unsplash = new Unsplash({
  applicationId:
    "e7baecf493e9353387464b4f7e234e6050d056dba22ce99caf8e35246402de47",
  secret: "c73ea273b6f891a36e06cb54b09b572849927909df8a566572a4681ac735d79f"
});

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
  const imageUrl = `url(${props.src})`;
  return (
    <div>
      <div
        style={{
          height: props.big ? 300 : 150,
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          backgroundImage: imageUrl
        }}
      />
      <h4>{props.title}</h4>
      <h5 style={{ color: "grey" }}>by {props.author}</h5>
    </div>
  );
};

const defaultPosts = [
  {
    img:
      "https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg",
    title: "Halo",
    author: "jamie"
  },
  {
    img:
      "https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg",
    title: "dfa",
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
    title: "Halo",
    author: "jamie"
  },
  {
    img:
      "https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg",
    title: "dfa",
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
  },
  {
    img:
      "https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg",
    title: "abcdef",
    author: "jamie"
  }
];

const IndexPage = () => {
  const [posts, setPosts] = useState(defaultPosts);
  const [featuredImage, setFeaturedImage] = useState("");

  const authenticated = useContext(AuthContext);

  useEffect(() => {
    unsplash.collections
      .getCollectionPhotos(1111678, 1, 13, "popular")
      .then(toJson)
      .then(data => {
        console.log(data);
        return data;
      })
      .then(json => json.map(item => item.urls.regular))
      .then(images => {
        console.log("test");
        const newPosts = posts.map((post, index) => ({
          ...post,
          img: images[index]
        }));
        setPosts(newPosts);
        setFeaturedImage(images[12]);
      });
  }, []);

  if (!authenticated) {
    navigate("/404");
  }

  return (
    <PageLayout seoTitle="airbnb">
      <Box pt="5" px="4">
        <h1>Airbnb Engineering & Data Science</h1>
        <h4>
          Creative engineers and data scientists building a world where you can
          belong anywhere
        </h4>
      </Box>
      <div>
        <Card big src={featuredImage} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: -20,
          marginRight: -20
        }}
      >
        {posts.map(post => (
          <div
            key={post.title}
            style={{
              width: "25%",
              paddingLeft: 20,
              paddingRight: 20
            }}
          >
            <Card src={post.img} title={post.title} author={post.author} />
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default IndexPage;
