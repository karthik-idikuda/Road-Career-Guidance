const careerDatabase = [
    // --- TECHNOLOGY & ENGINEERING ---
    {
        id: 'software-engineer',
        title: 'Software Engineer',
        category: 'technology',
        description: 'Architects of the digital world, building applications and systems that power modern life.',
        matchCriteria: {
            interests: ['building', 'analyzing', 'technology', 'coding'],
            skills: ['programming', 'problem-solving', 'mathematics'],
            education: ['12th', 'bachelors'],
            stream: ['science-pcm', 'computer-science']
        },
        salary: '₹8 - 25 LPA',
        growth: 'Very High',
        roadmap: [
            { phase: 'Foundation', title: 'Master the Basics', description: 'Focus on Logic, Mathematics. Learn Python or Java. Clear JEE/BITSAT for top colleges.', icon: 'book-open' },
            { phase: 'Skill Up', title: 'Data Structures & Algo', description: 'The heart of computing. Solving LeetCode problems is a rite of passage.', icon: 'code' },
            { phase: 'Build', title: 'Create Projects', description: 'Don\'t just read. Build a web app, a game, or a tool. GitHub is your resume.', icon: 'hammer' },
            { phase: 'Professional', title: 'Internships', description: 'Get real-world experience. Learn Git, Agile, and Teamwork.', icon: 'briefcase' }
        ],
        colleges: [
            { name: 'IIT Bombay', location: 'Mumbai', type: 'iit' },
            { name: 'IIIT Hyderabad', location: 'Hyderabad', type: 'iiit' },
            { name: 'BITS Pilani', location: 'Rajasthan', type: 'private' }
        ],
        resources: [
            { name: 'freeCodeCamp', type: 'Course', link: 'https://freecodecamp.org' },
            { name: 'CS50 by Harvard', type: 'Course', link: 'https://pll.harvard.edu/course/cs50' }
        ]
    },
    {
        id: 'data-scientist',
        title: 'Data Scientist',
        category: 'technology',
        description: 'Detectives of the modern age, finding patterns and stories hidden within massive datasets.',
        matchCriteria: {
            interests: ['analyzing', 'mathematics', 'research', 'patterns'],
            skills: ['data-analysis', 'mathematics', 'critical-thinking'],
            education: ['bachelors', 'masters'],
            stream: ['science-pcm', 'statistics']
        },
        salary: '₹12 - 35 LPA',
        growth: 'Explosive',
        roadmap: [
            { phase: 'Foundation', title: 'Statistics & Math', description: 'Probability, Linear Algebra, and Calculus are your best friends.', icon: 'book-open' },
            { phase: 'Tools', title: 'Python & SQL', description: 'Master Pandas, NumPy, and querying databases.', icon: 'database' },
            { phase: 'Advanced', title: 'Machine Learning', description: 'Learn Scikit-Learn, TensorFlow. Understand how models learn.', icon: 'brain-circuit' },
            { phase: 'Expert', title: 'Real-world Data', description: 'Participate in Kaggle competitions. Solve messy, real problems.', icon: 'trophy' }
        ],
        colleges: [
            { name: 'ISI Kolkata', location: 'Kolkata', type: 'central' },
            { name: 'IIT Madras', location: 'Chennai', type: 'iit' },
            { name: 'IISc Bangalore', location: 'Bangalore', type: 'central' }
        ],
        resources: [
            { name: 'Kaggle', type: 'Platform', link: 'https://kaggle.com' },
            { name: 'Andrew Ng ML', type: 'Course', link: 'https://coursera.org' }
        ]
    },
    {
        id: 'mechanical-engineer',
        title: 'Mechanical Engineer',
        category: 'engineering',
        description: 'Designers of machines, engines, and physical systems that move the world.',
        matchCriteria: {
            interests: ['machines', 'physics', 'building', 'automobiles'],
            skills: ['physics', 'mathematics', 'spatial-reasoning'],
            education: ['12th', 'bachelors'],
            stream: ['science-pcm']
        },
        salary: '₹6 - 15 LPA',
        growth: 'Stable',
        roadmap: [
            { phase: 'Entrance', title: 'Clear JEE Main/Adv', description: 'Secure a seat in top NITs/IITs. Focus on Mechanics and Thermodynamics.', icon: 'pen-tool' },
            { phase: 'Core', title: 'CAD & Design', description: 'Learn AutoCAD, SolidWorks. Design 3D models of gears and engines.', icon: 'box' },
            { phase: 'Specialization', title: 'Robotics/EVs', description: 'The future is electric and automated. Gain skills in Mechatronics.', icon: 'cpu' },
            { phase: 'Industry', title: 'Core Jobs', description: 'Apply to Tata Motors, L&T, Mahindra. Field experience is gold.', icon: 'briefcase' }
        ],
        colleges: [
            { name: 'IIT Madras', location: 'Chennai', type: 'iit' },
            { name: 'IIT Roorkee', location: 'Roorkee', type: 'iit' },
            { name: 'BITS Pilani', location: 'Rajasthan', type: 'private' }
        ],
        resources: [
            { name: 'NPTEL', type: 'Courses', link: 'https://nptel.ac.in' },
            { name: 'GrabCAD', type: 'Community', link: 'https://grabcad.com' }
        ]
    },

    // --- HEALTHCARE & MEDICINE ---
    {
        id: 'doctor-mbbs',
        title: 'Medical Doctor (MBBS)',
        category: 'healthcare',
        description: 'Healers who combine scientific knowledge with compassion to save and improve lives.',
        matchCriteria: {
            interests: ['helping', 'science', 'people', 'biology'],
            skills: ['science', 'communication', 'empathy', 'memorization'],
            education: ['12th', 'bachelors'],
            stream: ['science-pcb', 'medical']
        },
        salary: '₹10 - 30 LPA',
        growth: 'Stable',
        roadmap: [
            { phase: 'Preparation', title: 'Crack NEET UG', description: 'The only gateway. Deep dive into NCERT Biology, Physics, Chemistry.', icon: 'book' },
            { phase: 'Education', title: 'MBBS Degree', description: '5.5 years of rigorous study. Anatomy, Physiology, Pharmacology.', icon: 'graduation-cap' },
            { phase: 'Training', title: 'Internship', description: '1 year of compulsory rotatory internship in a hospital.', icon: 'activity' },
            { phase: 'Specialization', title: 'NEET PG / INI-CET', description: 'Clear PG exams to specialize in Surgery, Medicine, etc.', icon: 'heart-pulse' }
        ],
        colleges: [
            { name: 'AIIMS Delhi', location: 'Delhi', type: 'central' },
            { name: 'CMC Vellore', location: 'Tamil Nadu', type: 'private' },
            { name: 'JIPMER', location: 'Puducherry', type: 'central' }
        ],
        resources: [
            { name: 'Khan Academy Medicine', type: 'Library', link: 'https://khanacademy.org' },
            { name: 'Marrow', type: 'App', link: 'https://www.marrow.com' }
        ]
    },
    {
        id: 'biotechnologist',
        title: 'Biotechnologist',
        category: 'healthcare',
        description: 'Innovators who use biology to solve problems, from vaccines to sustainable food.',
        matchCriteria: {
            interests: ['research', 'biology', 'technology'],
            skills: ['science', 'laboratory', 'analysis'],
            education: ['bachelors', 'masters'],
            stream: ['science-pcb', 'science-pcm']
        },
        salary: '₹5 - 12 LPA',
        growth: 'High',
        roadmap: [
            { phase: 'Entrance', title: 'Bachelor\'s Degree', description: 'B.Tech/B.Sc in Biotech. Focus on Genetics and Microbiology.', icon: 'flask-conical' },
            { phase: 'Lab Skills', title: 'Hands-on Training', description: 'Intern in research labs. Learn PCR, Cell Culture.', icon: 'microscope' },
            { phase: 'Advanced', title: 'Master\'s/PhD', description: 'Essential for R&D roles. Clear GATE/CSIR-NET for fellowships.', icon: 'award' },
            { phase: 'Career', title: 'Pharma & Research', description: 'Join Biocon, Serum Institute, or academic research.', icon: 'briefcase' }
        ],
        colleges: [
            { name: 'IIT Delhi', location: 'Delhi', type: 'iit' },
            { name: 'VIT Vellore', location: 'Tamil Nadu', type: 'private' },
            { name: 'ICT Mumbai', location: 'Mumbai', type: 'state' }
        ],
        resources: [
            { name: 'Nature Biotechnology', type: 'Journal', link: 'https://www.nature.com/nbt/' }
        ]
    },

    // --- BUSINESS & COMMERCE ---
    {
        id: 'chartered-accountant',
        title: 'Chartered Accountant',
        category: 'business',
        description: 'Financial experts who navigate the complex world of business, taxation, and auditing.',
        matchCriteria: {
            interests: ['analyzing', 'business', 'finance', 'money'],
            skills: ['mathematics', 'finance', 'critical-thinking', 'law'],
            education: ['12th', 'bachelors'],
            stream: ['commerce']
        },
        salary: '₹7 - 25 LPA',
        growth: 'Steady',
        roadmap: [
            { phase: 'Entry', title: 'CA Foundation', description: 'Register after 12th. Tests accounting and mercantile law.', icon: 'file-text' },
            { phase: 'Intermediate', title: 'CA Inter', description: 'The grueling middle stage. Covers tax, audit, and corporate law.', icon: 'book-open' },
            { phase: 'Training', title: 'Articleship', description: '3 years of mandatory practical training under a practicing CA.', icon: 'briefcase' },
            { phase: 'Final', title: 'CA Final', description: 'One of the toughest exams globally. Earn the prefix "CA".', icon: 'award' }
        ],
        colleges: [
            { name: 'ICAI (Institute)', location: 'Pan-India', type: 'institute' },
            { name: 'SRCC', location: 'Delhi', type: 'central' },
            { name: 'St. Xaviers', location: 'Kolkata', type: 'private' }
        ],
        resources: [
            { name: 'ICAI BOS', type: 'Portal', link: 'https://www.icai.org/' }
        ]
    },
    {
        id: 'investment-banker',
        title: 'Investment Banker',
        category: 'business',
        description: 'High-stakes financial advisors helping companies raise capital and merge.',
        matchCriteria: {
            interests: ['finance', 'markets', 'negotiation', 'money'],
            skills: ['finance', 'communication', 'analysis', 'networking'],
            education: ['bachelors', 'mba'],
            stream: ['commerce', 'science-pcm']
        },
        salary: '₹15 - 50 LPA',
        growth: 'High',
        roadmap: [
            { phase: 'Undergrad', title: 'Top College', description: 'Graduation from a top-tier college (SRCC, IIT, St. Stephens).', icon: 'building' },
            { phase: 'Skills', title: 'Financial Modeling', description: 'Master Excel, Valuation techniques, and PowerPoint.', icon: 'bar-chart' },
            { phase: 'Master', title: 'MBA Finance', description: 'Target IIM A/B/C. Campus placements are the main entry route.', icon: 'graduation-cap' },
            { phase: 'Career', title: 'The Grind', description: 'Long hours, high rewards. Analyst -> Associate -> VP.', icon: 'trending-up' }
        ],
        colleges: [
            { name: 'IIM Ahmedabad', location: 'Gujarat', type: 'iit' },
            { name: 'IIM Bangalore', location: 'Bangalore', type: 'iit' },
            { name: 'ISB', location: 'Hyderabad', type: 'private' }
        ],
        resources: [
            { name: 'Investopedia', type: 'Library', link: 'https://www.investopedia.com/' },
            { name: 'CFA Institute', type: 'Certification', link: 'https://www.cfainstitute.org/' }
        ]
    },

    // --- CREATIVE & DESIGN ---
    {
        id: 'ux-designer',
        title: 'UX/UI Designer',
        category: 'creative',
        description: 'Digital architects who ensure technology is intuitive, accessible, and beautiful to use.',
        matchCriteria: {
            interests: ['creating', 'design', 'people', 'art'],
            skills: ['design', 'empathy', 'creativity', 'visual'],
            education: ['12th', 'bachelors', 'diploma'],
            stream: ['arts', 'science', 'commerce']
        },
        salary: '₹6 - 20 LPA',
        growth: 'High',
        roadmap: [
            { phase: 'Observe', title: 'Design Thinking', description: 'Learn to empathize with users. Understand their pain points.', icon: 'eye' },
            { phase: 'Tools', title: 'Master Figma', description: 'The industry standard tool. Learn auto-layout, components, and prototyping.', icon: 'pen-tool' },
            { phase: 'Create', title: 'Build Portfolio', description: 'Redesign existing apps or solve new problems. Case studies are key.', icon: 'folder-open' },
            { phase: 'Refine', title: 'User Testing', description: 'Watch people use your designs. Iterate based on feedback.', icon: 'users' }
        ],
        colleges: [
            { name: 'NID Ahmedabad', location: 'Gujarat', type: 'central' },
            { name: 'IDC, IIT Bombay', location: 'Mumbai', type: 'iit' },
            { name: 'Srishti Manipal', location: 'Bangalore', type: 'private' }
        ],
        resources: [
            { name: 'Nielsen Norman', type: 'Articles', link: 'https://nngroup.com' },
            { name: 'Laws of UX', type: 'Guide', link: 'https://lawsofux.com' }
        ]
    },
    {
        id: 'fashion-designer',
        title: 'Fashion Designer',
        category: 'creative',
        description: 'Trendsetters who create clothing and accessories, blending art with functionality.',
        matchCriteria: {
            interests: ['fashion', 'art', 'creating', 'trends'],
            skills: ['creativity', 'drawing', 'visual', 'textiles'],
            education: ['12th', 'bachelors'],
            stream: ['arts', 'commerce', 'science']
        },
        salary: '₹4 - 15 LPA',
        growth: 'Competitive',
        roadmap: [
            { phase: 'Entrance', title: 'NIFT Exam', description: 'Crack the NIFT entrance test. Focus on sketching and aptitude.', icon: 'pen-tool' },
            { phase: 'Education', title: 'B.Des Fashion', description: 'Learn Pattern Making, Garment Construction, and History of Art.', icon: 'scissors' },
            { phase: 'Portfolio', title: 'Create Collections', description: 'Develop your signature style. Participate in college fashion shows.', icon: 'shirt' },
            { phase: 'Industry', title: 'Internships', description: 'Work with established designers or retail brands.', icon: 'briefcase' }
        ],
        colleges: [
            { name: 'NIFT Delhi', location: 'Delhi', type: 'central' },
            { name: 'NIFT Mumbai', location: 'Mumbai', type: 'central' },
            { name: 'Pearl Academy', location: 'Delhi', type: 'private' }
        ],
        resources: [
            { name: 'Vogue Runway', type: 'Inspiration', link: 'https://www.vogue.com/fashion-shows' },
            { name: 'BoF', type: 'Industry News', link: 'https://www.businessoffashion.com/' }
        ]
    },

    // --- LAW & HUMANITIES ---
    {
        id: 'lawyer',
        title: 'Corporate Lawyer',
        category: 'legal',
        description: 'Legal experts who advise companies on their rights, responsibilities, and transactions.',
        matchCriteria: {
            interests: ['debate', 'reading', 'analysis', 'justice'],
            skills: ['communication', 'critical-thinking', 'writing', 'negotiation'],
            education: ['12th', 'bachelors'],
            stream: ['arts', 'commerce', 'science']
        },
        salary: '₹8 - 20 LPA',
        growth: 'High',
        roadmap: [
            { phase: 'Entrance', title: 'CLAT Exam', description: 'The gateway to NLUs. Tests English, Logic, and Legal Aptitude.', icon: 'scale' },
            { phase: 'Education', title: 'BA LLB (5 Years)', description: 'Integrated course. Moots, Debates, and Internships are crucial.', icon: 'graduation-cap' },
            { phase: 'Training', title: 'Internships', description: 'Intern at Law Firms and under Judges. Build your network.', icon: 'briefcase' },
            { phase: 'Career', title: 'Placement', description: 'Join top law firms (SAM, CAM, Khaitan) via campus recruitment.', icon: 'building' }
        ],
        colleges: [
            { name: 'NLSIU Bangalore', location: 'Bangalore', type: 'central' },
            { name: 'NALSAR', location: 'Hyderabad', type: 'central' },
            { name: 'NLU Delhi', location: 'Delhi', type: 'central' }
        ],
        resources: [
            { name: 'Bar & Bench', type: 'News', link: 'https://www.barandbench.com/' },
            { name: 'LiveLaw', type: 'Legal News', link: 'https://www.livelaw.in/' }
        ]
    },
    {
        id: 'psychologist',
        title: 'Clinical Psychologist',
        category: 'healthcare',
        description: 'Mental health professionals who help people navigate emotional and psychological challenges.',
        matchCriteria: {
            interests: ['helping', 'people', 'mind', 'listening'],
            skills: ['empathy', 'communication', 'listening', 'analysis'],
            education: ['bachelors', 'masters', 'mphil'],
            stream: ['arts', 'science-pcb']
        },
        salary: '₹4 - 12 LPA',
        growth: 'Increasing',
        roadmap: [
            { phase: 'Undergrad', title: 'BA/BSc Psychology', description: 'Understand the basics of human behavior and cognition.', icon: 'book-open' },
            { phase: 'Master', title: 'MA/MSc Psychology', description: 'Specialize in Clinical Psychology. Research and dissertation.', icon: 'graduation-cap' },
            { phase: 'Licensure', title: 'M.Phil (RCI)', description: '2 years of clinical training. Essential to practice as a Clinical Psychologist in India.', icon: 'badge-check' },
            { phase: 'Practice', title: 'Therapy', description: 'Start private practice or join hospitals/NGOs.', icon: 'heart-handshake' }
        ],
        colleges: [
            { name: 'TISS Mumbai', location: 'Mumbai', type: 'central' },
            { name: 'Delhi University', location: 'Delhi', type: 'central' },
            { name: 'NIMHANS', location: 'Bangalore', type: 'central' }
        ],
        resources: [
            { name: 'APA', type: 'Association', link: 'https://www.apa.org/' },
            { name: 'Psychology Today', type: 'Articles', link: 'https://www.psychologytoday.com/' }
        ]
    },
    
    // --- OTHERS ---
    {
        id: 'pilot',
        title: 'Commercial Pilot',
        category: 'aviation',
        description: 'Skilled aviators who fly passengers and cargo across the globe.',
        matchCriteria: {
            interests: ['flying', 'travelling', 'machines', 'adventure'],
            skills: ['spatial-reasoning', 'quick-decisions', 'physics', 'calmness'],
            education: ['12th'],
            stream: ['science-pcm']
        },
        salary: '₹15 - 40 LPA',
        growth: 'High',
        roadmap: [
            { phase: 'Eligibility', title: '12th PCM', description: 'Physics and Maths in 12th are mandatory. Medical Class 2 clearance.', icon: 'check-circle' },
            { phase: 'Training', title: 'Flying School', description: 'Join a Flying Club. Clock 200 hours of flying time (CPL).', icon: 'plane' },
            { phase: 'Exams', title: 'DGCA Exams', description: 'Clear exams in Navigation, Meteorology, and Regulations.', icon: 'file-text' },
            { phase: 'Type Rating', title: 'Specialization', description: 'Training on specific aircraft (Airbus A320/Boeing 737).', icon: 'settings' }
        ],
        colleges: [
            { name: 'IGRUA', location: 'Raebareli', type: 'central' },
            { name: 'NFTI', location: 'Gondia', type: 'private' },
            { name: 'Madhya Pradesh Flying Club', location: 'Indore', type: 'state' }
        ],
        resources: [
            { name: 'DGCA', type: 'Regulatory', link: 'https://www.dgca.gov.in/' }
        ]
    }
];

// Export
window.careerDatabase = careerDatabase;
