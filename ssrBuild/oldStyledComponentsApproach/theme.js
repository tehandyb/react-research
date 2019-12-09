'use strict';

var _templateObject = _taggedTemplateLiteral(['\n  * {\n    box-sizing: border-box;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: \'Open Sans\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'Open Sans Regular\'),\n    local(\'OpenSans-Regular\'),\n    url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format(\'woff2\'), /* Modern Browsers */\n    url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0d.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: \'Open Sans\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'Open Sans Regular\'),\n    local(\'OpenSans-Regular\'),\n    url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format(\'woff2\'), /* Modern Browsers */\n    url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0d.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: \'Open Sans\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'Open Sans Bold\'),\n    local(\'OpenSans-Bold\'),\n    url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOXOhpKKSTj5PW.woff2) format(\'woff2\'), /* Modern Browsers */\n    url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhv.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: \'Open Sans\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'Open Sans Bold\'),\n    local(\'OpenSans-Bold\'),\n    url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format(\'woff2\'), /* Modern Browsers */\n    url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhv.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n\n  /* latin-ext */\n  @font-face {\n    font-family: \'Roboto Slab\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'Roboto Slab Regular\'),\n      local(\'RobotoSlab-Regular\'),\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufD5qWr4xCCQ_k.woff2) format(\'woff2\'), /* Modern Browsers */\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qM.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: \'Roboto Slab\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'Roboto Slab Regular\'),\n      local(\'RobotoSlab-Regular\'),\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qWr4xCC.woff2) format(\'woff2\'), /* Modern Browsers */\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qM.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: \'Roboto Slab\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'Roboto Slab Bold\'),\n      local(\'RobotoSlab-Bold\'),\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CIwR2oefDofMY.woff2) format(\'woff2\'), /* Modern Browsers */\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CGwRs.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: \'Roboto Slab\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'Roboto Slab Bold\'),\n      local(\'RobotoSlab-Bold\'),\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CGwR2oefDo.woff2) format(\'woff2\'), /* Modern Browsers */\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CGwRs.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n\n  // Default font with fallbacks\n  body {\n    font-family: Open Sans, Arial, sans-serif;\n    color: #363A41;\n  }\n'], ['\n  * {\n    box-sizing: border-box;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: \'Open Sans\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'Open Sans Regular\'),\n    local(\'OpenSans-Regular\'),\n    url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format(\'woff2\'), /* Modern Browsers */\n    url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0d.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: \'Open Sans\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'Open Sans Regular\'),\n    local(\'OpenSans-Regular\'),\n    url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format(\'woff2\'), /* Modern Browsers */\n    url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0d.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: \'Open Sans\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'Open Sans Bold\'),\n    local(\'OpenSans-Bold\'),\n    url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOXOhpKKSTj5PW.woff2) format(\'woff2\'), /* Modern Browsers */\n    url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhv.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: \'Open Sans\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'Open Sans Bold\'),\n    local(\'OpenSans-Bold\'),\n    url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format(\'woff2\'), /* Modern Browsers */\n    url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhv.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n\n  /* latin-ext */\n  @font-face {\n    font-family: \'Roboto Slab\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'Roboto Slab Regular\'),\n      local(\'RobotoSlab-Regular\'),\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufD5qWr4xCCQ_k.woff2) format(\'woff2\'), /* Modern Browsers */\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qM.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: \'Roboto Slab\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'Roboto Slab Regular\'),\n      local(\'RobotoSlab-Regular\'),\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qWr4xCC.woff2) format(\'woff2\'), /* Modern Browsers */\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qM.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: \'Roboto Slab\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'Roboto Slab Bold\'),\n      local(\'RobotoSlab-Bold\'),\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CIwR2oefDofMY.woff2) format(\'woff2\'), /* Modern Browsers */\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CGwRs.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: \'Roboto Slab\';\n    font-display: swap;\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'Roboto Slab Bold\'),\n      local(\'RobotoSlab-Bold\'),\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CGwR2oefDo.woff2) format(\'woff2\'), /* Modern Browsers */\n      url(https://fonts.gstatic.com/s/robotoslab/v7/BngRUXZYTXPIvIBgJJSb6u92w7CGwRs.woff) format(\'woff\'); /* IE11 */\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n\n  // Default font with fallbacks\n  body {\n    font-family: Open Sans, Arial, sans-serif;\n    color: #363A41;\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);