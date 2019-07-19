import React, { useEffect, useState } from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import ReactMarkdown from "react-markdown";
import PageLayout from "../../components/layouts/bloglayouts";
import { Box } from "rebass";
import { withFirebase } from "../../components/firebase-context";
import { Match } from "@reach/router";
const monthNumberToName = {
  "01": "Jan",
  "02": "Feb"
};

const getMonthNumberToName = month => monthNumberToName[month];

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
      console.log(data);
      const { file } = data.target.fields;
      return <img alt="" src={file.url} />;
    },
    [BLOCKS.EMBEDDED_ENTRY]: () => <div>a table</div>
  }
};

const P = ({ children }) => <p>{children}</p>;
const Table = ({ children }) => (
  <table className="table is-bordered">{children}</table>
);
const Heading = ({ children }) => children;

const Posts = withFirebase(({ year, month, firebase: firebaseRoot }) => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    firebaseRoot &&
      firebase
        .functions()
        .httpsCallable("getContentfulData")()
        .then(({ data }) => {
          console.log(data);
          setContent(data.items[0].fields.md);
          console.log(data.items);
          setPosts(data.items);
        });
  }, [firebaseRoot]);
  if (!firebaseRoot) {
    return null;
  }
  const { firebase } = firebaseRoot;

  return (
    <PageLayout seoTitle="airbnb">
      <Box pt="8">
        {getMonthNumberToName(month)}, {month}
        {posts.map(item => (
          <div key={item.fields.title}>
            <div>{item.fields.title}</div>
            <ReactMarkdown
              className="content"
              renderers={{ paragraph: P, table: Table }}
              source={item.fields.md}
            />
          </div>
        ))}
      </Box>
    </PageLayout>
  );
});

export default () => {
  return (
    <Match path="/StockBoost/Portfolio/:year/:month">
      {props =>
        props.match ? (
          <Posts year={props.match.year} month={props.match.month} />
        ) : (
          <div>Not matched</div>
        )
      }
    </Match>
  );
};
