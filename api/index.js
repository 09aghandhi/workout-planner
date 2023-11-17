const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { generateWorkoutPlan } = require("./workoutGenerator");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/sendMessage", async (req, res) => {
  const { message } = req.body;

  const isReady = true;

  if (isReady) {
    console.log("here");

    const workoutPlan = await generateWorkoutPlan(message);
    console.log(workoutPlan, "workoutPlan");

    res.json({ message: "Workout plan generated:", workoutPlan });
  } else {
    res.json({ message: "Please provide more information." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
