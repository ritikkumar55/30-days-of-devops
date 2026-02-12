# 📝 Django Notes App (Dockerized)

## 📌 Project Overview

This is a **Django Notes Application** fully containerized using **Docker and Docker Compose**.
The main goal of this project is to learn how to run a real-world Django application using
multiple containers and understand how services communicate with each other.

This project uses:
- Django for backend
- MySQL for database
- Nginx as a web server
- Docker Compose to manage all services



---

## 🛠 Tech Stack

- **Backend:** Django (Python)
- **Database:** MySQL
- **Web Server:** Nginx
- **Containerization:** Docker
- **Orchestration:** Docker Compose

---

## 🧠 What This Project Is About

This project demonstrates how a Django application can be containerized and connected
with MySQL and Nginx using Docker Compose.

Each service runs in its own container:
- Django container handles application logic
- MySQL container handles database
- Nginx container handles incoming HTTP requests

All containers communicate using Docker's internal network.

---

## 🏗 Architecture

Browser  
↓  
Nginx  
↓  
Django App  
↓  
MySQL Database  

---

## 📁 Project Structure

```
django-notes-app/
│
├── api/               # Django REST API
├── notesapp/          # Django project settings
├── nginx/             # Ngixn server
├── mynotes/           # React frontend
├── data/mysql/db/     # MySQL data (ignored in Git)
├── docker-compose.yml
├── Dockerfile
└── README.md

```

---

## 🎯 What I Learned From This Project

### Docker
- Writing Dockerfiles for Django
- Building and tagging images
- Using .dockerignore to reduce image size

### Docker Compose
- Running multi-container applications
- Managing services and networks
- Fixing port conflicts (MySQL 3306)

### Django + MySQL
- Connecting Django with MySQL inside containers
- Running migrations in Docker

### Nginx
- Using Nginx as a reverse proxy
- Forwarding requests to Django container

### Debugging
- Container lifecycle understanding
- Cleaning unused containers and ports
- Rebuilding images correctly

---

## ⚙️ Prerequisites

Make sure you have installed:
- Docker
- Docker Compose

Check installation:
```bash
docker --version
docker compose version
```

---

## 🚀 How to Run This Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ritikumar55/30-days-of-devops/Docker_Projects/django-notes-app.git
cd django-notes-app
```

---

### 2️⃣ Build Docker Images

```bash
docker compose build
```

---

### 3️⃣ Start Containers

```bash
docker compose up
```

Or in detached mode:
```bash
docker compose up -d
```

---

### 4️⃣ Run Database Migrations

```bash
docker compose exec django_cont python manage.py migrate
```

Create superuser (optional):
```bash
docker compose exec django_cont python manage.py createsuperuser
```

---

### 5️⃣ Access the Application

Open your browser:
```
http://localhost
```

or
```
http://localhost:8000
```

(depending on Nginx configuration)

---

## 🧹 Useful Docker Commands

Check running containers:
```bash
docker ps
```

Stop containers:
```bash
docker compose down
```

Remove unused containers:
```bash
docker container prune
```

Remove unused images:
```bash
docker image prune
```

---

## 📈 Future Improvements

- Add Gunicorn for production
- Add CI/CD pipeline
- Deploy on AWS EC2
- Use environment variables
- Enable HTTPS

---

## 👨‍💻 Author

**Ritik Kumar**  
DevOps & Cloud Enthusiast  
Computer Science Graduate  

---

## ⭐ Why This Project Matters

This project shows practical DevOps learning:
- Real Docker usage
- Real debugging experience
- Real multi-container architecture

Perfect for:
- Freshers
- DevOps internships
- Docker & Cloud portfolios

