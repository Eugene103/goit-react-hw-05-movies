import styled, { createGlobalStyle } from 'styled-components'
import 'modern-normalize'
import { NavLink } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
}
`;
export const Link = styled(NavLink)`
text-decoration:none;
color: black;
&.active{
  color: orange;
}

`
export const Nav = styled.nav`
display: flex;
gap: 20px;
font-size: 25px;
padding: 20px;
`