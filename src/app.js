const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Mithlesh", lastName: "Shah" });
});

app.post("/user", (req, res) => {
  res.send("Data saved successfully");
});

app.put("/user", (req, res) => {
  res.send("Updated succesfully");
});

app.patch("/user", (req, res) => {
  res.send("Updated");
});

app.delete("/user", (req, res) => {
  res.send("deleted Succesfully!");
});

app.use("/test", (req, res) => {
  res.send("Hello from server");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000..");
});
