import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
const fs = require('fs');

const appString = renderToString(<App />);

fs.writeFile('ssr-output/newCssApproach/appstring.txt', appString, (err) => {
  if (err) throw err;

  console.log("Wrote Appstring to /ssr-output/newCssApproach/appstring.txt");
});
