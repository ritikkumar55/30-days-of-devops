# 🚀 Dockerized Todo Backend API

## 📖 Project Description

This project is a **Dockerized Todo Backend REST API** built using **Node.js and Express** to understand real-world backend development and DevOps containerization practices.

The application provides **basic CRUD operations** (Create, Read, Update, Delete) for managing todos and follows a clean **MVC architecture** to separate routes, controllers, and business logic.

A key focus of this project is the use of **multi-stage Docker builds**.  
In the first stage, application dependencies are installed, and in the final stage, only the required runtime files are copied into a lightweight **Node.js Alpine image**. This approach helps in creating a **smaller, cleaner, and production-ready Docker image**.

---

## 🧩 Challenges Faced

- Understanding the difference between **single-stage vs multi-stage Docker builds** and how to reduce image size effectively.
- Handling **Windows-specific curl command issues** while testing APIs locally.
- Structuring the backend code using **MVC pattern** instead of writing everything in a single file.
- Ensuring the API works consistently when running inside a **Docker container**.

---

## 🧠 What I Learned

- How to build and test **RESTful APIs** using Node.js and Express.
- Practical usage of **Docker multi-stage builds** to optimize container images.
- Importance of **lightweight base images (Alpine)** for faster startup and efficient deployments.
- How Docker ensures **environment consistency** across local and cloud systems.
- How backend and DevOps concepts work together in real-world applications.

This project helped me build a strong foundation in **backend development combined with DevOps containerization**.

---

## 📌 Project Highlights

- ✅ RESTful API with full **CRUD operations**
- 🧱 Clean **MVC architecture**
- 🐳 **Multi-stage Docker build** for optimized image size
- ⚡ Lightweight **Node.js Alpine** base image
- 🌍 Runs consistently on **local & cloud environments**
- 📦 Zero external runtime dependency outside Docker

---

## 🛠️ Tech Stack

| Category | Tools |
|-------|------|
| Backend | Node.js, Express.js |
| Architecture | MVC Pattern |
| Containerization | Docker (Multi-Stage Build) |
| Runtime | Node.js Alpine Linux |
| API Style | REST |

---

## 📂 Project Structure
```
Dockerized-Todo-Backend-API/
│
├── src/
│ ├── controllers/
│ │ └── todo.controller.js
│ ├── routes/
│ │ └── todo.routes.js
│ ├── models/
│ │ └── todo.model.js
│ ├── app.js
│ └── server.js
│
├── Dockerfile
├── .dockerignore
├── package.json
└── README.md
```


## APIs

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/todos` | Create a new Todo |
| GET | `/api/todos` | Fetch all Todos |
| PUT | `/api/todos/:id` | Update Todo (toggle status) |
| DELETE | `/api/todos/:id` | Delete Todo |

---

## 🧪 API Testing Examples

### ▶ Create Todo
```bash
curl -X POST http://localhost:3000/api/todos \
-H "Content-Type: application/json" \
-d '{"title":"Learn Docker"}'

```
### ▶ Get All Todos
```
curl http://localhost:3000/api/todos
```
### ▶ Update Todo
```
curl -X PUT http://localhost:3000/api/todos/<TODO_ID>

```
### ▶ Delete Todo
```
curl -X DELETE http://localhost:3000/api/todos/<TODO_ID>
```




## Run
```
docker build -t todo-api .
docker run -p 3000:3000 todo-api
```

## 👨‍💻 Author

### Ritik Kumar
DevOps | Backend | Cloud Enthusiast
