// Indian States Data - Northeast and remaining states

const INDIAN_STATES_PART3 = {
    "assam": {
        name: "Assam",
        code: "AS",
        board: "Board of Secondary Education, Assam (SEBA)",
        stateExams: [
            { name: "Assam CEE", fullName: "Combined Entrance Exam", type: "engineering", month: "April" },
            { name: "Assam PAT", fullName: "Polytechnic Admission Test", type: "diploma", month: "May" }
        ],
        topColleges: [
            { name: "IIT Guwahati", location: "Guwahati", type: "IIT", ranking: 1 },
            { name: "NIT Silchar", location: "Silchar", type: "NIT", ranking: 2 },
            { name: "Tezpur University", location: "Tezpur", type: "Central", ranking: 3 }
        ],
        polytechnics: [
            { name: "Assam Engineering College Polytechnic", location: "Guwahati" }
        ]
    },
    "meghalaya": {
        name: "Meghalaya",
        code: "ML",
        board: "Meghalaya Board of School Education",
        stateExams: [
            { name: "NERIST", fullName: "North East Regional Inst Entrance", type: "engineering", month: "May" }
        ],
        topColleges: [
            { name: "NIT Meghalaya", location: "Shillong", type: "NIT", ranking: 1 },
            { name: "IIM Shillong", location: "Shillong", type: "IIM", ranking: 2 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Shillong", location: "Shillong" }
        ]
    },
    "manipur": {
        name: "Manipur",
        code: "MN",
        board: "Council of Higher Secondary Education, Manipur",
        stateExams: [
            { name: "Manipur CET", fullName: "Common Entrance Test", type: "engineering", month: "June" }
        ],
        topColleges: [
            { name: "NIT Manipur", location: "Imphal", type: "NIT", ranking: 1 }
        ],
        polytechnics: [
            { name: "Manipur Polytechnic", location: "Imphal" }
        ]
    },
    "tripura": {
        name: "Tripura",
        code: "TR",
        board: "Tripura Board of Secondary Education",
        stateExams: [
            { name: "TJEE", fullName: "Tripura JEE", type: "engineering", month: "April" }
        ],
        topColleges: [
            { name: "NIT Agartala", location: "Agartala", type: "NIT", ranking: 1 }
        ],
        polytechnics: [
            { name: "Tripura Polytechnic Narsingarh", location: "Agartala" }
        ]
    },
    "nagaland": {
        name: "Nagaland",
        code: "NL",
        board: "Nagaland Board of School Education",
        stateExams: [],
        topColleges: [
            { name: "NIT Nagaland", location: "Dimapur", type: "NIT", ranking: 1 }
        ],
        polytechnics: []
    },
    "mizoram": {
        name: "Mizoram",
        code: "MZ",
        board: "Mizoram Board of School Education",
        stateExams: [],
        topColleges: [
            { name: "NIT Mizoram", location: "Aizawl", type: "NIT", ranking: 1 }
        ],
        polytechnics: [
            { name: "Mizoram Polytechnic", location: "Lunglei" }
        ]
    },
    "arunachal-pradesh": {
        name: "Arunachal Pradesh",
        code: "AR",
        board: "Arunachal Pradesh Board of Secondary Education",
        stateExams: [],
        topColleges: [
            { name: "NIT Arunachal Pradesh", location: "Itanagar", type: "NIT", ranking: 1 }
        ],
        polytechnics: [
            { name: "Arunachal Polytechnic", location: "Itanagar" }
        ]
    },
    "sikkim": {
        name: "Sikkim",
        code: "SK",
        board: "Sikkim Board of Secondary Education",
        stateExams: [],
        topColleges: [
            { name: "NIT Sikkim", location: "Ravangla", type: "NIT", ranking: 1 },
            { name: "Sikkim Manipal University", location: "Gangtok", type: "Private", ranking: 2 }
        ],
        polytechnics: []
    },
    "goa": {
        name: "Goa",
        code: "GA",
        board: "Goa Board of Secondary and Higher Secondary Education",
        stateExams: [
            { name: "GCET", fullName: "Goa Common Entrance Test", type: "engineering", month: "May" }
        ],
        topColleges: [
            { name: "NIT Goa", location: "Ponda", type: "NIT", ranking: 1 },
            { name: "BITS Pilani Goa", location: "Goa", type: "Private", ranking: 2 },
            { name: "Goa Engineering College", location: "Ponda", type: "Government", ranking: 3 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Bicholim", location: "Bicholim" }
        ]
    },
    "himachal-pradesh": {
        name: "Himachal Pradesh",
        code: "HP",
        board: "HP Board of School Education",
        stateExams: [
            { name: "HPCET", fullName: "HP Common Entrance Test", type: "engineering", month: "May" },
            { name: "HP PAT", fullName: "Polytechnic Admission Test", type: "diploma", month: "May" }
        ],
        topColleges: [
            { name: "IIT Mandi", location: "Mandi", type: "IIT", ranking: 1 },
            { name: "NIT Hamirpur", location: "Hamirpur", type: "NIT", ranking: 2 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Sundernagar", location: "Sundernagar" }
        ]
    },
    "uttarakhand": {
        name: "Uttarakhand",
        code: "UK",
        board: "Uttarakhand Board of School Education",
        stateExams: [
            { name: "UKSEE", fullName: "UK State Entrance Exam", type: "engineering", month: "May" },
            { name: "UK Polytechnic", fullName: "JEEP Polytechnic", type: "diploma", month: "May" }
        ],
        topColleges: [
            { name: "IIT Roorkee", location: "Roorkee", type: "IIT", ranking: 1 },
            { name: "NIT Uttarakhand", location: "Srinagar", type: "NIT", ranking: 2 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Dehradun", location: "Dehradun" }
        ]
    },
    "jammu-kashmir": {
        name: "Jammu & Kashmir",
        code: "JK",
        board: "J&K Board of School Education",
        stateExams: [
            { name: "JKCET", fullName: "JK Common Entrance Test", type: "engineering", month: "May" }
        ],
        topColleges: [
            { name: "NIT Srinagar", location: "Srinagar", type: "NIT", ranking: 1 },
            { name: "IIT Jammu", location: "Jammu", type: "IIT", ranking: 2 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Jammu", location: "Jammu" },
            { name: "Government Polytechnic Srinagar", location: "Srinagar" }
        ]
    }
};

// National Level Exams
const NATIONAL_EXAMS = {
    engineering: [
        { name: "JEE Main", fullName: "Joint Entrance Examination Main", month: "January & April", colleges: "NITs, IIITs, GFTIs" },
        { name: "JEE Advanced", fullName: "Joint Entrance Examination Advanced", month: "May-June", colleges: "IITs" },
        { name: "BITSAT", fullName: "BITS Admission Test", month: "May-June", colleges: "BITS Pilani campuses" },
        { name: "VITEEE", fullName: "VIT Engineering Entrance Exam", month: "April", colleges: "VIT campuses" },
        { name: "SRMJEEE", fullName: "SRM Joint Engineering Entrance", month: "April", colleges: "SRM campuses" },
        { name: "COMEDK", fullName: "Consortium of Medical, Engineering and Dental Colleges", month: "May", colleges: "Karnataka private colleges" }
    ],
    medical: [
        { name: "NEET UG", fullName: "National Eligibility cum Entrance Test", month: "May", colleges: "All medical colleges" },
        { name: "NEET PG", fullName: "NEET Post Graduate", month: "March", colleges: "PG medical seats" },
        { name: "AIIMS MBBS", fullName: "AIIMS MBBS Entrance", month: "Through NEET", colleges: "AIIMS institutes" }
    ],
    management: [
        { name: "CAT", fullName: "Common Admission Test", month: "November", colleges: "IIMs" },
        { name: "XAT", fullName: "Xavier Aptitude Test", month: "January", colleges: "XLRI, XIM" },
        { name: "MAT", fullName: "Management Aptitude Test", month: "Multiple", colleges: "AICTE approved" },
        { name: "CMAT", fullName: "Common Management Admission Test", month: "January", colleges: "AICTE approved" },
        { name: "SNAP", fullName: "Symbiosis National Aptitude Test", month: "December", colleges: "Symbiosis colleges" }
    ],
    law: [
        { name: "CLAT", fullName: "Common Law Admission Test", month: "May", colleges: "NLUs" },
        { name: "AILET", fullName: "All India Law Entrance Test", month: "May", colleges: "NLU Delhi" },
        { name: "LSAT India", fullName: "Law School Admission Test", month: "May", colleges: "Private law colleges" }
    ],
    government: [
        { name: "UPSC CSE", fullName: "Civil Services Examination", month: "June (Prelims)", colleges: "IAS, IPS, IFS" },
        { name: "SSC CGL", fullName: "Combined Graduate Level", month: "Multiple", colleges: "Central Govt jobs" },
        { name: "SSC CHSL", fullName: "Combined Higher Secondary Level", month: "Multiple", colleges: "Central Govt jobs" },
        { name: "IBPS PO", fullName: "Institute of Banking Personnel Selection", month: "Multiple", colleges: "PSU Banks" },
        { name: "SBI PO", fullName: "State Bank of India PO", month: "Multiple", colleges: "SBI" }
    ],
    design: [
        { name: "NID DAT", fullName: "National Institute of Design Admission Test", month: "January", colleges: "NIDs" },
        { name: "NIFT", fullName: "National Institute of Fashion Technology", month: "February", colleges: "NIFTs" },
        { name: "UCEED", fullName: "Undergraduate Common Entrance Exam Design", month: "January", colleges: "IIT Design" },
        { name: "CEED", fullName: "Common Entrance Exam for Design", month: "January", colleges: "IIT Design (PG)" }
    ]
};

// Merge with main states object
if (typeof window !== 'undefined') {
    if (window.INDIAN_STATES) {
        Object.assign(window.INDIAN_STATES, INDIAN_STATES_PART3);
    } else {
        window.INDIAN_STATES = INDIAN_STATES_PART3;
    }
    window.NATIONAL_EXAMS = NATIONAL_EXAMS;
}
