# Contact Card - Phone Book Application

## Live Demo
[![Live Demo](https://img.shields.io/badge/Visit_Live_Site-000?style=for-the-badge&logo=github&logoColor=white)](https://contact-card-olive.vercel.app/)

## Project Preview

### Desktop View
![Contact Card Desktop View](./public/rt4-d2.png)

### Mobile View
![Contact Card Mobile View](./public/rt4-m2.png)

## Project Overview
A modern contact management application built with React and Tailwind CSS. Manage your phone contacts with a clean, responsive interface featuring real-time validation and intuitive controls. Contacts are automatically saved to browser's localStorage for persistent storage.

## Tech Stack

**Frontend:** React 19 | JavaScript ES6+  
**Build Tool:** Vite | npm  
**Styling:** Tailwind CSS  
**Deployment:** Vercel

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Key Features
- **Form Validation**: Real-time validation for name, email, and 10-digit phone number
- **Persistent Storage**: Contacts automatically saved to localStorage (survive page reloads)
- **Dark Theme UI**: Modern interface with gradient accents and glassmorphism effects
- **Responsive Grid Layouts**: Adapts to mobile and desktop screens
- **Add/Delete Contacts**: Immediate visual feedback with CRUD operations
- **Automatic Timestamps**: Creation time tracking for each contact
- **Secure Data**: All contacts stored locally in browser

## How It Works
1. **Form Submission**: Fill in name, email, and phone number fields
2. **Validation**: Real-time validation ensures all fields are properly filled
3. **Contact Creation**: Each contact gets a unique ID and timestamp
4. **Auto-save**: Contacts automatically saved to localStorage
5. **Contact Management**: View all contacts in responsive grid, delete as needed
6. **Persistent Storage**: Contacts survive page reloads and browser restarts
7. **Responsive Layout**: Adapts to different screen sizes automatically

## localStorage Implementation
The application uses browser's localStorage to persist contact data:
- **Automatic Loading**: Contacts load from localStorage when app starts
- **Real-time Saving**: Every contact addition/deletion updates localStorage
- **Data Persistence**: Contacts remain available after page refresh
- **No Server Dependency**: All data stored locally in user's browser

## Components Structure
- **Contact.jsx** - Main contact manager component with form, contact list, and localStorage logic
- **Footer.jsx** - Footer with GitHub repository link
- **App.jsx** - Layout wrapper with proper spacing

## Learning Outcomes
- Building React applications with functional components
- Form handling and validation in React
- State management with useState hook
- **LocalStorage integration for data persistence**
- Responsive design implementation with Tailwind CSS
- Array manipulation for CRUD operations
- Component composition and props management
- Deploying React apps to Vercel

## Setup Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/shekgit/contact-card.git

# Navigate to project directory
cd contact-card

# Install dependencies
npm install

# Start development server
npm run dev
```

## Build for Production
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Deployment
Deployed on **Vercel** with automatic CI/CD. Every push to main branch triggers a new deployment.

## Project Structure
```
contact-card/
├── src/
│   ├── components/
│   │   ├── Contact.jsx     # Main contact logic with localStorage
│   │   └── Footer.jsx      # Footer with GitHub link
│   ├── App.jsx             # Main app wrapper
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Responsive Breakpoints
**Desktop**: 1024px and above (three-column grid)

**Tablet**: 768px - 1023px (two-column grid)

**Mobile**: Below 768px (single column, stacked layout)

## Data Storage
- **Storage Method**: Browser localStorage
- **Data Key**: `phoneBookUsers`
- **Persistence**: Survives page reloads and browser sessions
- **Capacity**: Limited by browser storage limits (typically 5-10MB)
- **Security**: All data stored locally on user's device

## Performance Features
- Optimized React component structure
- Efficient state updates with useEffect
- CSS transitions for smooth animations
- Lightweight Tailwind CSS utility classes
- Proper semantic HTML structure
- LocalStorage operations optimized for performance

## Recent Updates
- **Added localStorage support**: Contacts now persist across browser sessions
- **Automatic data sync**: Real-time synchronization between state and storage
- **Improved user experience**: No data loss on page refresh or browser restart
- **Production-ready persistence**: Reliable local storage solution

## License
MIT License - free to use for educational and personal projects
---
**Note**: This app stores all contact data locally in your browser. Clearing browser data will remove all saved contacts. For backup, consider exporting your contacts periodically.