const { spawn } = require('child_process');
const express = require("express");
const cors = require("cors");
const path = require('path');
const { readdirSync } = require('fs');
const {db}=require("./db/db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Define route to receive input months and return predicted data
app.post("/predict", (req, res) => {
  const { month } = req.body;

  // Run the Python script to predict data based on the input month
  const pythonProcess = spawn('python', ['script.py', month]);

  // Collect data from stdout
  pythonProcess.stdout.on('data', (data) => {
    const predictedData = data.toString().trim(); // Convert buffer to string
    res.json({ prediction: predictedData });
  });

  // Handle any error
  pythonProcess.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  });
});

// Load all routes dynamically from the routes folder
const routesPath = path.join(__dirname, 'routes');
readdirSync(routesPath).forEach(file => {
  const route = require(path.join(routesPath, file));
  app.use('/api/v1', route);
});

app.listen(PORT, () => {
    db();
  console.log(`Server is running on port ${PORT}`);
});
