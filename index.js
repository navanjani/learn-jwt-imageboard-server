const express = require("express");
/**
 * Import seperated routes
 * Eg: const userRouter = require("./routes/userRouter");
 */

const app = express();
const PORT = 4000;

app.use(express.json());

/**
 * Add seperated routes to the express
 * Eg: app.use(userRouter);
 */

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
