const express = require("express");
const router = express.Router();
const vids = require("../data/video-details.json");
const { v4: uuidv4 } = require("uuid");

const fs = require("fs");
const path = require("path");
const FILE_PATH = path.join(__dirname, "../data/video-details.json");


router.get("/", (req, res) => {
  const vidList = vids.map((item) => ({
    id: item.id,
    title: item.title,
    channel: item.channel,
    image: item.image,
  })); 
  res.json(vidList);
});

router.get("/:id", function (req, res) {
  const videoId = req.params.id;
  const selectedVideo = vids.find((video) => {
    return video.id === videoId;
  });

  if (!selectedVideo) {
    res.status(404).send("Video not found");
  }
  res.send(selectedVideo);
});

router.post("/", (req, res) => {

  const { title, description } = req.body;

  const id = uuidv4();

  const image = "https://storeys.com/media-library/image.jpg?id=34678009&width=1245&height=700&quality=90&coordinates=0%2C105%2C0%2C105";

  const channel = "Mohan Muruge";
  const views = "1,405,684";
  const likes = "93,574";
  const duration = "5:13";
  const timestamp = Date.now();
  const video = "";

  const comments = [];

  const newVideo = {
    id,
    title,
    channel,
    image,
    description,
    views,
    likes,
    duration,
    video,
    timestamp,
    comments,
  };

  fs.readFile(FILE_PATH, (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return res.status(500).send({ message: "Failed to read data file." });
    }

    let videos = JSON.parse(data);
    videos.push(newVideo);

    fs.writeFile(FILE_PATH, JSON.stringify(videos, null, 2), (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return res.status(500).send({ message: "Failed to write data file." });
        }
        
        res.status(201).send({ message: "Video uploaded successfully", video: newVideo });
    });
});
});

module.exports = router;
