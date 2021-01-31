const express = require("express")
const app = express();
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

const db = require("./config/keys").mongoURI;
const mongoose = require('mongoose')

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log("Connected to MongoDB successfully"))
	.catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Get in ma bellay"));

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));