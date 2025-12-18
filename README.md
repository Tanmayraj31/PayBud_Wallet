
# 💸 PayBud – Digital Wallet Application

PayBud is a **full-stack digital wallet application** inspired by apps like Paytm/PhonePe.  
Users can sign up, log in, view their balance, search other users, and transfer money securely.

This project was built to understand **real-world authentication, protected routes, and money transfer logic** using the MERN stack.

---

## 🚀 Features

- 🔐 **Authentication**
  - User signup & signin
  - JWT-based authentication
  - Protected backend & frontend routes

- 💰 **Wallet & Balance**
  - Real-time balance fetched from database
  - Secure balance handling
  - Amount formatted to 2 decimal places

- 🔁 **Money Transfer**
  - Send money to other users
  - Atomic balance updates
  - Success confirmation screen with auto redirect

- 👥 **User Search**
  - Search users using first name / last name
  - Backend filtering with regex

- 🧭 **Frontend UX**
  - Protected routes (cannot access dashboard without login)
  - Logout dropdown menu
  - Success screen with countdown redirect
  - Clean UI with Tailwind CSS

---

## 🛠 Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)

---

## 📂 Project Structure

paybud/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── db.js
│ ├── index.js
│ └── .env
│
├── frontend/
│ ├── components/
│ ├── pages/
│ ├── App.jsx
│ └── main.jsx
│
└── README.md

yaml
Copy code

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
⚠️ Never commit .env to GitHub

▶️ How to Run Locally
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/your-username/paybud.git
cd paybud
2️⃣ Start Backend
bash
Copy code
cd backend
npm install
node index.js
3️⃣ Start Frontend
bash
Copy code
cd frontend
npm install
npm run dev
Frontend will run on:

arduino
Copy code
http://localhost:5173
Backend will run on:

arduino
Copy code
http://localhost:3000
🔐 Authentication Flow
User logs in → backend verifies credentials

JWT is generated and sent to frontend

Token stored in localStorage

Protected routes check token before rendering

Backend middleware protects API routes

📌 Key Learnings
JWT-based authentication

Frontend route protection

Backend authorization middleware

MongoDB transactions & balance handling

React state management & effects

Building reusable components

🚧 Future Improvements
Transaction history

Password hashing with bcrypt

Token expiry handling

Refresh tokens

Better error handling & toasts

Mobile responsiveness

👨‍💻 Author
Tanmay Raj
Aspiring Full-Stack Developer
Built as a learning project to understand real-world MERN authentication and wallet systems.

