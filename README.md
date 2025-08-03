# 🎯 CX Team Technical Interview Task

Welcome to the CX Team Operations Dashboard interview task! This is a practical coding challenge designed to assess both **frontend** and **backend** development skills in a real-world scenario.

## 📋 Overview

You'll be working with a React + Node.js application that simulates a customer experience team's operations dashboard. The application has **intentional bugs** that need to be fixed, and there are opportunities for **performance improvements**.

![Demo Screenshot](public/demo.png)


### What You'll Be Working With

- **Frontend**: React application with an embedded iframe widget
- **Backend**: Node.js/Express API serving data and iframe content
- **Task Focus**: Fix UI formatting issues and optimize backend performance

---

## 🚀 Quick Start

Clone this repository to your computer, use npm to init backend and frontend folders, and run them locally

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

### **Part 2: Backend Optimization** (Secondary Focus)

**Areas for improvement:**
1. **API Performance**: Current API responses are slower than they should be
2. **Error Handling**: Improve validation and error responses  
3. **Code Quality**: Review and suggest improvements to the API structure

---

## 🛠️ Available API Endpoints

- `GET /api/user-stats` - Returns user statistics
- `GET /api/user-data?page=1&limit=10&status=active` - Returns paginated user data
- `POST /api/update-user` - Updates user status
- `GET /iframe` - Serves the analytics widget HTML

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

## 🆘 Need Help?

If you encounter any setup issues:
1. Make sure both servers are running on the correct ports
2. Check that you're using a recent version of Node.js
3. Try clearing browser cache if the iframe doesn't load
4. Ask the interviewer if you need clarification on any requirements

---

**Good luck! We're excited to see your problem-solving approach and technical skills in action.** 🚀`