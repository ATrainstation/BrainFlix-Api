const express = require('express');
const router = express.Router();
const vids = require("../data/video-details.json");


router.get("/", (req, res)=>{
    const vidList = vids.map(item=>(
    {id: item.id,
     title: item.title,
     channel: item.channel,
     image: item.image}
    ))

    res.json(vidList); 
})

router.get('/video/:id', function (req, res) {
    const videoId = req.params.id;
    res.send();
});

module.exports = router;