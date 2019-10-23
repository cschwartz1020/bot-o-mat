# Dependencies

npm/npx (npx comes with npm)

concurrently; npm i express concurrently

nodemon; npm i nodemon --save-dev

create react app; npm i create-react-app

react-router-dom; npm i react-router-dom

nodemon; npm install --save-dev nodemon

express.js; npm install express --save

bootstrap; npm install react-bootstrap bootstrap

styled-components; npm install --save styled-components

npm i react-sweet-progress

react-toastify; npm i react-toastify

html-id; npm i react-html-id

# To run entire application

from root directory: npm run dev

Concurrently dependency allows us to run both React front-end and express server simultaneously with one command

# Front-End

React

Runs on localhost:5000

To run front-end (from root directory): npm run client

# Back-End Server

Express

Runs on localhost:3000

To run back-end (from root directory): npm start

# BOT-O-MAT

Use any language to complete this challenge. The implementation is up to you: it can be a command-line application or have a graphical interface.

Your application should collect a name and robot type from the types we list below. For each, it should create a Robot of the type the user chooses, e.g. Larry, Bipedal.

Given the list of tasks below, your application should then assign the Robot a set of five tasks, all of which complete after a duration that we show in milliseconds.

- Collect a name and robot type from user.
- Instantiate a Robot of the type provided by the user with the name provided by the user
  - for example: Bipedal, Larry
- Set up methods on Robot to complete tasks from the provided list

## Robot

Robot completes tasks and removes them from the list when they are done (i.e. enough time has passed since starting the task).

## Tasks

Tasks have a description and an estimated time to complete.

```
[
  {
    description: 'do the dishes',
    eta: 1000,
  },{
    description: 'sweep the house',
    eta: 3000,
  },{
    description: 'do the laundry',
    eta: 10000,
  },{
    description: 'take out the recycling',
    eta: 4000,
  },{
    description: 'make a sammich',
    eta: 7000,
  },{
    description: 'mow the lawn',
    eta: 20000,
  },{
    description: 'rake the leaves',
    eta: 18000,
  },{
    description: 'give the dog a bath',
    eta: 14500,
  },{
    description: 'bake some cookies',
    eta: 8000,
  },{
    description: 'wash the car',
    eta: 20000,
  },
]
```

## Types

```
{
  UNIPEDAL: 'Unipedal',
  BIPEDAL: 'Bipedal',
  QUADRUPEDAL: 'Quadrupedal',
  ARACHNID: 'Arachnid',
  RADIAL: 'Radial',
  AERONAUTICAL: 'Aeronautical'
}
```

## Features to add once the core functionality is complete

Be creative and have fun! Use this list or create your own features.

- Allow users to create multiple robots at one time
- Create a leaderboard for tasks completed by each Robot
- Create tasks specific for each robot type, this could work in conjunction with the leaderboard. For e.g. robots that are assigned tasks that their type can’t perform won’t get “credit” for finishing the task.
- Add persistance for tasks, bots and leaderboard stats

## Authors

- Scott Hoffman <https://github.com/scottshane>
- Olivia Osby <https://github.com/oosby>
