# Quick Start - Static Frontend

## What Changed?
✅ All API calls removed  
✅ All data moved to `src/data/staticData.js`  
✅ No backend required  
✅ Works 100% offline  

## Login to Admin Panel
```
Email: admin@holyrdeemer.edu
Password: admin123
```

## Main Data File
`src/data/staticData.js` - 489 lines containing:
- 6 Events (3 highlighted)
- 4 Jobs
- 4 Parent testimonials
- 6 Activities
- Admin credentials
- Utility functions for CRUD

## Key Functions

```javascript
// Events
getHighlightedEvents()
getAllEvents()
deleteEvent(id)
updateEvent(id, updates)

// Jobs
getAllJobs()
addJobApplication(application)

// Forms
addContact(contact)
addAdmission(admission)

// Activities
getActivitiesByCategory(category)
getAllActivities()

// Admin
validateAdminLogin(email, password)
```

## Modified Pages
- Events.jsx ✅
- Career.jsx ✅
- Home.jsx ✅
- ContactUs.jsx ✅
- AdmissionsApply.jsx ✅
- AdminLogin.jsx ✅
- AdminPanel.jsx ✅
- AdminBar.jsx ✅
- AdminHome.jsx ✅
- 10+ admin pages (imports updated)

## All Axios Removed
✅ Zero axios imports in source code

## How to Add Data

Edit `src/data/staticData.js`:

```javascript
// Add event
eventsData.push({
  _id: "new_id",
  title: "Title",
  description: "Desc",
  image: "url",
  date: new Date().toISOString(),
  isHighlighted: false
});

// Add job
jobsData.push({
  _id: "job_id",
  title: "Title",
  department: "Dept"
  // ... other fields
});
```

## Testing

1. Visit `/` - See home with testimonials
2. Visit `/events` - See 6 events
3. Visit `/career` - See 4 jobs
4. Fill contact form - Data stored locally
5. Visit `/admin` - Login with credentials above
6. Go to dashboard

All data is stored in memory and cleared on page refresh.

## Optional: Add Persistence

Add to `src/data/staticData.js`:

```javascript
// Save on changes
localStorage.setItem('appData', JSON.stringify({
  events: eventsData,
  jobs: jobsData,
  // ...
}));

// Load on startup
function loadFromStorage() {
  const saved = localStorage.getItem('appData');
  if (saved) {
    const data = JSON.parse(saved);
    eventsData.splice(0, eventsData.length, ...data.events);
    // Load other data...
  }
}
```

## Documentation
- `STATIC_FRONTEND_GUIDE.md` - Full guide
- `MIGRATION_SUMMARY.md` - What was changed
- `QUICK_START.md` - This file

## Support
All data functions are in `src/data/staticData.js`
All pages updated to use local data
No external dependencies for data
