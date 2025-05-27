# RentRite

## Project Overview

I built **RentRite**, a full-stack home rental application leveraging the MERN (MongoDB, Express.js, React, Node.js) stack with Vite for frontend bundling. It allows hosts to list properties, and guests to browse, book, and manage their stays. Core features include user authentication, dynamic listings, wishlist, bookings calendar, and image uploads.

## Features

* **User Authentication**: Secure signup and login using JWT and bcrypt for password hashing.
* **Profile Management**: Upload profile pictures and update personal details.
* **Property Listings**: Hosts can create, update, and delete property listings with multiple images, descriptions, and amenities.
* **Search & Filters**: Browse listings by category, location, or custom search queries.
* **Wishlist**: Add or remove listings to a personal wishlist.
* **Booking System**: Guests can select dates, view pricing, and book stays; hosts can view reservations.
* **Responsive UI**: Fast, mobile-friendly interface built with React, Tailwind CSS, and Vite.

## Tech Stack

* **Frontend**: React, Vite, Tailwind CSS, React Router, Redux Toolkit, react-date-range, react-beautiful-dnd
* **Backend**: Node.js, Express.js, Mongoose (MongoDB ODM), Multer (file uploads), JSON Web Tokens
* **Database**: MongoDB Atlas

## Architecture Diagram

```text
┌──────────────┐       HTTP/JSON       ┌───────────────┐
│  Frontend    │ ───────────────────▶ │   Backend     │
│(React + Vite)│                       │(Express.js)   │
└──────────────┘                        └──────┬────────┘
     ▲                                         │
     │                                         │
     │   HTTP/Static Files                     ▼
┌──────────────┐               ┌────────────────────────┐
│   Browser    │               │   MongoDB Atlas        │
│  (Client)    │◀────────────▶│ (Mongoose Models)      │
└──────────────┘               └────────────────────────┘
```

## Folder Structure

```
root
├─ backend
│  ├─ controllers
│  ├─ models
│  ├─ routes
│  ├─ middleware
│  ├─ public/uploads
│  ├─ .env
│  └─ index.js
├─ frontend
│  ├─ src
│  │  ├─ components
│  │  ├─ pages
│  │  ├─ redux
│  │  └─ utils
│  ├─ vite.config.js
│  └─ package.json
├─ .gitignore
└─ README.md
```

## Prerequisites

* Node.js (>=14.x)
* npm or Yarn
* MongoDB Atlas account
* GitHub account (for deployment)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/<your-username>/rentrite.git
   cd rentrite
   ```
2. **Install Dependencies**

   * Backend

     ```bash
     cd backend
     npm install
     ```
   * Frontend

     ```bash
     cd ../frontend
     npm install
     ```

## Environment Variables

Create a `.env` file in the `backend` folder with:

```
MONGO_URI=<Your MongoDB Atlas URI>
JWT_SECRET=<Your JWT Secret>
```

And, in `frontend`, create a `.env`:

```
VITE_API_URL=http://localhost:3000/api
```

## Running Locally

1. **Start Backend**

   ```bash
   cd backend
   npm run start
   ```
2. **Start Frontend**

   ```bash
   cd frontend
   npm run dev
   ```
3. **Open** `http://localhost:5173` in your browser.

## License

This project is licensed under the MIT License.
