const template = (styleString, appString) => `
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Old style components approach</title>
  ${styleString}
  <script src="oldStyledComponentsApproach-bundle.js" defer="true"></script>
</head>

<body>
  <div id="root">
    ${appString}
  </div>
</body>

</html>
`;

export default template;
