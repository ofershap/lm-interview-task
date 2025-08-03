# 🎯 CX Team Technical Interview Task

Welcome to the CX Team Operations Dashboard interview task! This is a practical coding challenge designed to assess both **frontend** and **backend** development skills in a real-world scenario.

## 📋 Overview

You'll be working with a React + Node.js application that simulates a customer experience team's operations dashboard. The application has **intentional bugs** that need to be fixed, and there are opportunities for **performance improvements**.

### What You'll Be Working With

- **Frontend**: React application with an embedded iframe widget
- **Backend**: Node.js/Express API serving data and iframe content
- **Task Focus**: Fix UI formatting issues and optimize backend performance

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lm-interview-task
   ```

2. **Install dependencies for both frontend and backend**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies  
   cd ../frontend
   npm install
   ```

3. **Start the development servers**

   **Terminal 1 - Backend Server:**
   ```bash
   cd backend
   npm start
   # Server will run on http://localhost:4000
   ```

   **Terminal 2 - Frontend Server:**
   ```bash
   cd frontend
   npm start
   # App will open on http://localhost:3000
   ```

4. **Open the application**
   - Navigate to `http://localhost:3000` in your browser
   - You should see the CX Team Operations Dashboard

---

## 🎯 Your Mission

### **Part 1: Frontend Bug Fix** (Primary Focus)

**Problem**: The analytics widget (iframe) has a formatting issue where user information is being cut off.

**What you'll see:**
- User names and emails in the widget are truncated
- The layout doesn't properly display all the information
- Text overflows and gets hidden

**Your task:**
1. Identify the CSS styling issue in the iframe content
2. Fix the layout so all user information is fully visible
3. Ensure the design remains visually appealing
4. Make sure it works across different screen sizes

**Files to examine:**
- `backend/public/iframe.html` (This contains the buggy CSS)
- The iframe is loaded in the main React app

### **Part 2: Backend Optimization** (Secondary Focus)

**Areas for improvement:**
1. **API Performance**: Current API responses are slower than they should be
2. **Error Handling**: Improve validation and error responses  
3. **Code Quality**: Review and suggest improvements to the API structure

**Files to examine:**
- `backend/index.js` (Main API endpoints)
- Focus on the `/api/user-stats`, `/api/user-data`, and `/api/update-user` endpoints

---

## 🔍 What We're Looking For

### **Frontend Skills:**
- **CSS/Layout expertise**: Can you identify and fix responsive design issues?
- **Problem-solving**: How do you approach debugging UI problems?
- **Attention to detail**: Does your solution work across different scenarios?

### **Backend Skills:**
- **Performance optimization**: Can you identify bottlenecks and improve response times?
- **Code quality**: Do you write clean, maintainable code?
- **API design**: Can you improve error handling and data structure?

### **General Skills:**
- **Debugging approach**: How do you systematically identify and fix issues?
- **Communication**: Can you explain your thought process and decisions?
- **Best practices**: Do you follow modern development standards?

---

## 📁 Project Structure

```
lm-interview-task/
├── backend/                 # Node.js/Express server
│   ├── index.js            # Main server file with API endpoints
│   ├── package.json        # Backend dependencies
│   └── public/
│       └── iframe.html     # 🐛 Contains the CSS bug to fix
├── frontend/               # React application  
│   ├── src/
│   │   ├── App.js         # Main React component
│   │   ├── App.css        # Main styling
│   │   └── index.js       # React entry point
│   ├── package.json       # Frontend dependencies
│   └── public/
│       └── index.html     # HTML template
└── README.md              # This file
```

---

## 🛠️ Available API Endpoints

- `GET /api/user-stats` - Returns user statistics
- `GET /api/user-data?page=1&limit=10&status=active` - Returns paginated user data
- `POST /api/update-user` - Updates user status
- `GET /iframe` - Serves the analytics widget HTML

---

## ⏱️ Time Expectations

- **Total time**: 30 minutes
- **Primary focus**: Frontend bug fix (15-20 minutes)
- **Secondary focus**: Backend improvements (10-15 minutes)

---

## 💡 Hints

### For the Frontend Bug:
- Look at the CSS in `iframe.html`
- Pay attention to `overflow`, `width`, and `white-space` properties
- The issue is in the `.user-item` styling

### For Backend Optimization:
- Check for unnecessary delays or timeouts
- Look at error handling patterns
- Consider data structure efficiency

---

## 📝 Submission Guidelines

**During the interview, please:**

1. **Share your screen** so we can see your development process
2. **Think out loud** - explain your approach as you work
3. **Ask questions** if anything is unclear
4. **Show your debugging process** - how you identify and isolate issues

**What to demonstrate:**
- [ ] Frontend bug is fixed and user information displays properly
- [ ] Explain your approach to identifying the CSS issue
- [ ] Show any backend improvements you made
- [ ] Discuss what else you would do with more time

---

## 🤔 Questions During the Interview

Be prepared to discuss:
- How you approached debugging the CSS issue
- What tools you used to identify the problem
- Your thought process for backend optimization
- How you would test your changes
- What improvements you would make with additional time

---

## 🆘 Need Help?

If you encounter any setup issues:
1. Make sure both servers are running on the correct ports
2. Check that you're using a recent version of Node.js
3. Try clearing browser cache if the iframe doesn't load
4. Ask the interviewer if you need clarification on any requirements

---

**Good luck! We're excited to see your problem-solving approach and technical skills in action.** 🚀