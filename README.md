# 🚀 AppNest

<div align="center">
  <img src="./src/assets/logo.png" alt="AppNest Logo" width="120" height="120">
  
  ### Your Ultimate App Discovery & Publishing Platform
  
  [![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![DaisyUI](https://img.shields.io/badge/DaisyUI-4.x-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

[Live Demo](https://your-demo-link.com) • [Report Bug](https://github.com/aminur-islam-sojib/appnest/issues) • [Request Feature](https://github.com/aminur-islam-sojib/appnest/issues)

</div>

---

## 📖 About The Project

**AppNest** is a modern, community-driven platform where developers and users come together to discover, share, and publish applications. Whether you're looking for productivity tools, entertainment apps, or utility software, AppNest is your one-stop destination.

### ✨ Key Features

- 🔍 **Discover Apps** - Browse through a curated collection of applications across various categories
- 📤 **Publish Apps** - Share your creations with the community and get valuable feedback
- 💾 **Installation Guides** - Step-by-step instructions for seamless app installation
- 🎨 **Beautiful UI** - Modern, responsive design that works flawlessly on all devices
- ⚡ **Fast & Lightweight** - Optimized performance for the best user experience
- 🌐 **Community Driven** - Built by developers, for developers

---

## 🛠️ Built With

This project leverages cutting-edge technologies to deliver a seamless experience:

- **[React.js](https://reactjs.org/)** - A JavaScript library for building user interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapid UI development
- **[DaisyUI](https://daisyui.com/)** - Beautiful component library built on Tailwind CSS
- **[React Router](https://reactrouter.com/)** - Declarative routing for React applications
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon library for React

---

## 🚀 Getting Started

Follow these steps to get AppNest running on your local machine.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16.x or higher)
- **npm** or **yarn**

```bash
# Check Node.js version
node --version

# Check npm version
npm --version
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/aminur-islam-sojib/appnest.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd appnest
   ```

3. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` to see the app in action!

---

## 📁 Project Structure

```
appnest/
├── public/
│   └── _redirects          # Netlify/Vercel redirect rules
├── src/
│   ├── assets/             # Images, logos, and static files
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Apps.jsx
│   │   └── Installed.jsx
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── .gitignore
├── package.json
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── README.md
```

---

## 🌐 Deployment

### Deploy to Netlify

1. Create a `_redirects` file in the `public` folder:

   ```
   /*    /index.html   200
   ```

2. Build the project:

   ```bash
   npm run build
   ```

3. Deploy the `dist` folder to Netlify

### Deploy to Vercel

1. Create a `vercel.json` file in the root:

   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/" }]
   }
   ```

2. Push to GitHub and connect your repository to Vercel

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Aminur Islam Sojib**

- GitHub: [@aminur-islam-sojib](https://github.com/aminur-islam-sojib)
- Portfolio: [Your Portfolio Link]

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [DaisyUI Components](https://daisyui.com/components/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)

---

<div align="center">
  
  ### ⭐ Don't forget to star this repo if you found it helpful!
  
  Made with ❤️ by Aminur Islam Sojib
  
</div>
