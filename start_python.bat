@echo off
echo Starting mObywatel 3.0 server with Python...
echo.
echo Server will run on http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000
pause
