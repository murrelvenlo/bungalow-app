import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(4000, () => {
  console.log("Server running on http://localhost:4000/");
});

const MONGODB_URL =
  "mongodb+srv://venlomj:Prijor1724@mjcluster.8rhdofc.mongodb.net/?retryWrites=true&w=majority&appName=mjCluster";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URL, {
  dbName: "bungalowDB",
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/api", router());
