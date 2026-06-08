# LingoBreeze Backend

Node.js/Express API server for the LingoBreeze vocabulary learning app.

## Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

### Running Locally

Start the development server:
```bash
npm start
```

The server will run on `http://localhost:3000`

**API Endpoints:**
- `GET /health` - Health check
- `GET /words` - Fetch all vocabulary words

**Example Response from GET /words:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "word": "Apple",
      "meaning": "A fruit that grows on trees...",
      "translation": "Manzana"
    }
  ],
  "count": 8
}
```

## Hosting on Render

### Steps to Deploy:

1. **Push to GitHub**
   - Create a GitHub repository
   - Push the `backend` folder to GitHub

2. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub

3. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

4. **Configure Service**
   - **Name:** lingobreeze-backend
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free (or paid for better performance)

5. **Deploy**
   - Click "Create Web Service"
   - Render will automatically deploy

6. **Get Your API URL**
   - Once deployed, you'll get a URL like: `https://lingobreeze-backend.onrender.com`
   - Use this URL in your Flutter app

7. **Update Flutter App**
   - Replace `http://localhost:3000` with your Render URL in the Flutter app's API configuration

**Note:** Free tier on Render may have a 15-minute inactivity spin-down. The app will wake up on the first request.

## CORS Configuration

CORS is enabled for all origins. Update the CORS configuration in `server.js` if needed for security:
```javascript
app.use(cors({
  origin: 'https://yourdomain.com'
}));
```

## Architecture

- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing support
- **RESTful API** - Standard HTTP endpoints

## Environment Variables

Optional environment variable:
- `PORT` - Server port (default: 3000)

Set it when starting:
```bash
PORT=5000 npm start
```
