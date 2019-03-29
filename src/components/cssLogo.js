import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const cssLogo = styled(Typography)`
font-size: 1.5em !important;
letter-spacing: 0.5px;
font-family: "acumin-pro", sans-serif;
font-weight: 700 !important;
font-style: normal !important;
font-weight: bold;
padding: 0rem 0rem 0rem 0rem;
/* background: linear-gradient(to bottom, #c0c0c0 22%, #404040 24%, #666666 26%, #666666 27%,#e6e6e6 40%,#333333 78%) !important;  */
background-image: -webkit-repeating-linear-gradient(
    top,
    hsla(0, 0%, 100%, 0) 0%,
    hsla(0, 0%, 100%, 0) 3%,
    hsla(0, 0%, 100%, 0.1) 4.5%
  ),
  -webkit-repeating-linear-gradient(top, hsla(0, 0%, 0%, 0) 0%, hsla(
          0,
          0%,
          0%,
          0
        )
        2%, hsla(0, 0%, 0%, 0.03) 2.5%),
  -webkit-repeating-linear-gradient(top, hsla(0, 0%, 100%, 0) 0%, hsla(
          0,
          0%,
          100%,
          0
        )
        0.6%, hsla(0, 0%, 100%, 0.15) 1.2%),
  linear-gradient(
    80deg,
    #a6a6a6 0%,
    #d9d9d9 45%,
    #e0e0e0 55%,
    #e0e0e0 65%,
    #d9d9d9 75%,
    #a6a6a6 100%
  ) !important;
-webkit-background-clip: text !important;
-webkit-text-fill-color: transparent !important;
color: #fff !important;
/* font-family: 'Playfair Display', serif !important; */
position: relative !important;
text-transform: uppercase !important;
/* font-size: 8vw !important; */
margin: 0 !important;
&after {
  background: none;
  content: attr(data-heading);
  left: 0;
  /* top: 0; */
  z-index: -1;
  position: absolute;
  /* text-shadow: 
  1px  0px 0px #333333 , 
  0px  1px 0px #333333 ,
  0px  -1px 0px #333333 ,
  -1px  0px 0px #333333 ; */
}
`
;

