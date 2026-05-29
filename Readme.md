# Meeting Cost Calculator

A full-stack application that calculates meeting cost estimates based on participants, their hourly rates, and meeting length. The app stores meetings and displays past meetings with cost summaries.

## Project Structure

- `client/` - React front-end application
- `server/` - Express back-end API with MongoDB data storage

## End-to-End Directory Overview

### `client/`
The client folder contains the user interface and user experience logic.

- `package.json` - front-end dependencies and scripts
- `vite.config.js` - Vite build configuration
- `src/` - React source files
  - `api.js` - Axios instance configured for the backend API
  - `App.jsx` - main application component and meeting save flow
  - `components/` - reusable UI components
    - `PersonForm.jsx` - participant input form
    - `MeetingSummary.jsx` - cost recommendation summary
    - `PastMeetings.jsx` - list of saved meetings

### `server/`
The server folder contains the API, database connection, and request handling.

- `package.json` - backend dependencies and scripts
- `.env` - environment variables including `PORT` and `MongoDB_URI`
- `index.js` - Express app configuration and route registration
- `src/` - server source files
  - `db/` - database connection and models
    - `db.js` - MongoDB connection logic
    - `models/Meeting.js` - Mongoose schema for meetings
  - `routes/MeetingRoutes.js` - Express routes for meeting CRUD operations
  - `controller/MeetingController.js` - request handlers for creating, fetching, and deleting meetings

## Running the Project

1. Start the server:
   - `cd server`
   - `npm install`
   - `npm start`

2. Start the client:
   - `cd client`
   - `npm install`
   - `npm run dev`

3. Open the app in your browser at the local Vite development URL.
