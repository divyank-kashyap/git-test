const express = require("express");
const app = express();
const port = 3000;

const questions = [{
    title: "question 1",
    description: "Add two numbers"
}, {
    title: "question 2",
    description: "Median of Two sorted Arrays"
}]




app.get("/", (req, res)=> {
    res.send(questions);
    // console.log(questions);
})

app.listen(port, function (req, res ) {
     console.log(`App running on port ${port}`)
})


// Line added using windows to check git