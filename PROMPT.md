This is a boilerplate repository created using Create React App. 

Change it into a pixel-perfect, modern recreation of the Airbnb Australia homepage (https://www.airbnb.com.au/) as a responsive web application.

Call the company AirStay

### Overall Style & Design System
- Clean, minimalist, travel-magazine aesthetic
- White background (#FFFFFF)
- Primary brand color: Airbnb Rausch Red (#FF385C)
- Text colors: near-black (#222222) for headings, medium gray (#717171) for secondary text
- Soft borders: #DDDDDD
- Generous white space, rounded corners (12–16px on cards, fully rounded/pill on search bar and buttons)
- High-quality, full-bleed photography style
- Typography: clean sans-serif (use Inter or system-ui). Headings bold, body regular
- Subtle shadows on cards and the search bar
- Smooth hover effects and transitions

### Layout Structure (Desktop first, fully responsive)

1. **Sticky Header**
   - Left: Airbnb logo (red “airbnb” wordmark or the classic logo)
   - Center: Three product tabs with icons — Homes | Experiences | Services (active tab underlined)
   - Right: “Become a Host” text link + language/currency selector + user menu (avatar/hamburger)

2. **Main Search Bar** (prominent, centered, pill-shaped)
   - Three segments divided by thin vertical lines:
     - Where (Search destinations)
     - When (Add dates)
     - Who (Add guests)
   - Right side: circular red search button with magnifying glass icon
   - On mobile: collapses into a single “Start your search” pill

3. **Category / Filter Strip** (optional but recommended)
   - Horizontally scrollable row of category icons + labels under the search bar
   - Examples: Beachfront, Cabins, Tiny homes, Amazing views, Design, Countryside, etc.
   - Active category has underline

4. **Main Content – Listing Sections**
   Create multiple horizontal or grid sections with realistic mock data, for example:
   - “Available next month in Brisbane”
   - “Popular homes in Melbourne”
   - “Stay in Gold Coast”
   - “Guest favourites in Sydney”
   - “Unique stays near you”

   Each section should have:
   - Section title + “Show all” link
   - Responsive grid of listing cards (5–6 columns on large desktop → 4 → 3 → 2 → 1 on mobile)
   - Or horizontal scroll carousels on mobile

5. **Listing Card Design**
   - Large rounded image (aspect ratio ~4:3 or 1:1) with heart/wishlist icon in top-right
   - Optional “Guest favourite” badge
   - Title (e.g. “Apartment in Fortitude Valley”)
   - Dates or “5 nights”
   - Price per night + total if needed
   - Star rating (e.g. 4.92)
   - Soft hover scale or shadow lift

6. **Inspiration / Destination Section** (lower on the page)
   - Grid of popular Australian destinations or categories
   - City name + short description or “Homes in …”

7. **Footer**
   - Multi-column links: Support | Hosting | Airbnb
   - Language & currency selectors
   - Copyright © 2026 Airbnb, Inc.
   - Social icons and legal links
   - Clean, light background matching the page

### Technical Requirements
- Use modern tech: React + Tailwind CSS (preferred) or Next.js + Tailwind, or pure HTML/CSS/JS if simpler
- Fully responsive (mobile-first)
- Accessible (proper semantic HTML, ARIA where needed, keyboard navigation)
- Use placeholder high-quality images from Unsplash or similar (search for “modern apartment”, “beach house australia”, “cabin in nature”, etc.)
- Include realistic Australian locations and prices in AUD
- Smooth scrolling and subtle animations
- No backend needed — pure frontend with mock data

### Extra Polish
- Sticky header that slightly changes on scroll
- Skeleton loading states (optional)
- Dark mode not required
- Make it look production-ready and visually indistinguishable from the real Airbnb homepage at first glance
