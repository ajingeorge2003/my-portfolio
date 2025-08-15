@echo off
REM Portfolio Setup Script for Windows
REM This script helps you set up your personal portfolio website

echo 🎯 Portfolio Personalization Setup
echo ==================================
echo.

REM Create directories if they don't exist
echo 📁 Creating image directories...
if not exist "public\images\projects" mkdir "public\images\projects"
if not exist "public\images\skills" mkdir "public\images\skills"
if not exist "public\images\testimonials" mkdir "public\images\testimonials"

echo ✅ Directories created!
echo.

echo 📝 TO PERSONALIZE YOUR PORTFOLIO:
echo.
echo 1. 📸 ADD YOUR IMAGES:
echo    • Profile photo: public\images\profile.jpg (400x400px recommended)
echo    • Project screenshots: public\images\projects\ (800x600px recommended)
echo    • Resume PDF: public\resume.pdf
echo.

echo 2. ✏️  UPDATE PERSONAL INFO:
echo    • Edit config\personalInfo.js with your details:
echo      - Contact information (email, phone, LinkedIn, GitHub)
echo      - Bio and descriptions
echo      - Project details and links
echo      - Skills and experience
echo      - Education background
echo.

echo 3. 🎨 CUSTOMIZE DESIGN (Optional):
echo    • Edit styles\globals.css for colors and styling
echo    • Update favicon.ico in public folder
echo.

echo 4. 🚀 DEPLOY YOUR PORTFOLIO:
echo    • Build: npm run build
echo    • Deploy to Vercel, Netlify, or your preferred platform
echo.

echo 📋 QUICK CHECKLIST:
echo □ Add profile photo
echo □ Add project screenshots
echo □ Update contact information
echo □ Update project details and links
echo □ Add resume PDF
echo □ Test on mobile devices
echo □ Deploy to production
echo.

echo 💡 TIPS:
echo • Use high-quality images (compress them for web)
echo • Keep project descriptions concise but informative
echo • Include live demo links when possible
echo • Test the contact form functionality
echo • Add Google Analytics for tracking
echo.

echo 🎉 Your portfolio is ready for personalization!
echo Visit: http://localhost:3000
echo.
pause
