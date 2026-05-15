# 🚀 Job Board Full-Stack API Documentation

Welcome to the API documentation for the Job Board application. This guide is designed for frontend developers to easily understand how to integrate with the backend services.

## 📌 Base URL
All API requests should be prefixed with:
\`\`\`text
http://localhost:3000/api
\`\`\`

## 🔐 Authentication & Security (Crucial for Frontend)
This API uses **HTTP-Only Cookies** for JWT authentication. 
**Important:** Whenever you make a request to a protected route (Employer or Applicant), you **must** include credentials in your Axios or Fetch configuration so the browser sends the cookie.

**Axios Example:**
\`\`\`javascript
import axios from "axios";
axios.defaults.withCredentials = true; // Set globally

// Or per request:
axios.get("http://localhost:3000/api/job/jobs", { withCredentials: true });
\`\`\`

---

## 1️⃣ Authentication APIs (`/api/auth`)

### Register a New User
- **URL:** `/auth/register`
- **Method:** `POST`
- **Access Level:** Public
- **Content-Type:** `multipart/form-data` (Because it includes a file upload)

**Request Body (FormData):**
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `username` | String | Yes | Minimum 6 characters. Unique. |
| `email` | String | Yes | Valid email format. Unique. |
| `password` | String | Yes | Minimum 8 characters. |
| `role` | String | Yes | Must be `"applicant"` or `"employer"`. |
| `bio` | String | No | Short biography or description. |
| `profession` | String | No | e.g., "Software Engineer". |
| `image` | File | No | Profile picture (PNG/JPG). Uploaded to ImageKit. |

**Success Response (200 OK):**
\`\`\`json
{
  "message": "user created successfully",
  "user": { ...user_data_here... } 
}
\`\`\`
*(Note: A JWT cookie named `token` is automatically set in the browser).*

---

### Login User
- **URL:** `/auth/login`
- **Method:** `POST`
- **Access Level:** Public
- **Content-Type:** `application/json`

**Request Body:**
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `username` | String | Optional* | You must provide *either* username or email. |
| `email` | String | Optional* | You must provide *either* username or email. |
| `password` | String | Yes | User's password. |

**Success Response (200 OK):**
\`\`\`json
{
  "message": "user logged in successfully"
}
\`\`\`

---

### Logout User
- **URL:** `/auth/logout`
- **Method:** `POST`
- **Access Level:** Public

**Success Response (200 OK):**
\`\`\`json
{
  "message": "user logged out successfully"
}
\`\`\`

---

## 2️⃣ Job APIs (`/api/job`)

### Post a New Job
- **URL:** `/job/post-job`
- **Method:** `POST`
- **Access Level:** **Employer Only**
- **Content-Type:** `application/json`

**Request Body:**
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | String | Yes | e.g., "Frontend Developer" |
| `description` | String | Yes | Full job description. |
| `category` | String | Yes | e.g., "Engineering", "Design". |
| `jobType` | String | No | Must be `"Hybrid"`, `"Remote"`, or `"On-site"`. (Defaults to "Remote") |
| `salary` | Number | Yes | Annual or monthly salary figure. |
| `location` | String | Yes | e.g., "New York, NY" |

**Success Response (201 Created):**
\`\`\`json
{
  "message": "Job post posted successfully"
}
\`\`\`

---

### Get All Jobs (Feed)
- **URL:** `/job/jobs`
- **Method:** `GET`
- **Access Level:** **Applicant Only** **Success Response (200 OK):**
\`\`\`json
{
  "message": "Job fetched successfully",
  "jobs": [
    {
      "_id": "60d21b4667d0d8992e610c85",
      "title": "Frontend Developer",
      "location": "Remote",
      "salary": 90000,
      "...": "..."
    }
  ]
}
\`\`\`

---

### Search Jobs
- **URL:** `/job/search`
- **Method:** `GET`
- **Access Level:** Public (No token required)

**Query Parameters:**
Attach these to the URL (e.g., `/job/search?keyword=react&jobType=Remote&minSalary=50000`).
| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `keyword` | String | No | Searches against Job `title`, `description`, and `category` using high-performance text indexing. |
| `jobType` | String | No | Exact match (e.g., "Remote"). |
| `minSalary` | Number | No | Returns jobs with a salary greater than or equal to this value. |

**Success Response (200 OK):**
\`\`\`json
{
  "message": "jobs feteched successfully",
  "jobs": [ ...array_of_matching_jobs... ]
}
\`\`\`

---

## 3️⃣ Application APIs (`/api/applications`)

### Apply for a Job
- **URL:** `/applications/apply/:jobId`
- **Method:** `POST`
- **Access Level:** **Applicant Only**
- **Content-Type:** `application/json`

**URL Parameters:**
- `:jobId` (String): The ID of the job the user is applying to.

**Request Body:**
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `resumeUrl` | String | Yes | A URL pointing to the user's uploaded resume (e.g., Cloudinary/AWS link). |

**Success Response (201 Created):**
\`\`\`json
{
  "message": "application has been submitted",
  "application": { ...application_data... }
}
\`\`\`

---

### Get All Applications (For Employers)
- **URL:** `/applications/getApplications`
- **Method:** `GET`
- **Access Level:** **Employer Only**
- **Description:** Fetches all job applications submitted to any job posted by the currently logged-in employer.

**Success Response (200 OK):**
\`\`\`json
{
  "message": "applications fetched successfully",
  "applications": [
    {
      "_id": "...",
      "status": "Pending",
      "resumeUrl": "https://...",
      "seekerId": { "username": "JohnDoe", "email": "john@test.com", "image": "..." },
      "jobId": { "title": "Frontend Developer", "description": "..." }
    }
  ]
}
\`\`\`

---

### Update Application Status
- **URL:** `/applications/update-status/:applicationId`
- **Method:** `PATCH`
- **Access Level:** **Employer Only**
- **Content-Type:** `application/json`

**URL Parameters:**
- `:applicationId` (String): The ID of the specific *application* (not the job).

**Request Body:**
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `status` | String | Yes | Must be: `'Pending'`, `'Under Review'`, `'Interviewing'`, `'Hired'`, or `'Rejected'`. |

**Success Response (200 OK):**
\`\`\`json
{
  "message": "Application status updated successfully"
}
\`\`\`

---

### View My Applied Jobs (For Applicants)
- **URL:** `/applications/appliedApplications`
- **Method:** `GET`
- **Access Level:** **Applicant Only**

**Success Response (200 OK):**
\`\`\`json
{
  "message": "Applications fetched successfully",
  "appliedJobs": [
    {
      "_id": "...",
      "status": "Under Review",
      "resumeUrl": "...",
      "createdAt": "..."
    }
  ]
}
\`\`\`

---

## 🛠 Model Enums & Constraints Reference
Keep these in mind when building your frontend forms and dropdown menus.

**User Role Options:**
- `"applicant"`
- `"employer"`

**Job Type Options:**
- `"Hybrid"`
- `"Remote"`
- `"On-site"`

**Application Status Options:**
- `"Pending"`
- `"Under Review"`
- `"Interviewing"`
- `"Hired"`
- `"Rejected"`