// backend.js
import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

// Function to generate a random ID
function generateId() {
  return Math.random().toString(36).substring(2, 11);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = generateId();
  users.users_list.push(newUser);
  res.status(201).send(newUser);
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const index = users.users_list.findIndex((user) => user.id === userId);
  if (index !== -1) {
    const deletedUser = users.users_list.splice(index, 1);
    res.send(deletedUser[0]);
  } else {
    res.status(404).send({ error: "User not found" });
  }
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});

const users = {
  users_list: [
    {
      id: "xyz789",
      name: "Charlie",
      job: "Janitor"
    },
    {
      id: "abc123",
      name: "Mac",
      job: "Bouncer"
    },
    {
      id: "ppp222",
      name: "Mac",
      job: "Professor"
    },
    {
      id: "yat999",
      name: "Dee",
      job: "Aspring actress"
    },
    {
      id: "zap555",
      name: "Dennis",
      job: "Bartender"
    }
  ]
};