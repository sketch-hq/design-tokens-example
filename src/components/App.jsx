import React, { useState } from 'react';
import styled from 'styled-components';

import ColorList from './ColorList';
import TextStylesList from './TextStylesList';

export const Container = styled.div`
 padding: 1.5em;
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Segoe UI Symbol',
  'Segoe UI Emoji', 'Apple Color Emoji', Helvetica, Arial, sans-serif;
 background-color: #fff;
 color: #000;
 width: calc (100% - 1.5em);
`;

const App = () => {
 return (
  <Container>
   <ColorList />
   <TextStylesList />
  </Container>
 );
};

export default App;
