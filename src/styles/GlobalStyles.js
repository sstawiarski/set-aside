import { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: rgba(0,0,0, 0.2);
    ${tw`antialiased`}
    overflow-x: hidden;
  }
`

const GlobalStyles = () => (
  <Fragment>
    <BaseStyles />
    <CustomStyles />
  </Fragment>
);

export default GlobalStyles