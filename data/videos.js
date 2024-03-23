const express = require('express');
const app = express();
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const port = process.env.PORT || process.argv[2] || 8080;

app.use(express.json());
app.use(cors());