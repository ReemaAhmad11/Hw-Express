import express, { NextFunction, Request, Response } from 'express';
import { IGrade, IPeople, ITask } from './types/generalType';
// import { v4 as uuidv4 } from 'uuid';


let name: IPeople[] = [];
let grade1: IGrade[] = [];
let task: ITask[] = [];

const app = express();
app.use(express.json());


//Question 1 people
app.get('/peoples', (req, res) => {
  return res.json(name);
});

app.post('/peoples', (req, res) => {
  const newName = req.body as IPeople;
  newName.username;
  name.push(newName);
  return res.json({
    message: 'Name added !',
  });
});

app.put('/peoples/:username', (req, res) => {
  const updatedName = req.body as IPeople;
  const { username } = req.params;

  const updateUser = name.filter((p) => {
    return p.username !== username;
  });

  updateUser.push(updatedName);

  name = updateUser;

  return res.json({
    message: 'Name updated !',
  });
});

app.delete('/peoples/:username', (req, res) => {
  const { username } = req.params;

  const newUser = name.filter((p) => {
    return p.username !== username;
  });

  name = newUser;

  return res.json({
    message: 'User deleted !',
  });
});


//Question 1 grade

app.get('/grades', (req, res) => {
  return res.json(grade1);
});

app.post('/grades', (req, res) => {
  const newgrade = req.body as IGrade;
  newgrade.grade;
  grade1.push(newgrade);
  return res.json({
    message: 'Grade added !',
  });
});


app.put('/grades/:grade', (req, res) => {
  const updatedGrade = req.body as IGrade;
  const { grade } = req.params;

  const updateUser = grade1.filter((g) => {
    return g.grade !== grade;
  });

  updateUser.push(updatedGrade);

  grade1 = updateUser;

  return res.json({
    message: 'Grade updated !',
  });
});

app.delete('/grades/:grade', (req, res) => {
  const { grade } = req.params;

  const newUser = grade1.filter((g) => {
    return g.grade !== grade;
  });

  grade1 = newUser;

  return res.json({
    message: 'Grade deleted !',
  });
});

//Question2 Task

//display 
app.get('/tasks', (req, res) => {
  return res.json(task);
});

//create
app.post('/tasks', (req, res) => {
  const newtask = req.body as ITask;
  newtask.id;
  task.push(newtask);
  return res.json({
    message: 'Tracks added !',
  });
});

//update
app.put('/tasks/:id', (req, res) => {
  const updatedTask = req.body as ITask;
  const { id } = req.params;

  const updatedT = task.filter((t) => {
    return t.id !== id;
  });

  updatedT.push(updatedTask);

  task = updatedT;

  return res.json({
    message: 'Tracks updated !',
  });
});

//delete
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;

  const newT = task.filter((t) => {
    return t.id !== id;
  });

  task = newT;

  return res.json({
    message: 'Tracks deleted !',
  });
});
//search
app.get('/traks/:title', (req, res) => {
  let key = req.params.title;
  let title = key.replace("-"," ");
  let searchValue = task.filter((t)=>{
    return t.title.toLowerCase() === title;
  })
  return res.json(searchValue);
});

app.listen(5000);




