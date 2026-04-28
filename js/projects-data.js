window.PORTFOLIO_PROJECTS = [
    {
        slug: 'yummia',
        title: 'YUMMIA',
        description: 'A social product concept focused on helping users build sustainable diet habits through community support and tailored recommendations.',
        tag: 'Product / UX',
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
        summary: 'A research-backed VR experience to improve pose accuracy and reduce stress.',
        role: 'Unity Developer',
        timeline: 'Feb 2025 - May 2025',
        status: 'Research Prototype'
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
