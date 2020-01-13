import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import App from './App';
import template from '../../templates/oldStyledComponentsApproach';
const fs = require('fs');

const scSheet = new ServerStyleSheet();
const appString = renderToString(scSheet.collectStyles(<App />));
const styles = scSheet.getStyleTags();
const htmlString = template(styles, appString);

fs.writeFile('build/oldStyledComponentsApproach.html', htmlString, (err) => {
  if (err) throw err;

  console.log("Wrote Appstring to /build/oldStyledComponentsApproach.html");
});
