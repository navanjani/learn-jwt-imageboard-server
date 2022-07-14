const express = require("express");
const jsonParser = express.json();

const imageRouter = require("./routes/image");
const userRouter = require("./routes/user");

const app = express();
const PORT = 4000;

app.use(jsonParser);

app.use(userRouter);
app.use(imageRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
