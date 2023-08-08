import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme/tokens.json';

const TextStylesList = () => {
 if (!theme || !theme.Typography) {
  return null;
 }

 return (
  <>
   <h1>Listing all Text Styles</h1>
   <ul>
    {Object.keys(theme.Typography).map((category) => {
     const subcategories = theme.Typography[category];
     return (
      <li key={category}>
       <h2>{category}</h2>
       <ul>
        {Object.keys(subcategories).map((subcategory) => {
         const textAndColor = subcategories[subcategory];
         const color =
          textAndColor.color['$value'].length > 7
           ? textAndColor.color['$value'].slice(0, -2)
           : textAndColor.color['$value'];
         const textStyle = textAndColor.text['$value'];

         return (
          <li>
           <span style={{ ...textStyle, color }}>{subcategory}</span>
          </li>
         );
        })}
       </ul>
      </li>
     );
    })}
   </ul>
  </>
 );
};

export default TextStylesList;
