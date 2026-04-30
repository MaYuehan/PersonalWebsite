window.PORTFOLIO_PROJECTS = [
    {
        slug: 'yummia',
        title: 'YUMMIA',
        description: 'A social product concept focused on helping users build sustainable diet habits through community support and tailored recommendations.',
        tag: 'Product / UX',
        cardBackgroundImage: 'images/yummia/bg-yummia.png',
        pageBackgroundImage: '../../images/yummia/bg-yummia.png',
        heroImage: '../../images/yummia/yummia.png',
        summary: 'A diet-focused social app concept for university students to track calories, discover safe meals, and stay motivated through community support.',
        role: 'Product Lead (Research + Design + PM)',
        timeline: '4 months',
        status: 'Research + Prototype + Testing',
        website: {
            url: 'https://yummia.wixsite.com/yummia',
            label: 'View Project Website',
            description: 'More project details and the full process can be found here.'
        },
        tldr: 'YUMMIA combines <strong>diet tracking</strong>, <strong>personalized guidance</strong>, and <strong>community support</strong> for students who want to lose weight, build muscle, or manage dietary conditions. Through research and iterative testing, the team improved usability and reached <strong>75% positive feedback</strong> on overall experience.',
        sections: {
            problem: 'Many university students want to eat healthier, but it is hard to stay consistent because routines are busy, nutrition information is unclear, and motivation is low. Existing apps often separate <strong>calorie tracking</strong>, <strong>guidance</strong>, and <strong>social accountability</strong>, which creates friction for users who need all three together.',
            research: {
                lead: 'Used <strong>surveys</strong>, <strong>interviews</strong>, and <strong>contextual inquiry</strong> with students aged 18-30, plus food-science perspectives.',
                cardsTitle: '<strong>Key Findings</strong>',
                cards: [
                    '<strong>Manual logging</strong> feels like a chore and is hard to sustain.',
                    'Users are often unsure about <strong>ingredients</strong> and <strong>allergens</strong> when making meal decisions.',
                    'Students want both <strong>peer motivation</strong> and practical guidance, not just tracking.',
                    '<strong>Convenience</strong>, <strong>transparency</strong>, and social support drive adoption.'
                ]
            },
            define: [
                'Reduced friction in <strong>calorie and meal logging</strong>.',
                'Prioritized <strong>personalized recommendations</strong> based on user goals.',
                'Added <strong>social accountability</strong> through sharing and community interaction.',
                'Framed scope around <strong>real user behavior</strong> instead of feature-heavy assumptions.'
            ],
            solution: {
                featureBlocks: [
                    'Designed <strong>AI-assisted</strong> calorie and ingredient analysis for faster logging.',
                    'Added a <strong>community feed</strong> for meal sharing with tags and location context.',
                    'Included <strong>allergen-aware discovery</strong> for safer food choices.',
                    'Integrated nutrition-oriented advice to connect tracking with action.'
                ]
            },
            design: {
                lead: 'Using <strong>Figma</strong>, we followed Empathize, Define, Ideate, Prototype, and Test. We prioritized <strong>simple navigation</strong>, <strong>clear hierarchy</strong>, and a <strong>low-effort logging flow</strong>, then moved from low-fidelity concepts to high-fidelity prototypes across core tasks.',
                prototypeShowcase: [
                    {
                        title: 'Low-Fidelity Prototype',
                        buttonLabel: 'Low-Fidelity Prototype',
                        link: 'https://www.figma.com/design/qSTLtE7K77YBBHUo0rWlEt/Individual-prototype?node-id=132-687&t=pkIJFK3MNEbJYd7t-1',
                        image: '../../images/yummia/low-fi.png',
                        alt: 'Low-fidelity prototype screenshot',
                        description: 'Early wireframes used to map task flows, simplify navigation, and validate the core structure before visual refinement.'
                    },
                    {
                        title: 'High-Fidelity Prototype',
                        buttonLabel: 'High-Fidelity Prototype',
                        link: 'https://www.figma.com/proto/GzZTbEor4WSEx69eLus7Nt/3_G3_Prototype?node-id=0-1&t=jIThX8aKyA2QqeSP-1',
                        image: '../../images/yummia/hi-fi.png',
                        alt: 'High-fidelity prototype screenshot',
                        description: 'A polished interactive prototype that translated the validated flows into a clearer, more realistic end-to-end product experience.'
                    }
                ]
            },
            iteration: {
                changeShowcase: {
                    intro: 'Ran <strong>Maze usability testing</strong> with task-based scenarios tied to core features.',
                    reportLink: {
                        url: 'https://app.maze.co/report/YUMMIA-MAZE-EVALUTION/17grvkt7m35guqnv/47321e9c',
                        label: 'View Maze Evaluation Report'
                    },
                    changes: [
                        {
                            text: 'Made sharing <strong>optional</strong> to reduce friction and privacy concerns.',
                            image: '../../images/yummia/to-optional.JPG',
                            alt: 'Optional sharing change'
                        },
                        {
                            text: 'Renamed <strong>"Date"</strong> to <strong>"Date of the Meal"</strong> for clarity.',
                            image: '../../images/yummia/changeDate.png',
                            alt: 'Date label change'
                        },
                        {
                            text: 'Redesigned navigation icons using familiar patterns to reduce confusion.',
                            image: '../../images/yummia/changeIcon.png',
                            alt: 'Navigation icon redesign'
                        }
                    ]
                }
            },
            impact: [
                'Reached <strong>75% positive feedback</strong> on overall prototype experience.',
                'Improved usability and navigation clarity in final flows.',
                'Validated demand for combining <strong>diet tools</strong> and <strong>social support</strong> in one product experience.'
            ],
            reflection: 'This project reinforced that strong product decisions come from user behavior, not assumptions. If iterating again, I would invest even earlier in understanding user motivation, test with a working version beyond prototype fidelity, and treat retention and growth mechanics as first-class product decisions.'
        }
    },
    {
        slug: 'flowzone',
        title: 'FlowZone',
        description: 'A VR yoga and meditation experience that combines real-time motion feedback with immersive wellness environments.',
        tag: 'UX / AI',
        cardBackgroundImage: 'images/flowzone/yoga-pg.png',
        pageBackgroundImage: '../../images/flowzone/yoga-pg.png',
        heroImage: '../../images/flowzone/flowzone.png',
        summary: 'Real-time pose-tracking VR yoga and mindfulness meditation for stress reduction.',
        role: 'Product Designer / User Researcher / Unity Developer',
        timeline: '4 months',
        status: 'Published at ACM VRST 2025',
        heroLinks: [
            {
                label: 'View ACM VRST 2025 Publication',
                url: 'https://dl.acm.org/doi/10.1145/3756884.3770544'
            }
        ],
        tldr: 'FlowZone is a VR yoga and meditation prototype that provides real-time pose feedback using only a headset and controllers - no external cameras. Built on insights from a qualitative user study with beginners, experts, and instructors, the system was evaluated with 18 users and published at ACM VRST 2025.',
        sectionOrder: [
            { id: 'problem', title: 'Problem Statement' },
            { id: 'research', title: 'Preliminary User Study' },
            { id: 'design', title: 'Design Overview' },
            { id: 'iteration', title: 'Design Iteration' },
            { id: 'evaluation', title: 'Evaluation & Results' },
            { id: 'technical', title: 'Technical Implementation' },
            { id: 'reflection', title: 'Reflection & Limitations' },
            { id: 'futureImprovements', title: 'Future Improvements' },
            { id: 'links', title: 'Links' }
        ],
        sections: {
            problem: {
                subsections: [
                    {
                        title: 'Problem Statement',
                        content: 'Existing <strong>VR yoga apps</strong> often lack real-time feedback, which makes it difficult for users to know whether their posture is correct. Systems that do provide feedback often require <strong>external cameras</strong>, creating a higher setup barrier.'
                    },
                    {
                        title: 'Research Question',
                        content: '"How to design an introductory yoga session in VR to motivate people to do real-life yoga?"',
                        variant: 'highlight'
                    }
                ]
            },
            research: {
                researchShowcase: {
                    methodTitle: 'Study Method',
                    method: 'Qualitative interviews with <strong>6 participants</strong> (4 beginners, 1 expert, 1 instructor). Interview topics covered background and experience, motivations, challenges, and environmental preferences.',
                    findings: [
                        'Users were unsure if their pose was correct, which highlighted the need for <strong>real-time feedback</strong>.',
                        'It was hard for users to stay consistent, suggesting the need for <strong>progress tracking</strong> and encouragement.',
                        'Environment mattered a lot for focus and relaxation, pointing to the value of <strong>immersive calming scenes</strong>.'
                    ],
                    designGoals: [
                        '<strong>Design Goal 1:</strong> Real-time pose feedback to build confidence.',
                        '<strong>Design Goal 2:</strong> Calming immersive environments to reduce distraction.',
                        '<strong>Design Goal 3:</strong> Easy setup using only a headset and controllers, with no external cameras.'
                    ],
                    image: '../../images/flowzone/userflow.png',
                    imageAlt: 'FlowZone preliminary user flow sketch',
                    imageCaption: 'User Flow Sketch'
                }
            },
            design: {
                sceneShowcase: [
                    {
                        title: 'Main Menu Scene (Figure 1.1)',
                        description: 'Allows users to navigate to different parts of the experience, including:',
                        bullets: [
                            'Start Lesson (start button)',
                            'Set Environment (environment button)',
                            'Calibration (settings button)'
                        ],
                        figures: [
                            {
                                src: '../../images/flowzone/figures/figure1.1.png',
                                caption: 'Figure 1.1: Main Menu Scene',
                                alt: 'FlowZone main menu scene'
                            }
                        ]
                    },
                    {
                        title: 'Settings Scene (Figure 1.2)',
                        description: 'Enables users to calibrate the measurements required for tracking during lessons.',
                        figures: [
                            {
                                src: '../../images/flowzone/figures/figure1.2.png',
                                caption: 'Figure 1.2: Settings Scene',
                                alt: 'FlowZone settings scene'
                            }
                        ]
                    },
                    {
                        title: 'Environment Selection Scene (Figure 1.3.1 and 1.3.2)',
                        description: 'Lets users choose between different virtual environments, with some environments unlocked through progression.',
                        figures: [
                            {
                                src: '../../images/flowzone/figures/figure1.3.1.png',
                                caption: 'Figure 1.3.1: Environment Selection Scene',
                                alt: 'FlowZone environment selection scene option one'
                            },
                            {
                                src: '../../images/flowzone/figures/figure1.3.2.png',
                                caption: 'Figure 1.3.2: Environment Selection Scene',
                                alt: 'FlowZone environment selection scene option two'
                            }
                        ]
                    },
                    {
                        title: 'Lesson Selection Scene (Figure 1.4)',
                        description: 'Allows users to select structured yoga lessons that include multiple poses and meditation.',
                        figures: [
                            {
                                src: '../../images/flowzone/figures/figure1.4.png',
                                caption: 'Figure 1.4: Lesson Selection Scene',
                                alt: 'FlowZone lesson selection scene'
                            }
                        ]
                    },
                    {
                        title: 'Lesson Scene (Figure 1.5)',
                        description: 'The main guided VR yoga experience.',
                        bullets: [
                            'Figure 1.5.1: Instruction screen before the lesson starts',
                            'Figure 1.5.2: Lesson UI during the session'
                        ],
                        figures: [
                            {
                                src: '../../images/flowzone/figures/figure1.5.1.png',
                                caption: 'Figure 1.5.1: Instruction screen before the lesson starts',
                                alt: 'FlowZone lesson instruction screen'
                            },
                            {
                                src: '../../images/flowzone/figures/figure1.5.2.png',
                                caption: 'Figure 1.5.2: Lesson UI during the session',
                                alt: 'FlowZone lesson UI during session'
                            }
                        ]
                    },
                    {
                        title: 'Meditation Scene (Figure 1.6)',
                        description: 'A cooldown and relaxation space after completing the yoga session.',
                        figures: [
                            {
                                src: '../../images/flowzone/figures/figure1.6.png',
                                caption: 'Figure 1.6: Meditation Scene',
                                alt: 'FlowZone meditation scene'
                            }
                        ]
                    }
                ]
            },
            iteration: {
                iterationFeedback: [
                    {
                        feedback: 'Users were not sure what they did wrong when the system marked their pose as incorrect.',
                        before: 'When the system marked a pose as incorrect, users had no clear indication of what body part or movement needed adjustment.',
                        after: 'Added real-time feedback and hints to guide users on how to correct their pose.'
                    },
                    {
                        feedback: 'Each lesson originally contained only one pose, and users found the lessons too short.',
                        before: 'Lessons ended quickly after a single pose, which reduced engagement and made practice feel fragmented.',
                        after: 'Each lesson now includes multiple poses before transitioning into meditation.'
                    }
                ]
            },
            evaluation: {
                evaluationShowcase: {
                    lead: 'FlowZone was evaluated with beginner users to measure stress impact, motivation, and overall comfort after completing guided sessions.',
                    metrics: [
                        { label: 'User Study', value: 'N = 18' },
                        { label: 'Stress Reduction', value: '3.92 / 5', description: 'Beginners' },
                        { label: 'Continue Practicing', value: '4.00 / 5', description: 'Beginners' },
                        { label: 'Discomfort Level', value: '1.75 / 5', description: 'Lower is better' }
                    ],
                    quotes: [
                        'The pose visualization and check was good',
                        'Very little distractions and the music was calming',
                        'Having a meditation at the end helped ground me'
                    ]
                }
            },
            technical: {
                bullets: [
                    '<strong>Hardware:</strong> Meta Quest 3',
                    '<strong>Development:</strong> Unity 3D',
                    '<strong>Pose tracking:</strong> spatial data from headset and controllers, with no external cameras'
                ]
            },
            reflection: {
                reflectionShowcase: {
                    lead: '<strong>What went well:</strong> real-time feedback improved user confidence and accuracy, while environment design and voice guidance helped promote relaxation.',
                    items: [
                        {
                            title: 'Main challenge: calibration sensitivity',
                            detail: 'Calibration was sensitive, so users shifting off-center required re-calibration.'
                        },
                        {
                            title: 'Main challenge: one-time setup complexity',
                            detail: 'The initial one-time setup was still complex and time-consuming.'
                        },
                        {
                            title: 'What I would do differently: simplify calibration',
                            detail: 'Automate or simplify body calibration so users can start sessions faster with fewer interruptions.'
                        },
                        {
                            title: 'What I would do differently: longer-term testing',
                            detail: 'Run longer-term home deployment tests to evaluate retention, consistency, and behavior change over time.'
                        }
                    ]
                }
            },
            futureImprovements: {
                featureBlocks: [
                    'Redesign environments from cartoon-style visuals to more realistic, nature-inspired environments.',
                    'Add dynamic elements (e.g. ambient lighting, gentle particle effects) to enhance immersion and deepen relaxation.'
                ]
            },
            links: {
                linkButtons: [
                    { label: 'ACM VRST 2025 Publication', url: 'https://dl.acm.org/doi/10.1145/3756884.3770544' },
                    { label: 'Demo Video', url: 'https://drive.google.com/file/d/1WdS8vCSngx3RvDLcstlI4OYshid9YLxt/view?usp=sharing' },
                    { label: 'GitHub project repo', url: 'https://github.com/Song-Mengfei/cs4240Project' }
                ]
            }
        }
    },
    {
        slug: 'nus-flea-market',
        title: 'NUS Flea Market',
        description: 'A student marketplace app concept for easy second-hand exchange inside the NUS community.',
        tag: 'Product',
        summary: 'A mobile MVP for safe and convenient campus resale workflows.',
        role: 'Project Lead / iOS Developer',
        timeline: 'May 2023 - Aug 2023',
        status: 'MVP'
    }
];
