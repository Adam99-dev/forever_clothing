# MERN Stack E-Commerce Website → **Forever Clothing**

A **full-stack E-commerce web application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with a modern UI powered by **Tailwind CSS** and **Lucide Icons**.  
The project includes a complete **Admin Panel**, secure **authentication**, **order management**, **Stripe payment integration**, and a scalable frontend architecture using **React Context API**.

This project is designed to be production-ready and suitable for real-world use cases as well as portfolio and freelance deployment.

## 🚀 Tech Stack

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Lucide React Icons
- Axios
- Context API (`useContext`)
- Functional Components & Hooks

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Stripe Payment Gateway

### Admin

- Electron.js
- Express.js + Node.js
- MongoDB
- Mongoose
- JWT Authentication

### Database

- MongoDB Atlas

## ✨ Features

### 👤 User Features

- User authentication (JWT based)
- Secure login & registration
- Add to cart functionality
- Remove/update cart items
- Checkout system
- Stripe payment integration
- Cash on Delivery (COD) option
- Order history page
- Responsive UI for all devices
- Search products using React search components
- Context API based global state management

### 🛠 Admin Panel Features

- Desktop Application for Admins
- Admin authentication
- Dashboard overview
- Add new products
- Upload **multiple images per product**
- Update existing products
- Delete products
- Manage orders
- Update order status (Pending / Paid / Delivered)
- View customer details
- Product inventory management

### 🧾 Product Management

- Multiple product images support
- Dynamic pricing
- Product categories
- Product descriptions
- Stock availability handling

### 💳 Payment System

- Stripe Checkout integration
- Secure payment flow
- Order verification after payment
- Payment status stored in database
- Support for failed and canceled payments

### 🎨 UI & Styling

- Fully responsive design
- Tailwind CSS utility-first styling
- Lucide Icons for modern iconography
- Clean and minimal UI
- Reusable React components
- Mobile-first approach

## 🧠 State Management

- React Context API
- Centralized cart management
- Global user authentication state
- Shared order and product state

## 📂 Project Structure

```text
e_commerce_site/
├── frontend/                     # React frontend
│   ├── public/
|        ├── logos and svgs
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
├── backend/                     # Node/Express backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── admin/                     # Node/Express backend
│   ├── public/
|        ├── logos and svgs
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
│   └── .env
├── .gitignore
└── README.md
```

## 🔐 Authentication & Security

- JWT based authentication
- Protected routes for users and admin
- Secure API endpoints
- Token-based authorization
- Backend validation using middleware

## 🧪 API Endpoints (Overview)

### Auth

- `POST /api/user/register`
- `POST /api/user/login`

### Products

- `GET /api/product/list`
- `POST /api/product/add`
- `POST /api/product/update`
- `POST /api/product/remove`

### Orders

- `POST /api/order/place`
- `POST /api/order/stripe`
- `GET /api/order/user`
- `GET /api/order/admin`

## ⚙️ Installation & Setup

1. **Clone the repository**

   ````bash
   git clone https://github.com/Adam99-dev/forever_clothing.git
   cd forever_clothing```

   ````

2. **Install dependencies**

   **Backend**

   ```bash
   git clone https://github.com/Adam99-dev/forever_clothing.git
   cd Backend
   npm install
   ```

   **Frontend**

   ```bash
   git clone https://github.com/Adam99-dev/forever_clothing.git
   cd Frontend
   npm install
   ```

   **Admin**

   ```bash
   git clone https://github.com/Adam99-dev/forever_clothing.git
   cd Admin
   npm install
   ```

   **Desktop**

   ```bash
   git clone https://github.com/Adam99-dev/forever_clothing.git
   cd Desktop
   npm install
   ```

3. **Start Project**

   _Start Backend_

   ```bash
   cd Backend
   npm run s
   ```

   _Start Frontend_

   ```bash
   cd Frontend
   npm run dev
   ```

   _Start Admin_

   ```bash
   cd Admin
   npm run dev
   ```
   _Start Desktop_

   ```bash
   cd Desktop
   npm run dist
   ```

## 🌐 Environment Variables

1. Create a `.env` file inside the **Backend** folder:

- MONGODB_URI
- CLOUDINARY_API_KEY
- CLOUDINARY_SECRET_KEY
- CLOUDINARY_NAME
- PORT
- JWT_SECRET
- ADMIN_EMAIL
- ADMIN_PASSWORD
- STRIPE_SECRET_KEY

2. Create a `.env` file inside the **Frontend** and **Admin** folder:

- BACKEND_URL

## 📦 Future Improvements

- Wishlist feature
- Product reviews & ratings
- Email notifications
- Invoice generation
- Role-based access control
- Pagination & filtering
- Admin analytics dashboard

## 🎯 Purpose of This Project

- Learn full-stack MERN development
- Build a scalable E-commerce system
- Understand payment gateway integration
- Practice clean architecture and reusable components
- Portfolio & real-world freelance readiness

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.
Feel free to fork this repository and submit a pull request.

## 📜 License

This project is licensed under the MIT License.

## 🙌 Acknowledgements

- React Documentation
- Tailwind CSS
- Stripe API Docs
- MongoDB & Express Community

# ⭐ If you like this project, don’t forget to star the repo!
