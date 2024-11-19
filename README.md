# AI Assisted Resource Navigator for Formerly Incarcerated Individuals: Focused Legal Resource Access

## Overview
Formerly incarcerated individuals often face significant challenges in their reintegration
process due to limited access to accurate, accessible legal information. This makes it
difficult for them to understand or get the right guidance on information they need to
reenter society. To get the right guidance and resources, they need to go through all the
fragmented resources thoroughly which might require a lot of time and legal understanding
of topics like employment, housing, and even civic participation. It will be very helpful if
they can get easy access to the resources they need, get access to details on existing or
prior cases with similar situations and delve deeper into specific information which can be
represented in a conversational format.

This is a React-based web application designed to assist users with legal resource navigation. Our AI tool aims to guide formerly incarcerated individuals through available resources that could serve as an essential support system. This tool can
be used as a conversational agent by the users to get in depth information regarding the resources they need.

## Features


- Modular architecture with reusable React components.
- **Gemini API:** Currently uses Gemini API for development Process. We plan on using Gemini API for building our Frontend and then integrate ChatGPT based RAG PipeLine once our Frontend is finalised.
- **Current StatusL:** Retrieves information by hitting the Gemini API.

## Project Structure

Root Directory:

- node_modules: Contains dependencies required for the project.
- public: Holds all resources and icons needed for the project.
- src: Core project files and source code.
- .env: Stores environment variables, currently added to .gitignore file.
- .gitignore: Specifies files to be excluded from Git tracking.
- index.html: Main HTML template for the app.
- package.json: Includes project metadata and scripts.
- vite.config.js: Configuration file for Vite (build tool).

src:

- main.jsx: Entry point for the React application. 
- index.css: Styles and customization for the entire application.
- App.jsx: Root React component.

- assets: Contains assets like images and icons.
- components: Modular React components: The app has two components, side-bar and main component
- main: The main application component folder.
Main.jsx: Main content component.
main.css: Styles for Main.jsx.
sidebar: Contains sidebar components.
SideBar.jsx: Sidebar component.
sidebar.css: Styles for SideBar.jsx.


- config: Contains configuration files.
- gemini.js: Configuration for using GeminiAPI in the app.
- Context.jsx: Provides global state management.

## Installation
To install the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/legal-system-ai.git
    ```
2. Navigate to the project directory:
    ```bash
    cd legal-system-ai
    ```
3. Install Vite:
    ```bash
    npm install vite
    ```

    Alternative commands using nvm:
 ```nvm install --lts
nvm use --lts
npm install --save-dev vite
npx vite
```
3. Run the code:
    ```bash
    npm run dev
    ```

## Usage
To use the AI interface, follow these steps:

1. Run the application:
    ```bash
    npm run dev
    ```
2. Open your web browser and navigate to `http://localhost:5173`.
3. Enter your query in the search bar and click on the arrow button to search.
4. Review the results

## Environment Variables
- Add the following variables to your .env file:
```
GEMINI_API_KEY = your-api-key
```
I have currently added my API key for the purpose of testing this application

## Contact
For any questions or inquiries, please contact us at [arvind.ai@northeastern.edu] [chandrakumar.s@northeastern.edu].
