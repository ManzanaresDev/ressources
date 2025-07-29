# 🧱 Manuel : Serveur Backend MERN avec DAO, Service et Contrôleur

## 🎯 Objectif

Mettre en place un backend Node.js/Express/MongoDB en architecture MVC enrichie :

```
Client → Routes → Controller → Service → DAO → Mongoose
```

---

## 📁 Structure du projet

```bash
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── task.controller.js
│
├── services/
│   └── task.service.js
│
├── dao/
│   └── task.dao.js
│
├── models/
│   └── task.model.js
│
├── routes/
│   └── task.routes.js
│
├── app.js
└── server.js
```

---

## 1. 🔧 Initialisation

```bash
mkdir backend && cd backend
npm init -y
npm install express mongoose dotenv
```

**.env**

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern_example
```

---

## 2. ⚙️ Connexion MongoDB (config/db.js)

```js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB Connection Failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

---

## 3. 🧬 Modèle Mongoose (models/task.model.js)

```js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
```

---

## 4. 📦 DAO : Classe d'accès aux données (dao/task.dao.js)

```js
const Task = require("../models/task.model");

class TaskDAO {
  async getAll() {
    return await Task.find();
  }

  async getById(id) {
    return await Task.findById(id);
  }

  async create(data) {
    return await Task.create(data);
  }

  async update(id, data) {
    return await Task.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Task.findByIdAndDelete(id);
  }
}

module.exports = new TaskDAO();
```

---

## 5. 🧠 Service (services/task.service.js)

```js
const taskDAO = require("../dao/task.dao");

class TaskService {
  async getAllTasks() {
    return await taskDAO.getAll();
  }

  async createTask(data) {
    return await taskDAO.create(data);
  }

  async deleteTask(id) {
    return await taskDAO.delete(id);
  }

  async updateTask(id, data) {
    return await taskDAO.update(id, data);
  }
}

module.exports = new TaskService();
```

---

## 6. 🎮 Contrôleur (controllers/task.controller.js)

```js
const taskService = require("../services/task.service");

exports.getAll = async (req, res) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
};

exports.create = async (req, res) => {
  const task = await taskService.createTask(req.body);
  res.status(201).json(task);
};

exports.delete = async (req, res) => {
  await taskService.deleteTask(req.params.id);
  res.sendStatus(204);
};

exports.update = async (req, res) => {
  const updated = await taskService.updateTask(req.params.id, req.body);
  res.json(updated);
};
```

---

## 7. 🌐 Routes (routes/task.routes.js)

```js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/task.controller");

router.get("/", controller.getAll);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
```

---

## 8. 🚦 App & Serveur

**app.js**

```js
const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const taskRoutes = require("./routes/task.routes");

connectDB();
app.use(express.json());
app.use("/tasks", taskRoutes);

module.exports = app;
```

**server.js**

```js
const app = require("./app");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

## 🧪 Test API

| Endpoint     | Méthode | Action                   |
| ------------ | ------- | ------------------------ |
| `/tasks`     | GET     | Lister toutes les tâches |
| `/tasks`     | POST    | Créer une tâche          |
| `/tasks/:id` | PUT     | Modifier une tâche       |
| `/tasks/:id` | DELETE  | Supprimer une tâche      |

---

## 🔐 Suggestions d'amélioration

- Ajouter l’authentification avec JWT
- Créer des services pour utilisateurs
- Ajouter des tests unitaires avec Jest
- Structurer avec TypeScript pour robustesse

---
