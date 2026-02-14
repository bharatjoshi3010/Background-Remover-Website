# Background Removal Web Application (Full-Stack Project)

## 📌 Project Overview

## 🔗 Live Demo
👉 https://background-remover-website-ow1d.vercel.app/

This is a full-stack web application where users can **upload an image**, and the system returns the **same image in `.png` format with the background removed**.

The main goal of this project was to understand **real-world API usage**, **authentication**, **payments**, and **deployment**, rather than just building UI features.

---

## 🖼️ Core Functionality

- Upload an image
- Image is processed using a **Background Removal API**
- Output image is returned in **PNG format with transparent background**
- Free API credits available initially
- After free usage, the API requires payment (real-world SaaS model)

---

## 🛠️ Tech Stack & Tools Used

### Backend
- Node.js
- Express.js
- **JWT (JSON Web Tokens)** for authentication
- **Postman** for API testing and route verification
- **Razorpay** for payment integration
- Background Removal API

### Frontend
- React.js
- **Clerk (Connect)** for user authentication
- **Axios** for calling backend APIs

### Deployment
- **Vercel** (production deployment)

---

## 🔐 Authentication Flow

- User authentication handled on the frontend using Clerk
- JWT tokens generated and verified on the backend
- Protected routes secured using token verification middleware
- API behavior tested using Postman before frontend integration

---

## 💳 Payment Integration

- Razorpay used to manage payments for API usage
- Simulates real SaaS behavior:
  - Free credits for new users
  - Paid usage after limit exhaustion
- Helped understand **payment flows and API monetization**

---

## 🧪 API Testing (Postman)

- All backend APIs were tested using Postman
- Verified:
  - Authentication routes
  - JWT token validation
  - Image upload & processing endpoints
- Ensured API reliability before frontend connection

---

## 🌐 Deployment Experience

- Deployed on Vercel
- Learned:
  - Environment configuration
  - Production API handling
  - Debugging serverless deployment issues

---

## 📚 Key Learnings

### 1️⃣ Working With Real APIs
- Free-tier APIs have strict limits
- APIs can stop functioning once credits expire
- Important to plan fallback or billing logic

### 2️⃣ Deployment & Production Readiness
- Difference between local and production environments
- Token-based security in real apps
- Importance of API testing before deployment

---

## 🔮 Future Goals

- Build **pure projects** using core backend logic
- Reduce dependency on paid third-party APIs
- Improve system design and scalability skills

---
