const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const PORT = 8000;
const app = express();

app.use(cors()); 
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json({ limit: '30kb' }));
app.get('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    code: 200,
    message: 'Cors-api is working!',
  });
});

app.get('/fetch', async (req, res, next) => {
  try {
    console.log(req)
    let url = '';
    for (key in req.query) {
      url += key + '=' + req.query[key] + '&';
    }

    url = url.slice(0, -1);
    console.log("url +" ,url);

    const result = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      },
    });

    const data = await result.json();
    console.log("data ==> ",data)
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      code: 500,
      message: 'Failed to fetch data',
      error,
    });
  }
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    code: err.status || 500,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});