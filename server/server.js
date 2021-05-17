require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
	console.log("hitting middleware");
	next();
})

// Get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
	res.status(200).json({
		status: "success",
		data: {
			restaurant: ["mcdonals", "wendys"],
		}
	});
});

// get a restaurant
app.get("/api/v1/restaurants/:restaurantid", (req, res) => {
	console.log(req.params);	
});

// Create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
	console.log(req);
});

// update restaurants
app.put("/api/v1/restaurants/:id", (req, res) => {
	console.log(req.params.id);
	console.log(req.body);
});

app.delete("/api/v1/restaurants/:id", (req, res) => {
	res.status(204).json({
		status: "success",
	});
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log("server is up and listening on port 3001");
});
