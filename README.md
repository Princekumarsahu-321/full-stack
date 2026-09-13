# 🔐 MERN Authentication System

A simple **Full-Stack Authentication Website** built using the **MERN Stack**.
This project focuses on implementing secure **User Signup and Login functionality** with a React frontend and Node.js/Express backend connected to MongoDB.

## 🚀 Features

* ✅ User Registration / Signup
* ✅ User Login
* ✅ User Authentication
* ✅ Password Hashing using bcrypt
* ✅ JWT-based Authentication
* ✅ Protected API Routes
* ✅ MongoDB Database Integration
* ✅ REST API using Express.js
* ✅ React-based Frontend
* ✅ Responsive and clean UI
* ✅ Logout functionality

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Axios
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Cookie Parser
* CORS

## 📂 Project Structure

```text
full-stack/
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── Dockerfile
└── README.md
```

## 🔄 Authentication Flow

```text
User
 │
 ▼
React Frontend
 │
 │ Signup / Login
 ▼
Express.js API
 │
 ▼
Authentication Controller
 │
 ├── bcrypt → Password Hashing
 │
 ▼
MongoDB
 │
 ▼
JWT Token
 │
 ▼
Authenticated User
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Princekumarsahu-321/full-stack.git
```

```bash
cd full-stack
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm start
```

For development:

```bash
npm run dev
```

### 3. Frontend Setup

Open another terminal:

```bash
cd Frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

## 🔑 API Endpoints

### Authentication

| Method | Endpoint                         | Description            |
| ------ | -------------------------------- | ---------------------- |
| POST   | `/api/auth/signup`               | Register a new user    |
| POST   | `/api/auth/login`                | Login user             |
| POST   | `/api/auth/logout`               | Logout user            |
| GET    | `/api/auth/user`                 | Get authenticated user |
| PATCH  | `/api/auth/updateMe`             | Update user profile    |
| PATCH  | `/api/auth/updateMyPassword`     | Update password        |
| POST   | `/api/auth/forgotPassword`       | Request password reset |
| PATCH  | `/api/auth/resetPassword/:token` | Reset password         |

## 🧪 Authentication Testing

You can test the backend APIs using:

* Postman
* Thunder Client
* REST Client
* Frontend UI

Example signup request:

```json
{
  "username": "Prince",
  "email": "prince@example.com",
  "password": "password123",
  "passwordConfirm": "password123"
}
```

Example login request:

```json
{
  "email": "prince@example.com",
  "password": "password123"
}
```

## 🔒 Security

The project follows basic authentication security practices:

* Passwords are hashed using **bcrypt**
* Authentication uses **JWT**
* Sensitive configuration is stored in `.env`
* CORS is configured for frontend-backend communication
* Protected routes require authentication

> ⚠️ Never commit your `.env` file or database credentials to GitHub.

## 🎯 Project Goal

The goal of this project is to understand how a **MERN-based authentication system** works from frontend to backend and database.

It demonstrates the complete flow:

**React → Express → MongoDB → Authentication → React**

## 📚 Learning Outcomes

Through this project, I practiced:

* Building REST APIs with Express.js
* Connecting Node.js with MongoDB
* Creating MongoDB schemas using Mongoose
* Implementing JWT authentication
* Password hashing with bcrypt
* Connecting React with Express APIs
* Managing authentication state
* Working with environment variables
* Using Git and GitHub for version control

## 🚧 Future Improvements

Planned features:

* [ ] User Profile
* [ ] Forgot Password UI
* [ ] Email Verification
* [ ] Role-Based Authentication
* [ ] Admin Dashboard
* [ ] User Dashboard
* [ ] Property Management
* [ ] Booking System
* [ ] AI Features

## 👨‍💻 Author

**Prince Kumar**

B.Tech CSE Student
Jagannath University, Jaipur

* GitHub: [Princekumarsahu-321](https://github.com/Princekumarsahu-321)

## ⭐ Support

If you found this project useful for learning MERN Stack authentication, consider giving the repository a ⭐.
