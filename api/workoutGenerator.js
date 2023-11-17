const OpenAI = require("openai");
require("dotenv").config();

console.log(process.env.OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: "",
});

async function generateWorkoutPlan(message) {
  const prompt = message;

  const stream = await openai.beta.chat.completions.stream({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are an experienced fitness coach and you ONLY give information related to fitness. Generate a workout routine - with cardio and weight lifting sessions - tailored to the user. Ask the user to provide gender, fitness goal, and any pre-existing injuries to be worked around if not already provided. Make any output to the user easily readable using bullet points where appropriate. The workout plan should ONLY be generated as a table e.g. in the form of this | Push Exercises           | Sets | Reps   |
          | Barbell Bench Press      | 4    | 8-12   |
          | Overhead Press           | 3    | 10-15  | `,
      },
      { role: "user", content: prompt },
    ],
    stream: true,
  });

  const chatCompletion = await stream.finalChatCompletion();
  console.log(chatCompletion.choices[0].message);
  const workoutPlan = chatCompletion.choices[0].message;
  return workoutPlan;

  // const response = await openai.chat.completions.create({
  //   model: "gpt-3.5-turbo",
  //   messages: [
  //     {
  //       role: "system",
  //       content: `You are an experienced fitness coach and you ONLY give information related to fitness. Generate a workout routine - with cardio and weight lifting sessions - tailored to the user. Ask the user to provide gender, fitness goal, and any pre-existing injuries to be worked around if not already provided. Make any output to the user easily readable using bullet points where appropriate. You shoudld remember the whole conversation. The workout plan should ONLY be generated as a table e.g. in the form of this | Push Exercises           | Sets | Reps   |
  //         | Barbell Bench Press      | 4    | 8-12   |
  //         | Overhead Press           | 3    | 10-15  | `,
  //     },
  //     { role: "user", content: prompt },
  //   ],
  // });
  // console.log(response, "response");

  // const workoutPlan = response.choices[0].message;
  // return workoutPlan;
}

module.exports = { generateWorkoutPlan };
