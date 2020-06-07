import "babel-polyfill";
import express from "express";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 8080);
export default app;
