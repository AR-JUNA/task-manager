# 📝 Task Manager - Web Infrastructure Assignment

A simple, elegant task management web application demonstrating fundamental web infrastructure concepts including static hosting, HTTP protocols, and browser-server communication.


**Name:** Arjuna Caleb Gyan  
**Email:** a.gyan@alustudent.com  
**GitHub:** [@AR-JUNA](https://github.com/AR-JUNA)  
**Project URL:** https://ar-juna.github.io/task-manager/
**Project Demo** https://drive.google.com/file/d/1NO_Cva-aZ9SgBNxpDedUBsk0MpMwFHTn/view?usp=sharing

---

## 🎯 Project Overview

This project is a task management application built using vanilla HTML, CSS, and JavaScript, deployed on GitHub Pages to demonstrate understanding of basic web infrastructure without Docker or containerization.

### Problem Statement
In modern web development, understanding how web applications are delivered from servers to users is fundamental. This project demonstrates the complete journey of static web content from deployment to user interaction, including:
- How browsers communicate with web servers
- How static files are served over HTTP/HTTPS
- How DNS resolves domain names to IP addresses
- How browsers render HTML, CSS, and execute JavaScript

---

## ✨ Application Features

### Core Functionality
1. **Add New Tasks** - Create tasks with a simple input interface
2. **Display Task List** - View all tasks in an organized, filterable list
3. **Mark as Completed** - Toggle task completion status with checkboxes
4. **Delete Tasks** - Remove tasks with confirmation dialog
5. **Filter Tasks** - View All, Pending, or Completed tasks
6. **Persistent Storage** - Tasks saved in browser localStorage
7. **Real-time Statistics** - Track total, completed, and pending tasks
8. **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

### Additional Features
- ⏰ Timestamp for each task (relative time display)
- 🎨 Modern, dark-themed UI with smooth animations
- 📊 Live task statistics dashboard
- 💾 Automatic data persistence (no database required)
- ✅ Accessible design with ARIA labels
- 🚀 Fast loading - pure vanilla JavaScript (no frameworks)

---

## 🛠️ Technology Stack

### Frontend Technologies
- **HTML5** - Semantic markup for structure and accessibility
- **CSS3** - Modern styling with:
  - CSS Grid & Flexbox for responsive layouts
  - CSS Variables for consistent theming
  - CSS Animations for smooth transitions
  - Media queries for mobile responsiveness
- **JavaScript (ES6+)** - Client-side logic including:
  - DOM manipulation
  - Event handling
  - localStorage API for data persistence
  - Array methods for filtering and sorting

### Web Infrastructure Components
- **Hosting Platform**: GitHub Pages (Static hosting)
- **Protocol**: HTTPS (HTTP Secure)
- **File Serving**: Static file server
- **DNS**: GitHub's DNS infrastructure
- **CDN**: GitHub's global content delivery network

---

## 🌐 Web Infrastructure Overview

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER DEVICE                              │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Web Browser (Chrome, Firefox, Safari, Edge)             │   │
│  │  - Renders HTML                                          │   │
│  │  - Applies CSS Styling                                   │   │
│  │  - Executes JavaScript                                   │   │
│  │  - Stores data in localStorage                           │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                            ↓ ↑
                    1. DNS Query
                    2. HTTP/HTTPS Request
                    3. HTTP Response
                            ↓ ↑
┌─────────────────────────────────────────────────────────────────┐
│                     INTERNET (Public Network)                    │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  DNS Server                                              │   │
│  │  - Resolves: ar-juna.github.io → GitHub IP              │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                            ↓ ↑
┌─────────────────────────────────────────────────────────────────┐
│                    GITHUB PAGES SERVER                           │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Static Web Server (Nginx/Apache-like)                  │   │
│  │  - Listens on Port 443 (HTTPS)                          │   │
│  │  - Serves static files                                  │   │
│  │  - Handles HTTP requests                                │   │
│  │  - Returns HTTP responses                               │   │
│  └──────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Static Files Storage                                    │   │
│  │  📄 index.html    (HTML structure)                       │   │
│  │  🎨 styles.css    (Styling rules)                        │   │
│  │  ⚡ script.js     (Application logic)                    │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### Step-by-Step Request Flow

#### When a user accesses your application:

1. **User Types URL**: `https://ar-juna.github.io/task-manager/`
   
2. **DNS Resolution**:
   - Browser asks: "What's the IP address of ar-juna.github.io?"
   - DNS server responds: "It's at IP: 185.199.108.153" (GitHub's server)
   
3. **HTTP/HTTPS Request**:
   - Browser sends HTTPS GET request to GitHub Pages server
   - Request includes headers (User-Agent, Accept, etc.)
   
4. **Web Server Processing**:
   - GitHub Pages server receives request
   - Locates your repository's static files
   - Reads `index.html` from disk
   - Prepares HTTP response with file content
   
5. **HTTP Response**:
   - Server sends back response with:
     - Status code: 200 OK
     - Content-Type: text/html
     - HTML file content
   
6. **Browser Rendering**:
   - Browser parses HTML
   - Discovers links to CSS (`<link rel="stylesheet">`)
   - Discovers links to JS (`<script src="">`)
   - Makes additional requests for `styles.css` and `script.js`
   
7. **Asset Loading**:
   - Each asset (CSS, JS) requires separate HTTP request
   - Browser downloads them in parallel
   - CSS applied to render styled page
   - JavaScript executed to add interactivity
   
8. **Application Runtime**:
   - JavaScript loads tasks from browser's localStorage
   - DOM manipulation renders task list
   - Event listeners activated for user interactions
   - All processing happens client-side (no backend)

### Key Infrastructure Concepts

#### **Static vs Dynamic Hosting**
- **Static**: Pre-built files served as-is (our approach)
  - Fast, simple, cheap
  - No server-side processing
  - Perfect for front-end only apps
  
- **Dynamic**: Server generates HTML per request
  - Requires backend code (Node.js, PHP, Python)
  - Can access databases
  - More complex infrastructure

#### **HTTP/HTTPS Protocol**
- **HTTP**: Hypertext Transfer Protocol (unencrypted)
- **HTTPS**: HTTP Secure (encrypted with TLS/SSL)
- GitHub Pages uses HTTPS by default for security

#### **Browser Role**
- Requests resources from server
- Renders HTML into visible webpage
- Applies CSS styling rules
- Executes JavaScript code
- Stores data locally (localStorage, cookies)

#### **Web Server Role**
- Listens for HTTP requests on port 80/443
- Locates requested files in filesystem
- Returns files with appropriate MIME types
- Handles caching with HTTP headers

---

## 🚀 Deployment Process

### Platform: GitHub Pages

**Why GitHub Pages?**
- ✅ Free static hosting
- ✅ Automatic HTTPS encryption
- ✅ Global CDN for fast access
- ✅ Direct integration with Git version control
- ✅ Simple deployment process
- ✅ Custom domain support (optional)
- ✅ No server maintenance required

### Deployment Steps

1. **Create GitHub Repository**
   ```
   Repository name: task-manager
   Visibility: Public
   Initialize with README: No (we have our own)
   ```

2. **Upload Code Files**
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from branch
   - Branch: main (or master)
   - Folder: / (root)
   - Click "Save"

4. **Access Live Application**
   - URL format: `https://ar-juna.github.io/task-manager/`
   - Wait 2-5 minutes for initial deployment
   - Application is now publicly accessible worldwide

### How GitHub Pages Works

```
Developer Push → GitHub Repository → GitHub Actions → 
Build Process → Static File Server → CDN → User Browser
```

- **No build step required**: Pure HTML/CSS/JS served directly
- **Automatic updates**: Push to main branch auto-deploys
- **Global CDN**: Files cached worldwide for fast access
- **HTTPS Certificate**: Automatically provisioned and renewed

---

## 💻 How to Run Locally

### Option 1: Direct File Opening (Simple)
```bash
# Navigate to project folder
cd task-manager

# Open in browser (macOS)
open index.html

# Open in browser (Windows)
start index.html

# Open in browser (Linux)
xdg-open index.html
```

### Option 2: Live Server (Recommended for Development)

**Using VS Code Live Server Extension:**
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser opens at `http://127.0.0.1:5500`
5. Auto-refresh on file changes

**Using Python HTTP Server:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Then open: http://localhost:8000
```

**Using Node.js http-server:**
```bash
# Install globally
npm install -g http-server

# Run in project directory
http-server

# Then open: http://localhost:8080
```

---

## 📂 Project Structure

```
task-manager/
│
├── index.html          # Main HTML structure
│   ├── Header section
│   ├── Task input form
│   ├── Statistics dashboard
│   ├── Filter buttons
│   ├── Task list container
│   └── Footer
│
├── styles.css          # Complete styling
│   ├── CSS Variables (colors, spacing)
│   ├── Global styles & reset
│   ├── Layout & container styles
│   ├── Component styles (buttons, inputs, cards)
│   ├── Animations & transitions
│   └── Responsive media queries
│
├── script.js           # Application logic
│   ├── State management (tasks array)
│   ├── DOM element references
│   ├── Event listeners setup
│   ├── Task CRUD operations (Create, Read, Update, Delete)
│   ├── Filter functionality
│   ├── Statistics calculation
│   ├── localStorage integration
│   └── Utility functions
│
└── README.md           # This file - Complete documentation
```

---

## 🎨 Design Choices & Assumptions

### Technical Decisions

1. **No Framework/Library**
   - **Why**: Demonstrate fundamental JavaScript skills
   - **Benefit**: Faster load time, no dependencies
   - **Trade-off**: More manual DOM manipulation

2. **localStorage Instead of Database**
   - **Why**: No backend/server required
   - **Benefit**: Works offline, instant data access
   - **Limitation**: Data tied to specific browser/device

3. **Client-Side Only Architecture**
   - **Why**: Assignment requirement (static hosting)
   - **Benefit**: Simple deployment, no server costs
   - **Limitation**: No multi-device sync, no user accounts

4. **Dark Theme UI**
   - **Why**: Modern aesthetic, reduces eye strain
   - **Benefit**: Professional appearance
   - **Implementation**: CSS variables for easy theme switching

### Assumptions

- Users access from modern browsers (Chrome, Firefox, Safari, Edge)
- JavaScript is enabled in browser
- localStorage is available and not disabled
- Single-user usage (no authentication needed)
- Tasks don't require collaboration features
- No backend API or database required

### Future Enhancements (Out of Scope)

- 🔐 User authentication with backend
- ☁️ Cloud database for multi-device sync
- 🏷️ Task categories and tags
- 📅 Due dates and reminders
- 🔍 Search functionality
- 📤 Export tasks to CSV/JSON
- 🎨 Theme customization options
- 📊 Advanced analytics dashboard

---

## 🧪 Testing the Application

### Functionality Checklist

- [ ] Add a new task
- [ ] View task in the list
- [ ] Mark task as completed (checkbox)
- [ ] Visual change when completed (strikethrough, opacity)
- [ ] Delete a task (with confirmation)
- [ ] Filter by "All Tasks"
- [ ] Filter by "Pending" (incomplete tasks)
- [ ] Filter by "Completed" tasks
- [ ] Statistics update in real-time
- [ ] Refresh page - tasks persist (localStorage)
- [ ] Responsive on mobile screen
- [ ] Responsive on tablet screen
- [ ] Responsive on desktop screen

### Browser Testing

Test on multiple browsers:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari (macOS/iOS)
- Microsoft Edge (latest)

### Device Testing

Test on different screen sizes:
- Mobile: 320px - 480px
- Tablet: 768px - 1024px
- Desktop: 1280px+

---

## 📝 License & Credits

**Created for**: Web Infrastructure Assignment 2026  
**Student**: Arjuna Caleb Gyan    
**Email**: a.gyan@alustudent.com  
**GitHub**: [@AR-JUNA](https://github.com/AR-JUNA)  

---

## 🔗 Important Links

- **Live Application**: https://ar-juna.github.io/task-manager/
- **GitHub Repository**: https://github.com/AR-JUNA/task-manager
- **Documentation**: This README file

---

## 📧 Contact

For questions or feedback about this project:
- GitHub: [@AR-JUNA](https://github.com/AR-JUNA)
- Email: a.gyan@alustudent.com

---

**Note**: This README serves as complete documentation for the assignment, covering all required aspects: local running instructions, deployment process, hosting platform explanation, web infrastructure overview, and design decisions.
