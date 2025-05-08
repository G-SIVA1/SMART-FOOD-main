# SMART FOOD

SMART FOOD is a full-stack web application designed to manage food-related data and user authentication efficiently. It features a Node.js/Express backend and a modern frontend (assumed to be React) for a seamless user experience.


## ✨ Features

- User registration and login with JWT authentication
- Food item management (Create, Read, Update, Delete)
- Image/file upload support
- MongoDB for database management
- Modular architecture with controllers, middleware, and models

## 🛠 Tech Stack

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (file uploads)
- JSON Web Tokens (JWT)
- dotenv

### Frontend:
- React (assumed)
- Axios (for API calls)
- Bootstrap / Tailwind (assumed styling)
- React Router (if applicable)

## 🔧 Getting Started

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or cloud)
- npm or yarn


### Backend Setup

1. **Navigate to backend directory**:

```bash
cd backend
````

2. **Install dependencies**:

```bash
npm install
```

3. **Configure environment**:

Create a `.env` file in `backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. **Run the server**:

```bash
npm start
```

---

### Frontend Setup

1. **Navigate to frontend directory**:

```bash
cd frontend
```

2. **Install dependencies**:

```bash
npm install
```

3. **Start the frontend**:

```bash
npm start
```

The frontend will usually run on [http://localhost:3000](http://localhost:3000) and communicate with the backend on port `5000`

## 📁 Project Structure

```
SMART-FOOD/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
```
## 🤝 Contributing

Contributions are welcome! Fork the repo and submit a pull request.
