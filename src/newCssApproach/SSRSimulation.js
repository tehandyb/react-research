import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import template from '../../templates/newCssApproach';
const fs = require('fs');

const appString = renderToString(<App />);
const htmlString = template(appString);

fs.writeFile('build/newCssApproach.html', htmlString, (err) => {
  if (err) throw err;

  console.log("Wrote HtmlString to /build/newCssApproach.html");
});
