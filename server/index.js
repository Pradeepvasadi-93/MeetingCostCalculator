const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/db/db');
const MeetingRoutes = require('./src/routes/MeetingRoutes');

connectDB();

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());     

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Base route for meetings
app.use("/api/meetings", MeetingRoutes);

const PORT = process.env.PORT || 3000;  

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});