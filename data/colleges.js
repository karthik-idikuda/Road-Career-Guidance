// National Colleges Database
// IITs, NITs, IIMs, Medical Colleges, NLUs, and Polytechnics

const COLLEGES = {
    iits: [
        { name: "IIT Bombay", location: "Mumbai", ranking: 1, fees: "₹2.2 LPA", placement: "₹25-70 LPA", courses: ["CSE", "EE", "ME", "CH"] },
        { name: "IIT Delhi", location: "Delhi", ranking: 2, fees: "₹2.2 LPA", placement: "₹22-65 LPA", courses: ["CSE", "EE", "ME", "CE"] },
        { name: "IIT Madras", location: "Chennai", ranking: 3, fees: "₹2.2 LPA", placement: "₹20-60 LPA", courses: ["CSE", "EE", "ME", "AE"] },
        { name: "IIT Kanpur", location: "Kanpur", ranking: 4, fees: "₹2.2 LPA", placement: "₹18-55 LPA", courses: ["CSE", "EE", "ME"] },
        { name: "IIT Kharagpur", location: "Kharagpur", ranking: 5, fees: "₹2.2 LPA", placement: "₹18-50 LPA", courses: ["CSE", "EE", "ME", "AR"] },
        { name: "IIT Roorkee", location: "Roorkee", ranking: 6, fees: "₹2.2 LPA", placement: "₹16-45 LPA", courses: ["CSE", "CE", "EE", "ME"] },
        { name: "IIT Guwahati", location: "Guwahati", ranking: 7, fees: "₹2.2 LPA", placement: "₹16-42 LPA", courses: ["CSE", "EE", "ME"] },
        { name: "IIT Hyderabad", location: "Hyderabad", ranking: 8, fees: "₹2.2 LPA", placement: "₹18-50 LPA", courses: ["CSE", "AI/ML", "EE"] },
        { name: "IIT BHU", location: "Varanasi", ranking: 9, fees: "₹2.2 LPA", placement: "₹15-42 LPA", courses: ["CSE", "EE", "ME", "PH"] },
        { name: "IIT Indore", location: "Indore", ranking: 10, fees: "₹2.2 LPA", placement: "₹15-40 LPA", courses: ["CSE", "EE", "ME"] },
        { name: "IIT Dhanbad (ISM)", location: "Dhanbad", ranking: 11, fees: "₹2.2 LPA", placement: "₹14-38 LPA", courses: ["Mining", "CSE", "EE"] },
        { name: "IIT Gandhinagar", location: "Gandhinagar", ranking: 12, fees: "₹2.2 LPA", placement: "₹15-38 LPA", courses: ["CSE", "EE", "ME"] },
        { name: "IIT Patna", location: "Patna", ranking: 13, fees: "₹2.2 LPA", placement: "₹14-35 LPA", courses: ["CSE", "EE", "ME"] },
        { name: "IIT Jodhpur", location: "Jodhpur", ranking: 14, fees: "₹2.2 LPA", placement: "₹14-35 LPA", courses: ["CSE", "EE", "AI"] },
        { name: "IIT Ropar", location: "Rupnagar", ranking: 15, fees: "₹2.2 LPA", placement: "₹14-35 LPA", courses: ["CSE", "EE", "ME"] },
        { name: "IIT Mandi", location: "Mandi", ranking: 16, fees: "₹2.2 LPA", placement: "₹14-32 LPA", courses: ["CSE", "EE", "Data"] },
        { name: "IIT Bhubaneswar", location: "Bhubaneswar", ranking: 17, fees: "₹2.2 LPA", placement: "₹13-32 LPA", courses: ["CSE", "EE", "ME"] },
        { name: "IIT Tirupati", location: "Tirupati", ranking: 18, fees: "₹2.2 LPA", placement: "₹13-30 LPA", courses: ["CSE", "EE", "ME"] },
        { name: "IIT Palakkad", location: "Palakkad", ranking: 19, fees: "₹2.2 LPA", placement: "₹12-28 LPA", courses: ["CSE", "EE", "ME"] },
        { name: "IIT Bhilai", location: "Bhilai", ranking: 20, fees: "₹2.2 LPA", placement: "₹12-28 LPA", courses: ["CSE", "EE", "ME"] },
        { name: "IIT Jammu", location: "Jammu", ranking: 21, fees: "₹2.2 LPA", placement: "₹12-26 LPA", courses: ["CSE", "EE", "ME"] },
        { name: "IIT Dharwad", location: "Dharwad", ranking: 22, fees: "₹2.2 LPA", placement: "₹12-26 LPA", courses: ["CSE", "EE", "ME"] },
        { name: "IIT Goa", location: "Goa", ranking: 23, fees: "₹2.2 LPA", placement: "₹11-25 LPA", courses: ["CSE", "Math"] }
    ],
    nits: [
        { name: "NIT Trichy", location: "Tiruchirappalli", ranking: 1, fees: "₹1.5 LPA", placement: "₹14-40 LPA", courses: ["CSE", "EE", "ECE", "ME"] },
        { name: "NIT Warangal", location: "Warangal", ranking: 2, fees: "₹1.5 LPA", placement: "₹13-35 LPA", courses: ["CSE", "EE", "ECE", "ME"] },
        { name: "NIT Surathkal", location: "Mangalore", ranking: 3, fees: "₹1.5 LPA", placement: "₹13-35 LPA", courses: ["CSE", "IT", "ECE", "ME"] },
        { name: "NIT Rourkela", location: "Rourkela", ranking: 4, fees: "₹1.4 LPA", placement: "₹12-32 LPA", courses: ["CSE", "EE", "ECE", "ME"] },
        { name: "NIT Calicut", location: "Kozhikode", ranking: 5, fees: "₹1.4 LPA", placement: "₹12-30 LPA", courses: ["CSE", "EE", "ECE", "ME"] },
        { name: "MNIT Jaipur", location: "Jaipur", ranking: 6, fees: "₹1.4 LPA", placement: "₹11-28 LPA", courses: ["CSE", "IT", "ECE", "ME"] },
        { name: "MNNIT Allahabad", location: "Prayagraj", ranking: 7, fees: "₹1.4 LPA", placement: "₹11-28 LPA", courses: ["CSE", "IT", "ECE", "EE"] },
        { name: "NIT Kurukshetra", location: "Kurukshetra", ranking: 8, fees: "₹1.4 LPA", placement: "₹10-26 LPA", courses: ["CSE", "IT", "ECE"] },
        { name: "VNIT Nagpur", location: "Nagpur", ranking: 9, fees: "₹1.4 LPA", placement: "₹10-26 LPA", courses: ["CSE", "EE", "ME"] },
        { name: "SVNIT Surat", location: "Surat", ranking: 10, fees: "₹1.4 LPA", placement: "₹10-25 LPA", courses: ["CSE", "IT", "EE"] },
        { name: "NIT Durgapur", location: "Durgapur", ranking: 11, fees: "₹1.3 LPA", placement: "₹10-24 LPA", courses: ["CSE", "IT", "ECE"] },
        { name: "NIT Silchar", location: "Silchar", ranking: 12, fees: "₹1.3 LPA", placement: "₹9-22 LPA", courses: ["CSE", "EE", "ECE"] },
        { name: "MANIT Bhopal", location: "Bhopal", ranking: 13, fees: "₹1.3 LPA", placement: "₹9-22 LPA", courses: ["CSE", "IT", "ECE"] },
        { name: "NIT Patna", location: "Patna", ranking: 14, fees: "₹1.3 LPA", placement: "₹9-22 LPA", courses: ["CSE", "EE", "ECE"] },
        { name: "NIT Jamshedpur", location: "Jamshedpur", ranking: 15, fees: "₹1.3 LPA", placement: "₹9-21 LPA", courses: ["CSE", "EE", "ME"] }
    ],
    medical: [
        { name: "AIIMS Delhi", location: "New Delhi", ranking: 1, fees: "₹6,000/year", placement: "PG Seats", courses: ["MBBS", "Nursing", "Paramedical"] },
        { name: "CMC Vellore", location: "Vellore", ranking: 2, fees: "₹55,000/year", placement: "100%", courses: ["MBBS", "Nursing", "Allied Health"] },
        { name: "JIPMER", location: "Puducherry", ranking: 3, fees: "₹15,000/year", placement: "PG Seats", courses: ["MBBS", "Nursing"] },
        { name: "MAMC Delhi", location: "New Delhi", ranking: 4, fees: "₹10,000/year", placement: "PG Seats", courses: ["MBBS"] },
        { name: "AIIMS Jodhpur", location: "Jodhpur", ranking: 5, fees: "₹6,000/year", placement: "PG Seats", courses: ["MBBS", "Nursing"] },
        { name: "KMC Manipal", location: "Manipal", ranking: 6, fees: "₹11 LPA", placement: "95%+", courses: ["MBBS", "BDS"] },
        { name: "AIIMS Bhopal", location: "Bhopal", ranking: 7, fees: "₹6,000/year", placement: "PG Seats", courses: ["MBBS", "Nursing"] },
        { name: "Armed Forces Medical", location: "Pune", ranking: 8, fees: "Stipend", placement: "Armed Forces", courses: ["MBBS"] },
        { name: "KGMU Lucknow", location: "Lucknow", ranking: 9, fees: "₹15,000/year", placement: "PG Seats", courses: ["MBBS", "BDS"] },
        { name: "Seth GS Medical", location: "Mumbai", ranking: 10, fees: "₹20,000/year", placement: "PG Seats", courses: ["MBBS"] }
    ],
    iims: [
        { name: "IIM Ahmedabad", location: "Ahmedabad", ranking: 1, fees: "₹25 LPA", placement: "₹30-90 LPA", courses: ["MBA", "FABM", "PhD"] },
        { name: "IIM Bangalore", location: "Bangalore", ranking: 2, fees: "₹25 LPA", placement: "₹30-85 LPA", courses: ["MBA", "PGPPM", "PhD"] },
        { name: "IIM Calcutta", location: "Kolkata", ranking: 3, fees: "₹27 LPA", placement: "₹28-80 LPA", courses: ["MBA", "MBAEx", "PhD"] },
        { name: "IIM Lucknow", location: "Lucknow", ranking: 4, fees: "₹21 LPA", placement: "₹25-60 LPA", courses: ["MBA", "IPMX"] },
        { name: "IIM Kozhikode", location: "Kozhikode", ranking: 5, fees: "₹21 LPA", placement: "₹25-55 LPA", courses: ["MBA", "PhD"] },
        { name: "IIM Indore", location: "Indore", ranking: 6, fees: "₹20 LPA", placement: "₹24-50 LPA", courses: ["MBA", "IPM"] },
        { name: "XLRI Jamshedpur", location: "Jamshedpur", ranking: 7, fees: "₹26 LPA", placement: "₹26-65 LPA", courses: ["MBA-HRM", "MBA-BM"] },
        { name: "FMS Delhi", location: "Delhi", ranking: 8, fees: "₹2 LPA", placement: "₹28-70 LPA", courses: ["MBA"] },
        { name: "ISB Hyderabad", location: "Hyderabad", ranking: 9, fees: "₹42 LPA", placement: "₹30-95 LPA", courses: ["PGP", "MFAB"] },
        { name: "IIM Shillong", location: "Shillong", ranking: 10, fees: "₹17 LPA", placement: "₹18-40 LPA", courses: ["MBA", "PhD"] }
    ],
    law: [
        { name: "NLSIU Bangalore", location: "Bangalore", ranking: 1, fees: "₹2.5 LPA", placement: "₹15-35 LPA", courses: ["BA LLB", "LLM"] },
        { name: "NALSAR Hyderabad", location: "Hyderabad", ranking: 2, fees: "₹2.4 LPA", placement: "₹14-30 LPA", courses: ["BA LLB", "LLM"] },
        { name: "NLU Delhi", location: "Delhi", ranking: 3, fees: "₹2.5 LPA", placement: "₹14-30 LPA", courses: ["BA LLB", "LLM"] },
        { name: "NUJS Kolkata", location: "Kolkata", ranking: 4, fees: "₹2.4 LPA", placement: "₹12-28 LPA", courses: ["BA LLB", "LLM"] },
        { name: "GNLU Gandhinagar", location: "Gandhinagar", ranking: 5, fees: "₹2.3 LPA", placement: "₹12-25 LPA", courses: ["BA LLB", "LLM"] },
        { name: "NLU Jodhpur", location: "Jodhpur", ranking: 6, fees: "₹2.2 LPA", placement: "₹11-24 LPA", courses: ["BA LLB", "LLM"] },
        { name: "RGNUL Patiala", location: "Patiala", ranking: 7, fees: "₹2 LPA", placement: "₹10-22 LPA", courses: ["BA LLB", "LLM"] },
        { name: "HNLU Raipur", location: "Raipur", ranking: 8, fees: "₹1.8 LPA", placement: "₹10-20 LPA", courses: ["BA LLB", "LLM"] }
    ],
    polytechnic: [
        { name: "Government Polytechnic Mumbai", location: "Mumbai", ranking: 1, fees: "₹25,000/year", placement: "₹3-6 LPA", courses: ["Mechanical", "Civil", "Electrical"] },
        { name: "Government Polytechnic Pune", location: "Pune", ranking: 2, fees: "₹25,000/year", placement: "₹3-5 LPA", courses: ["Mechanical", "Civil", "Computer"] },
        { name: "S.H. Kelkar Polytechnic", location: "Devgad", ranking: 3, fees: "₹30,000/year", placement: "₹3-5 LPA", courses: ["Computer", "E&TC"] },
        { name: "Central Polytechnic Chennai", location: "Chennai", ranking: 4, fees: "₹15,000/year", placement: "₹2.5-4 LPA", courses: ["Mechanical", "EEE", "ECE"] },
        { name: "Government Polytechnic Bengaluru", location: "Bangalore", ranking: 5, fees: "₹10,000/year", placement: "₹2.5-4 LPA", courses: ["CSE", "Mechanical", "Civil"] },
        { name: "Pusa Polytechnic Delhi", location: "Delhi", ranking: 6, fees: "₹20,000/year", placement: "₹3-5 LPA", courses: ["Mechanical", "Electrical", "Civil"] },
        { name: "Government Polytechnic Hyderabad", location: "Hyderabad", ranking: 7, fees: "₹10,000/year", placement: "₹2.5-4 LPA", courses: ["CSE", "ECE", "Mechanical"] },
        { name: "Government Polytechnic Lucknow", location: "Lucknow", ranking: 8, fees: "₹15,000/year", placement: "₹2.5-4 LPA", courses: ["Mechanical", "Civil", "Electrical"] }
    ]
};

// Export for use
if (typeof window !== 'undefined') {
    window.COLLEGES = COLLEGES;
}
