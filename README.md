# Portfolio Website

This repository contains the source code for my personal portfolio website. The frontend is built with React, TypeScript, Vite, and Tailwind CSS, and it's deployed on Cloudflare Pages.

## Project Overview

The website showcases my skills, projects, and professional experiences. It's designed as a single-page application with a clean and modern interface.

## Technologies Used

*   **Frontend:**
    *   React
    *   TypeScript
    *   Vite
    *   Tailwind CSS
    *   @tanstack/react-query (for data fetching and caching)
*   **Backend (Serverless Functions):**
    *   Cloudflare Workers (hosting the API endpoints)
    *   JavaScript (for the serverless functions)
*   **Deployment:**
    *   Cloudflare Pages (for the frontend)
    *   Static Assets hosted on Cloudflare

## Project Structure

The repository is organized as follows:

*   `client/`: Contains the frontend application code.
    *   `src/`: Source files for the React application.
        *   `App.tsx`: Main application component.
        *   `main.tsx`: Entry point for the React application.
        *   `components/`: Reusable UI components.
        *   `hooks/`: Custom React hooks.
        *   `lib/api.ts`: Functions for making API calls.
        *   `styles/`: Global styles and Tailwind CSS configuration.
        *   `types/`: TypeScript type definitions.
    *   `public/`: Static assets like images, fonts, and icons.
    *   `dist/`: Build output directory.
    *   `vite.config.ts`: Vite configuration file.
    *   `tailwind.config.js`: Tailwind CSS configuration file.
    *   `package.json`: Project dependencies and scripts.
*   `functions/`: Contains the serverless functions for the API.
    *   `api/`: API endpoint implementations (e.g., `experiences.js`, `projects.js`, `skills.js`).
*   `README.md`: This file, providing an overview of the project.

## Getting Started

To run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2.  **Install dependencies for the client:**
    ```bash
    cd client
    npm install # or yarn install or bun install
    ```
3.  **Run the development server for the client:**
    ```bash
    npm run dev # or yarn dev or bun dev
    ```
    This will usually start the frontend application on `http://localhost:5173` (or another port specified by Vite).

4.  **Running Serverless Functions Locally (Optional):**
    The serverless functions in the `functions/` directory are designed to be deployed on Cloudflare Workers. To test them locally, you might need to use a tool like `wrangler` (Cloudflare's CLI tool). Refer to the Cloudflare Workers documentation for more details on local development and testing.
    By default, the client application (`client/src/lib/api.ts`) will attempt to fetch data from the deployed API endpoints. You might need to adjust the API base URL in the environment variables (`.env` files or similar) if you want to point it to a local development server for the functions.

## Deployment

The frontend application is deployed using **Cloudflare Pages**. When changes are pushed to the main branch (or a configured branch), Cloudflare Pages automatically builds and deploys the `client/dist` directory.

The API endpoints in the `functions/` directory are deployed as **Cloudflare Workers**. These workers handle requests for experiences, projects, and skills data.

Static assets (images, fonts, resume PDF) are also managed and served efficiently by Cloudflare.
