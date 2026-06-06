# 🎬 Netflix Clone

A modern Netflix-inspired streaming platform built using React.js, Redux Toolkit, and REST APIs. The application provides a responsive user interface for browsing movies and TV shows with a smooth user experience similar to popular streaming platforms.

---

## 🚀 Live Demo

https://netflix-project-ashy.vercel.app/

---

## 📌 Project Overview

Netflix Clone is a frontend web application developed to strengthen skills in modern React development, state management, API integration, and responsive UI design.

The project replicates the core user experience of a streaming platform by allowing users to browse content, explore movie details, and enjoy a visually engaging interface.

---

## ✨ Features

### 🎥 Movie Browsing

- Browse trending movies
- Popular movies section
- Top-rated content
- Dynamic movie categories
- Responsive movie cards

### 🔍 Search Functionality

- Search movies instantly
- Dynamic search results
- User-friendly navigation

### 📄 Movie Details

- Movie overview
- Ratings information
- Release dates
- Movie posters
- Additional metadata

### 🔐 Authentication

- User Login
- User Registration
- Protected Routes
- Authentication State Management

### 🎨 Modern UI

- Netflix-inspired design
- Smooth animations using Framer Motion
- Fully responsive layout
- Mobile-friendly experience
- Interactive user interface

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Redux Toolkit
- React Router DOM
- Axios
- Framer Motion
- JavaScript (ES6+)

### API

- TMDB API (or your movie API)

### Tools

- Git
- GitHub
- Vercel

---

## 🏗️ System Architecture

```text
User Interface
       │
       ▼
React Components
       │
       ▼
Redux Toolkit Store
       │
       ▼
Axios API Requests
       │
       ▼
Movie Database API
```

---

## 📂 Project Structure

```bash
netflix-project/

src/
│
├── components/
│   ├── Navbar/
│   ├── Banner/
│   ├── MovieRow/
│   └── Footer/
│
├── pages/
│   ├── Home/
│   ├── Login/
│   └── MovieDetails/
│
├── redux/
│   ├── store.js
│   └── slices/
│
├── services/
│
├── assets/
│
├── App.js
└── main.js
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Arunimatechy/netflix-project.git
```

### Navigate to Project

```bash
cd netflix-project
```

### Install Dependencies

```bash
npm install
```

### Run Application

```bash
npm run dev
```

Application runs at:

```text
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file:

```env
VITE_API_KEY=your_movie_api_key
VITE_BASE_URL=your_api_url
```

---

## 📡 API Integration

Example API Calls:

```http
GET /trending
GET /popular
GET /top_rated
GET /movie/{id}
```

Movie data includes:

- Title
- Description
- Poster
- Ratings
- Release Date
- Genre Information

---

## 🎯 Learning Outcomes

This project helped me gain practical experience with:

- React.js Development
- Redux Toolkit State Management
- REST API Integration
- Axios Data Fetching
- Component-Based Architecture
- Responsive Design
- Framer Motion Animations
- Frontend Performance Optimization
- Git & GitHub Workflow

---

## 📸 Screenshots

### Home Page

_Add Screenshot Here_

### Trending Movies

_Add Screenshot Here_

### Movie Details

_Add Screenshot Here_

### Mobile View

_Add Screenshot Here_

---

## 🚀 Future Improvements

- Video Trailer Playback
- Watchlist Feature
- Dark / Light Theme
- User Profiles
- Movie Recommendations
- Favorites System
- Firebase Authentication
- Backend Integration

---

## 👨‍💻 Developer

### Arunima

Full Stack Developer

### Skills Used

- React.js
- Redux Toolkit
- JavaScript
- Axios
- Framer Motion
- REST APIs
- Git & GitHub

GitHub:

https://github.com/Arunimatechy

---

## 🌟 Why I Built This Project

I built this project to improve my frontend development skills by recreating a real-world streaming platform interface. Through this project, I learned API integration, state management using Redux Toolkit, animation implementation with Framer Motion, and responsive UI development.

---

## ⭐ Support

If you found this project useful, consider giving it a star ⭐ on GitHub.

It helps support the project and motivates future improvements.
