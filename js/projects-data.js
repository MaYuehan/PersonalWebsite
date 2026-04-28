window.PORTFOLIO_PROJECTS = [
    {
        slug: 'yummia',
        title: 'YUMMIA',
        description: 'A social product concept focused on helping users build sustainable diet habits through community support and tailored recommendations.',
        tag: 'Product / UX',
        cardBackgroundImage: 'images/yummia/bg-yummia.png',
        pageBackgroundImage: '../../images/yummia/bg-yummia.png',
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
                lead: '<strong>Method:</strong> qualitative interviews with <strong>6 participants</strong> (4 beginners, 1 expert, 1 instructor). Interview topics covered background and experience, motivations, challenges, and environmental preferences.',
                cardsTitle: '<strong>Key Findings</strong>',
                cards: [
                    'Users were unsure if their pose was correct, which highlighted the need for <strong>real-time feedback</strong>.',
                    'It was hard for users to stay consistent, suggesting the need for <strong>progress tracking</strong> and encouragement.',
                    'Environment mattered a lot for focus and relaxation, pointing to the value of <strong>immersive calming scenes</strong>.'
                ],
                featureBlocks: [
                    '<strong>Design Goal 1:</strong> Real-time pose feedback to build confidence.',
                    '<strong>Design Goal 2:</strong> Calming immersive environments to reduce distraction.',
                    '<strong>Design Goal 3:</strong> Easy setup using only a headset and controllers, with no external cameras.'
                ],
                
                placeholderBlocks: [
                    {
                      title: 'User Flow Sketch',
                      image: '../../images/flowzone/userflow.png'
                    }
                  ]
            },
            design: {
     
                featureBlocks: [
                    '<strong>Main Menu Scene (Figure 1.1):</strong> Allows users to navigate to different parts of the experience.',
                    '<strong>Settings Scene (Figure 1.2):</strong> Enables users to calibrate measurements required for tracking during lessons.',
                    '<strong>Environment Selection Scene (Figure 1.3):</strong> Lets users choose virtual environments, with some unlocked as progression incentives.',
                    '<strong>Pose / Lesson Selection Scene (Figure 1.4):</strong> Allows users to choose between targeted pose practice or full lesson simulation.',
                    '<strong>Pose Scene (Figure 1.5):</strong> Enables users to select and practice a specific yoga pose for focused training.',
                    '<strong>Lesson Selection Scene (Figure 1.6):</strong> Allows users to choose structured yoga lessons including multiple poses and meditation.',
                    '<strong>Lesson Scene (Figure 1.7):</strong> The main guided VR yoga lesson experience.',
                    '<strong>Meditation Scene (Figure 1.8):</strong> A cooldown and relaxation space after the yoga session.'
                ],

                placeholderBlocks: [
                    {
                        title: 'System UI Flow Overview',
                        image: '../../images/flowzone/ui-flowzone.png',
                        alt: 'FlowZone system UI flow overview'
                    }
                ]
            },
            iteration: {
                changeShowcase: {
                    intro: 'From user testing, an example feedback point was: <strong>"The scanner is great, but I don\'t always want to share my meal"</strong>. The corresponding design change was to make sharing optional per log.',
                    changes: [
                        {
                            text: 'Made <strong>sharing optional per log</strong> in response to feedback about control and privacy.'
                        }
                    ]
                },
                placeholderBlocks: [
                    {
                        title: 'Iteration Placeholder',
                        description: 'More iteration examples will be added here later.'
                    }
                ]
            },
            evaluation: {
                metricCards: [
                    { label: 'User Study', value: 'N = 18' },
                    { label: 'Stress Reduction', value: '3.92 / 5', description: 'Beginners' },
                    { label: 'Continue Practicing', value: '4.00 / 5', description: 'Beginners' },
                    { label: 'Discomfort Level', value: '1.75 / 5', description: 'Lower is better' }
                ],
                quoteBlocks: [
                    'The pose visualization and check was good',
                    'Very little distractions and the music was calming',
                    'Having a meditation at the end helped ground me'
                ],
                linkButtons: [
                    {
                        label: 'Demo Video Placeholder',
                        url: '#'
                    }
                ]
            },
            technical: {
                bullets: [
                    '<strong>Hardware:</strong> Meta Quest 3',
                    '<strong>Development:</strong> Unity 3D',
                    '<strong>Pose tracking:</strong> spatial data from headset and controllers, with no external cameras'
                ]
            },
            reflection: {
                lead: '<strong>What went well:</strong> real-time feedback improved user confidence and accuracy, while environment design and voice guidance helped promote relaxation.',
                bullets: [
                    '<strong>Main challenge:</strong> calibration was sensitive, so users shifting off-center required re-calibration.',
                    '<strong>Main challenge:</strong> the initial one-time setup was still complex and time-consuming.',
                    '<strong>What I would do differently:</strong> automate or simplify body calibration.',
                    '<strong>What I would do differently:</strong> run longer-term home deployment tests.'
                ]
            },
            links: {
                linkButtons: [
                    { label: 'ACM VRST 2025 Publication', url: 'https://dl.acm.org/doi/10.1145/3756884.3770544' },
                    { label: 'Demo Video Placeholder', url: '#' },
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
