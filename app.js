const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const SuperadminRoutes = require("./routes/superAdminRoutes");
const SchooladminRoutes = require("./routes/schoolAdminRoutes");
const StaffRoutes = require("./routes/staffRoutes");
const GuardianRoutes = require("./routes/guardianRoutes");

app.use(cors());
app.use(express.json());

// Import routes
// app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/s1/superadmin", SuperadminRoutes);
app.use("/api/s1/schooladmin", SchooladminRoutes);
app.use("/api/s1/staff", StaffRoutes);
app.use("/api/s1/guardian", GuardianRoutes);

// Add other routes similarly...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}/api/s1/...`);
});
