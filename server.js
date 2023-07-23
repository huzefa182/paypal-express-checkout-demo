import "dotenv/config"; // loads variables from .env file
import express from "express";
import * as paypal from "./paypal-api.js";
const { PORT = 4786 } = process.env;

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// parse post params sent in body in json format
app.use(express.json());

app.get("/", async (req, res) => {
  const baseURL = process.env.BASE_URL;
  const clientId = process.env.CLIENT_ID;
  console.log(`Base URL - ${baseURL}`);
  res.render("index", { baseURL, clientId });
});

app.get("/thankyou", async (req, res) => {
  const baseURL = process.env.BASE_URL;
  const transactionId = req.query.transactionId;
  console.log(`Txn ID - ${transactionId}`);
  res.render("thankyou", { baseURL, transactionId });
});

app.post("/my-server/create-paypal-order", async (req, res) => {
  try {
    const order = await paypal.createOrder();
    res.json(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/my-server/capture-paypal-order", async (req, res) => {
  const { orderID } = req.body;
  try {
    const captureData = await paypal.capturePayment(orderID);
    res.json(captureData);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/`);
});
