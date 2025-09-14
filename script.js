const educationalStages = {
    "10th": {
        quizQuestions: [
            {
                question: "What subjects do you enjoy the most after 10th grade?",
                options: [
                    { text: "Math and Science", value: "science" },
                    { text: "Business and Economics", value: "commerce" },
                    { text: "History and Literature", value: "arts" },
                    { text: "Hands-on and practical subjects", value: "vocational" }
                ]
            },
            {
                question: "What kind of activities do you prefer after 10th grade?",
                options: [
                    { text: "Solving complex problems and experiments", value: "science" },
                    { text: "Managing money and organizing events", value: "commerce" },
                    { text: "Reading, writing, and creative arts", value: "arts" },
                    { text: "Building or fixing things", value: "vocational" }
                ]
            }
        ],
        streams: {
            science: {
                stream: "Science (PCM/PCB)",
                description: "Focuses on natural phenomena, mathematical concepts, and scientific principles.",
                educational_pathway: "10th -> 12th (Science) -> UG (B.Tech/MBBS) -> PG",
                options: [
                    {
                        name: "Engineer",
                        skills: "Problem-solving, analytical thinking, mathematics, physics",
                        subjects: "PCM (Physics, Chemistry, Math)",
                        opportunities: "Software Developer, Civil Engineer, Mechanical Engineer, Electrical Engineer"
                    },
                    {
                        name: "Doctor / Healthcare Professional",
                        skills: "Biology, chemistry, empathy, critical thinking, communication",
                        subjects: "PCB (Physics, Chemistry, Biology)",
                        opportunities: "Physician, Surgeon, Nurse, Pharmacist, Dentist"
                    },
                    {
                        name: "Scientist / Researcher",
                        skills: "Research, analytical skills, patience, specific scientific discipline knowledge",
                        subjects: "PCM or PCB depending on specialization",
                        opportunities: "Biologist, Chemist, Physicist, Environmental Scientist"
                    }
                ],
                resources: [
                    { name: "NPTEL Courses", url: "https://nptel.ac.in/" },
                    { name: "Coursera Engineering Courses", url: "https://www.coursera.org/courses?query=engineering" }
                ]
            },
            commerce: {
                stream: "Commerce",
                description: "Deals with business, trade, finance, and economics.",
                educational_pathway: "10th -> 12th (Commerce) -> UG (B.Com/BBA) -> PG",
                options: [
                    {
                        name: "Accountant / Financial Analyst",
                        skills: "Mathematics, financial analysis, attention to detail, regulatory knowledge",
                        subjects: "Accountancy, Business Studies, Economics, Math",
                        opportunities: "Chartered Accountant, Financial Planner, Investment Banker"
                    },
                    {
                        name: "Business Manager / Entrepreneur",
                        skills: "Leadership, communication, strategic planning, marketing",
                        subjects: "Business Studies, Economics, Entrepreneurship",
                        opportunities: "Business Owner, Marketing Manager, HR Manager"
                    },
                    {
                        name: "Economist",
                        skills: "Data analysis, statistical modeling, economic theory",
                        subjects: "Economics, Statistics, Mathematics",
                        opportunities: "Economic Analyst, Policy Advisor, Market Researcher"
                    }
                ],
                resources: [
                    { name: "ICAI - The Institute of Chartered Accountants of India", url: "https://www.icai.org/" },
                    { name: "Khan Academy - Finance & Capital Markets", url: "https://www.khanacademy.org/economics-finance-domain/core-finance" }
                ]
            },
            arts: {
                stream: "Arts / Humanities",
                description: "Explores human culture, society, and creative expression.",
                educational_pathway: "10th -> 12th (Arts) -> UG (BA/BFA) -> PG",
                options: [
                    {
                        name: "Lawyer / Legal Professional",
                        skills: "Critical thinking, communication, research, argumentation",
                        subjects: "Political Science, History, Sociology, English",
                        opportunities: "Advocate, Legal Advisor, Judge"
                    },
                    {
                        name: "Designer / Artist",
                        skills: "Creativity, aesthetic sense, technical design skills (e.g., software)",
                        subjects: "Fine Arts, Graphic Design, Literature",
                        opportunities: "Graphic Designer, Web Designer, Fashion Designer, Animator"
                    },
                    {
                        name: "Teacher / Professor",
                        skills: "Communication, pedagogy, subject matter expertise, patience",
                        subjects: "Any subject of specialization",
                        opportunities: "School Teacher, University Professor, Educational Consultant"
                    },
                    {
                        name: "Journalist / Content Writer",
                        skills: "Writing, research, communication, critical analysis",
                        subjects: "English, Journalism, Mass Communication, Political Science",
                        opportunities: "Reporter, Editor, Copywriter, Blogger"
                    }
                ],
                resources: [
                    { name: "National School of Drama", url: "https://nsd.gov.in/" },
                    { name: "Pratham Books (Writing Resources)", url: "https://prathambooks.org/" }
                ]
            },
            vocational: {
                stream: "Diploma Courses / Vocational Training",
                description: "Focuses on practical skills and job-specific training for immediate employment.",
                educational_pathway: "10th -> Diploma/Vocational Training -> Job",
                options: [
                    {
                        name: "Technician (e.g., IT, Electrical, Mechanical)",
                        skills: "Technical proficiency, problem-solving, hands-on skills",
                        subjects: "Relevant technical subjects",
                        opportunities: "IT Support, Electrician, Mechanic, HVAC Technician"
                    },
                    {
                        name: "Chef / Culinary Professional",
                        skills: "Cooking techniques, creativity, food safety, management",
                        subjects: "Culinary Arts",
                        opportunities: "Chef, Restaurateur, Caterer"
                    },
                    {
                        name: "Graphic Designer / Web Developer (Diploma)",
                        skills: "Software proficiency, creativity, problem-solving",
                        subjects: "Digital Media, Web Design Principles",
                        opportunities: "Junior Graphic Designer, Front-end Developer"
                    }
                ],
                resources: [
                    { name: "Skill India", url: "https://www.skillindia.gov.in/" },
                    { name: "National Skill Development Corporation (NSDC)", url: "https://nsdcindia.org/" }
                ]
            }
        }
    },
    "12th": {
        quizQuestions: [
            {
                question: "Which undergraduate program aligns with your interests?",
                options: [
                    { text: "Engineering/Technology", value: "engineering" },
                    { text: "Medical/Healthcare", value: "medical" },
                    { text: "Business/Commerce", value: "business" },
                    { text: "Arts/Humanities/Law", value: "arts_law" }
                ]
            },
            {
                question: "What subjects did you excel in during 11th and 12th grade?",
                options: [
                    { text: "Physics, Chemistry, Mathematics", value: "pcm" },
                    { text: "Physics, Chemistry, Biology", value: "pcb" },
                    { text: "Accountancy, Business Studies, Economics", value: "commerce_subjects" },
                    { text: "History, Political Science, Literature", value: "arts_subjects" }
                ]
            }
        ],
        streams: {
            engineering: {
                stream: "Undergraduate Engineering (B.Tech)",
                description: "Focuses on applied science and technology to design, build, and maintain structures, machines, and systems.",
                educational_pathway: "12th (Science) -> B.Tech -> M.Tech/MBA -> Job",
                options: [
                    {
                        name: "Software Engineer",
                        skills: "Programming, algorithms, data structures, problem-solving",
                        subjects: "Computer Science, Mathematics",
                        opportunities: "Software Developer, Data Scientist, AI Engineer"
                    },
                    {
                        name: "Civil Engineer",
                        skills: "Structural analysis, design, project management, construction techniques",
                        subjects: "Civil Engineering subjects",
                        opportunities: "Construction Manager, Structural Engineer, Urban Planner"
                    }
                ],
                resources: [
                    { name: "IITs & NITs Admissions", url: "https://jeemain.nta.nic.in/" },
                    { name: "Gate Exam Info", url: "https://gate.iitd.ac.in/" }
                ]
            },
            medical: {
                stream: "Undergraduate Medical (MBBS/BDS)",
                description: "A path for those interested in healthcare, diagnosis, treatment, and prevention of diseases.",
                educational_pathway: "12th (Science/PCB) -> MBBS/BDS -> MD/MS/MDS -> Job",
                options: [
                    {
                        name: "Doctor (MBBS)",
                        skills: "Biology, anatomy, patient care, diagnosis, communication",
                        subjects: "Biology, Chemistry, Physics",
                        opportunities: "General Physician, Specialist Doctor, Surgeon"
                    },
                    {
                        name: "Dentist (BDS)",
                        skills: "Oral health, dental procedures, patient care, precision",
                        subjects: "Biology, Chemistry, Physics",
                        opportunities: "Dental Surgeon, Orthodontist, Periodontist"
                    }
                ],
                resources: [
                    { name: "NEET Exam Info", url: "https://ntaneet.nic.in/" },
                    { name: "Medical Council of India", url: "https://www.nmc.org.in/" }
                ]
            }
        }
    },
    "ug": {
        quizQuestions: [
            {
                question: "What field are you pursuing or interested in for your undergraduate studies?",
                options: [
                    { text: "Engineering/Technology", value: "ug_engineering" },
                    { text: "Medicine/Life Sciences", value: "ug_medical" },
                    { text: "Business/Management", value: "ug_business" },
                    { text: "Arts/Humanities/Social Sciences", value: "ug_arts" },
                    { text: "Law", value: "ug_law" },
                    { text: "Design/Fine Arts", value: "ug_design" }
                ]
            },
            {
                question: "What are your career aspirations after graduation?",
                options: [
                    { text: "Higher Studies (Masters/PhD)", value: "higher_studies" },
                    { text: "Entry-level Job in my field", value: "entry_job" },
                    { text: "Start my own venture", value: "entrepreneurship" },
                    { text: "Government/Public Service", value: "govt_service" }
                ]
            }
        ],
        streams: {
            ug_engineering: {
                stream: "Undergraduate Engineering",
                description: "Advanced studies in engineering disciplines, often leading to specialized roles or research.",
                educational_pathway: "UG (B.Tech) -> M.Tech/MS -> Job/PhD",
                options: [
                    {
                        name: "Data Scientist",
                        skills: "Statistics, programming (Python/R), machine learning, data visualization",
                        subjects: "Data Science, Computer Science, Mathematics",
                        opportunities: "AI/ML Engineer, Business Intelligence Analyst, Data Engineer"
                    },
                    {
                        name: "Cybersecurity Analyst",
                        skills: "Network security, ethical hacking, risk assessment, incident response",
                        subjects: "Cybersecurity, Computer Networks",
                        opportunities: "Security Consultant, Information Security Officer"
                    }
                ],
                resources: [
                    { name: "NPTEL Advanced Courses", url: "https://nptel.ac.in/" },
                    { name: "Coursera Masters Programs", url: "https://www.coursera.org/degrees/masters" }
                ]
            },
            ug_medical: {
                stream: "Undergraduate Medical/Life Sciences",
                description: "Specialized medical training, research, or public health roles.",
                educational_pathway: "UG (MBBS/BDS) -> MD/MS/MDS -> Super Specialization/Research",
                options: [
                    {
                        name: "Medical Specialist (MD/MS)",
                        skills: "Specialized medical knowledge, clinical skills, research, patient management",
                        subjects: "Specific medical specialties",
                        opportunities: "Cardiologist, Neurologist, Surgeon, Pediatrician"
                    },
                    {
                        name: "Biomedical Researcher",
                        skills: "Lab techniques, data analysis, scientific writing, grant applications",
                        subjects: "Biotechnology, Microbiology, Genetics",
                        opportunities: "Research Scientist, Clinical Researcher"
                    }
                ],
                resources: [
                    { name: "Indian Council of Medical Research (ICMR)", url: "https://www.icmr.gov.in/" },
                    { name: "PubMed (Medical Research)", url: "https://pubmed.ncbi.nlm.nih.gov/" }
                ]
            },
            ug_business: {
                stream: "Undergraduate Business/Management",
                description: "Advanced business knowledge, leadership skills, and strategic thinking for corporate roles.",
                educational_pathway: "UG (B.Com/BBA) -> MBA/M.Com -> Job/Entrepreneurship",
                options: [
                    {
                        name: "Marketing Manager",
                        skills: "Marketing strategy, digital marketing, communication, analytics",
                        subjects: "Marketing, Brand Management, Consumer Behavior",
                        opportunities: "Digital Marketing Head, Product Manager"
                    },
                    {
                        name: "Financial Manager",
                        skills: "Financial modeling, investment analysis, risk management, regulatory compliance",
                        subjects: "Finance, Accounting, Economics",
                        opportunities: "CFO, Investment Portfolio Manager"
                    }
                ],
                resources: [
                    { name: "IIMs Admission (CAT Exam)", url: "https://iimcat.ac.in/" },
                    { name: "NISM Certifications", url: "https://www.nism.ac.in/" }
                ]
            },
            ug_arts: {
                stream: "Undergraduate Arts/Humanities/Social Sciences",
                description: "Deepen understanding of human society, culture, and critical thought, often leading to academic or policy roles.",
                educational_pathway: "UG (BA) -> MA/MSW -> Job/PhD",
                options: [
                    {
                        name: "Civil Services Officer",
                        skills: "General knowledge, analytical writing, public administration, ethics",
                        subjects: "History, Political Science, Public Administration",
                        opportunities: "IAS, IPS, IFS Officer"
                    },
                    {
                        name: "Academic Researcher / Professor",
                        skills: "Research methodology, critical analysis, teaching, publication",
                        subjects: "Specific Humanities/Social Science discipline",
                        opportunities: "University Professor, Think Tank Researcher"
                    }
                ],
                resources: [
                    { name: "UPSC Civil Services Exam", url: "https://upsc.gov.in/" },
                    { name: "IGNOU Distance Learning (MA Programs)", url: "https://ignou.ac.in/" }
                ]
            },
            ug_law: {
                stream: "Undergraduate Law",
                description: "Specialized legal education for various legal professions.",
                educational_pathway: "UG (LLB) -> LLM -> Advocate/Judge/Legal Advisor",
                options: [
                    {
                        name: "Corporate Lawyer",
                        skills: "Contract law, legal drafting, negotiation, commercial awareness",
                        subjects: "Corporate Law, Business Ethics",
                        opportunities: "Legal Counsel, Compliance Officer"
                    },
                    {
                        name: "Litigation Lawyer",
                        skills: "Courtroom advocacy, legal research, public speaking, critical analysis",
                        subjects: "Criminal Law, Civil Procedure",
                        opportunities: "Public Prosecutor, Defense Attorney"
                    }
                ],
                resources: [
                    { name: "Bar Council of India", url: "https://www.barcouncilofindia.org/" },
                    { name: "CLAT Exam Info", url: "https://clat.ac.in/" }
                ]
            },
            ug_design: {
                stream: "Undergraduate Design/Fine Arts",
                description: "Develop advanced creative and technical skills for design and artistic professions.",
                educational_pathway: "UG (B.Des/BFA) -> M.Des/MFA -> Job/Entrepreneurship",
                options: [
                    {
                        name: "UX/UI Designer",
                        skills: "User research, wireframing, prototyping, graphic design software",
                        subjects: "Human-Computer Interaction, Visual Design",
                        opportunities: "Product Designer, Interaction Designer"
                    },
                    {
                        name: "Animator / Illustrator",
                        skills: "Drawing, digital illustration, animation software, storytelling",
                        subjects: "Animation Principles, Digital Art",
                        opportunities: "Concept Artist, Motion Graphic Designer"
                    }
                ],
                resources: [
                    { name: "NID Admissions", url: "https://www.nid.edu/" },
                    { name: "Arena Animation Courses", url: "https://www.arena-multimedia.com/" }
                ]
            }
        }
    },
    "pg": {
        quizQuestions: [
            {
                question: "What is your primary goal after completing your Postgraduate/Masters degree?",
                options: [
                    { text: "Specialized Industry Job", value: "industry_job" },
                    { text: "Research/PhD", value: "research_phd" },
                    { text: "Government/Public Sector", value: "govt_sector" },
                    { text: "Entrepreneurship/Startup", value: "entrepreneurship_pg" }
                ]
            },
            {
                question: "Which area of advanced study interests you the most?",
                options: [
                    { text: "Advanced Technical/Scientific Research", value: "pg_tech_science" },
                    { text: "Strategic Business & Management", value: "pg_business" },
                    { text: "Deep Dive into Humanities/Social Sciences", value: "pg_arts_social" },
                    { text: "Legal Specialization", value: "pg_law_special" }
                ]
            }
        ],
        streams: {
            industry_job: {
                stream: "Specialized Industry Careers",
                description: "Direct entry into advanced roles requiring specific postgraduate qualifications.",
                educational_pathway: "PG/Masters -> Specialized Job Role",
                options: [
                    {
                        name: "Management Consultant",
                        skills: "Problem-solving, analytical thinking, business strategy, client management",
                        subjects: "MBA core subjects, Consulting projects",
                        opportunities: "Senior Consultant, Project Leader"
                    },
                    {
                        name: "R&D Scientist",
                        skills: "Research methodology, experimental design, data interpretation, publication",
                        subjects: "Advanced science/engineering subjects",
                        opportunities: "Lead Scientist, Research Director"
                    }
                ],
                resources: [
                    { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning/" },
                    { name: "Industry Specific Journals", url: "https://scholar.google.com/" }
                ]
            },
            research_phd: {
                stream: "Research & PhD",
                description: "Pursuing doctoral studies and a career in academia or advanced research.",
                educational_pathway: "PG/Masters -> PhD -> Postdoc/Professor/Research Scientist",
                options: [
                    {
                        name: "University Professor",
                        skills: "Teaching, research, publication, grant writing, mentorship",
                        subjects: "Specialized doctoral field",
                        opportunities: "Assistant Professor, Associate Professor, Department Head"
                    },
                    {
                        name: "Postdoctoral Researcher",
                        skills: "Independent research, advanced lab techniques, scientific communication",
                        subjects: "Specific research area",
                        opportunities: "Senior Researcher, Lab Director"
                    }
                ],
                resources: [
                    { name: "UGC India (PhD Regulations)", url: "https://www.ugc.ac.in/" },
                    { name: "EURAXESS (Research Careers)", url: "https://euraxess.ec.europa.eu/" }
                ]
            },
            govt_sector: {
                stream: "Government/Public Sector Careers",
                description: "Seeking roles in government, public administration, or policy-making after advanced education.",
                educational_pathway: "PG/Masters -> Government Exams -> Public Service Role",
                options: [
                    {
                        name: "Policy Analyst",
                        skills: "Policy research, data analysis, report writing, public speaking",
                        subjects: "Public Policy, Economics, Sociology",
                        opportunities: "Government Advisor, International Organization Specialist"
                    },
                    {
                        name: "Civil Services (Advanced Roles)",
                        skills: "Leadership, administration, decision-making, crisis management",
                        subjects: "Current Affairs, Public Administration, Ethics",
                        opportunities: "Senior Bureaucrat, Diplomat"
                    }
                ],
                resources: [
                    { name: "SSC CGL Exam", url: "https://ssc.nic.in/" },
                    { name: "RBI Grade B Exam", url: "https://www.rbi.org.in/" }
                ]
            },
            entrepreneurship_pg: {
                stream: "Entrepreneurship/Startup Ventures",
                description: "Utilizing advanced knowledge to innovate and create new businesses or lead startups.",
                educational_pathway: "PG/Masters -> Startup/Business Venture",
                options: [
                    {
                        name: "Startup Founder/CEO",
                        skills: "Innovation, business development, fundraising, team leadership, market analysis",
                        subjects: "Entrepreneurship, Business Strategy, Finance",
                        opportunities: "Serial Entrepreneur, Investor"
                    },
                    {
                        name: "Product Innovator",
                        skills: "Product design, market research, technology trends, project management",
                        subjects: "Design Thinking, Innovation Management",
                        opportunities: "Chief Product Officer, R&D Head (Startup)"
                    }
                ],
                resources: [
                    { name: "Startup India", url: "https://www.startupindia.gov.in/" },
                    { name: "Y Combinator Startup Library", url: "https://www.ycombinator.com/library" }
                ]
            }
        }
    }
};

let currentQuestionIndex = 0;
let userAnswers = {};
let userEducationalStage = null;

const quizContainer = document.getElementById('quiz-container');
const resultsDisplay = document.getElementById('results-display');
const careerSearchInput = document.getElementById('career-search');
const searchButton = document.getElementById('search-btn');

const initialQuestion = {
    question: "What is your current educational stage?",
    options: [
        { text: "After 10th Class", value: "10th" },
        { text: "After 12th Class", value: "12th" },
        { text: "Undergraduate (UG)", value: "ug" },
        { text: "Postgraduate/Masters (PG)", value: "pg" }
    ]
};

const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

function renderQuestion(startStage = null) {
    if (startStage) {
        userEducationalStage = startStage;
        currentQuestionIndex = 0;
        userAnswers = {}; // Reset answers for a new quiz
    }

    let questionData;
    let totalQuestions;
    let currentProgress;

    if (!userEducationalStage) {
        questionData = initialQuestion;
        totalQuestions = initialQuestion.options.length; // Placeholder for progress bar calculation
        currentProgress = 0;
    } else {
        const stageQuizQuestions = educationalStages[userEducationalStage].quizQuestions;
        if (currentQuestionIndex < stageQuizQuestions.length) {
            questionData = stageQuizQuestions[currentQuestionIndex];
            totalQuestions = stageQuizQuestions.length;
            currentProgress = currentQuestionIndex;
        } else {
            showResults();
            return;
        }
    }

    quizContainer.innerHTML = `
        <div class="question-card">
            <h3>${questionData.question}</h3>
            <div class="options">
                ${questionData.options.map((option, index) => `
                    <button class="option-btn" data-value="${option.value}">
                        ${option.text}
                    </button>
                `).join('')}
            </div>
            <div class="progress-bar">
                <div class="progress" style="width: ${((currentProgress + 1) / totalQuestions) * 100}%;"></div>
            </div>
        </div>
    `;
    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', selectOption);
    });
}

function selectOption(event) {
    if (!userEducationalStage) {
        userEducationalStage = event.target.dataset.value;
        currentQuestionIndex = 0; // Reset question index for the stage-specific quiz
        renderQuestion();
    } else {
        userAnswers[userEducationalStage] = userAnswers[userEducationalStage] || {};
        const currentQuizSet = educationalStages[userEducationalStage].quizQuestions[currentQuestionIndex];
        const selectedValue = event.target.dataset.value;

        // Store answers more granularly if needed, for now just stream type
        currentQuizSet.options.forEach(option => {
            if (option.value === selectedValue) {
                userAnswers[userEducationalStage][currentQuizSet.question] = selectedValue;
            }
        });

        currentQuestionIndex++;
        renderQuestion();
    }
}

function calculateResults() {
    if (!userEducationalStage || !userAnswers[userEducationalStage]) {
        return null; // Should not happen if quiz is completed
    }

    const stageAnswers = userAnswers[userEducationalStage];
    const score = {};
    for (const question in stageAnswers) {
        const answer = stageAnswers[question];
        score[answer] = (score[answer] || 0) + 1;
    }

    let recommendedStream = '';
    let maxScore = 0;
    for (const stream in score) {
        if (score[stream] > maxScore) {
            maxScore = score[stream];
            recommendedStream = stream;
        }
    }
    return recommendedStream;
}

function showResults() {
    const recommendedStreamKey = calculateResults();
    const stageData = educationalStages[userEducationalStage];
    const streamData = stageData ? stageData.streams[recommendedStreamKey] : null;

    if (streamData) {
        resultsDisplay.innerHTML = `
            <h3>Recommended Stream: ${streamData.stream}</h3>
            <p>${streamData.description}</p>
            <p><strong>Educational Pathway:</strong> ${streamData.educational_pathway}</p>
            <h4>Potential Career Options:</h4>
            <div class="career-options-grid">
                ${streamData.options.map(option => `
                    <div class="career-card">
                        <h5>${option.name}</h5>
                        <p><strong>Skills:</strong> ${option.skills}</p>
                        <p><strong>Subjects to Focus:</strong> ${option.subjects}</p>
                        <p><strong>Future Opportunities:</strong> ${option.opportunities}</p>
                    </div>
                `).join('')}
            </div>
            <h4>Resources:</h4>
            <ul>
                ${streamData.resources.map(resource => `
                    <li><a href="${resource.url}" target="_blank">${resource.name}</a></li>
                `).join('')}
            </ul>
            <button id="print-results" class="btn">Print Results</button>
        `;
        document.getElementById('print-results').addEventListener('click', () => window.print());
    } else {
        resultsDisplay.innerHTML = `<p>Unable to determine a suitable stream based on your answers for the ${userEducationalStage} stage. Please try the quiz again.</p>`;
    }
    quizContainer.style.display = 'none';
    resultsDisplay.style.display = 'block';
}

// Search functionality - Needs to be updated to search within educational stages
// ... (keep existing search logic for now, will update later if needed)

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderQuestion();
});

// Sidebar navigation
sidebarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const stage = event.target.dataset.stage;
        if (stage) {
            quizContainer.style.display = 'block';
            resultsDisplay.style.display = 'none';
            renderQuestion(stage);
        }
    });
});

// Search functionality
searchButton.addEventListener('click', performSearch);
careerSearchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = careerSearchInput.value.toLowerCase();
    let foundCareer = null;

    for (const streamKey in educationalStages) {
        const stageData = educationalStages[streamKey];
        for (const stream in stageData.streams) {
            const streamOptions = stageData.streams[stream];
            for (const option of streamOptions.options) {
                if (option.name.toLowerCase().includes(searchTerm)) {
                    foundCareer = { stageKey: streamKey, stream: stream, option: option };
                    break;
                }
            }
            if (foundCareer) break;
        }
        if (foundCareer) break;
    }

    if (foundCareer) {
        displayCareerDetails(foundCareer.stageKey, foundCareer.stream, foundCareer.option);
    } else {
        resultsDisplay.innerHTML = `<p>No career found matching "${searchTerm}". Please try a different search term.</p>`;
        quizContainer.style.display = 'none';
        resultsDisplay.style.display = 'block';
    }
}

function displayCareerDetails(stageKey, streamKey, careerOption) {
    const stageData = educationalStages[stageKey];
    const streamData = stageData ? stageData.streams[streamKey] : null;

    if (streamData) {
        resultsDisplay.innerHTML = `
            <h3>${careerOption.name}</h3>
            <p><strong>Stream:</strong> ${streamData.stream} (Stage: ${stageKey})</p>
            <p>${streamData.description}</p>
            <h4>Details:</h4>
            <div class="career-card">
                <h5>${careerOption.name}</h5>
                <p><strong>Skills:</strong> ${careerOption.skills}</p>
                <p><strong>Subjects to Focus:</strong> ${careerOption.subjects}</p>
                <p><strong>Future Opportunities:</strong> ${careerOption.opportunities}</p>
                <p><strong>Educational Pathway:</strong> ${streamData.educational_pathway}</p>
            </div>
            <h4>Resources:</h4>
            <ul>
                ${streamData.resources.map(resource => `
                    <li><a href="${resource.url}" target="_blank">${resource.name}</a></li>
                `).join('')}
            </ul>
            <button id="print-results" class="btn">Print Results</button>
            <button id="save-pdf" class="btn">Save as PDF</button>
            <button id="bookmark-career" class="btn" data-stage="${stageKey}" data-stream="${streamKey}" data-career="${careerOption.name}">Bookmark Career</button>
        `;
        document.getElementById('print-results').addEventListener('click', () => window.print());
        document.getElementById('save-pdf').addEventListener('click', generatePdf);
        const bookmarkButton = document.getElementById('bookmark-career');
        bookmarkButton.addEventListener('click', toggleBookmark);
        updateBookmarkButton(bookmarkButton, stageKey, streamKey, careerOption.name);
    } else {
        resultsDisplay.innerHTML = `<p>No specific details found for the ${careerOption.name} in the ${stageKey} stage.</p>`;
        quizContainer.style.display = 'none';
        resultsDisplay.style.display = 'block';
    }
}

function generatePdf() {
    alert("PDF generation functionality requires an external library (e.g., jsPDF) and will be implemented in a real deployment.");
    // For a real implementation, you would use a library like jsPDF
    // Example (conceptual):
    // const { jsPDF } = window.jspdf;
    // const doc = new jsPDF();
    // doc.text("Career Recommendation Report", 10, 10);
    // doc.text(resultsDisplay.innerText, 10, 20);
    // doc.save("career_report.pdf");
}

function toggleBookmark(event) {
    const button = event.target;
    const stageKey = button.dataset.stage;
    const streamKey = button.dataset.stream;
    const careerName = button.dataset.career;

    const bookmarkKey = `${stageKey}-${streamKey}-${careerName}`;
    let bookmarks = JSON.parse(localStorage.getItem('careerBookmarks')) || {};

    if (bookmarks[bookmarkKey]) {
        delete bookmarks[bookmarkKey];
        button.textContent = 'Bookmark Career';
        alert(`${careerName} unbookmarked!`);
    } else {
        bookmarks[bookmarkKey] = { stageKey, streamKey, careerName };
        button.textContent = 'Bookmarked!';
        alert(`${careerName} bookmarked!`);
    }
    localStorage.setItem('careerBookmarks', JSON.stringify(bookmarks));
    updateBookmarkButton(button, stageKey, streamKey, careerName); // Update button text immediately
}

function updateBookmarkButton(button, stageKey, streamKey, careerName) {
    const bookmarkKey = `${stageKey}-${streamKey}-${careerName}`;
    let bookmarks = JSON.parse(localStorage.getItem('careerBookmarks')) || {};
    if (bookmarks[bookmarkKey]) {
        button.textContent = 'Bookmarked!';
    } else {
        button.textContent = 'Bookmark Career';
    }
}
