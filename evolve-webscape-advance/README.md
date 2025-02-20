# Webscape Challenge (Advanced)

Welcome to the Tech Innovators Club website challenge! This project aims to create a modern, responsive website that clearly explains the club’s mission, showcases upcoming events, and highlights innovative projects. Your goal is to build an engaging user experience using Tailwind CSS (and React for interactivity where needed).

---

## User Story

**As a prospective member of the Tech Innovators Club,**
_I want to visit a modern, responsive website that clearly explains the club’s mission, showcases upcoming events, and highlights innovative projects,_
_so that I can quickly decide whether to join and get involved._

---

## Key Expectations

- **Engaging Home Page:**
  A welcoming introduction that explains the club’s purpose with a clear call-to-action (e.g., "Join the Club" or "Learn More").

- **Dynamic Events Page:**
  A listing of upcoming events with details (date, time, description) and interactive filtering or sorting functionality.

- **Interactive Projects Page:**
  A gallery of projects with images and brief descriptions, featuring options to view more details about each project.

---

## Important!!!

- **Navbar and Footer:**
  **Do not change the contents** of the Navbar and Footer sections. You are only allowed to modify their appearance (such as color, font, layout, etc.).

- **Other Sections:**
  You have **full freedom** to modify any other sections of the website. This includes, but is not limited to, the Hero Section, Features/Highlights, Events, Projects, and any additional content areas. Feel free to adjust the content, layout, styling, and functionality as needed to best showcase your creativity and skills.

---

## Pages & Incomplete Elements

### 1. Home Page

**Purpose:**
Introduce the club, explain its vision, and guide the user to explore further.

**Incomplete Elements:**

- **Navigation Bar:**

  - Contains links to Home, Events, and Projects.
  - Incomplete active state styling and hover effects using Tailwind CSS.
  - Mobile-responsive behavior (e.g., a hamburger menu) may be missing or not fully functional.

- **Hero Section:**

  - Features a background image or video with overlay text introducing the club.
  - Contains placeholder copy (e.g., a temporary tagline) and a non-functional "Join Us" button.
  - Lacks necessary accessibility attributes (such as alt text for background images).

- **Features/Highlights Section:**

  - Uses cards or icons to describe club benefits (e.g., "Workshops," "Networking," "Innovation Challenges").
  - Some cards are only partially styled or misaligned, requiring consistent spacing and responsive grid adjustments.

- **Footer:**
  - Displays contact information and social media icons.
  - Some links may be non-clickable or missing Tailwind classes for proper hover/active states.

---

### 2. Events Page

**Purpose:**
Display a list of upcoming events for club members or prospective members.

**Incomplete Elements:**

- **Event Listing:**

  - A grid or list of event cards showing event title, date, time, and a brief description.
  - Some cards use placeholder data or are missing components (e.g., an icon or badge indicating the event type).

- **Filtering/Sorting Controls:**

  - UI elements (dropdown or buttons) intended for filtering events (e.g., by type: workshop, seminar, meetup).
  - The filtering functionality is partially stubbed out using React state or hooks.

- **Event Details Modal/Component:**

  - Clicking an event card should open a modal or dedicated component with full event details.
  - The modal may be missing proper open/close functionality, animations, or Tailwind styling for smooth transitions.

- **Responsive Layout:**
  - Event cards need to reflow correctly on different screen sizes. Some responsive breakpoints may not be fully handled yet.

---

### 3. Projects Page

**Purpose:**
Showcase the club’s innovative projects in a visually engaging gallery.

**Incomplete Elements:**

- **Projects Gallery/Grid:**

  - A grid layout displaying project cards with an image, title, and a short description.
  - Some cards use placeholder images or have inconsistent sizing/spacing that needs correction using Tailwind CSS.

- **Project Detail Interaction:**

  - Each project card includes a "View More" button intended to open a detailed view (via a modal or a separate component).
  - The detailed view component is partially implemented—participants might need to add routing or state management for dynamic content.

- **Load More/Pagination:**

  - A "Load More" button or pagination control is present but lacks the JavaScript logic to fetch or reveal additional projects.
  - You can integrate this with a provided JSON dataset or simulate asynchronous data fetching.

- **Responsive Design & Animation:**
  - Some Tailwind classes for hover effects, transitions, and grid responsiveness are intentionally left incomplete.

---

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/CSI-MIT-WPU/evolve-webscape-advance.git
   cd evolve-webscape-advance
   ```

2. **Install Dependancies:**

   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
