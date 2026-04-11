# URL Shortener — DevCamp 2026

## Project Overview
**DevCamp URL Shortener** is a modern, high-performance frontend web application designed to streamline URL management. Built as part of the DevCamp 2026 assignment, this project provides a lightning-fast, intuitive interface for users to instantly generate compact, shareable links from lengthy web addresses. It focuses on a clean user experience with smooth handling of form submissions and an elegant, responsive result display.

## Video Demo
[Click here to view the full video demo](https://drive.google.com/file/d/1PiKsWkhC-qD70zFJrQd5A5qTuV2gbosA/view?usp=sharing)

## Tech Stack
The project leverages a robust and modern frontend ecosystem to ensure performance, type safety, and maintainability:

### Languages
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### Tools & Libraries
![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Husky](https://img.shields.io/badge/husky-%2342b883?style=for-the-badge&logo=git&logoColor=white)

## Features
- **Instant Link Generation:** Converts long URLs to short, shareable links efficiently.
- **Modern User Interface:** A minimal, responsive design tailored with Tailwind CSS.
- **Intuitive Result Interaction:** Gracefully presents the shortened URL with a quick copy-to-clipboard functionality via a custom modal.
- **Robust Form Handling:** Client-side validation providing immediate user feedback for errors or invalid URLs.

## Folder Structure
The repository is structured for scalability and maintainability:

```text
src
 ┣ assets/       # Static project assets (images, icons, etc.)
 ┣ components/   # Reusable UI components (ResultModal, ShortenForm, HeaderLogo)
 ┣ App.tsx       # Main application layout, routing, and state
 ┣ main.tsx      # Entry point for the React application
 ┗ index.css     # Global styles and Tailwind directive imports
```

## Getting Started

Follow these step-by-step instructions to run the project locally.

### 1. Clone the Repository
```bash
git clone <repository_url>
cd url-shortener-fe-assignment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
The application will launch and typically be accessible at `http://localhost:5173`.

## Scripts
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Type-checks with TypeScript and builds the application for production.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to identify potential code issues.
- `npm run format`: Runs Prettier to auto-format source files across the project.

## Code Quality & Standards
This project enforces strict code quality measures:
- **ESLint**: Actively catches potential errors and enforces standardized coding conventions.
- **Prettier**: Guarantees a consistent code style across the entire codebase.
- **Husky & Lint-Staged**: Pre-commit hooks run automatically to format and lint staged files, ensuring broken or unformatted code never reaches the repository.

## Deployment
Deploying the app is highly straightforward given the Vite build process. We recommend using **Vercel** or **Netlify**:
1. Commit your changes and push the code to a GitHub repository.
2. Import the repository onto your chosen hosting platform.
3. The platform will automatically detect the Vite setup and run the `npm run build` command to deploy.

## Contribution Guidelines
1. Fork the project repository.
2. Create your dedicated feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

*Note: Ensure all code is linted and formatted before pushing and opening a PR.*