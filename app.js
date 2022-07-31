const express = require('express');
const morgan = require('morgan');
const router = require('./routes/TaskRouter');

const app = express();

app.use(express.static('./public'));
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/v1/task', router);

app.listen(5000, () => {
  console.log(`Server is listening on port 5000`);
});
