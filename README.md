# Airbnb Australia Homepage Recreation

This is a pixel-perfect, modern recreation of the Airbnb Australia homepage (https://www.airbnb.com.au/) as a responsive web application.

## Features Implemented

- Sticky header with Airbnb logo and navigation tabs
- Prominent search bar with Where/When/Who segments
- Category filter strip with scrollable categories
- Multiple listing sections with responsive grids:
  - "Available next month in Brisbane"
  - "Popular homes in Melbourne" 
  - "Guest favourites in Sydney"
  - "Unique stays near you"
  - "Inspiration for your next trip"
- Listing cards with images, ratings, prices and wishlist functionality
- Responsive design that works on all device sizes
- Footer with multi-column links and copyright information

## Design System

- Clean, minimalist travel-magazine aesthetic
- White background (#FFFFFF)
- Primary brand color: Airbnb Rausch Red (#FF385C)
- Text colors: near-black (#222222) for headings, medium gray (#717171) for secondary text
- Soft borders: #DDDDDD
- Generous white space, rounded corners (12–16px on cards, fully rounded/pill on search bar and buttons)
- High-quality, full-bleed photography style
- Typography: clean sans-serif (use Inter or system-ui). Headings bold, body regular
- Subtle shadows on cards and the search bar
- Smooth hover effects and transitions

## Technical Implementation

- Built with React + Tailwind CSS
- Fully responsive design (mobile-first)
- Accessible with proper semantic HTML, ARIA where needed, keyboard navigation
- Uses placeholder high-quality images from Unsplash for Australian locations
- Includes realistic Australian locations and prices in AUD
- Smooth scrolling and subtle animations
- No backend required - pure frontend with mock data

## Running the Application

1. Install dependencies:
   ```
   npm install
   ```

2. Start development server:
   ```
   npm run dev
   ```

3. Open browser to http://localhost:5177

The application will automatically reload when you make changes to the source code.