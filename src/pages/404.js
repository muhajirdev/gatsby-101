import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Image} from "rebass";
import Typography from "@material-ui/core/Typography";
// rebass
import FullScreen from "../components/fullscreen";

const NotFoundPage = () => (
  <Layout backgroundColor='white' textColor='black'>
    <SEO title="404: Not found" />

    <FullScreen
          // Header 5rem
          // bg='magenta'
          minHeight={[1, 1, 1]}
          minWidth={[1, 1, 1]}
          flexDirection={["column", "column", "column"]}
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          flexWrap="nowrap"
          alignSelf="center"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          marginLeft="auto"
          marginRight="auto"
          pt="4rem"
          zIndex="0"
        >
      
      <Image
          width={[ 1, 1, 1/2 ]}
          // src='https://source.unsplash.com/random/1280x720'
          src='/404.jpg'
          borderRadius={0}
        />

      <Typography>
        <h1>Awww... Don't Cry.</h1>
        <h4>It's just a 404 Error!</h4>
        <h5>What you're looking for may have been misplaced in Long Term Memory.</h5>
      </Typography>
    </FullScreen>

  </Layout>
)

export default NotFoundPage
