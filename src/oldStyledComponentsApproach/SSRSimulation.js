import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import App from './App';
const fs = require('fs');

const scSheet = new ServerStyleSheet();
const appString = renderToString(scSheet.collectStyles(<App />));
const styles = scSheet.getStyleTags();

fs.writeFile('ssr-output/oldStyledComponentsApproach/appstring.txt', appString, (err) => {
  if (err) throw err;

  console.log("Wrote Appstring to /ssr-output/oldStyledComponentsApproach/appstring.txt");
});

fs.writeFile('ssr-output/oldStyledComponentsApproach/styleString.txt', styles, (err) => {
  console.log("Wrote Style string to /ssr-output/oldStyledComponentsApproach/stylestring.txt");
});
