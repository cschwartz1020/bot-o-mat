const express = require("express");
const app = express();
app.use(express.json());

app.get("/api/tasks", (req, res) => {
  const tasks = [
    {
      description: "do the dishes",
      eta: 1000
    },
    {
      description: "sweep the house",
      eta: 3000
    },
    {
      description: "do the laundry",
      eta: 10000
    },
    {
      description: "take out the recycling",
      eta: 4000
    },
    {
      description: "make a sammich",
      eta: 7000
    },
    {
      description: "mow the lawn",
      eta: 20000
    },
    {
      description: "rake the leaves",
      eta: 18000
    },
    {
      description: "give the dog a bath",
      eta: 14500
    },
    {
      description: "bake some cookies",
      eta: 8000
    },
    {
      description: "wash the car",
      eta: 20000
    }
  ];

  res.json(tasks);
});

app.get("/api/types", (req, res) => {
  const types = [
    "Unipedal",
    "Bipedal",
    "Quadrupedal",
    "Arachnid",
    "Radial",
    "Aeronautical"
  ];
  res.json(types);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
