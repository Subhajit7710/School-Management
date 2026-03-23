import db from "../db/dbconnection.db.js";
import { calculateDistance } from "../utils/distance.utils.js";

export const addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({ error: "All fields are required" });
  }
if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: "Latitude & Longitude must be numbers" });
  }
const query = `
    INSERT INTO schools (name, address, latitude, longitude)
    VALUES (?, ?, ?, ?)
  `;
db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
res.status(201).json({
      message: "School added successfully",
      id: result.insertId
    });
  });
};



export const listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: "User latitude & longitude required" });
  }

  db.query("SELECT * FROM schools", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

const userLat = parseFloat(latitude);
const userLon = parseFloat(longitude);

const schoolsWithDistance = results.map((school) => {
 const distance = calculateDistance(
        userLat,
        userLon,
        school.latitude,
        school.longitude
      );

  return { ...school, distance };
    });

schoolsWithDistance.sort((a, b) => a.distance - b.distance);

res.json(schoolsWithDistance);
  });
};