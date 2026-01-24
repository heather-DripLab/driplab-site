# Welcome to DripLab

## Project info

This is the DripLab landing page - an AI-powered closet companion app.

**Website**: [DripLab](https://driplab-site.com)

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit your Lovable Project and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/heather-DripLab/driplab-site.git

# Step 2: Navigate to the project directory.
cd driplab-site

# Step 3: Start a local development server.
# You can use any static server, for example:
python -m http.server 8000
# Or with Node.js:
npx serve .

# Step 4: Open your browser to http://localhost:8000
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- HTML5
- CSS3
- Vanilla JavaScript
- Serverless Functions (for API endpoints)

## Project Structure

```
.
├── index.html          # Main landing page
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
└── api/
    └── subscribe.js    # Email subscription API endpoint
```

## How can I deploy this project?

This is a static site that can be deployed to:

- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

Simply connect your repository to your preferred hosting platform and deploy.

## Features

- **Smart Closet**: Automatically organize, classify, and visualize your wardrobe
- **DripScore™**: AI-powered outfit rating system
- **Outfit Builder**: Create perfect looks from your wardrobe
- **Email Waitlist**: Collect early access signups via Airtable integration
