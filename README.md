# Books-Table

A modern web application for managing and viewing book data.

## 📸 Screenshots

<div align="center">
  <img src="docs/images/main-view.png" alt="Main View" width="400"/>
  <p><em>Main view with book list</em></p>
</div>

## 🌟 Features

### Frontend

- **Responsive Design**

  - Built with Bulma CSS framework and custom styles for a modern look.
  - Fully responsive and mobile-friendly interface.

- **State Management**

  - Efficient state handling using reducers for predictable state transitions.

- **API Integration**

  - Universal function for handling API requests, supporting GET, POST, PATCH, and DELETE methods.
  - Error handling and loading states for a smooth user experience.

- **User Interface**

  - Clean and intuitive design with icon integration for enhanced UX.

- **Deployment**
  - Deployed on Render for seamless access and scalability.

### Backend

- **Database**

  - Utilizes MongoDB for robust and scalable data storage.

- **API Endpoints**

  - RESTful API with universal request handler for efficient data processing.
  - Secure data handling practices to protect user information.

- **Server**

  - Built with Node.js and Express.js for fast and reliable server-side operations.

- **Deployment**
  - Deployed on Render for reliable backend services.

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- Bulma CSS Framework with custom styles
- State management using reducers
- Universal function for API requests
- Icon Library

### Backend

- Node.js
- Express.js
- MongoDB for database
- Universal request handler
- Secure and efficient data handling

## 📦 Project Structure

```
frontend/src/
├── components/     # Reusable UI components
├── context/        # React context for state management
├── pages/          # Page components
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── api.ts          # API integration

backend/src/
├── controllers/    # API controllers
├── models/         # Database models
├── routes/         # API routes
└── server.js       # Server setup
```

## 🎯 Live Demo

Check out the live version at: [https://books-table.onrender.com/dashboard](https://books-table.onrender.com/dashboard)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Books-Table.git
cd Books-Table
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

### Deployment

The application is deployed to Render. To deploy manually:

```bash
npm run deploy
```
