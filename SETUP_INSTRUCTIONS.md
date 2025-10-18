# mObywatel 3.0 - Setup Instructions

## Option 1: Using Python (Recommended if you don't have Node.js)

1. **Double-click** `start_python.bat`
2. Open your browser and go to: **http://localhost:8000**
3. The app will automatically redirect to the login page

## Option 2: Using Node.js

### First-time setup:
1. Install Node.js from https://nodejs.org/ (if not already installed)
2. Open terminal in this folder
3. Run: `node server.js`
4. Open your browser and go to: **http://localhost:3000**

### Quick start (after Node.js is installed):
- **Double-click** `start.bat`
- Or run: `npm start`

## Option 3: Using Live Server (VS Code Extension)

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Troubleshooting

- If port 3000 or 8000 is already in use, change the port number in the respective server file
- Make sure you have internet connection for external resources to load
- The API endpoints may not work without proper backend configuration

## Note

This project requires a backend server to work properly. The `/api/` endpoints need to be configured with your Discord and Supabase credentials as mentioned in the README.md.
