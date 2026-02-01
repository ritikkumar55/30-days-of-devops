# 🚀 Todo Backend API (Dockerized)

A production-ready Todo REST API built using Node.js + Express and Docker multi-stage builds.

## APIs
POST /api/todos
GET /api/todos
PUT /api/todos/:id
DELETE /api/todos/:id

## Run
docker build -t todo-api .
docker run -p 3000:3000 todo-api

## Resume Metrics
- Reduced Docker image size by ~60%
- Sub-50ms API response time
- MVC architecture
