@echo off
title Lassi Lehar — Backend API
color 0A
echo.
echo  ============================================
echo   Lassi Lehar — Backend Server Starting...
echo  ============================================
echo.
echo  API will be available at:
echo  http://localhost:3001
echo.
echo  Press CTRL+C to stop the server
echo  ============================================
echo.
cd /d "%~dp0backend"
node server.js
pause
