// Indian States Data - North, East, Central India

const INDIAN_STATES_PART2 = {
    "uttar-pradesh": {
        name: "Uttar Pradesh",
        code: "UP",
        board: "UP Board of High School and Intermediate Education",
        stateExams: [
            { name: "UPSEE/AKTU", fullName: "UP State Entrance Exam", type: "engineering", month: "April-May" },
            { name: "JEECUP", fullName: "Joint Entrance Exam Council UP (Polytechnic)", type: "diploma", month: "April" },
            { name: "UPCATET", fullName: "UP Combined Agriculture Test", type: "agriculture", month: "June" }
        ],
        topColleges: [
            { name: "IIT Kanpur", location: "Kanpur", type: "IIT", ranking: 1 },
            { name: "IIT BHU", location: "Varanasi", type: "IIT", ranking: 2 },
            { name: "MNNIT Allahabad", location: "Prayagraj", type: "NIT", ranking: 3 },
            { name: "HBTU Kanpur", location: "Kanpur", type: "State", ranking: 4 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Lucknow", location: "Lucknow" },
            { name: "Government Polytechnic Kanpur", location: "Kanpur" }
        ]
    },
    "madhya-pradesh": {
        name: "Madhya Pradesh",
        code: "MP",
        board: "MP Board of Secondary Education",
        stateExams: [
            { name: "MP PET/PAT", fullName: "MP Pre Engineering/Agriculture Test", type: "engineering", month: "May" },
            { name: "MP PPT", fullName: "MP Pre Polytechnic Test", type: "diploma", month: "May" },
            { name: "MP DAHET", fullName: "Diploma Admission Holder Entrance Test", type: "lateral", month: "June" }
        ],
        topColleges: [
            { name: "IIT Indore", location: "Indore", type: "IIT", ranking: 1 },
            { name: "MANIT Bhopal", location: "Bhopal", type: "NIT", ranking: 2 },
            { name: "IIIT Gwalior", location: "Gwalior", type: "IIIT", ranking: 3 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Bhopal", location: "Bhopal" },
            { name: "Government Polytechnic Indore", location: "Indore" }
        ]
    },
    "bihar": {
        name: "Bihar",
        code: "BR",
        board: "Bihar School Examination Board (BSEB)",
        stateExams: [
            { name: "BCECE", fullName: "Bihar Combined Entrance Competitive Exam", type: "engineering", month: "April" },
            { name: "Bihar Polytechnic (DCECE)", fullName: "Diploma Certificate Entrance", type: "diploma", month: "May" }
        ],
        topColleges: [
            { name: "IIT Patna", location: "Patna", type: "IIT", ranking: 1 },
            { name: "NIT Patna", location: "Patna", type: "NIT", ranking: 2 },
            { name: "BIT Sindri", location: "Sindri", type: "Government", ranking: 3 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Patna", location: "Patna" },
            { name: "Government Polytechnic Muzaffarpur", location: "Muzaffarpur" }
        ]
    },
    "west-bengal": {
        name: "West Bengal",
        code: "WB",
        board: "West Bengal Board of Secondary Education",
        stateExams: [
            { name: "WBJEE", fullName: "West Bengal Joint Entrance Exam", type: "engineering", month: "April-May" },
            { name: "WB JEXPO", fullName: "WB Polytechnic Entrance", type: "diploma", month: "April" },
            { name: "WB JELET", fullName: "Lateral Entry Test", type: "lateral", month: "June" }
        ],
        topColleges: [
            { name: "IIT Kharagpur", location: "Kharagpur", type: "IIT", ranking: 1 },
            { name: "NIT Durgapur", location: "Durgapur", type: "NIT", ranking: 2 },
            { name: "Jadavpur University", location: "Kolkata", type: "State", ranking: 3 },
            { name: "IIEST Shibpur", location: "Howrah", type: "Government", ranking: 4 }
        ],
        polytechnics: [
            { name: "Kolkata Govt Polytechnic", location: "Kolkata" },
            { name: "Hooghly Polytechnic", location: "Hooghly" }
        ]
    },
    "odisha": {
        name: "Odisha",
        code: "OD",
        board: "Board of Secondary Education, Odisha",
        stateExams: [
            { name: "OJEE", fullName: "Odisha Joint Entrance Exam", type: "engineering", month: "May" },
            { name: "Odisha DET", fullName: "Diploma Entrance Test", type: "diploma", month: "June" }
        ],
        topColleges: [
            { name: "IIT Bhubaneswar", location: "Bhubaneswar", type: "IIT", ranking: 1 },
            { name: "NIT Rourkela", location: "Rourkela", type: "NIT", ranking: 2 },
            { name: "KIIT Bhubaneswar", location: "Bhubaneswar", type: "Private", ranking: 3 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Bhubaneswar", location: "Bhubaneswar" }
        ]
    },
    "jharkhand": {
        name: "Jharkhand",
        code: "JH",
        board: "Jharkhand Academic Council (JAC)",
        stateExams: [
            { name: "JCECE", fullName: "Jharkhand Combined Entrance", type: "engineering", month: "May" },
            { name: "Jharkhand Polytechnic", fullName: "PECE Diploma", type: "diploma", month: "May" }
        ],
        topColleges: [
            { name: "IIT (ISM) Dhanbad", location: "Dhanbad", type: "IIT", ranking: 1 },
            { name: "NIT Jamshedpur", location: "Jamshedpur", type: "NIT", ranking: 2 },
            { name: "BIT Mesra", location: "Ranchi", type: "Private", ranking: 3 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Ranchi", location: "Ranchi" },
            { name: "Government Polytechnic Dhanbad", location: "Dhanbad" }
        ]
    },
    "chhattisgarh": {
        name: "Chhattisgarh",
        code: "CG",
        board: "Chhattisgarh Board of Secondary Education",
        stateExams: [
            { name: "CG PET", fullName: "CG Pre Engineering Test", type: "engineering", month: "May" },
            { name: "CG PPT", fullName: "CG Pre Polytechnic Test", type: "diploma", month: "May" }
        ],
        topColleges: [
            { name: "NIT Raipur", location: "Raipur", type: "NIT", ranking: 1 },
            { name: "IIT Bhilai", location: "Bhilai", type: "IIT", ranking: 2 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Raipur", location: "Raipur" }
        ]
    },
    "delhi": {
        name: "Delhi",
        code: "DL",
        board: "CBSE (Central Board of Secondary Education)",
        stateExams: [
            { name: "Delhi CET", fullName: "Delhi Polytechnic CET", type: "diploma", month: "June" },
            { name: "IPU CET", fullName: "IP University CET", type: "engineering", month: "May" }
        ],
        topColleges: [
            { name: "IIT Delhi", location: "Delhi", type: "IIT", ranking: 1 },
            { name: "DTU", location: "Delhi", type: "State", ranking: 2 },
            { name: "NSUT", location: "Delhi", type: "State", ranking: 3 },
            { name: "IIIT Delhi", location: "Delhi", type: "IIIT", ranking: 4 }
        ],
        polytechnics: [
            { name: "Pusa Polytechnic", location: "Delhi" },
            { name: "GB Pant Polytechnic", location: "Delhi" }
        ]
    },
    "haryana": {
        name: "Haryana",
        code: "HR",
        board: "Board of School Education Haryana (BSEH)",
        stateExams: [
            { name: "HSTES", fullName: "Haryana State Technical Education", type: "engineering", month: "June" },
            { name: "Haryana Polytechnic", fullName: "DET Admission", type: "diploma", month: "June" }
        ],
        topColleges: [
            { name: "NIT Kurukshetra", location: "Kurukshetra", type: "NIT", ranking: 1 },
            { name: "DCRUST Murthal", location: "Sonipat", type: "State", ranking: 2 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Ambala", location: "Ambala" }
        ]
    },
    "punjab": {
        name: "Punjab",
        code: "PB",
        board: "Punjab School Education Board (PSEB)",
        stateExams: [
            { name: "Punjab CET", fullName: "Punjab Engineering CET", type: "engineering", month: "June" },
            { name: "Punjab Polytechnic", fullName: "JET Polytechnic", type: "diploma", month: "May" }
        ],
        topColleges: [
            { name: "IIT Ropar", location: "Rupnagar", type: "IIT", ranking: 1 },
            { name: "NIT Jalandhar", location: "Jalandhar", type: "NIT", ranking: 2 },
            { name: "Thapar University", location: "Patiala", type: "Private", ranking: 3 }
        ],
        polytechnics: [
            { name: "Government Polytechnic Amritsar", location: "Amritsar" },
            { name: "Government Polytechnic Jalandhar", location: "Jalandhar" }
        ]
    }
};

// Merge with main states object
if (typeof window !== 'undefined') {
    if (window.INDIAN_STATES) {
        Object.assign(window.INDIAN_STATES, INDIAN_STATES_PART2);
    } else {
        window.INDIAN_STATES = INDIAN_STATES_PART2;
    }
}
