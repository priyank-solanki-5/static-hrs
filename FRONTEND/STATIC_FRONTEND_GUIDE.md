# Static Frontend - Guide & Documentation

## Overview
The frontend has been converted from API-based to a fully static application with local data management. All data is now stored in JavaScript objects/arrays within the application.

## Data Management

### Central Data File
**Location:** `src/data/staticData.js`

This file contains:
- **Events Data** (`eventsData`) - All school events
- **Jobs Data** (`jobsData`) - Job postings
- **Job Applications Data** (`jobApplicationsData`) - Applications submitted
- **Parents/Testimonials Data** (`parentsData`) - Parent reviews
- **Contacts Data** (`contactsData`) - Contact form submissions
- **Activities Data** (`activitiesData`) - School activities
- **Admissions Data** (`admissionsData`) - Admission applications
- **Academics Data** (`academicsData`) - School information
- **Home Stats Data** (`homeStatsData`) - Statistics displayed on home
- **Admin Credentials** (`adminCredentials`) - Login credentials

## Updated Pages

### User-Facing Pages (Public)
✅ **Events.jsx** - Displays events from local data  
✅ **Career.jsx** - Shows job listings and accepts job applications (stored locally)  
✅ **Home.jsx** - Displays testimonials from local parent data  
✅ **ContactUs.jsx** - Contact form stores data locally  

### Pages With Partial Updates
⚠️ **AdmissionsApply.jsx** - Added local data functions (partial)  
⚠️ **ActivityCategoryPage.jsx** - Needs update to use local data  

### Admin Pages (Still Using Some API Patterns)
⚠️ **AdminLogin.jsx** - ✅ Updated with local validation  
⚠️ **AdminPanel.jsx** - ✅ Removed API logout  
⚠️ **AdminBar.jsx** - ✅ Removed API logout  
⚠️ **AdminHome.jsx** - ✅ Updated to use local data  
⚠️ **AdminAcademics.jsx** - Partially updated (imports replaced)  
⚠️ Other admin pages - Need axios call replacements  

## How to Use & Modify Data

### Adding a New Event
```javascript
// In src/data/staticData.js
export const eventsData = [
  // ... existing events
  {
    _id: "new_event_id",
    title: "New Event Title",
    description: "Event description",
    image: "https://example.com/image.jpg",
    date: new Date().toISOString(),
    isHighlighted: false,
    category: "Academic"
  }
];
```

### Adding a New Job
```javascript
export const jobsData = [
  // ... existing jobs
  {
    _id: "job_new",
    title: "Job Title",
    description: "Job description",
    department: "Department Name",
    qualifications: "Required qualifications",
    salary: "Salary range",
    applicationDeadline: new Date().toISOString(),
    isActive: true,
    posted: new Date().toISOString()
  }
];
```

### Accessing Data in Components

**Import the data:**
```javascript
import { getAllEvents, getHighlightedEvents, getActivitiesByCategory } from '../data/staticData';

// In your component
const [events] = useState(() => getAllEvents());
const [highlights] = useState(() => getHighlightedEvents());
const [activities] = useState(() => getActivitiesByCategory('co-curricular'));
```

## Utility Functions Available

### Events
- `getAllEvents()` - Get all events
- `getHighlightedEvents()` - Get highlighted events only
- `deleteEvent(id)` - Remove an event
- `updateEvent(id, updates)` - Update event details

### Jobs
- `getAllJobs()` - Get active jobs
- `addJobApplication(application)` - Store job application

### Contacts
- `addContact(contact)` - Store contact form submission

### Activities
- `getAllActivities()` - Get all activities
- `getActivitiesByCategory(category)` - Filter by category

### Admissions
- `getAllAdmissions()` - Get all admissions
- `addAdmission(admission)` - Store admission application

### Admin
- `validateAdminLogin(email, password)` - Validate admin credentials

## Local Storage

Data is stored in JavaScript objects in memory. To persist data across page refreshes, you would need to:

1. **Use localStorage:**
```javascript
// Save to localStorage
localStorage.setItem('eventsData', JSON.stringify(eventsData));

// Load from localStorage
const saved = JSON.parse(localStorage.getItem('eventsData'));
```

2. **Use IndexedDB for larger datasets**

## Testing the Frontend

### Login to Admin Panel
- **Email:** admin@holyrdeemer.edu
- **Password:** admin123

### Sample Data Includes
- 6 events (3 highlighted)
- 4 job openings
- 4 parent testimonials
- 6 activities
- All static school information

## Pages Still Needing API Removal

The following pages still have axios imports that should be replaced:
1. `AdminAcademics.jsx`
2. `AdminActivities.jsx`
3. `AdminAdmissions.jsx`
4. `AdminCareer.jsx`
5. `AdminContact.jsx`
6. `AdminEmployees.jsx`
7. `AdminParents.jsx`
8. `AdminSettings.jsx`
9. `AddEvent.jsx`
10. `ActivityCategoryPage.jsx`

These can be updated similarly to the completed pages by:
1. Replacing axios imports with local data imports
2. Replacing async axios calls with synchronous local data access
3. Removing loading states and error handling related to network requests

## Benefits of Static Frontend

✅ No backend dependency  
✅ Instant data access  
✅ Works offline  
✅ Easy to modify data  
✅ Perfect for prototyping and demos  
✅ No API keys needed  

## Performance Notes

- All data loads instantly
- No network latency
- No API rate limiting
- Perfect for development and testing
- Consider adding localStorage persistence for production use

## Future Improvements

1. Add localStorage/IndexedDB persistence
2. Add data validation and sanitization
3. Create data export functionality
4. Add bulk data operations
5. Implement search and filter utilities
6. Add data backup/restore features
