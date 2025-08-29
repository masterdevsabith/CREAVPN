# CreaVPN

This is my submission for the **CreaVPN Website Challenge**, designed and developed by **Muhammed Sabith A S**.  
The project combines a modern web application with an Electron desktop application, leveraging **Next.js, Tailwind CSS, Supabase, Electron, and Google Gemini AI**.

---

## 🚀 Tech Stack & Technologies
- **Next.js** (frontend framework)  
- **Tailwind CSS** (UI styling)  
- **Supabase** (authentication & backend)  
- **React Leaflet** (map rendering)  
- **Electron.js** (desktop app as `.exe`)  
- **Google Gemini AI** (chatbot integration)

---

## 🌍 Available Endpoints
- `/` → Root (Homepage)  
- `/about` → About Page  
- `/articles` → Blogs Section  
- `/pricing` → Pricing Page  
- `/our-missions` → Missions Page  
- `/contact-us` → Contact Section  
- `/dashboard` → Dashboard (important page)

---

## ✨ Features
- **Working Download Button** → Downloads and installs the Electron-based `.exe` app.  
- **Country Selection in Dashboard** → Choose different countries and connect via VPN.  
- **Map Integration** → Tile layer powered by **StadiaMaps**.  
- **Hosting** → Hosted on Vercel ([Live Demo](https://creavpn-muhammed-sabith.vercel.app/))  
  - Note: Map tiles behave differently on Vercel, so an alternate layer is used there.  
- **AI Chatbot** → Powered by Google Gemini API.  
- **Responsive Design** → Optimized up to `640px` (Tailwind’s default).  

---

---

## ⚠️ Environment Variables
The following keys are required when testing locally:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_GEMINI_API_KEY=
```


Example file: .env.example → rename to .env and update with your keys.

Obtain a Google Gemini API key here: Google AI Studio

If you don’t want to set up locally, you can explore the hosted version: [creavpn_vercel_hosted](https://creavpn-muhammed-sabith.vercel.app/)


## 📦 Source Code
📦 Source Code

[CreaVPN Website (Next.js)](https://github.com/masterdevsabith/CREAVPN) 

[CreaVPN Electron App](https://github.com/masterdevsabith/creavpn-electron-app)

Note: Both repositories will be made public after August 30, 2025.


## 📬 Connect With Me

- **LinkedIn** → [Muhammed Sabith A S](https://www.linkedin.com/in/muhammedsabithas/)  
- **GitHub** → [@masterdevsabith](https://github.com/masterdevsabith)  
- **Instagram** → [sabiiii.fx](https://www.instagram.com/sabiiii.fx/)



## ⚙️ Installation & Setup

### 1. Web Application (Next.js)

```bash
# Clone the repository
git clone https://github.com/masterdevsabith/CREAVPN.git
cd CREAVPN

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Fill in NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_GEMINI_API_KEY

# Run the development server
npm run dev
```

# Clone the repository
git clone https://github.com/masterdevsabith/creavpn-electron-app.git
cd creavpn-electron-app

# Install dependencies
npm install

# Run the Electron app in development
npm start

# Build the executable (.exe)
npm run build



