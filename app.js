const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000;

app.use(express.static('./client/build'))



app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});