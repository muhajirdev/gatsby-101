import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { MARKS, BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";
import ReactMarkdown from "react-markdown";

const client = createClient({
  space: "xy0rm86pahno",
  accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
});

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
      console.log(data);
      const { file } = data.target.fields;
      return <img src={file.url} />;
    },
    [BLOCKS.EMBEDDED_ENTRY]: () => <div>a table</div>
  }
};

export default () => {
  const [content, setContent] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    client
      .getEntries({
        content_type: "stockboost",
        "fields.month": "June",
        "fields.year": "2019"
      })
      .then(async data => {
        //   const contentfulContent =

        setContent(data.items[0].fields.md);
        console.log(data.items);
        setList(data.items);
      });
  }, []);
  return (
    <div>
      {list.map(item => (
        <div key={item.fields.title}>
          <div>{item.fields.title}</div>
          <ReactMarkdown source={item.fields.md} />
        </div>
      ))}
      <hr />
    </div>
  );
};
