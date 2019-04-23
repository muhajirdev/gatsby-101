import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { MARKS, BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";

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
    }
  }
};

export default () => {
  const [content, setContent] = useState();
  useEffect(() => {
    client.getEntries().then(async data => {
      console.log(data);
      //   const contentfulContent =
      const contentfulContent = await richTextFromMarkdown(
        data.items[1].fields.md,
        node => {
          console.log("node", node);
          return {
            nodeType: "embedded-asset-block",
            content: [],
            data: {
              target: {
                fields: {
                  file: {
                    url: node.url
                  }
                }
              }
            }
          };
        }
      );
      console.log(contentfulContent);
      setContent(contentfulContent);
    });
  }, []);
  return documentToReactComponents(content, options);
};
