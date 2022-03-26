const express = require("express");
const cors = require("cors");
const conn = require("./db.js");
const bookRoutes = require("./routes/bookRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const errorHandler = require("./middleware/errorMiddleware.js");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

conn();

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
