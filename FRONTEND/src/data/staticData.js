// Static Data for Holy Redeemer School Frontend
// This file contains all static data that was previously fetched from APIs

// ============================================
// EVENTS DATA
// ============================================
export const eventsData = [
  {
    _id: "1",
    title: "Annual Science Fair 2024",
    description:
      "Showcase of innovative science projects by students from all grades.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
    isHighlighted: true,
    category: "Academic",
  },
  {
    _id: "2",
    title: "Sports Day Championship",
    description:
      "Inter-house sports competition featuring various athletic events and competitions.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
    date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    isHighlighted: true,
    category: "Sports",
  },
  {
    _id: "3",
    title: "Annual Cultural Fest",
    description:
      "Celebration of diverse cultures through music, dance, and traditional performances.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    date: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(),
    isHighlighted: true,
    category: "Cultural",
  },
  {
    _id: "4",
    title: "Mathematics Olympiad",
    description:
      "Challenge and showcase mathematical skills through exciting problem-solving sessions.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    date: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString(),
    isHighlighted: false,
    category: "Academic",
  },
  {
    _id: "5",
    title: "English Debate Competition",
    description:
      "Students present compelling arguments on thought-provoking topics.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    date: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).toISOString(),
    isHighlighted: false,
    category: "Academic",
  },
  {
    _id: "6",
    title: "Art Exhibition",
    description:
      "Display of creative artwork, paintings, and sculptures by talented students.",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop",
    date: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).toISOString(),
    isHighlighted: false,
    category: "Arts",
  },
];

// ============================================
// JOBS DATA
// ============================================
export const jobsData = [
  {
    _id: "job1",
    title: "Senior Mathematics Teacher",
    description:
      "We are looking for an experienced Mathematics teacher to inspire and guide our students.",
    department: "Academics",
    qualifications: "B.Ed or M.Sc in Mathematics, 3+ years of experience",
    salary: "₹ 30,000 - ₹ 40,000",
    applicationDeadline: new Date(
      Date.now() + 30 * 24 * 60 * 60 * 1000
    ).toISOString(),
    isActive: true,
    posted: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: "job2",
    title: "Science Lab Technician",
    description:
      "Responsible for managing lab equipment and assisting in science experiments.",
    department: "Academics",
    qualifications: "Diploma in Science, 2+ years of lab experience",
    salary: "₹ 15,000 - ₹ 20,000",
    applicationDeadline: new Date(
      Date.now() + 25 * 24 * 60 * 60 * 1000
    ).toISOString(),
    isActive: true,
    posted: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: "job3",
    title: "English Language Teacher",
    description:
      "Seeking passionate English teacher to develop communication and literary skills.",
    department: "Academics",
    qualifications: "B.Ed in English, 2+ years of teaching experience",
    salary: "₹ 25,000 - ₹ 35,000",
    applicationDeadline: new Date(
      Date.now() + 28 * 24 * 60 * 60 * 1000
    ).toISOString(),
    isActive: true,
    posted: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: "job4",
    title: "School Counselor",
    description:
      "Provide counseling and guidance services to students for personal and academic development.",
    department: "Student Services",
    qualifications: "M.A in Counseling, certification preferred",
    salary: "₹ 20,000 - ₹ 30,000",
    applicationDeadline: new Date(
      Date.now() + 35 * 24 * 60 * 60 * 1000
    ).toISOString(),
    isActive: true,
    posted: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// ============================================
// JOB APPLICATIONS DATA
// ============================================
export const jobApplicationsData = [
  {
    _id: "app1",
    firstName: "Raj",
    lastName: "Kumar",
    email: "raj.kumar@email.com",
    phone: "9876543210",
    dateOfBirth: "1990-05-15",
    address: "123 Main Street",
    city: "Ahmedabad",
    state: "Gujarat",
    pinCode: "380001",
    currentPosition: "Senior Math Teacher",
    currentCompany: "ABC School",
    yearsOfExperience: "5",
    education: "M.Sc Mathematics, B.Ed",
    skills: "Mathematics, Problem Solving, Student Management",
    coverLetter: "I am passionate about mathematics education...",
    expectedSalary: "35000",
    availability: "2024-02-01",
    appliedFor: "Senior Mathematics Teacher",
    jobId: "job1",
    status: "pending",
    appliedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// ============================================
// PARENTS/TESTIMONIALS DATA
// ============================================
export const parentsData = [
  {
    _id: "parent1",
    name: "Mrs. Priya Sharma",
    review:
      "Holy Redeemer School has been instrumental in my child's academic and personal growth. The teachers are dedicated and the facilities are excellent.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    childName: "Arjun Sharma",
    grade: "10-A",
  },
  {
    _id: "parent2",
    name: "Mr. Vikram Patel",
    review:
      "The best decision we made was enrolling our daughter here. The holistic approach to education is commendable.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    childName: "Sneha Patel",
    grade: "9-B",
  },
  {
    _id: "parent3",
    name: "Ms. Anjali Desai",
    review:
      "Great school with wonderful teachers and an inclusive environment. Highly recommended!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    childName: "Aditya Desai",
    grade: "8-C",
  },
  {
    _id: "parent4",
    name: "Mr. Rohit Singh",
    review:
      "The extracurricular activities and sports programs are outstanding. My son has really flourished here.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    childName: "Karan Singh",
    grade: "11-A",
  },
];

// ============================================
// CONTACTS/MESSAGES DATA
// ============================================
export const contactsData = [
  {
    _id: "contact1",
    firstName: "Ramesh",
    lastName: "Verma",
    email: "ramesh.verma@email.com",
    phone: "9876543210",
    subject: "Admission Inquiry",
    message:
      "I would like to know more about the admission process for Grade 6.",
    status: "new",
    createdAt: new Date().toISOString(),
  },
];

// ============================================
// ACTIVITIES DATA
// ============================================
export const activitiesData = [
  {
    _id: "activity1",
    title: "Robotics Club",
    category: "co-curricular",
    description: "Build and program robots to solve real-world problems.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    schedule: "Every Wednesday, 4:00 PM - 5:30 PM",
    coordinator: "Mr. Rajesh Kumar",
    grade: "6-12",
    order: 1,
  },
  {
    _id: "activity2",
    title: "Debate Club",
    category: "co-curricular",
    description: "Develop public speaking and argumentation skills.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    schedule: "Every Monday, 3:30 PM - 5:00 PM",
    coordinator: "Mrs. Meera Singh",
    grade: "8-12",
    order: 2,
  },
  {
    _id: "activity3",
    title: "Science Club",
    category: "co-curricular",
    description:
      "Explore scientific concepts through experiments and activities.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
    schedule: "Every Thursday, 4:00 PM - 5:30 PM",
    coordinator: "Dr. Arun Patel",
    grade: "6-12",
    order: 3,
  },
  {
    _id: "activity4",
    title: "Cricket",
    category: "extra-curricular",
    description: "Play and learn the sport of cricket at competitive levels.",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop",
    schedule: "Monday to Friday, 4:30 PM - 6:00 PM",
    coordinator: "Mr. Vikram Kumar",
    grade: "6-12",
    order: 4,
  },
  {
    _id: "activity5",
    title: "Basketball",
    category: "extra-curricular",
    description: "Join our basketball team and compete at school level.",
    image:
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&h=600&fit=crop",
    schedule: "Tuesday and Thursday, 4:30 PM - 6:00 PM",
    coordinator: "Coach Arjun Singh",
    grade: "9-12",
    order: 5,
  },
  {
    _id: "activity6",
    title: "Art & Craft",
    category: "curricular",
    description: "Express creativity through painting, drawing, and sculpture.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
    schedule: "Every Wednesday, 2:30 PM - 4:00 PM",
    coordinator: "Mrs. Priya Sharma",
    grade: "6-12",
    order: 6,
  },
];

// ============================================
// ADMISSIONS DATA
// ============================================
export const admissionsData = [
  {
    _id: "admission1",
    studentName: "Raj Kumar",
    grade: "6",
    parentName: "Mr. Manoj Kumar",
    email: "manoj.kumar@email.com",
    phone: "9876543210",
    address: "123 Main Street",
    city: "Ahmedabad",
    state: "Gujarat",
    pinCode: "380001",
    status: "pending",
    appliedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// ============================================
// ACADEMICS DATA (School Info)
// ============================================
export const academicsData = {
  _id: "academics1",
  aboutUs:
    "Holy Redeemer School is a premier educational institution dedicated to nurturing excellence in academics and character building.",
  mission:
    "To provide quality education that develops intellectually sound, morally upright, and socially responsible citizens.",
  vision:
    "To be a beacon of educational excellence, fostering innovation, integrity, and inclusivity.",
  principalMessage:
    "We believe in creating an environment where every student can shine and reach their full potential.",
  foundedYear: 2000,
  totalStudents: 1500,
  totalTeachers: 29,
  boardAffiliation: "CBSE",
};

// ============================================
// HOME PAGE STATS
// ============================================
export const homeStatsData = {
  _id: "stats1",
  yearsOfExcellence: 24,
  dedicatedTeachers: 29,
  happyStudents: 1500,
  achievements: "50+ National Awards",
};

// ============================================
// FEATURES DATA
// ============================================
export const featuresData = [
  {
    title: "Quality Teaching",
    description:
      "Experienced and trained teachers who provide quality instruction are a top reason parents choose a school.",
  },
  {
    title: "Educational Growth",
    description: "Nurturing young minds with knowledge and critical thinking.",
  },
  {
    title: "Lifelong Learning",
    description:
      "Equipping students with essential skills for a successful future.",
  },
];

// ============================================
// ADMIN CREDENTIALS (for login simulation)
// ============================================
export const adminCredentials = {
  defaultEmail: "admin@holyrdeemer.edu",
  defaultPassword: "admin123",
  adminProfile: {
    _id: "admin1",
    email: "admin@holyredeemer.edu",
    name: "Admin User",
    role: "administrator",
    createdAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
  },
};

// ============================================
// UTILITY FUNCTIONS FOR DATA MANAGEMENT
// ============================================

/**
 * Get all events
 */
export const getAllEvents = () => {
  return [...eventsData];
};

/**
 * Get highlighted events
 */
export const getHighlightedEvents = () => {
  return eventsData.filter((event) => event.isHighlighted);
};

/**
 * Get all jobs
 */
export const getAllJobs = () => {
  return jobsData.filter((job) => job.isActive);
};

/**
 * Add a new job application
 */
export const addJobApplication = (application) => {
  const newApp = {
    ...application,
    _id: "app" + (jobApplicationsData.length + 1),
    status: "pending",
    appliedAt: new Date().toISOString(),
  };
  jobApplicationsData.push(newApp);
  return newApp;
};

/**
 * Add a contact message
 */
export const addContact = (contact) => {
  const newContact = {
    ...contact,
    _id: "contact" + (contactsData.length + 1),
    status: "new",
    createdAt: new Date().toISOString(),
  };
  contactsData.push(newContact);
  return newContact;
};

/**
 * Get all parents/testimonials
 */
export const getAllParents = () => {
  return parentsData.map((parent) => ({
    ...parent,
    photo: parent.image, // Map image to photo for consistency
    testimonial: parent.review, // Map review to testimonial for consistency
  }));
};

/**
 * Get all activities
 */
export const getAllActivities = () => {
  return [...activitiesData];
};

/**
 * Get activities by category
 */
export const getActivitiesByCategory = (category) => {
  return activitiesData.filter((activity) => activity.category === category);
};

/**
 * Get all admissions
 */
export const getAllAdmissions = () => {
  return [...admissionsData];
};

/**
 * Add new admission
 */
export const addAdmission = (admission) => {
  const newAdmission = {
    ...admission,
    _id: "admission" + (admissionsData.length + 1),
    status: "pending",
    appliedAt: new Date().toISOString(),
  };
  admissionsData.push(newAdmission);
  return newAdmission;
};

/**
 * Delete an event
 */
export const deleteEvent = (id) => {
  const index = eventsData.findIndex((e) => e._id === id);
  if (index !== -1) {
    eventsData.splice(index, 1);
    return true;
  }
  return false;
};

/**
 * Update an event
 */
export const updateEvent = (id, updates) => {
  const event = eventsData.find((e) => e._id === id);
  if (event) {
    Object.assign(event, updates);
    return event;
  }
  return null;
};

/**
 * Simulate admin login
 */
export const validateAdminLogin = (email, password) => {
  if (
    email === adminCredentials.defaultEmail &&
    password === adminCredentials.defaultPassword
  ) {
    return {
      success: true,
      data: adminCredentials.adminProfile,
      token: "static_admin_token_" + Date.now(),
    };
  }
  return {
    success: false,
    message: "Invalid email or password",
  };
};
