@echo off
title Lassi Lehar — Frontend Website
color 0B
echo.
echo  ============================================
echo   Lassi Lehar — Frontend Starting...
echo  ============================================
echo.
echo  Website will open at:
echo  http://localhost:5173
echo.
echo  Press CTRL+C to stop the server
echo  ============================================
echo.
cd /d "%~dp0"
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run dev
pause
