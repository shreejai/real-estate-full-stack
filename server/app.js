import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from './routes/auth.route.js'
import postRoute from './routes/post.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

app.use(cors({origin:process.env.CLIENT_URL, credentials: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/test", (req, res) => {
  res.send('It works!');
})
app.use('/api/posts/', postRoute);
app.use('/api/auth/', authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})