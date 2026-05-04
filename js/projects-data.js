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
        tag: 'VR / Product',
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
        slug: 'petpat',
        title: 'PetPat',
        description: 'A mobile app connecting pet owners with verified caregivers, featuring in-app chat, real-time photo updates, and GPS location sharing.',
        tag: 'UX',
        cardBackgroundImage: 'images/petpat/bg-petpat.png',
        pageBackgroundImage: '../../images/petpat/bg-petpat.png',
        heroImage: '../../images/petpat/petpat-poster.png',
        summary: 'A pet care mobile app that connects owners with verified caregivers through secure in-app chat, real-time photo sharing, and GPS location updates - designed from survey-driven user research to a hi-fi Figma prototype.',
        role: 'Solo Designer (UX Research + Design)',
        timeline: ' 2 months',
        status: 'Hi-Fi Prototype',
        heroLinks: [
            {
                label: 'View PetPat Prototype',
                url: 'https://www.figma.com/proto/AXFDZO2qXFcrt9iItISrng/PetPat?node-id=36-326&t=hknpG7mqOdFqrJ9N-1&starting-point-node-id=36%3A326'
            }
        ],
        tldr: 'PetPat is a mobile app designed to help <strong>pet owners</strong> find reliable caregivers during busy periods, and give <strong>caregivers</strong> a platform to find pet-sitting gigs. Grounded in survey research with 7–10 participants, the design prioritised <strong>verified profiles</strong>, <strong>secure in-app chat</strong>, and <strong>real-time photo and location updates</strong> — all validated as critical needs by users. Delivered as a full hi-fi Figma prototype covering 4 user flows.',
        sectionOrder: [
            { id: 'problem', title: 'Problem' },
            { id: 'research', title: 'User Research' },
            { id: 'features', title: 'Core Features' },
            { id: 'userflows', title: 'User Flows' },
            { id: 'sketches', title: 'Sketches' },
            { id: 'prototype', title: 'Prototype' },
            { id: 'design', title: 'Design Principles' },
            { id: 'reflection', title: 'Reflection' }
        ],
        sections: {
            problem: {
                subsections: [
                    {
                        title: 'Background',
                        content: 'Pet owners often need trusted individuals to care for their pets during busy periods, but have no structured, verified platform to find them. Meanwhile, potential caregivers lack a dedicated space to offer their services and build a reputation.'
                    },
                    {
                        title: 'Design Challenge',
                        content: 'How do we design a mobile app that gives pet owners enough confidence to trust a stranger with their pet, and gives caregivers a fair, structured way to present themselves and find work?',
                        variant: 'highlight'
                    }
                ]
            },
            research: {
                lead: 'A survey was distributed in pet lover community groups targeting 7-10 participants who were either pet owners or willing to act as caregivers. Questions focused on preferred features, communication needs, and what makes a caregiver profile trustworthy.',
                researchShowcase: {
                    methodTitle: 'Survey Method',
                    method: 'Distributed to <strong>7–10 participants</strong> (mix of pet owners and potential caregivers) via pet lover community groups. Topics covered preferred features, communication needs, and trustworthiness factors.',
                    findings: [
                        '<strong>83%</strong> of pet owners need help with feeding; playtime (50%), walking (33%), and grooming (33%) also common.',
                        '<strong>83%</strong> of pet owners are not comfortable trusting a caregiver based solely on profile info - making in-app chat essential for self-verification.',
                        '<strong>100%</strong> of pet owners say detailed experience or certification makes a caregiver trustworthy; 67% also value positive reviews and background checks.',
                        '<strong>100%</strong> of caregivers want to provide real-time updates to owners - photo and location sharing is a top motivator for responsible behaviour.'
                    ],
                    designGoals: [
                        '<strong>Design Goal 1:</strong> Make caregiver profiles verifiable: require experience, allow optional certifications, and run a system verification step before profiles go live.',
                        '<strong>Design Goal 2:</strong> Build in-app chat as a core feature, not an add-on. It is the primary way pet owners self-verify caregiver reliability.',
                        '<strong>Design Goal 3:</strong> Enable real-time photo and GPS location sharing through chat, giving owners peace of mind during active care.'
                    ]
                }
            },
            features: {
                lead: 'Four core features were determined based on user research findings:',
                featureBlocks: [
                    '<strong>Care Needs Posting:</strong> Pet owners post detailed care requests (pet type, tasks, schedule, pay). Caregivers post profiles to browse and apply for gigs. Central to the app\'s core function.',
                    '<strong>Profile Verification:</strong> Caregivers submit experience and optional certifications. The system verifies key details before a profile goes live — directly addressing the 100% of owners who prioritise experience and certification.',
                    '<strong>Secure In-App Chat:</strong> Direct messaging between owners and caregivers. Rated essential by 100% of pet owners and 71.4% of caregivers. It is the primary trust-building mechanism beyond profiles alone.',
                    '<strong>Real-Time Photo & Location Updates:</strong> Caregivers send pet photos and share GPS location through chat. Valued by 100% of caregivers and gives owners confidence during active care sessions.'
                ]
            },
            userflows: {
                lead: 'Four user flows cover the main tasks for both user types:',
                placeholderBlocks: [
                    {
                        title: 'Flow 1 — Posting a Pet Care Job (Pet Owners)',
                        description: 'Sign up / Log in → Home Screen → Tap "Add" → Select "Look for Caregivers" → Enter job details (pet type, tasks, schedule, pay, optional description) → Review → POST → Job appears in Pet Care Gigs page.',
                        image: '../../images/petpat/userFlow1.png',
                        alt: 'User Flow 1 diagram — Posting a Pet Care Job'
                    },
                    {
                        title: 'Flow 2 — Posting a Caregiver Profile (Caregivers)',
                        description: 'Sign up / Log in → Home Screen → Tap "Add" → Select "To Be a Caregiver" → Fill personal details, experience, certifications, available time, expected pay → POST → System verification → Profile live on Pet Caregivers page (or error prompt to revise).',
                        image: '../../images/petpat/userFlow2.png',
                        alt: 'User Flow 2 diagram — Posting a Caregiver Profile'
                    },
                    {
                        title: 'Flow 3 — Booking a Caregiver via In-App Chat (Pet Owners)',
                        description: 'Log in → Browse Pet Caregivers page (filter by species) → Select caregiver → Review detailed profile → Tap "Contact" → Chat to discuss needs → Confirm booking.',
                        image: '../../images/petpat/userFlow3.png',
                        alt: 'User Flow 3 diagram — Booking a Caregiver via In-App Chat'
                    },
                    {
                        title: 'Flow 4 — Sending Pet Status Updates (Caregivers)',
                        description: 'Log in → Contact page → Open pet owner chat → Tap camera icon → Take photo → Review (Retake if needed) → Send → Tap location icon → Confirm system location on map → Send location to owner.',
                        image: '../../images/petpat/userFlow4.png',
                        alt: 'User Flow 4 diagram — Sending Pet Status Updates'
                    }
                ]
            },
            sketches: {
                lead: 'Low-fidelity sketches were drawn for each user flow before moving to wireframes. Key decisions made at this stage: a central "+" Add button on the menu bar for easy access, bookmark-style tab navigation between "Look for Caregivers" and "To Be a Caregiver", and a horizontally scrollable species-filter bar at the top of the caregiver listing page.',
                sceneShowcase: [
                    {
                        title: 'Flow 1 - Care Job Posting',
                        description: 'Pet owners post a care request by tapping the central "Add" button and selecting "Look for Caregivers". The form collects pet type, required tasks, schedule, pay, and an optional description.',
                        figures: [
                            { src: '../../images/petpat/sketch1.png', alt: 'Flow 1 sketch - Care Job Posting', caption: 'Flow 1: Posting a Pet Care Job' }
                        ]
                    },
                    {
                        title: 'Flow 2 - Caregiver Profile Posting',
                        description: 'Caregivers fill in personal details, experience, optional certifications, available time, and expected pay. The profile goes through a system verification step before appearing on the Pet Caregivers page.',
                        figures: [
                            { src: '../../images/petpat/sketch2.png', alt: 'Flow 2 sketch - Caregiver Profile Posting', caption: 'Flow 2: Posting a Caregiver Profile' }
                        ]
                    },
                    {
                        title: 'Flow 3 - Booking a Caregiver',
                        description: 'Pet owners browse the caregiver listing (filterable by species), view a detailed profile, and tap "Contact" to open a secure in-app chat where they can discuss needs and confirm the booking.',
                        figures: [
                            { src: '../../images/petpat/sketch3.png', alt: 'Flow 3 sketch - Booking a Caregiver', caption: 'Flow 3: Booking a Caregiver via In-App Chat' }
                        ]
                    },
                    {
                        title: 'Flow 4 - Pet Status Updates',
                        description: 'Caregivers send real-time updates through the chat: tap the camera icon to take and send a pet photo (with a retake option), then tap the location icon to confirm and share GPS position with the owner.',
                        figures: [
                            { src: '../../images/petpat/sketch4.png', alt: 'Flow 4 sketch - Pet Status Updates', caption: 'Flow 4: Updating Pet Status via Photo & Location' }
                        ]
                    }
                ]
            },
            prototype: {
                lead: 'All four user flows were developed into a full hi-fi Figma prototype. The primary interactive task - caregivers updating pet status by sharing photos and location - was the first prioritised flow in the prototype.',
                prototypeShowcase: [
                    {
                        title: 'Wireframe',
                        buttonLabel: 'Wireframe in Figma',
                        link: 'https://www.figma.com/design/AXFDZO2qXFcrt9iItISrng/PetPat?node-id=0-1&t=fQKb67bYnnEOHE9n-1',
                        image: '../../images/petpat/lowfi.png',
                        alt: 'PetPat wireframe screenshot',
                        description: 'Wireframes covering all four user flows: login/signup, Pet Care Jobs listing, caregiver profiles, posting forms, in-app chat, and photo/location sharing.'
                    },
                    {
                        title: 'Hi-Fi Prototype',
                        buttonLabel: 'Hi-Fi Prototype in Figma',
                        link: 'https://www.figma.com/design/AXFDZO2qXFcrt9iItISrng/PetPat?node-id=36-325&t=fQKb67bYnnEOHE9n-1',
                        image: '../../images/petpat/hifi.png',
                        alt: 'PetPat hi-fi prototype screenshot',
                        description: 'High-fidelity prototype with full interactivity. Light yellow used for caregiver-facing pages; light blue for owner-facing pages.'
                    }
                ]
            },
            design: {
                lead: 'Six Gestalt and design principles were applied throughout:',
                featureBlocks: [
                    '<strong>Similarity:</strong> The Pet Care Jobs and Pet Caregivers pages share the same card layout and information structure, making both sections instantly recognisable and reducing the learning curve for users.',
                    '<strong>Proximity:</strong> Logically related data, pet name, photo, task type, and schedule, are grouped within preview cards, giving users a complete at-a-glance overview without extra navigation.',
                    '<strong>Continuity:</strong> Horizontally scrollable species-filter avatars and vertically scrollable profile cards let users browse options smoothly and without interruption.',
                    '<strong>Contrast:</strong> High-contrast solid black "POST" buttons against light blue/yellow backgrounds draw attention to essential actions, reducing errors and guiding users through key tasks.',
                    '<strong>Common Region:</strong> Light yellow marks caregiver-facing pages; light blue marks owner-facing pages. Blue\'s calming quality also reinforces the trust and reliability pet owners seek.',
                    '<strong>Recognition over Recall:</strong> Familiar icons (camera, message, location pin) are used consistently in the nav bar so users identify each function at a glance without memorising it.'
                ]
            },
            reflection: {
                reflectionShowcase: {
                    lead: '<strong>Key takeaway:</strong> Early user research had a clear impact on feature decisions. Since 83% of owners said they weren’t comfortable relying on profiles alone, in-app chat became a core feature rather than just a nice-to-have. Without that insight, it would have been easy to underestimate its importance and prioritise less critical aspects of the design.',
                    items: [
                        {
                            title: 'Design consistency pays off',
                            detail: 'Making the Pet Care Jobs and Pet Caregivers pages look and behave identically significantly reduced cognitive load. Users could apply knowledge from one page directly to the other without re-learning.'
                        },
                        {
                            title: 'Verification flow needed careful UX attention',
                            detail: 'The caregiver verification step introduced a decision branch (pass / fail / re-submit) that required clear error messaging to avoid user frustration. The sketch phase helped surface this complexity early.'
                        },
                        {
                            title: 'Next step: usability testing with real users',
                            detail: 'The hi-fi prototype covers all key flows but has not yet been tested with real pet owners and caregivers. A usability study would validate the booking flow and identify friction points in the chat-to-booking transition.'
                        },
                        {
                            title: 'Future feature: in-app payments and reviews',
                            detail: 'Survey participants mentioned payment and caregiver ratings as desired features. An in-app payment flow and a post-care review system would close the trust loop and increase long-term platform reliability.'
                        }
                    ]
                }
            }
        }
    }
    // {
    //     slug: 'nus-flea-market',
    //     title: 'NUS Flea Market',
    //     description: 'A student marketplace app concept for easy second-hand exchange inside the NUS community.',
    //     tag: 'Product',
    //     summary: 'A mobile MVP for safe and convenient campus resale workflows.',
    //     role: 'Project Lead / iOS Developer',
    //     timeline: 'May 2023 - Aug 2023',
    //     status: 'MVP'
    // }
];