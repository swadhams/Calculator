const cors = require('cors'); 
const express = require('express');
const app = express();
const port = 3000;
app.use(cors({
  origin: (origin, callback) => {
      if (!origin || [
          'http://localhost:5173'
      ].includes(origin)) {
          return callback(null, true);
      }
      return callback(new Error(origin, 'Not allowed by CORS.'));
  }
}));  
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.get('/:operator/:x/:y', (req, res) => {
  let {operator, num1, num2} = req.params;
    // let operator = (req.params.operator);
    // let num1 = parseInt(req.params.x);
    // let num2 = parseInt(req.params.y);
    let sum
    if (operator === 'add') sum = (num1 + num2).toString();
    if (operator === 'subtract') sum = (num1 - num2).toString();
    if (operator === 'multiply') sum = (num1 * num2).toString();
    else sum = (num1 / num2).toString();
    res.send(sum);
  });