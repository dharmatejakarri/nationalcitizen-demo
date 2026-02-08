const personas = {
    "infant": {
        id: "infant",
        name: "Baby Aarav",
        age: "2 yrs",
        role: "Newborn & Infant",
        avatar: "BA",
        stage: 1,
        progress: 2,
        stats: {
            schemes: 15,
            active: 2,
            benefits: "₹45,000",
            civic: "98%"
        },
        schemes: [
            {
                title: "YSR Sampoorna Poshana",
                ministry: "Women & Child Development • AP",
                match: 100,
                impact: "Nutrition Kit",
                deadline: "Always Open",
                icon: "fa-baby-carriage",
                cat: "Health"
            },
            {
                title: "Integrated Child Development Services (ICDS)",
                ministry: "Ministry of WCD • Central",
                match: 100,
                impact: "Education & Health",
                deadline: "Open",
                icon: "fa-school",
                cat: "Education"
            },
            {
                title: "Pulse Polio Immunization",
                ministry: "Health & Family Welfare • Central",
                match: 100,
                impact: "Life Protection",
                deadline: "Immediate",
                icon: "fa-syringe",
                cat: "Health"
            },
            {
                title: "YSR Kanti Velugu",
                ministry: "Health Dept • AP",
                match: 95,
                impact: "Free Eye Care",
                deadline: "30 days left",
                icon: "fa-eye",
                cat: "Health"
            }
        ],
        mentors: [
            { name: "Dr. Lakshmi", domain: "Pediatric Care", avatar: "L", rating: 4.9 },
            { name: "Meena Garu", domain: "Nutrition Specialist", avatar: "M", rating: 4.8 }
        ],
        notifications: [
            { icon: "fa-syringe", type: "deadline", title: "Vaccination Due", desc: "MR Vaccine due next Tuesday at nearby PHC.", time: "2 days left" },
            { icon: "fa-box", type: "info", title: "Nutrition Kit Ready", desc: "Collect your monthly YSR Poshana kit from your Anganwadi center.", time: "Yesterday" }
        ]
    },
    "child": {
        id: "child",
        name: "Kiran Kumar",
        age: "9 yrs",
        role: "Primary School Student",
        avatar: "KK",
        stage: 2,
        progress: 12,
        stats: {
            schemes: 22,
            active: 4,
            benefits: "₹75,000",
            civic: "95%"
        },
        schemes: [
            {
                title: "Jagananna Vidya Kanuka",
                ministry: "School Education • AP",
                match: 100,
                impact: "Uniforms & Kits",
                deadline: "School Reopening",
                icon: "fa-book",
                cat: "Education"
            },
            {
                title: "Jagananna Gorumudda",
                ministry: "Social Welfare • AP",
                match: 100,
                impact: "Nutritious Mid-day Meal",
                deadline: "Ongoing",
                icon: "fa-utensils",
                cat: "Health"
            },
            {
                title: "National Merit Scholarship",
                ministry: "Ministry of Education • Central",
                match: 92,
                impact: "₹12,000 /yr",
                deadline: "15 days left",
                icon: "fa-award",
                cat: "Education"
            },
            {
                title: "AP Talent Search Program",
                ministry: "Education Board • AP",
                match: 88,
                impact: "Recognition & Cash",
                deadline: "20 days left",
                icon: "fa-brain",
                cat: "Education"
            }
        ],
        mentors: [
            { name: "Prof. Ramana", domain: "Science & STEM", avatar: "R", rating: 4.9 },
            { name: "Ms. Anitha", domain: "Art & Creativity", avatar: "A", rating: 4.7 }
        ],
        notifications: [
            { icon: "fa-book-open", type: "deadline", title: "Scholarship Renewal", desc: "Submit attendance records for Jagananna Vidya Kanuka.", time: "3 days left" },
            { icon: "fa-trophy", type: "info", title: "New Competition", desc: "District level Science Fair registrations are now open.", time: "5 hrs ago" }
        ]
    },
    "adolescent": {
        id: "adolescent",
        name: "Sravani Reddy",
        age: "17 yrs",
        role: "Higher Secondary Student",
        avatar: "SR",
        stage: 4,
        progress: 24,
        stats: {
            schemes: 31,
            active: 3,
            benefits: "₹1,20,000",
            civic: "92%"
        },
        schemes: [
            {
                title: "Jagananna Vidya Deevena",
                ministry: "Higher Education • AP",
                match: 100,
                impact: "Full Fee Reimbursement",
                deadline: "Admission phase",
                icon: "fa-graduation-cap",
                cat: "Education"
            },
            {
                title: "Pradhan Mantri Kaushal Vikas Yojana",
                ministry: "MSDE • Central",
                match: 95,
                impact: "Skill Certification",
                deadline: "Open Monthly",
                icon: "fa-tools",
                cat: "Education"
            },
            {
                title: "Post-Matric Scholarship",
                ministry: "Social Justice • Central",
                match: 98,
                impact: "Direct Cash Benefit",
                deadline: "10 days left",
                icon: "fa-coins",
                cat: "Education"
            },
            {
                title: "YSR Sunna Vaddi (Educational)",
                ministry: "Finance Dept • AP",
                match: 85,
                impact: "0% Interest Loan",
                deadline: "45 days left",
                icon: "fa-percent",
                cat: "Education"
            }
        ],
        mentors: [
            { name: "Dr. Murali", domain: "Career Counseling", avatar: "M", rating: 4.9 },
            { name: "Sita Garu", domain: "NEET/JEE Prep", avatar: "S", rating: 4.8 }
        ],
        notifications: [
            { icon: "fa-calendar-exclamation", type: "deadline", title: "JEE Mains Registration", desc: "Last date to finish your application is this Saturday.", time: "2 days left" },
            { icon: "fa-check-circle", type: "success", title: "Mock Test Results", desc: "Your Aptitude Test results are ready for review.", time: "1 day ago" }
        ]
    },
    "young_adult": {
        id: "young_adult",
        name: "Pawan Teja",
        age: "21 yrs",
        role: "College Student / Entrepreneur",
        avatar: "PT",
        stage: 5,
        progress: 30,
        stats: {
            schemes: 38,
            active: 5,
            benefits: "₹2,10,000",
            civic: "89%"
        },
        schemes: [
            {
                title: "Jagananna Vasathi Deevena",
                ministry: "Social Welfare • AP",
                match: 100,
                impact: "Hostel & Mess Charges",
                deadline: "Semester start",
                icon: "fa-bed",
                cat: "Education"
            },
            {
                title: "Mudra Loan (Shishu)",
                ministry: "Ministry of Finance • Central",
                match: 92,
                impact: "Up to ₹50,000",
                deadline: "Open",
                icon: "fa-rocket",
                cat: "Entrepreneur"
            },
            {
                title: "APSSDC Skill Training",
                ministry: "Skill Development • AP",
                match: 90,
                impact: "Industry Placement",
                deadline: "Batch-wise",
                icon: "fa-laptop-code",
                cat: "Education"
            },
            {
                title: "Startup India Seeds",
                ministry: "DPIIT • Central",
                match: 85,
                impact: "Grants & Mentorship",
                deadline: "Bi-annual",
                icon: "fa-lightbulb",
                cat: "Entrepreneur"
            }
        ],
        mentors: [
            { name: "Rahul Jain", domain: "Startup Mentor", avatar: "R", rating: 4.7 },
            { name: "Prof. Varun", domain: "Higher Ed Counselor", avatar: "V", rating: 4.9 }
        ],
        notifications: [
            { icon: "fa-handshake", type: "info", title: "Incubation Match", desc: "T-Hub Hyderabad showed interest in your business plan.", time: "8 hrs ago" },
            { icon: "fa-clock", type: "deadline", title: "Vasathi Deevena", desc: "Document verification pending at local secretariat.", time: "4 days left" }
        ]
    },
    "professional": {
        id: "professional",
        name: "Dharma Teja",
        age: "26 yrs",
        role: "Young Professional",
        avatar: "DT",
        stage: 6,
        progress: 37,
        stats: {
            schemes: 47,
            active: 3,
            benefits: "₹1,85,000",
            civic: "85%"
        },
        schemes: [
            { title: "Pradhan Mantri Mudra Yojana", ministry: "Ministry of Finance • MUDRA", match: 95, impact: "Up to ₹10 Lakhs", deadline: "45 days left", icon: "fa-rocket", cat: "Entrepreneur" },
            { title: "Startup India Registration", ministry: "DPIIT • Central Government", match: 92, impact: "Tax Benefits + Grants", deadline: "Open", icon: "fa-seedling", cat: "Entrepreneur" },
            { title: "AICTE Skill Development Grant", ministry: "Ministry of Education • AICTE", match: 87, impact: "₹50,000", deadline: "30 days left", icon: "fa-graduation-cap", cat: "Education" },
            { title: "PM Awas Yojana (Urban)", ministry: "Ministry of Housing • Central", match: 78, impact: "₹2.5 Lakh Subsidy", deadline: "60 days left", icon: "fa-home", cat: "Housing" }
        ],
        mentors: [
            { name: "Suresh Garu", domain: "Business Growth", avatar: "S", rating: 4.8 },
            { name: "Priya Rao", domain: "Career Growth", avatar: "P", rating: 4.9 }
        ],
        notifications: [
            { icon: "fa-clock", type: "deadline", title: "GST Filing", desc: "Your quarterly GST filing deadline is approaching.", time: "4 days left" },
            { icon: "fa-check-circle", type: "success", title: "Mudra Loan Approved", desc: "Your Shishu loan has been sanctioned by SBI.", time: "2 days ago" }
        ]
    },
    "established": {
        id: "established",
        name: "Venkata Rao",
        age: "42 yrs",
        role: "Business Owner / Head of Household",
        avatar: "VR",
        stage: 7,
        progress: 60,
        stats: {
            schemes: 28,
            active: 4,
            benefits: "₹3,40,000",
            civic: "94%"
        },
        schemes: [
            {
                title: "YSR Cheyutha",
                ministry: "BC Welfare • AP",
                match: 100,
                impact: "₹18,750 /yr",
                deadline: "Aug-Sep",
                icon: "fa-hand-holding-heart",
                cat: "Finance"
            },
            {
                title: "YSR Aasara",
                ministry: "Rural Development • AP",
                match: 100,
                impact: "SHG Loan Waiver",
                deadline: "Phased rollout",
                icon: "fa-users-line",
                cat: "Finance"
            },
            {
                title: "PM Jeevan Jyoti Bima Yojana",
                ministry: "Financial Services • Central",
                match: 95,
                impact: "₹2 Lakh Insurance",
                deadline: "May 31 (Annual)",
                icon: "fa-shield-heart",
                cat: "Health"
            },
            {
                title: "PM Suraksha Bima Yojana",
                ministry: "Financial Services • Central",
                match: 98,
                impact: "Accident Coverage",
                deadline: "Always Open",
                icon: "fa-truck-medical",
                cat: "Health"
            }
        ],
        mentors: [
            { name: "Mr. Satyam", domain: "Financial Planning", avatar: "S", rating: 4.9 },
            { name: "Lakshmi Garu", domain: "Micro-Business Adv", avatar: "L", rating: 4.8 }
        ],
        notifications: [
            { icon: "fa-file-invoice", type: "deadline", title: "Insurance Renewal", desc: "Renew your PMJJBY policy for family security.", time: "10 days left" },
            { icon: "fa-landmark", type: "info", title: "DWCRA Interest", desc: "Zero interest splash-back credited to group account.", time: "1 day ago" }
        ]
    },
    "senior": {
        id: "senior",
        name: "Somulu Thata",
        age: "72 yrs",
        role: "Retired Citizen",
        avatar: "ST",
        stage: 9,
        progress: 100,
        stats: {
            schemes: 18,
            active: 2,
            benefits: "₹5,20,000",
            civic: "100%"
        },
        schemes: [
            {
                title: "YSR Pension Kanuka",
                ministry: "SERP • AP",
                match: 100,
                impact: "₹3,000 /month",
                deadline: "1st of every month",
                icon: "fa-house-chimney-heart",
                cat: "Pension"
            },
            {
                title: "Ayushman Bharat Senior Care",
                ministry: "NHA • Central",
                match: 100,
                impact: "₹5 Lakh Coverage",
                deadline: "Renewal Yearly",
                icon: "fa-heart-pulse",
                cat: "Health"
            },
            {
                title: "Pradhan Mantri Vaya Vandana",
                ministry: "LIC • Central",
                match: 95,
                impact: "Assured Pension",
                deadline: "Check Enrollment",
                icon: "fa-coins",
                cat: "Pension"
            },
            {
                title: "Elder Line Support",
                ministry: "Social Justice • Central",
                match: 100,
                impact: "Immediate Help",
                deadline: "24/7 Service",
                icon: "fa-phone-volume",
                cat: "Health"
            }
        ],
        mentors: [
            { name: "Ms. Padmaja", domain: "Geriatric Health", avatar: "P", rating: 4.9 },
            { name: "Dr. Srinivas", domain: "Heritage & Legacy", avatar: "S", rating: 4.8 }
        ],
        notifications: [
            { icon: "fa-wallet", type: "success", title: "Pension Credited", desc: "Your monthly pension has been successfully credited.", time: "Just now" },
            { icon: "fa-stethoscope", type: "info", title: "Free Health Camp", desc: "Senior citizen medical checkup at local ZP school.", time: "This Sunday" }
        ]
    }
};

window.personas = personas;
