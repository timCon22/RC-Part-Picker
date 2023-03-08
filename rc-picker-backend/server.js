const express = require('express')
const getTrxProds = require("./routes/getTrxProds")
const app = express()
const port = 3002
const cors = require("cors");
app.use(cors())

app.use(express.json());

app.use("/traxxas", getTrxProds)

app.listen(port , () => {
  console.log(`Listening on port ${port}`)
})