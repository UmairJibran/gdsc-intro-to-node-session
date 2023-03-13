// import express package from the node_modules
const Express = require('express');

// initialize app as Express instance
const app = Express();

app.use(Express.json({ limit: '100mb' }));

app.get('/', (req, res) => {
  try {
    const { language } = req.query;
    let responseMessage = '';
    if (language === 'ur') {
      responseMessage = 'Kaamyab';
    } else {
      responseMessage = 'Success';
    }
    return res.status(200).json({
      message: responseMessage,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'An Error Occurred',
    });
  }
});

app.post('/add-two-numbers', (req, res) => {
  try {
    const { number1, number2 } = req.body;

    const result = addNumbers(number1, number2);

    return res.status(200).json({
      message: result,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'An Error Occurred',
    });
  }
});

// export the newly intialized app
module.exports = app;

function addNumbers(num1, num2) {
  return num1 + num2;
}
