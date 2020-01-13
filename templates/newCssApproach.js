const template = (ssrString) => `
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>New Css Approach</title>
  <style>
    /* These are just the utility classes that the Product Card needs */
    /* We only want to include these since styled-components only includes styles that a mounted component uses */
    /* This will give us closer to an apples to apples comparison */

    /* Classes for ProductCardInfo */
    .background-light {
      background-color: #FFFFFF;
    }

    .light-border {
      border: 1px solid #B2CCDB;
    }

    .full-height {
      height: 100%;
    }

    /* Classes for ProductCardHeaderContainer */
    .flex {
      display: flex;
    }

    .align-items-center {
      align-items: center;
    }

    .padding-top-24 {
      padding-top: 24px;
    }

    .padding-right-24 {
      padding-right: 24px;
    }

    .padding-left-24 {
      padding-left: 24px;
    }

    /* Classes for ProductCardHeader */
    /* flex */
    .full-width {
      width: 100%;
    }

    .flex-column {
      flex-direction: column;
    }

    /* Classes for ProductCardHeaderBasicInfo */
    /* flex */
    .space-between {
      justify-content: space-between;
    }

    .padding-bottom-8 {
      padding-bottom: 8px;
    }

    /* Classes for ProductHeader */
    .gamma-header {
      font-size: 24px;
      color: black;
      font-weight: normal;
      font-family: 'Open Sans', Arial, sans-serif;
    }

    .margin-top-8 {
      margin-top: 8px;
    }

    .margin-bottom-8 {
      margin-bottom: 8px;
    }

    /* Classes for ProductCardHeaderDetails */
    /* flex */
    .wrap {
      flex-wrap: wrap;
    }
    /* align-items-center */

    /* Classes for StarRatingContainer */
    .margin-right-32 {
      margin-right: 32px;
    }

    /* Classes for ProductCardDescription */
    /* padding top 24 */
    /* padding right 24 */
    /* padding left 24 */
    .padding-bottom-24 {
      padding-bottom: 24px;
    }

    /* Global styles from inject global */
    * {
      box-sizing: border-box;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Open Sans';
      font-display: swap;
      font-style: normal;
      font-weight: 400;
      src: local('Open Sans Regular'),
      local('OpenSans-Regular'),
      url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2'), /* Modern Browsers */
      url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0d.woff) format('woff'); /* IE11 */
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Open Sans';
      font-display: swap;
      font-style: normal;
      font-weight: 400;
      src: local('Open Sans Regular'),
      local('OpenSans-Regular'),
      url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2'), /* Modern Browsers */
      url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0d.woff) format('woff'); /* IE11 */
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Open Sans';
      font-display: swap;
      font-style: normal;
      font-weight: 700;
      src: local('Open Sans Bold'),
      local('OpenSans-Bold'),
      url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOXOhpKKSTj5PW.woff2) format('woff2'), /* Modern Browsers */
      url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhv.woff) format('woff'); /* IE11 */
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Open Sans';
      font-display: swap;
      font-style: normal;
      font-weight: 700;
      src: local('Open Sans Bold'),
      local('OpenSans-Bold'),
      url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format('woff2'), /* Modern Browsers */
      url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhv.woff) format('woff'); /* IE11 */
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* latin-ext */
    @font-face {
      font-family: 'Roboto Slab';
      font-display: swap;
      font-style: normal;
      font-weight: 400;
      src: local('Roboto Slab Regular'),
        local('RobotoSlab-Regular'),
        url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufD5qWr4xCCQ_k.woff2) format('woff2'), /* Modern Browsers */
        url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qM.woff) format('woff'); /* IE11 */
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto Slab';
      font-display: swap;
      font-style: normal;
      font-weight: 400;
      src: local('Roboto Slab Regular'),
        local('RobotoSlab-Regular'),
        url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qWr4xCC.woff2) format('woff2'), /* Modern Browsers */
        url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qM.woff) format('woff'); /* IE11 */
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto Slab';
      font-display: swap;
      font-style: normal;
      font-weight: 700;
      src: local('Roboto Slab Bold'),
        local('RobotoSlab-Bold'),
        url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CIwR2oefDofMY.woff2) format('woff2'), /* Modern Browsers */
        url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CGwRs.woff) format('woff'); /* IE11 */
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto Slab';
      font-display: swap;
      font-style: normal;
      font-weight: 700;
      src: local('Roboto Slab Bold'),
        local('RobotoSlab-Bold'),
        url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CGwR2oefDo.woff2) format('woff2'), /* Modern Browsers */
        url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CGwRs.woff) format('woff'); /* IE11 */
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* Default font with fallbacks */
    body {
      font-family: Open Sans, Arial, sans-serif;
      color: #363A41;
    }
  </style>
  <script src="./newCssApproach-bundle.js" defer="true"></script>
</head>

<body>
  <div id="root">
    ${ssrString}
  </div>
</body>

</html>
`;

export default template;
