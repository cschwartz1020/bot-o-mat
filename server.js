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

const myRobots = [];

app.get("/api/myrobots", (req, res) => {
  res.send(myRobots);
});

app.get("/api/myrobots/:id", (req, res) => {
  const robot = myRobots.find(bot => bot.id === parseInt(req.params.id));
  if (!robot) res.status(404).send("Robot does not exist");
  res.send(myRobots);
});

app.post("/api/myrobots", (req, res) => {
  const robot = {
    name: req.body.name,
    type: req.body.type,
    completedTasks: [],
    totalTime: 0,
    id: myRobots.length
  };
  myRobots.push(robot);
  res.send(robot);
});

app.put("/api/myrobots/:id", (req, res) => {
  const robot = myRobots.find(bot => bot.id === parseInt(req.params.id));
  if (!robot) res.status(404).send("Robot does not exist");
  robot.completedTasks.push(req.body.task);
  robot.totalTime += req.body.time;
  res.send(robot);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
