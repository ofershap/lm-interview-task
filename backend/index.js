const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/iframe", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "iframe.html"));
});

app.get("/api/user-stats", (req, res) => {
  const stats = {
    totalUsers: 1250,
    activeUsers: 890,
    newUsers: 45,
    revenue: "$12,450.00"
  };
  
  setTimeout(() => {
    res.json(stats);
  }, 1000);
});

app.get("/api/user-data", (req, res) => {
  // mocked data
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "active",
      joinDate: "2023-01-15",
      profile: {
        department: "Support",
        location: "New York"
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "inactive",
      joinDate: "2023-02-20",
      profile: {
        department: "Sales",
        location: "San Francisco"
      }
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      status: "active",
      joinDate: "2023-03-10",
      profile: {
        department: "Engineering",
        location: "Austin"
      }
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      status: "pending",
      joinDate: "2023-04-05"
    }
  ];

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const status = req.query.status;

  let filteredUsers = users;
  if (status) {
    filteredUsers = users.filter(user => user.status === status);
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  res.json({
    users: paginatedUsers,
    total: filteredUsers.length,
    page: page,
    totalPages: Math.ceil(filteredUsers.length / limit)
  });
});

app.post("/api/update-user", (req, res) => {
  const { userId, status } = req.body;
  
  if (!userId || !status) {
    return res.status(400).json({ error: "Missing userId or status" });
  }

  if (!["active", "inactive", "pending"].includes(status)) {
    return res.status(400).json({ error: "Invalid status. Must be active, inactive, or pending" });
  }

  setTimeout(() => {
    res.json({ 
      success: true, 
      message: `User ${userId} status updated to ${status}`,
      userId: userId,
      newStatus: status
    });
  }, 800);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});