const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;

    const evenNumbers = data.filter(num => parseInt(num) % 2 === 0);
    const oddNumbers = data.filter(num => parseInt(num) % 2 !== 0);
    const alphabets = data.filter(char => /^[a-zA-Z]$/.test(char)).map(char => char.toUpperCase());

    const user = {
      user_id: "navya_gupta_14062003",
      email: "navya1770.be21@chitkara.edu.in",
      roll_number: "2110991770"
    };

    const response = {
      is_success: true,
      user_id: user.user_id,
      email: user.email,
      roll_number: user.roll_number,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
