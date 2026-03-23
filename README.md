School Management System
1) Tech Stack
- Node.js
- Express.js
- MySQL

 Setup Instructions
1. Clone repo
2. Run npm install
3. Setup MySQL database
4. Run node app.js // nodemon

API Endpoints

1)Add School
POST /api/addSchool
//BODY
{
  "name": "Vit School",
  "address": "Vellore",
  "latitude": 12.9215,
  "longitude": 77.5963
}
//OUTPUT
{
  "message": "School added successfully",
  "id": 1
}

2) List Schools
   GET /api/listSchools

   //OUTPUT
[
{
"name": "Vit School",
"distance": 2.5
}
]

//LIVE API
https://school-managementapi.onrender.com

//Database is configured locally, so live API may not return full results.


//POSTMAN PUBLIC LINK

https://subhajitmahapatra7710-1933762.postman.co/workspace/SchoolManagement~0a6a6731-1a84-4cec-8ee1-83a2de406a01/collection/49721211-9b7ab6e3-e023-4f24-aa45-d8c718b7c815?action=share&source=copy-link&creator=49721211
