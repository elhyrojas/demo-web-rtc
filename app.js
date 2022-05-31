const express = require("express")
const server = express();
const port = 3000;

server.listen(process.env.PORT || port, () => console.log(`listening on port ${port}!`));

server.use(express.static("public"))
