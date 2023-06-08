import express, { json } from "express";
const app = express();
import colors from "colors";
import { config } from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";

config();
connectDB();

app.use(cors());
app.use(json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to ecomercce </h1>");
// });

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.DEV_MOD} on ${PORT}`.bgCyan.white
  );
});
