import React, { useEffect, useState, useContext } from "react";
import { navigate } from "gatsby";
import { Link } from "@reach/router";
import { Box } from "rebass";
import { AuthContext } from "../../layouts/index";

import PageLayout from "../../components/layouts/bloglayouts";

import { SignOut } from "../../components/signin";

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
      {/* <h5 style={{ color: "grey" }}>by {props.author}</h5> */}
    </div>
  );
};

const defaultPosts = [
  {
    img: "https://images.unsplash.com/photo-1561266436-1e251a1f8285",
    title: "Januar",
    author: "StockBoost ESA test",
    url: "StockBoost/Portfolio/2019/01"
  },
  {
    img: "https://images.unsplash.com/photo-1559867632-9a4ed11e09b7",
    title: "Februar",
    author: "StockBoost ESA"
  },
  {
    img: "https://images.unsplash.com/photo-1559867632-9a4ed11e09b7",
    title: "März",
    author: "StockBoost ESA"
  },
  {
    img: "https://images.unsplash.com/photo-1559867632-9a4ed11e09b7",
    title: "April",
    author: "StockBoost ESA"
  },
  {
    img: "https://images.unsplash.com/photo-1559867632-9a4ed11e09b7",
    title: "Mai",
    author: "StockBoost ESA"
  },
  {
    img: "https://images.unsplash.com/photo-1559867632-9a4ed11e09b7",
    title: "Juni",
    url: "StockBoost/Portfolio/2019/06",
    author: "StockBoost ESA"
  },
  {
    img: "https://images.unsplash.com/photo-1559867632-9a4ed11e09b7",
    title: "July",
    author: "StockBoost ESA"
  },
  {
    img: "https://images.unsplash.com/photo-1559867632-9a4ed11e09b7",
    title: "August",
    author: "StockBoost ESA"
  },
  {
    img: "https://images.unsplash.com/photo-1559867632-9a4ed11e09b7",
    title: "September",
    author: "StockBoost ESA"
  },
  {
    img: "https://images.unsplash.com/photo-1559867632-9a4ed11e09b7",
    title: "Oktober",
    author: "StockBoost ESA"
  },
  {
    img: "https://images.unsplash.com/photo-1559867632-9a4ed11e09b7",
    title: "November",
    author: "StockBoost ESA"
  },
  {
    img: "https://images.unsplash.com/photo-1559867632-9a4ed11e09b7",
    title: "Dezember",
    author: "StockBoost ESA"
  }
];

const IndexPage = () => {
  const [posts, setPosts] = useState(defaultPosts);
  const [featuredImage, setFeaturedImage] = useState(
    "https://images.unsplash.com/photo-1560567322-911e17465686"
  );

  const [year, setYear] = useState(2019);

  const authenticated = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPosts(defaultPosts);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    // unsplash.collections
    //   .getCollectionPhotos(1111678, 1, 13, "popular")
    //   .then(toJson)
    //   .then(data => {
    //     console.log(data);
    //     return data;
    //   })
    //   .then(json => json.map(item => item.urls.regular))
    //   .then(images => {
    //     const newPosts = posts.map((post, index) => ({
    //       ...post,
    //       img: images[index]
    //     }));
    //     setPosts(newPosts);
    //     setFeaturedImage(images[12]);
    //   });
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  if (!loading && !authenticated) {
    navigate("/contact-rami");
  }

  return (
    <PageLayout seoTitle="airbnb">
      <Box pt="5" px="4">
        <h1> Liebe Investorin, Lieber Investor,</h1>
        <h4>Das Portfolio und nachfolgende Transaktionen....</h4>
        <SignOut />
      </Box>
      <div>
        <Card big src={featuredImage} />
      </div>
      <div style={{ padding: "1rem 0" }}>{year}</div>
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
            <Link to={post.url ? post.url : "/"}>
              <Card src={post.img} title={post.title} author={post.author} />
            </Link>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default IndexPage;
