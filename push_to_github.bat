@echo off
echo ===================================================
echo   Pushing Portfolio to GitHub Repository
echo ===================================================
echo.

git init
git remote remove origin 2>nul
git remote add origin https://github.com/GopikrishnaAR/Graphic-designer-portfolio.git
git branch -M main
git add .
git commit -m "Add Light Theme Maximalist Graphic Designer Portfolio with Profile Photo and CV Download"
git push -u origin main --force

echo.
echo ===================================================
echo   Successfully Pushed to GitHub!
echo ===================================================
pause
