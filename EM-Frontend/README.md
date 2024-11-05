# Vite + React Project

This is a Vite + React project template to quickly set up a React application with Vite, a fast build tool for modern web development.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm** or **Yarn**: npm comes with Node.js; alternatively, you can install Yarn as an alternative package manager.

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone git@github.com:divikshrivastava/EventManagement.git

cd EM-Frontend
```

### 2. Install Dependencies
Run the following command to install project dependencies:

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server
After installing the dependencies, start the development server by running:

```bash
npm run dev
# or
yarn dev
```
Vite will start the server, and you should see output in the terminal indicating the server is running at http://localhost:5173 (default port). You can open this link in your browser to view the project.

## Adding a New Page

To add a new page to the application, create a new component file in the `src/pages` directory. 

### Existing Pages
The project currently includes the following pages in src/pages:

1. LoginPage.jsx
2. OrganizerPage.jsx
3. EventPage.jsx
4. AttendeePage.jsx
5. BadgePage.jsx