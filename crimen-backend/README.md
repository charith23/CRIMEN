# Crimen Backend

Express + MySQL backend for Crimen platform.

## Setup

1. `npm install`
2. Configure `.env` with your DB credentials.
3. Create a `cases` table in your MySQL DB:

   CREATE TABLE cases (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255),
     description TEXT,
     status VARCHAR(100)
   );

4. `npm run dev`

## API Endpoints

- GET    /api/cases
- GET    /api/cases/:id
- POST   /api/cases
- PUT    /api/cases/:id
- DELETE /api/cases/:id
