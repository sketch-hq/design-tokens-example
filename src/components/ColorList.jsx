import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme/tokens.json';

const ColorList = () => {
 if (!theme || !theme.Colors) {
  return null;
 }

 return (
  <>
   <h1>Listing all Colours</h1>
   <ul>
    {Object.keys(theme.Colors).map((category) => {
     const subcategories = theme.Colors[category];
     return (
      <li key={category}>
       <h2>{category}</h2>
       {Object.keys(subcategories).map((subcategory) => {
        const colors = subcategories[subcategory];
        const color = colors['$value'];

        return (
         <ul>
          <li>
           {subcategory} -{' '}
           <span
            style={{
             color,
             backgroundColor: color === '#FFFFFF' ? '#000' : undefined,
            }}
           >
            {color}
           </span>
          </li>
         </ul>
        );
       })}
      </li>
     );
    })}
   </ul>
  </>
 );
};

export default ColorList;
