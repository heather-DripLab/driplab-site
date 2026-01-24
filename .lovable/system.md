# DripLab Landing Page

## Project Overview

This is a static landing page for DripLab, an AI-powered closet companion app. The site is designed to capture early access signups through an email waitlist.

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Serverless Functions
- **Database**: Airtable (for storing email signups)
- **Styling**: Custom CSS with gradient effects and modern design

## Key Components

### 1. Hero Section
- Eye-catching gradient logo
- Clear value proposition
- Call-to-action button for early access

### 2. Features Section
Lists three main features:
- Smart Closet
- DripScore™
- Outfit Builder

### 3. Signup Form
- Email input field
- Form validation
- Success/error messaging
- Integration with Airtable API

### 4. API Integration
The `/api/subscribe` endpoint:
- Validates email input
- Sends data to Airtable
- Returns success/error responses

## Environment Variables

Required for the subscription API:
- `AIRTABLE_BASE_ID`: Your Airtable base identifier
- `AIRTABLE_TABLE_ID`: The table name/ID for storing emails
- `AIRTABLE_API_KEY`: API key for authentication

## Design Guidelines

### Colors
- Primary gradient: Purple to pink (#8B5CF6 to #D946EF)
- Background: Deep purple (#0f0820)
- Text: White and light gray

### Typography
- Modern, clean sans-serif fonts
- Large, bold headings
- Readable body text

### Layout
- Mobile-first responsive design
- Centered content
- Generous spacing and padding
- Smooth scrolling

## Development Notes

This is a simple, static site that can be enhanced with:
- Additional animations
- More detailed feature descriptions
- Blog or news section
- User testimonials
- FAQ section

The site is optimized for fast loading and SEO.
