# Sidewalk Repair Company – Landing Page

A landing page for a licensed and insured general sidewalk repair contractor in New York City, built with React + Vite, Tailwind CSS, and scroll-based animations. Includes SMTP integration for sending quotes via email.

---

## 📋 Description

This project is designed to capture lead information for sidewalk repair quotes. It features:

- **Animated Hero Section** with clear call-to-action  
- **Quote Request Form** that sends email via SMTP  
- **Scroll-triggered Animations** (“fade-in” and “slide-in”) using IntersectionObserver  
- **Modern Styling** with Tailwind CSS  
- **Google Ads Custom Events** via `gtag('event', ...)`

---

## 🛠️ Tech Stack

- **Frontend**
  - React 18 + Vite  
  - TypeScript  
  - Tailwind CSS  
  - IntersectionObserver (custom hook)  
  - Lucide-React for icons  
- **Backend (SMTP API)**
  - Node.js + Express  
  - TypeScript  
  - Nodemailer  
  - dotenv  
  - CORS  
- **Build & Dev Tools**
  - Vite  
  - tsx for ESM TypeScript server  
  - concurrently for parallel scripts  

---

## 🚀 Prerequisites

- Node.js ≥16.x  
- npm ≥8.x  

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sidewalk-repair-company.git
   cd sidewalk-repair-company
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## 🔧 Environment Variables

Create a `.env` file in the project root with:

```dotenv
# Express API port
API_PORT=4000

# Hostinger SMTP credentials
SMTP_HOST=smtp.hostingerer.com
SMTP_PORT=465
SMTP_USER=office@brooklynsidewalks.com
SMTP_PASS=Habanada1@

# (Optional) Destination email for leads
EMAIL_DESTINATION=destino@yourdomain.com
```

> **Important:** Do not commit `.env` to version control.

---

## 📡 Vite Proxy Configuration

The `vite.config.ts` is already set up to proxy `/api` requests to the Express server at `http://localhost:4000`:

```ts
server: {
  proxy: {
    '/api': 'http://localhost:4000'
  }
}
```

---

## 🔄 NPM Scripts

- `npm run dev`  
  Starts both **client** (Vite) and **server** (Express + SMTP) in parallel  
- `npm run dev:client`  
  Starts **client only** on `http://localhost:5173`  
- `npm run dev:server`  
  Starts **server only** on `http://localhost:4000`  
- `npm run build`  
  Builds the frontend into the `dist/` folder  
- `npm run start`  
  Runs the compiled server (`node server.js`)

---

## 📂 Folder Structure

```
/
├─ .env                # Environment variables
├─ package.json        # Project manifest
├─ tsconfig.json       # TypeScript configuration
├─ vite.config.ts      # Vite configuration with proxy
├─ server.ts           # Express + Nodemailer SMTP server
├─ src/                # React source code
│  ├─ hooks/           # Custom hooks (e.g., useScrollAnimation)
│  ├─ components/ui/   # UI primitives (Button, Input, Textarea)
│  ├─ ModernHero.tsx   # Hero section with budget form
│  └─ ...              # Additional sections and assets
├─ dist/               # Production build output (after npm run build)
└─ node_modules/       # Dependencies
```

---

## 🖥️ Deployment

1. Run `npm run build` to generate the `dist/` folder.  
2. Configure environment variables on your hosting platform (Heroku, Vercel, DigitalOcean, etc.).  
3. Run `npm run start` or use a process manager (PM2, Docker) to serve the API and static files.  
4. Point your domain to the server and verify the lead form.

---

## 🤝 Contributing

1. Fork the repository  
2. Create a new branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m "feat: Add new feature"`)  
4. Push to the branch (`git push origin feature/YourFeature`)  
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
