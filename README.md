# 🌐 ICPC Website  

[![Build Status](https://img.shields.io/github/actions/workflow/status/amansxcalibur/icpc_website/ci.yml?branch=main)](https://github.com/amansxcalibur/icpc_website/actions)  
[![Contributors](https://img.shields.io/github/contributors/amansxcalibur/icpc_website)](https://github.com/amansxcalibur/icpc_website/graphs/contributors)  
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.x-brightgreen)](https://nodejs.org/)  
[![License](https://img.shields.io/github/license/amansxcalibur/icpc_website)](LICENSE)  

Official website of **ICPC Amrita**.  

Created by **[@amanxcalibur](https://github.com/amansxcalibur)**, maintained by **[@aswinj1](https://github.com/aswinj1)**.  

---

## 📦 Prerequisites  

Make sure you have the following installed before running the project:  

- [Node.js](https://nodejs.org/) (>=22.x recommended)  
- 
- [Git](https://git-scm.com/)  

---

## 🚀 How to Run the Project  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/icpc_website.git
   cd icpc_website
   ```

2. Go to the frontend directory:  
   ```bash
   cd icpc_front
   ```

3. Install dependencies:  
   ```bash
   npm install
   ```

4. Start the development server:  
   ```bash
   npm run dev
   ```

The site will be available at **http://localhost:3000** 🎉  

---

## 📂 Project Structure  

```
icpc_website/
│── icpc_front/             # Frontend (Next.js + Tailwind CSS)
│── .github/workflows/      # CI/CD workflows
│── README.md               # Documentation
│── ...
```

---

## 🤝 How to Contribute  

1. **Fork** the repository.  
2. **Clone** your fork locally:  
   ```bash
   git clone https://github.com/your-username/icpc_website.git
   ```
3. Install dependencies (`npm install` inside `icpc_front`).  
4. Create a new branch for your feature:  
   ```bash
   git checkout -b feature-branch
   ```
5. Make your changes, then commit and push:  
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feature-branch
   ```
6. Go to your fork on GitHub → Click **Compare & pull request**.  
7. Write a description of your changes → Click **Create Pull Request ✅**  

---

## 🏷 Updating the `latest` Tag  

To update the `latest` tag with the most recent commit:  

```bash
git tag -f latest
git push origin latest --force
```

---

## ⚙️ Tech Stack  

- **Framework**: [Next.js](https://nextjs.org/)  
- **Language**: JavaScript  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
