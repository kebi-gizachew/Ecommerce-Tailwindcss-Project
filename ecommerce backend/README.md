# Ecommerce Backend API

This is the backend API for the Nexus Ecommerce Project, a full-stack ecommerce application built with Node.js, Express, and Sequelize. The backend provides RESTful APIs for managing products, cart items, orders, delivery options, and payment summaries.

## Features

- **Product Management**: CRUD operations for products
- **Cart Management**: Add, update, and remove cart items
- **Order Processing**: Create and manage customer orders
- **Delivery Options**: Manage shipping and delivery preferences
- **Payment Summary**: Calculate and provide payment details
- **Data Persistence**: Uses Sequelize ORM with support for MySQL, PostgreSQL, and SQLite
- **Image Serving**: Static file serving for product images
- **CORS Support**: Cross-origin resource sharing enabled

## Tech Stack

- **Runtime**: Node.js (version 22+)
- **Framework**: Express.js
- **Database ORM**: Sequelize
- **Database Support**: MySQL, PostgreSQL, SQLite
- **Other**: CORS, Nodemon (for development)

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

### Cart Items
- `GET /api/cart-items` - Get all cart items
- `POST /api/cart-items` - Add item to cart
- `PUT /api/cart-items/:id` - Update cart item
- `DELETE /api/cart-items/:id` - Remove item from cart

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create a new order

### Delivery Options
- `GET /api/delivery-options` - Get delivery options
- `POST /api/delivery-options` - Add delivery option

### Payment Summary
- `GET /api/payment-summary` - Get payment summary

### Reset
- `POST /api/reset` - Reset data to defaults

## Installation

1. Ensure you have Node.js installed (version 22 or higher). If not, download it from [nodejs.org](https://nodejs.org/).

2. Clone or download this repository.

3. Navigate to the backend directory:
   ```bash
   cd ecommerce-backend-ai
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

## Database Setup

This backend uses Sequelize ORM and supports multiple databases. Configure your database connection in the models/index.js file.

### SQLite (Default)
No additional setup required. The application will use SQLite by default.

### MySQL
1. Install MySQL server
2. Create a database
3. Update the Sequelize configuration in `models/index.js`

### PostgreSQL
1. Install PostgreSQL server
2. Create a database
3. Update the Sequelize configuration in `models/index.js`

## Usage

### Development
Run the server in development mode with auto-restart:
```bash
npm run dev
```

### Production
Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000` by default, or the port specified in the `PORT` environment variable.

## Project Structure

```
ecommerce-backend-ai/
├── models/           # Sequelize models
├── routes/           # API route handlers
├── defaultData/      # Default data for reset functionality
├── backend/          # JSON data files (for fallback)
├── images/           # Static image files
├── patches/          # Patches for dependencies
├── server.js         # Main server file
├── package.json      # Dependencies and scripts
└── README.md         # This file
```