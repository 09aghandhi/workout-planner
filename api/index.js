// const apikey = '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';
//
// // index.js
// const express = require('express');
// const axios = require('axios');
// const app = express();
// const port = 3001;
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
//
// // Define a simple route
// app.post('/workout', async (req, res) => {
//   const {userInput} = req.body;
//   const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {userInput}, {headers: {Authorization: `Bearer ${apikey}`, ContentType: 'application/json'}});
//   const result = response.data.choices[0].text;
//   console.log(response);
// });
//
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
//
// // thread = client.beta.threads.create();

// index.js

const apikey = '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';
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());


// Define a simple route
app.post('/workout', async (req, res) => {
  try {
    const { userInput } = req.body;
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci/completions',
      { prompt: userInput },
      {
        headers: {
          Authorization: `Bearer ${apikey}`,
          ContentType: 'application/json',
        },
      }
    );
    const result = response.data.choices[0].text;
    console.log(result);
    res.json({ result }); // Send the result back to the client
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' }); // Handle errors
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
