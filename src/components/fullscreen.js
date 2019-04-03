import styled from "styled-components";
import { Flex, Box } from "rebass";

// min-width: calc( 100vw - 100% );
// see - https://codepen.io/jledbetterpdx/pen/wJzmoo/

const FullScreen = styled(Flex)`
  min-height: 100vh;
  min-width: 100%;
  min-width: calc( 100vw - 100% );
  margin: 0;
  padding: 0;
`;

export default FullScreen;
