/* eslint @typescript-eslint/no-var-requires: "off" */
const express = require( 'express' );
const app = express()
const port = 3000
app.get('/listrepos', (req, res) => {
  //res.send('Hello World!')
  const fs = require('fs');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const yaml = require('js-yaml');
try {
  let fileContents = fs.readFileSync('./data.yaml', 'utf8');
  let data = yaml.load(fileContents);
  res.send(data);
} catch (e) {
  console.log(e);
}
})

app.listen(port, () => {
  console.log(`Client app listening on port ${port}`)
})
