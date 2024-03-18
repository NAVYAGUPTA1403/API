const express = require('express');

const app = express();
const port = 3000;

app.use(express.json()); 
app.use(express.urlencoded()); 

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;

    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];

    for (let x of data) {
        if (isNaN(x)) {
            alphabets.push(x); 
        } else {
            const d = parseInt(x);
            if (d % 2 == 0) {
                evenNumbers.push(x);
            } else {
                oddNumbers.push(x);
            }
        }
    }
  

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
    res.status(500).json({
        is_success: false,
    })
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
