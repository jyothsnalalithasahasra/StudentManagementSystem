

require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use("/api/students",studentRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Student Management System Backend is Running!");
});

// Connect database and start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
