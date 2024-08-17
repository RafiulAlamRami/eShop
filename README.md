# [eShop](https://eshop-3786e.web.app/)
## Live URL: https://eshop-3786e.web.app/

## Description
eShop is a modern e-commerce platform with advanced search functionality, providing users with a seamless shopping experience. The frontend is built with React, Tailwind CSS, and Daisy UI for a sleek and responsive design. Firebase Authentication is used for secure user management. The backend is powered by Node.js, Express.js, and MongoDB.

## Features

- E-commerce Search: Efficient and intuitive search for products.
- User Authentication: Secure authentication and authorization using Firebase.
- Responsive Design: Fully responsive layout using Tailwind CSS and Daisy UI.
- Product Management: Browse and manage products with detailed descriptions, pricing, and categories.
- Secure API: Backend API built with Node.js, Express.js, and MongoDB for data management.

## Project Setup

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/eshop.git
cd eshop
```

## Configuration :
# Backend:

- Create a .env file in the backend/ directory:


```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain


```
# Frontend:
- Configure Firebase in the frontend/src/firebaseConfig.js file::


```bash
const firebaseConfig = {
  apiKey: "your_firebase_api_key",
  authDomain: "your_firebase_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id",
};

export default firebaseConfig;

```

## Running the Application

## Start the backend server:

```bash
cd backend
npm run start
```

## Visit the application in your browser:

```bash
http://localhost:yourPort

```


## Start the froentend:



Clone the repository and install dependencies and run project:

```bash
git clone https://github.com/RafiulAlamRami/eShop.git
cd eShop
npm run dev


```

