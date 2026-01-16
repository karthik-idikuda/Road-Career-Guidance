// Indian States Data - Boards, Exams, and Education Information

window.INDIAN_STATES = window.INDIAN_STATES || {};

Object.assign(window.INDIAN_STATES, {
    "andhra-pradesh": {
        name: "Andhra Pradesh",
        code: "AP",
        board: "Board of Intermediate Education, Andhra Pradesh (BIEAP)",
        stateExams: [
            { name: "AP EAMCET", fullName: "AP Engineering, Agriculture and Medical Common Entrance Test", type: "engineering", month: "May-June" },
            { name: "AP POLYCET", fullName: "AP Polytechnic Common Entrance Test", type: "diploma", month: "April-May" }
        ],
        topColleges: [
            { name: "IIT Tirupati", location: "Tirupati", type: "IIT", ranking: 1 },
            { name: "NIT Andhra Pradesh", location: "Tadepalligudem", type: "NIT", ranking: 2 },
            { name: "JNTU Kakinada", location: "Kakinada", type: "State University", ranking: 3 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Vijayawada", location: "Vijayawada" },
            { name: "Government Polytechnic Visakhapatnam", location: "Visakhapatnam" }
        ]
    },
    "telangana": {
        name: "Telangana",
        code: "TS",
        board: "Telangana State Board of Intermediate Education (TSBIE)",
        stateExams: [
            { name: "TS EAMCET", fullName: "Telangana Engineering, Agriculture and Medical Common Entrance Test", type: "engineering", month: "May-June" },
            { name: "TS POLYCET", fullName: "Telangana Polytechnic Common Entrance Test", type: "diploma", month: "April" }
        ],
        topColleges: [
            { name: "IIT Hyderabad", location: "Hyderabad", type: "IIT", ranking: 1 },
            { name: "NIT Warangal", location: "Warangal", type: "NIT", ranking: 2 },
            { name: "IIIT Hyderabad", location: "Hyderabad", type: "IIIT", ranking: 3 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Hyderabad", location: "Hyderabad" },
            { name: "Government Polytechnic Warangal", location: "Warangal" }
        ]
    },
    "tamil-nadu": {
        name: "Tamil Nadu",
        code: "TN",
        board: "Tamil Nadu State Board of School Examination",
        stateExams: [
            { name: "TNEA", fullName: "Tamil Nadu Engineering Admissions", type: "engineering", month: "May-June" }
        ],
        topColleges: [
            { name: "IIT Madras", location: "Chennai", type: "IIT", ranking: 1 },
            { name: "NIT Trichy", location: "Tiruchirappalli", type: "NIT", ranking: 2 },
            { name: "Anna University", location: "Chennai", type: "State University", ranking: 3 }
        ],
        polytechnics: [
            { name: "Central Polytechnic Chennai", location: "Chennai" },
            { name: "Thiagarajar Polytechnic", location: "Salem" }
        ]
    },
    "karnataka": {
        name: "Karnataka",
        code: "KA",
        board: "Karnataka Secondary Education Examination Board (KSEEB)",
        stateExams: [
            { name: "KCET", fullName: "Karnataka Common Entrance Test", type: "engineering", month: "April-May" }
        ],
        topColleges: [
            { name: "IISc Bangalore", location: "Bangalore", type: "IISc", ranking: 1 },
            { name: "NIT Karnataka", location: "Surathkal", type: "NIT", ranking: 2 },
            { name: "RV College of Engineering", location: "Bangalore", type: "Private", ranking: 3 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Bangalore", location: "Bangalore" }
        ]
    },
    "kerala": {
        name: "Kerala",
        code: "KL",
        board: "Kerala Higher Secondary Examination Board",
        stateExams: [
            { name: "KEAM", fullName: "Kerala Engineering Architecture Medical", type: "engineering", month: "April-May" }
        ],
        topColleges: [
            { name: "IIT Palakkad", location: "Palakkad", type: "IIT", ranking: 1 },
            { name: "NIT Calicut", location: "Kozhikode", type: "NIT", ranking: 2 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Thiruvananthapuram", location: "Thiruvananthapuram" }
        ]
    },
    "maharashtra": {
        name: "Maharashtra",
        code: "MH",
        board: "Maharashtra State Board of Secondary and Higher Secondary Education",
        stateExams: [
            { name: "MHT CET", fullName: "Maharashtra Common Entrance Test", type: "engineering", month: "May" }
        ],
        topColleges: [
            { name: "IIT Bombay", location: "Mumbai", type: "IIT", ranking: 1 },
            { name: "VJTI Mumbai", location: "Mumbai", type: "Government", ranking: 2 },
            { name: "COEP Pune", location: "Pune", type: "Government", ranking: 3 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Mumbai", location: "Mumbai" },
            { name: "Government Polytechnic Pune", location: "Pune" }
        ]
    },
    "gujarat": {
        name: "Gujarat",
        code: "GJ",
        board: "Gujarat Secondary and Higher Secondary Education Board (GSEB)",
        stateExams: [
            { name: "GUJCET", fullName: "Gujarat Common Entrance Test", type: "engineering", month: "April" }
        ],
        topColleges: [
            { name: "IIT Gandhinagar", location: "Gandhinagar", type: "IIT", ranking: 1 },
            { name: "NIT Surat", location: "Surat", type: "NIT", ranking: 2 },
            { name: "DAIICT", location: "Gandhinagar", type: "Private", ranking: 3 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Ahmedabad", location: "Ahmedabad" }
        ]
    },
    "rajasthan": {
        name: "Rajasthan",
        code: "RJ",
        board: "Board of Secondary Education, Rajasthan (BSER)",
        stateExams: [
            { name: "REAP", fullName: "Rajasthan Engineering Admission Process", type: "engineering", month: "June" }
        ],
        topColleges: [
            { name: "IIT Jodhpur", location: "Jodhpur", type: "IIT", ranking: 1 },
            { name: "MNIT Jaipur", location: "Jaipur", type: "NIT", ranking: 2 },
            { name: "BITS Pilani", location: "Pilani", type: "Private", ranking: 3 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Jaipur", location: "Jaipur" }
        ]
    },
    "uttar-pradesh": {
        name: "Uttar Pradesh",
        code: "UP",
        board: "UP Board of High School and Intermediate Education",
        stateExams: [
            { name: "UPSEE", fullName: "UP State Entrance Examination", type: "engineering", month: "April-May" }
        ],
        topColleges: [
            { name: "IIT Kanpur", location: "Kanpur", type: "IIT", ranking: 1 },
            { name: "IIT BHU", location: "Varanasi", type: "IIT", ranking: 2 },
            { name: "MNNIT Allahabad", location: "Prayagraj", type: "NIT", ranking: 3 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Lucknow", location: "Lucknow" }
        ]
    },
    "west-bengal": {
        name: "West Bengal",
        code: "WB",
        board: "West Bengal Council of Higher Secondary Education",
        stateExams: [
            { name: "WBJEE", fullName: "West Bengal Joint Entrance Examination", type: "engineering", month: "April" }
        ],
        topColleges: [
            { name: "IIT Kharagpur", location: "Kharagpur", type: "IIT", ranking: 1 },
            { name: "Jadavpur University", location: "Kolkata", type: "State University", ranking: 2 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Kolkata", location: "Kolkata" }
        ]
    },
    "delhi": {
        name: "Delhi",
        code: "DL",
        board: "CBSE (Central Board of Secondary Education)",
        stateExams: [],
        topColleges: [
            { name: "IIT Delhi", location: "New Delhi", type: "IIT", ranking: 1 },
            { name: "DTU", location: "Delhi", type: "State University", ranking: 2 },
            { name: "NSUT", location: "Delhi", type: "State University", ranking: 3 }
        ],
        polytechnics: [
            { name: "Pusa Polytechnic", location: "New Delhi" }
        ]
    },
    "punjab": {
        name: "Punjab",
        code: "PB",
        board: "Punjab School Education Board (PSEB)",
        stateExams: [],
        topColleges: [
            { name: "IIT Ropar", location: "Ropar", type: "IIT", ranking: 1 },
            { name: "Thapar Institute", location: "Patiala", type: "Private", ranking: 2 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Chandigarh", location: "Chandigarh" }
        ]
    }
});
