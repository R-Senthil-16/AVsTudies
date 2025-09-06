document.addEventListener('DOMContentLoaded', () => {

    // --- DATA --- //
    const lessonsByClassAndSubject = {
        10: {
            'science': { // Note: subjectId is 'science', not 'Science'
                'Chemistry': {
                    icon: 'fas fa-flask',
                    chapters: [
                        { name: 'Chemical Reactions and Equations', summary: 'A summary of chemical reactions, types of reactions, and balancing equations.', questions: 'pdfs/class10/science/chemistry/chemical-reactions-questions.pdf', notes: [
                            'Identify reaction types: combination, decomposition, displacement, double displacement.',
                            'Balance equations using the hit-and-trial method and verify atoms on both sides.',
                            'Download: <a href="pdfs/class10/science/chemistry/chemical-reactions.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ], videos: [
                            { title: 'Balancing Chemical Equations', url: 'https://www.youtube.com/watch?v=zmdxM9lyYb8' },
                            { title: 'Types of Chemical Reactions', url: 'https://www.youtube.com/watch?v=Td74zW8sT6M' }
                        ] },
                        { name: 'Acids, Bases and Salts', summary: 'Exploring the properties and reactions of acids, bases, and salts.', questions: 'pdfs/class10/science/chemistry/acids-bases-questions.pdf', notes: [
                            'pH < 7: acidic, pH > 7: basic, pH = 7: neutral.',
                            'Strong vs weak acids/bases; common salts and their uses.',
                            'Download: <a href="pdfs/class10/science/chemistry/acids-bases.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ], videos: [
                            { title: 'Understanding pH Scale', url: 'https://www.youtube.com/watch?v=LS67vS10O5Y' },
                            { title: 'Acid-Base Reactions', url: 'https://www.youtube.com/watch?v=8qg0zG9YO5c' }
                        ] },
                        { name: 'Metals and Non-metals', summary: 'Understanding the physical and chemical properties of metals and non-metals.', questions: 'pdfs/class10/science/chemistry/metals-questions.pdf', notes: [
                            'Properties: malleability, ductility, conductivity (metals) vs brittleness (non-metals).',
                            'Reactivity series trends and typical reactions with acids and oxygen.',
                            'Download: <a href="pdfs/class10/science/chemistry/metals.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ], videos: [
                            { title: 'Properties of Metals and Non-metals', url: 'https://www.youtube.com/watch?v=9Ww6lF2I7x0' }
                        ] },
                        { name: 'Carbon and its Compounds', summary: 'An introduction to carbon, its versatile nature, and organic compounds.', questions: 'pdfs/class10/science/chemistry/carbon-questions.pdf', notes: [
                            'Tetravalency and catenation of carbon enable diverse organic compounds.',
                            'Functional groups: –OH, –CHO, –COOH, –Cl/–Br; homologous series patterns.',
                            'Download: <a href="pdfs/class10/science/chemistry/carbon.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ], videos: [
                            { title: 'Carbon and Its Compounds Overview', url: 'https://www.youtube.com/watch?v=rqirK0dD6a8' }
                        ] }
                    ]
                },
                'Biology': {
                    icon: 'fas fa-dna',
                    chapters: [
                        { name: 'Life Processes', summary: 'A study of the basic processes of life, including nutrition, respiration, and excretion.', questions: 'pdfs/class10/science/biology/life-processes-questions.pdf', notes: [
                            'Key processes: nutrition, respiration, transportation, excretion.',
                            'Autotrophic vs heterotrophic nutrition; aerobic vs anaerobic respiration.',
                            'Download: <a href="pdfs/class10/science/biology/life-processes.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ], videos: [
                            { title: 'Life Processes Crash Course', url: 'https://www.youtube.com/watch?v=Aj8Jf36q9Vw' }
                        ] },
                        { name: 'Control and Coordination', summary: 'How organisms respond to stimuli through the nervous and endocrine systems.', questions: 'pdfs/class10/science/biology/control-coordination-questions.pdf', notes: [
                            'Neuron structure and impulse transmission; reflex arc.',
                            'Plant hormones (auxin, gibberellin) vs animal hormones (insulin, adrenaline).',
                            'Download: <a href="pdfs/class10/science/biology/control-coordination.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ], videos: [
                            { title: 'Nervous and Endocrine Systems', url: 'https://www.youtube.com/watch?v=G7n1a2d2R2U' }
                        ] },
                        { name: 'How do Organisms Reproduce?', summary: 'Exploring the different modes of reproduction in organisms.', questions: 'pdfs/class10/science/biology/reproduction-questions.pdf', notes: [
                            'Asexual vs sexual reproduction; advantages and limitations.',
                            'Human reproductive system basics and methods of contraception.',
                            'Download: <a href="pdfs/class10/science/biology/reproduction.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ], videos: [
                            { title: 'Reproduction in Organisms', url: 'https://www.youtube.com/watch?v=_bH0b2cA1yo' }
                        ] },
                        { name: 'Heredity and Evolution', summary: 'Understanding the principles of heredity and the mechanisms of evolution.', questions: 'pdfs/class10/science/biology/heredity-questions.pdf', notes: [
                            'Mendel\'s laws of inheritance; monohybrid and dihybrid crosses.',
                            'Speciation and evolutionary evidence basics.',
                            'Download: <a href="pdfs/class10/science/biology/heredity.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ], videos: [
                            { title: 'Mendelian Genetics Basics', url: 'https://www.youtube.com/watch?v=Mehz7tCxjSE' }
                        ] },
                        { name: 'Our Environment', summary: 'A look at the components of our environment and ecosystem.', questions: 'pdfs/class10/science/biology/environment-questions.pdf', notes: [
                            'Food chains/webs; trophic levels and energy flow (10% law).',
                            'Biodegradable vs non-biodegradable waste; ecosystem balance.',
                            'Download: <a href="pdfs/class10/science/biology/environment.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ], videos: [
                            { title: 'Ecosystems and Food Chains', url: 'https://www.youtube.com/watch?v=MlRlgbrAVOs' }
                        ] }
                    ]
                },
                'Physics': {
                    icon: 'fas fa-atom',
                    chapters: [
                        { name: 'Light – Reflection and Refraction', summary: 'Studying the phenomena of light, including reflection by mirrors and refraction through lenses.', questions: 'pdfs/class10/science/physics/light-questions.pdf', notes: [
                            'Mirror/lens formulas; sign conventions (u, v, f).',
                            'Snell\'s law: n1 sinθ1 = n2 sinθ2; total internal reflection conditions.',
                            'Download: <a href="pdfs/class10/science/physics/light.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ], videos: [
                            { title: 'Reflection and Refraction Basics', url: 'https://www.youtube.com/watch?v=V8uVZQkH0H4' }
                        ] },
                        { name: 'The Human Eye and the Colourful World', summary: 'Understanding the human eye, its defects, and atmospheric refraction.', questions: 'pdfs/class10/science/physics/human-eye-questions.pdf', notes: [
                            'Power of accommodation; myopia/hypermetropia correction.',
                            'Dispersion, scattering and phenomena like rainbow and blue sky.',
                            'Download: <a href="pdfs/class10/science/physics/human-eye.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ], videos: [
                            { title: 'The Human Eye Explained', url: 'https://www.youtube.com/watch?v=5R8Z9z8M2j8' }
                        ] },
                        { name: 'Electricity', summary: 'An introduction to electric current, potential difference, and Ohm\'s law.', questions: 'pdfs/class10/science/physics/electricity-questions.pdf', notes: [
                            'Ohm\'s law: V = IR; series vs parallel combinations.',
                            'Power: P = VI = I^2R = V^2/R; household circuits basics.',
                            'Download: <a href="pdfs/class10/science/physics/electricity.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ], videos: [
                            { title: 'Ohm\'s Law and Circuits', url: 'https://www.youtube.com/watch?v=VnnpLaKsqGU' }
                        ] },
                        { name: 'Magnetic Effects of Electric Current', summary: 'Exploring magnetic fields, electromagnets, and electric motors.', questions: 'pdfs/class10/science/physics/magnetism-questions.pdf', notes: [
                            'Right-hand thumb rule; Fleming\'s left/right hand rules.',
                            'Electromagnetic induction and applications.',
                            'Download: <a href="pdfs/class10/science/physics/magnetism.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ], videos: [
                            { title: 'Magnetic Effects of Current', url: 'https://www.youtube.com/watch?v=J8F3c7NfQ0A' }
                        ] }
                    ]
                }
            },
            'mathematics': {
                'Mathematics': {
                    icon: 'fas fa-calculator',
                    chapters: [
                        { name: 'Real Numbers', summary: 'Euclid’s division lemma, Fundamental Theorem of Arithmetic, revisiting irrational numbers.' },
                        { name: 'Polynomials', summary: 'Zeros of a polynomial, relationship between zeros and coefficients.' },
                        { name: 'Pair of Linear Equations in Two Variables', summary: 'Graphical and algebraic methods of solution; consistency.' },
                        { name: 'Quadratic Equations', summary: 'Solutions by factorization and quadratic formula; nature of roots.' },
                        { name: 'Arithmetic Progressions', summary: 'nth term and sum of first n terms of an AP; applications.' },
                        { name: 'Triangles', summary: 'Similarity of triangles and related theorems; applications.' },
                        { name: 'Coordinate Geometry', summary: 'Distance formula, section formula, area of a triangle.' },
                        { name: 'Introduction to Trigonometry', summary: 'Trigonometric ratios of acute angles; identities.' },
                        { name: 'Applications of Trigonometry', summary: 'Heights and distances problems (simple cases).' },
                        { name: 'Circles', summary: 'Tangent to a circle; properties related to tangents.' },
                        { name: 'Constructions', summary: 'Division of a line segment, tangents to a circle, similar triangles.' },
                        { name: 'Areas Related to Circles', summary: 'Sector and segment areas; problems on areas.' },
                        { name: 'Surface Areas and Volumes', summary: 'Frustum, combination of solids; surface area and volume problems.' },
                        { name: 'Statistics', summary: 'Mean, median, mode of grouped data; cumulative frequency graphs.' },
                        { name: 'Probability', summary: 'Classical probability for simple problems.' }
                    ]
                }
            },
            'english': {
                'First Flight': {
                    icon: 'fas fa-book',
                    chapters: [
                        { name: 'A Letter to God', summary: 'Prose from First Flight.', questions: 'pdfs/class10/english/questions/a-letter-to-god-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/a-letter-to-god.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ], videos: [ { title: 'A Letter to God - Explanation', url: 'https://youtu.be/8wtgAX2ZHUw?si=qiIKTJ2LcJjKAd2N' } ] },
                        { name: 'Nelson Mandela: Long Walk to Freedom', summary: 'Prose from First Flight.', questions: 'pdfs/class10/english/questions/nelson-mandela-questions.pdf', notes: [
                            'Theme: Apartheid, struggle, courage, and freedom.',
                            'Download: <a href="pdfs/class10/english/notes/nelson-mandela.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Two Stories about Flying', summary: 'Prose from First Flight.', questions: 'pdfs/class10/english/questions/two-stories-about-flying-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/two-stories-about-flying.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'From the Diary of Anne Frank', summary: 'Prose from First Flight.', questions: 'pdfs/class10/english/questions/from-the-diary-of-anne-frank-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/from-the-diary-of-anne-frank.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Glimpses of India', summary: 'Prose from First Flight.', questions: 'pdfs/class10/english/questions/glimpses-of-india-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/glimpses-of-india.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Mijbil the Otter', summary: 'Prose from First Flight.', questions: 'pdfs/class10/english/questions/mijbil-the-otter-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/mijbil-the-otter.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Madam Rides the Bus', summary: 'Prose from First Flight.', questions: 'pdfs/class10/english/questions/madam-rides-the-bus-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/madam-rides-the-bus.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'The Sermon at Benares', summary: 'Prose from First Flight.', questions: 'pdfs/class10/english/questions/the-sermon-at-benares-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/the-sermon-at-benares.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'The Proposal', summary: 'Play from First Flight.', questions: 'pdfs/class10/english/questions/the-proposal-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/the-proposal.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Dust of Snow (Poem)', summary: 'Poem from First Flight.', questions: 'pdfs/class10/english/questions/dust-of-snow-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/dust-of-snow.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Fire and Ice (Poem)', summary: 'Poem from First Flight.', questions: 'pdfs/class10/english/questions/fire-and-ice-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/fire-and-ice.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'A Tiger in the Zoo (Poem)', summary: 'Poem from First Flight.', questions: 'pdfs/class10/english/questions/a-tiger-in-the-zoo-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/a-tiger-in-the-zoo.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'How to Tell Wild Animals (Poem)', summary: 'Poem from First Flight.', questions: 'pdfs/class10/english/questions/how-to-tell-wild-animals-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/how-to-tell-wild-animals.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'The Ball Poem (Poem)', summary: 'Poem from First Flight.', questions: 'pdfs/class10/english/questions/the-ball-poem-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/the-ball-poem.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Amanda! (Poem)', summary: 'Poem from First Flight.', questions: 'pdfs/class10/english/questions/amanda-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/amanda.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'The Trees (Poem)', summary: 'Poem from First Flight.', questions: 'pdfs/class10/english/questions/the-trees-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/the-trees.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Fog (Poem)', summary: 'Poem from First Flight.', questions: 'pdfs/class10/english/questions/fog-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/fog.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'The Tale of Custard the Dragon (Poem)', summary: 'Poem from First Flight.', questions: 'pdfs/class10/english/questions/the-tale-of-custard-the-dragon-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/the-tale-of-custard-the-dragon.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'For Anne Gregory (Poem)', summary: 'Poem from First Flight.', questions: 'pdfs/class10/english/notes/for-anne-gregory-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/for-anne-gregory.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] }
                    ]
                },
                'Footprints Without Feet': {
                    icon: 'fas fa-book-open',
                    chapters: [
                        { name: 'A Triumph of Surgery', summary: 'Story from Footprints Without Feet.', questions: 'pdfs/class10/english/questions/a-triumph-of-surgery-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/a-triumph-of-surgery.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'The Thief\'s Story', summary: 'Story from Footprints Without Feet.', questions: 'pdfs/class10/english/questions/the-thiefs-story-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/the-thiefs-story.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'The Midnight Visitor', summary: 'Story from Footprints Without Feet.', questions: 'pdfs/class10/english/questions/the-midnight-visitor-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/the-midnight-visitor.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'A Question of Trust', summary: 'Story from Footprints Without Feet.', questions: 'pdfs/class10/english/questions/a-question-of-trust-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/a-question-of-trust.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Footprints without Feet', summary: 'Story from Footprints Without Feet.', questions: 'pdfs/class10/english/questions/footprints-without-feet-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/footprints-without-feet.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'The Making of a Scientist', summary: 'Story from Footprints Without Feet.', questions: 'pdfs/class10/english/questions/the-making-of-a-scientist-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/the-making-of-a-scientist.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'The Necklace', summary: 'Story from Footprints Without Feet.', questions: 'pdfs/class10/english/questions/the-necklace-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/the-necklace.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Bholi', summary: 'Story from Footprints Without Feet.', questions: 'pdfs/class10/english/questions/bholi-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/bholi.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'The Book That Saved the Earth', summary: 'Play from Footprints Without Feet.', questions: 'pdfs/class10/english/questions/the-book-that-saved-the-earth-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/english/notes/the-book-that-saved-the-earth.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] }
                    ]
                }
            },
            'social-studies': {
                'History (India and the Contemporary World – II)': {
                    icon: 'fas fa-landmark',
                    chapters: [
                        { name: 'The Rise of Nationalism in Europe', summary: 'Nationalism and the making of nation-states.', questions: 'pdfs/class10/social-studies/history/rise-of-nationalism-in-europe-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/history/rise-of-nationalism-in-europe.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Nationalism in India', summary: 'Indian National Movement and Gandhi’s leadership.', questions: 'pdfs/class10/social-studies/history/nationalism-in-india-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/history/nationalism-in-india.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'The Making of a Global World', summary: 'Globalization and world economy in the past.', questions: 'pdfs/class10/social-studies/history/the-making-of-a-global-world-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/history/the-making-of-a-global-world.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'The Age of Industrialisation', summary: 'Industrialization in Europe and India.', questions: 'pdfs/class10/social-studies/history/the-age-of-industrialisation-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/history/the-age-of-industrialisation.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Print Culture and the Modern World', summary: 'History of print and its impact.', questions: 'pdfs/class10/social-studies/history/print-culture-and-the-modern-world-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/history/print-culture-and-the-modern-world.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] }
                    ]
                },
                'Geography (Contemporary India – II)': {
                    icon: 'fas fa-globe-asia',
                    chapters: [
                        { name: 'Resources and Development', summary: 'Types, planning, land and soil resources.', questions: 'pdfs/class10/social-studies/geography/resources-and-development-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/geography/resources-and-development.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Forest and Wildlife Resources', summary: 'Conservation and management.', questions: 'pdfs/class10/social-studies/geography/forest-and-wildlife-resources-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/geography/forest-and-wildlife-resources.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Water Resources', summary: 'Multi-purpose projects and water management.', questions: 'pdfs/class10/social-studies/geography/water-resources-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/geography/water-resources.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Agriculture', summary: 'Types and patterns in India.', questions: 'pdfs/class10/social-studies/geography/agriculture-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/geography/agriculture.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Minerals and Energy Resources', summary: 'Types, distribution and uses.', questions: 'pdfs/class10/social-studies/geography/minerals-and-energy-resources-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/geography/minerals-and-energy-resources.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Manufacturing Industries', summary: 'Industrial location and classification.', questions: 'pdfs/class10/social-studies/geography/manufacturing-industries-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/geography/manufacturing-industries.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Lifelines of National Economy', summary: 'Transport, communication and trade.', questions: 'pdfs/class10/social-studies/geography/lifelines-of-national-economy-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/geography/lifelines-of-national-economy.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] }
                    ]
                },
                'Political Science (Democratic Politics – II)': {
                    icon: 'fas fa-balance-scale',
                    chapters: [
                        { name: 'Power-sharing', summary: 'Forms of power sharing in democracy.', questions: 'pdfs/class10/social-studies/political-science/power-sharing-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/political-science/power-sharing.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Federalism', summary: 'Division of powers between levels of government.', questions: 'pdfs/class10/social-studies/political-science/federalism-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/political-science/federalism.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Gender, Religion and Caste', summary: 'Social divisions and politics.', questions: 'pdfs/class10/social-studies/political-science/gender-religion-and-caste-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/political-science/gender-religion-and-caste.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Political Parties', summary: 'Party systems and challenges.', questions: 'pdfs/class10/social-studies/political-science/political-parties-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/political-science/political-parties.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Outcomes of Democracy', summary: 'Evaluation of democratic outcomes.', questions: 'pdfs/class10/social-studies/political-science/outcomes-of-democracy-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/political-science/outcomes-of-democracy.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] }
                    ]
                },
                'Economics (Understanding Economic Development)': {
                    icon: 'fas fa-rupee-sign',
                    chapters: [
                        { name: 'Development', summary: 'Indicators of development and income.', questions: 'pdfs/class10/social-studies/economics/development-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/economics/development.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Sectors of the Indian Economy', summary: 'Primary, secondary and tertiary sectors.', questions: 'pdfs/class10/social-studies/economics/sectors-of-the-indian-economy-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/economics/sectors-of-the-indian-economy.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Money and Credit', summary: 'Functions of money; credit and formal sector.', questions: 'pdfs/class10/social-studies/economics/money-and-credit-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/economics/money-and-credit.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Globalisation and the Indian Economy', summary: 'Integration and impact on India.', questions: 'pdfs/class10/social-studies/economics/globalisation-and-the-indian-economy-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/economics/globalisation-and-the-indian-economy.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] },
                        { name: 'Consumer Rights', summary: 'Consumer awareness and protection.', questions: 'pdfs/class10/social-studies/economics/consumer-rights-questions.pdf', notes: [
                            'Download: <a href="pdfs/class10/social-studies/economics/consumer-rights.pdf" target="_blank" rel="noopener">Notes PDF</a>'
                        ] }
                    ]
                }
            },
            'artificial-intelligence': {
                'Artificial Intelligence': {
                    icon: 'fas fa-robot',
                    chapters: [
                        { name: 'Introduction to AI', summary: 'AI concepts, history, and applications.' },
                        { name: 'AI Project Cycle', summary: 'Problem scoping, data acquisition, data exploration, modelling, evaluation.' },
                        { name: 'Neural Networks (Perceptrons)', summary: 'Basic neural concepts using activities and worksheets.' },
                        { name: 'Natural Language Processing', summary: 'Text data, tokenization, simple NLP activities.' },
                        { name: 'Computer Vision', summary: 'Image data and basic CV concepts.' },
                        { name: 'Data Science Basics', summary: 'Data types, visualization, insights using simple tools.' }
                    ]
                }
            },
            'hindi': {
                'क्षितिज-II (Kshitij-II)': {
                    icon: 'fas fa-pen',
                    chapters: [
                        { name: 'पाठ 1', summary: 'क्षितिज-II के अनुसार गद्य/पद्य अध्याय (Class 10 NCERT).' },
                        { name: 'पाठ 2', summary: 'क्षितिज-II के अनुसार गद्य/पद्य अध्याय (Class 10 NCERT).' },
                        { name: 'पाठ 3', summary: 'क्षितिज-II के अनुसार गद्य/पद्य अध्याय (Class 10 NCERT).' }
                    ]
                },
                'कृतिका-II (Kritika-II)': {
                    icon: 'fas fa-book',
                    chapters: [
                        { name: 'पाठ 1', summary: 'कृतिका-II के अनुसार पूरक पाठ्यपुस्तक अध्याय (Class 10 NCERT).' },
                        { name: 'पाठ 2', summary: 'कृतिका-II के अनुसार पूरक पाठ्यपुस्तक अध्याय (Class 10 NCERT).' }
                    ]
                },
                'स्पर्श-II (Sparsh-II)': {
                    icon: 'fas fa-book-open',
                    chapters: [
                        { name: 'पाठ 1', summary: 'स्पर्श-II (Course B) के अनुसार गद्य/पद्य अध्याय (Class 10 NCERT).' },
                        { name: 'पाठ 2', summary: 'स्पर्श-II (Course B) के अनुसार गद्य/पद्य अध्याय (Class 10 NCERT).' }
                    ]
                },
                'संचयन-II (Sanchayan-II)': {
                    icon: 'fas fa-feather',
                    chapters: [
                        { name: 'पाठ 1', summary: 'संचयन-II के अनुसार पूरक पाठ्यपुस्तक अध्याय (Class 10 NCERT).' },
                        { name: 'पाठ 2', summary: 'संचयन-II के अनुसार पूरक पाठ्यपुस्तक अध्याय (Class 10 NCERT).' }
                    ]
                }
            },
            'tamil': {
                'Prose': {
                    icon: 'fas fa-book',
                    chapters: [
                        { name: 'Lesson 1', summary: 'Tamil Prose (Class 10) as per syllabus.' },
                        { name: 'Lesson 2', summary: 'Tamil Prose (Class 10) as per syllabus.' }
                    ]
                },
                'Poetry': {
                    icon: 'fas fa-feather',
                    chapters: [
                        { name: 'Poem 1', summary: 'Tamil Poetry (Class 10) as per syllabus.' },
                        { name: 'Poem 2', summary: 'Tamil Poetry (Class 10) as per syllabus.' }
                    ]
                },
                'Supplementary Reader': {
                    icon: 'fas fa-book-open',
                    chapters: [
                        { name: 'Chapter 1', summary: 'Tamil Supplementary (Class 10) as per syllabus.' },
                        { name: 'Chapter 2', summary: 'Tamil Supplementary (Class 10) as per syllabus.' }
                    ]
                },
                'Grammar (இலக்கணம்)': {
                    icon: 'fas fa-language',
                    chapters: [
                        { name: 'இலக்கணம் - பகுதி 1', summary: 'எழுத்தியல், சொல்வகைகள், வினைச்சொற்கள், பெயர்ச்சொற்கள்.' },
                        { name: 'இலக்கணம் - பகுதி 2', summary: 'வாக்கியவியல், இணைச்சொற்கள், எதிர்சொற்கள், பொருத்தம்.' }
                    ]
                },
                'Literature': {
                    icon: 'fas fa-book-reader',
                    chapters: [
                        { name: 'Unit 1', summary: 'Tamil literature selections aligned to Class 10 syllabus.' },
                        { name: 'Unit 2', summary: 'Tamil literature selections aligned to Class 10 syllabus.' }
                    ]
                }
            }
        }
    };

    const subjectsByClass = {
        1: [
            { id: 'english', name: 'English', icon: '📝' },
            { id: 'mathematics', name: 'Mathematics', icon: '🔢' },
            { id: 'evs', name: 'EVS', icon: '🌳' },
            { id: 'hindi', name: 'Hindi', icon: '🖋️' },
            { id: 'tamil', name: 'Tamil', icon: '✍️' }
        ],
        2: [
            { id: 'english', name: 'English', icon: '📝' },
            { id: 'mathematics', name: 'Mathematics', icon: '🔢' },
            { id: 'evs', name: 'EVS', icon: '🌳' },
            { id: 'hindi', name: 'Hindi', icon: '🖋️' },
            { id: 'tamil', name: 'Tamil', icon: '✍️' }
        ],
        3: [
            { id: 'english', name: 'English', icon: '📝' },
            { id: 'mathematics', name: 'Mathematics', icon: '🔢' },
            { id: 'evs', name: 'EVS', icon: '🌳' },
            { id: 'hindi', name: 'Hindi', icon: '🖋️' },
            { id: 'tamil', name: 'Tamil', icon: '✍️' }
        ],
        4: [
            { id: 'english', name: 'English', icon: '📝' },
            { id: 'mathematics', name: 'Mathematics', icon: '🔢' },
            { id: 'evs', name: 'EVS', icon: '🌳' },
            { id: 'hindi', name: 'Hindi', icon: '🖋️' },
            { id: 'tamil', name: 'Tamil', icon: '✍️' }
        ],
        5: [
            { id: 'english', name: 'English', icon: '📝' },
            { id: 'mathematics', name: 'Mathematics', icon: '🔢' },
            { id: 'evs', name: 'EVS', icon: '🌳' },
            { id: 'hindi', name: 'Hindi', icon: '🖋️' },
            { id: 'tamil', name: 'Tamil', icon: '✍️' }
        ],
        6: [
            { id: 'english', name: 'English', icon: '📝' },
            { id: 'mathematics', name: 'Mathematics', icon: '🔢' },
            { id: 'science', name: 'Science', icon: '🔬' },
            { id: 'social-studies', name: 'Social Studies', icon: '🏛️' },
            { id: 'hindi', name: 'Hindi', icon: '🖋️' },
            { id: 'tamil', name: 'Tamil', icon: '✍️' }
        ],
        7: [
            { id: 'english', name: 'English', icon: '📝' },
            { id: 'mathematics', name: 'Mathematics', icon: '🔢' },
            { id: 'science', name: 'Science', icon: '🔬' },
            { id: 'social-studies', name: 'Social Studies', icon: '🏛️' },
            { id: 'hindi', name: 'Hindi', icon: '🖋️' },
            { id: 'tamil', name: 'Tamil', icon: '✍️' }
        ],
        8: [
            { id: 'english', name: 'English', icon: '📝' },
            { id: 'mathematics', name: 'Mathematics', icon: '🔢' },
            { id: 'science', name: 'Science', icon: '🔬' },
            { id: 'social-studies', name: 'Social Studies', icon: '🏛️' },
            { id: 'hindi', name: 'Hindi', icon: '🖋️' },
            { id: 'tamil', name: 'Tamil', icon: '✍️' }
        ],
        9: [
            { id: 'english', name: 'English', icon: '📝' },
            { id: 'mathematics', name: 'Mathematics', icon: '🔢' },
            { id: 'science', name: 'Science', icon: '🔬' },
            { id: 'social-studies', name: 'Social Studies', icon: '🏛️' },
            { id: 'hindi', name: 'Hindi', icon: '🖋️' },
            { id: 'tamil', name: 'Tamil', icon: '✍️' },
            { id: 'artificial-intelligence', name: 'Artificial Intelligence', icon: '🤖' }
        ],
        10: [
            { id: 'english', name: 'English', icon: '📝' },
            { id: 'mathematics', name: 'Mathematics', icon: '📊' },
            { id: 'science', name: 'Science', icon: '🔬' },
            { id: 'social-studies', name: 'Social Science', icon: '🏛️' },
            { id: 'hindi', name: 'Hindi', icon: '🖋️' },
            { id: 'tamil', name: 'Tamil', icon: '✍️' },
            { id: 'artificial-intelligence', name: 'Artificial Intelligence', icon: '🤖' }
        ]
    };

    const previousYearSubjects = [
        { 
            id: 'english-pyq', 
            name: 'English PYQ', 
            icon: '📚', 
            isPreviousYear: true,
            pdfs: [
                {
                    year: '2023',
                    papers: [
                        {
                            id: 'qp1',
                            name: 'Question Paper 1',
                            files: [
                                { type: 'Question Paper', url: 'pdfs/class10/english/2023/2023-qp1-question-paper.pdf' },
                                { type: 'Marking Scheme', url: 'pdfs/class10/english/2023/2023-qp1-marking-scheme.pdf' }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'mathematics-pyq', 
            name: 'Mathematics PYQ', 
            icon: '📊', 
            isPreviousYear: true,
            pdfs: [
                {
                    year: '2023',
                    papers: [
                        {
                            id: 'qp1',
                            name: 'Question Paper 1',
                            files: [
                                { type: 'Question Paper', url: 'pdfs/class10/mathematics/2023/2023-qp1-question-paper.pdf' },
                                { type: 'Marking Scheme', url: 'pdfs/class10/mathematics/2023/2023-qp1-marking-scheme.pdf' }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'science-pyq', 
            name: 'Science PYQ', 
            icon: '🔬', 
            isPreviousYear: true,
            pdfs: [
                {
                    year: '2023',
                    papers: [
                        {
                            id: 'qp1',
                            name: 'Question Paper 1',
                            files: [
                                { type: 'Question Paper', url: 'pdfs/class10/science/2023/2023-qp1-question-paper.pdf' },
                                { type: 'Marking Scheme', url: 'pdfs/class10/science/2023/2023-qp1-marking-scheme.pdf' }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'social-studies-pyq', 
            name: 'Social Studies PYQ', 
            icon: '🌍', 
            isPreviousYear: true,
            pdfs: [
                {
                    year: '2023',
                    papers: [
                        {
                            id: 'qp1',
                            name: 'Question Paper 1',
                            files: [
                                { type: 'Question Paper', url: 'pdfs/class10/social-studies/2023/2023-qp1-question-paper.pdf' },
                                { type: 'Marking Scheme', url: 'pdfs/class10/social-studies/2023/2023-qp1-marking-scheme.pdf' }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'hindi-pyq', 
            name: 'Hindi PYQ', 
            icon: '🖋️', 
            isPreviousYear: true,
            pdfs: [
                {
                    year: '2023',
                    papers: [
                        {
                            id: 'qp1',
                            name: 'Question Paper 1',
                            files: [
                                { type: 'Question Paper', url: 'pdfs/class10/hindi/2023/2023-qp1-question-paper.pdf' },
                                { type: 'Marking Scheme', url: 'pdfs/class10/hindi/2023/2023-qp1-marking-scheme.pdf' }
                            ]
                        }
                    ]
                }
            ]
        },
        { 
            id: 'tamil-pyq', 
            name: 'Tamil PYQ', 
            icon: '✍️', 
            isPreviousYear: true,
            pdfs: [
                {
                    year: '2023',
                    papers: [
                        {
                            id: 'qp1',
                            name: 'Question Paper 1',
                            files: [
                                { type: 'Question Paper', url: 'pdfs/class10/tamil/2023/2023-qp1-question-paper.pdf' },
                                { type: 'Marking Scheme', url: 'pdfs/class10/tamil/2023/2023-qp1-marking-scheme.pdf' }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    // --- STATE --- //
    let currentClass = null;

    // --- FUNCTIONS --- //

    function selectClass(classNum) {
        currentClass = classNum;
        document.querySelectorAll('.class-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.class) === classNum);
        });

        const subjectContainer = document.getElementById('subject-container');
        const subjectsGrid = document.getElementById('subjects-grid');
        const previousYearContainer = document.getElementById('previous-year-container');
        const previousYearGrid = document.getElementById('previous-year-grid');
        const scienceLessonsView = document.getElementById('science-lessons-view');

        // Reset UI
        subjectsGrid.innerHTML = '';
        if(previousYearGrid) previousYearGrid.innerHTML = '';
        if (scienceLessonsView) scienceLessonsView.style.display = 'none';
        document.querySelector('.hero').style.display = 'block';
        document.querySelector('.features').style.display = 'block';


        const subjects = subjectsByClass[classNum] || [];
        subjects.forEach(subject => {
            const subjectCard = document.createElement('div');
            subjectCard.className = 'subject-card';
            let innerHTML = `
                <div class="subject-icon">${subject.icon}</div>
                <h3>${subject.name}</h3>
                <p>Class ${classNum} ${subject.name}</p>
            `;

            if (classNum < 10) {
                innerHTML += `<div class="subject-actions"><button class="start-learning-btn">Start Learning</button></div>`;
                subjectCard.innerHTML = innerHTML;
                subjectCard.querySelector('.start-learning-btn').addEventListener('click', (event) => {
                    event.stopPropagation();
                    startLearning(classNum, subject.id);
                });
            } else {
                innerHTML += `<div class="subject-stats"><span>Start Learning</span></div>`;
                subjectCard.innerHTML = innerHTML;
                subjectCard.addEventListener('click', (event) => {
                    redirectToSubject(event, subject.id);
                });
            }
            subjectsGrid.appendChild(subjectCard);
        });

        if (classNum === 10) {
            previousYearContainer.classList.remove('hidden');
            previousYearSubjects.forEach(subject => {
                const subjectCard = document.createElement('div');
                subjectCard.className = 'subject-card previous-year';
                subjectCard.addEventListener('click', (event) => redirectToSubject(event, subject.id));
                subjectCard.innerHTML = `
                    <div class="subject-icon">${subject.icon}</div>
                    <h3>${subject.name}</h3>
                    <p>Practice with past papers</p>
                `;
                previousYearGrid.appendChild(subjectCard);
            });
        } else {
            if(previousYearContainer) previousYearContainer.classList.add('hidden');
        }

        subjectContainer.classList.remove('hidden');
    }

    function startLearning(className, subjectId) {
        const subjectName = subjectId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        alert(`Starting ${subjectName} for Class ${className}. Learning content will be available here soon!`);
    }

    function redirectToSubject(event, subjectId) {
        if (event) event.preventDefault();
        if (!currentClass) return;

        // For Class 10, open in-page lessons view for supported subjects
        if (currentClass === 10 && ['science', 'mathematics', 'english', 'social-studies', 'artificial-intelligence', 'hindi', 'tamil'].includes(subjectId)) {
            showLessons(subjectId);
            return;
        }

        if (currentClass === 10 && subjectId.endsWith('-pyq')) {
            const subjectData = previousYearSubjects.find(s => s.id === subjectId);
            if (subjectData) {
                localStorage.setItem('selectedClass', 'Class 10');
                localStorage.setItem('selectedSubject', subjectData.name);
                localStorage.setItem('previousYearQuestions', JSON.stringify(subjectData.pdfs));
                window.location.href = 'chapters.html';
            }
            return;
        }

        window.location.href = subjectId.toLowerCase().replace(/\s+/g, '-') + '.html';
    }

    function showLessons(subjectId) {
        const mainContainer = document.querySelector('.container');
        const heroSection = document.querySelector('.hero');
        const featuresSection = document.querySelector('.features');
        const subjectContainer = document.getElementById('subject-container');

        heroSection.style.display = 'none';
        featuresSection.style.display = 'none';
        subjectContainer.style.display = 'none';

        let lessonsView = document.getElementById('science-lessons-view');
        if (!lessonsView) {
            lessonsView = document.createElement('div');
            lessonsView.id = 'science-lessons-view';
            mainContainer.appendChild(lessonsView);
        }
        lessonsView.style.display = 'block';

        const lessonsData = lessonsByClassAndSubject[10]?.[subjectId];
        const subjectTitle = subjectId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        let lessonsHTML = `
            <div class="lessons-header">
                <button id="back-to-subjects-btn" class="back-btn">← Back to Subjects</button>
                <h2>Class 10 ${subjectTitle} Lessons</h2>
            </div>`;

        for (const section in lessonsData) {
            const sectionData = lessonsData[section];
            lessonsHTML += `
                <div class="lesson-section">
                    <h3><i class="${sectionData.icon}"></i>${section}</h3>
                    <div class="chapters-grid">`;
            
            sectionData.chapters.forEach(chapter => {
                const notesList = (chapter.notes && chapter.notes.length)
                    ? '<ul class="notes-list">' + chapter.notes.map(n => `<li>${n}</li>`).join('') + '</ul>'
                    : '<p class="notes-empty">Notes will be added soon.</p>';
                const videosList = (chapter.videos && chapter.videos.length)
                    ? '<ul class="videos-list">' + chapter.videos.map(v => `<li><a href="${v.url}" target="_blank" rel="noopener">${v.title}</a></li>`).join('') + '</ul>'
                    : '<p class="videos-empty">Videos will be added soon.</p>';

                let questionsList = '<p class="questions-empty">No question papers added yet.</p>';
                if (Array.isArray(chapter.questions) && chapter.questions.length) {
                    questionsList = '<ul class="questions-list">' + chapter.questions.map(q => {
                        if (typeof q === 'string') {
                            return `<li><a href="${q}" target="_blank" rel="noopener">Open Question Paper</a></li>`;
                        }
                        const title = q.title || 'Open Question Paper';
                        const url = q.url || '#';
                        return `<li><a href="${url}" target="_blank" rel="noopener">${title}</a></li>`;
                    }).join('') + '</ul>';
                } else if (typeof chapter.questions === 'string' && chapter.questions.trim() !== '') {
                    questionsList = '<ul class="questions-list">' + `<li><a href="${chapter.questions}" target="_blank" rel="noopener">Open Question Paper</a></li>` + '</ul>';
                }

                // If there's a single questions URL, enable direct redirection on the button
                let questionsUrl = '';
                if (typeof chapter.questions === 'string' && chapter.questions.trim() !== '') {
                    questionsUrl = chapter.questions;
                } else if (Array.isArray(chapter.questions) && chapter.questions.length === 1) {
                    const q = chapter.questions[0];
                    questionsUrl = (typeof q === 'string') ? q : (q.url || '');
                }

                lessonsHTML += `
                    <div class="chapter-item">
                        <h4>${chapter.name}</h4>
                        <p>${chapter.summary}</p>
                        <div class="chapter-resources">
                            <button type="button" class="questions-toggle"${questionsUrl ? ` data-questions-url="${questionsUrl}"` : ''}>View Questions</button>
                            <button type="button" class="notes-toggle">View Notes</button>
                            <button type="button" class="videos-toggle">Watch Videos</button>
                        </div>
                        <div class="questions-box hidden">
                            <h5>Question Papers</h5>
                            ${questionsList}
                        </div>
                        <div class="notes-box hidden">
                            <h5>Key Notes</h5>
                            ${notesList}
                        </div>
                        <div class="videos-box hidden">
                            <h5>Concept Videos</h5>
                            ${videosList}
                        </div>
                    </div>`;
            });
            lessonsHTML += `</div></div>`;
        }
        lessonsView.innerHTML = lessonsHTML;

        document.getElementById('back-to-subjects-btn').addEventListener('click', () => {
            lessonsView.style.display = 'none';
            heroSection.style.display = 'block';
            featuresSection.style.display = 'block';
            subjectContainer.style.display = 'block';
            if(currentClass) selectClass(currentClass);
        });

        // Questions/Notes/Videos handlers
        lessonsView.querySelectorAll('.questions-toggle').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const url = btn.getAttribute('data-questions-url');
                if (url) {
                    window.open(url, '_blank');
                    return;
                }
                const chapterItem = e.target.closest('.chapter-item');
                const box = chapterItem.querySelector('.questions-box');
                box.classList.toggle('hidden');
                btn.textContent = box.classList.contains('hidden') ? 'View Questions' : 'Hide Questions';
            });
        });
        lessonsView.querySelectorAll('.notes-toggle').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const chapterItem = e.target.closest('.chapter-item');
                const box = chapterItem.querySelector('.notes-box');
                box.classList.toggle('hidden');
                btn.textContent = box.classList.contains('hidden') ? 'View Notes' : 'Hide Notes';
            });
        });
        lessonsView.querySelectorAll('.videos-toggle').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const chapterItem = e.target.closest('.chapter-item');
                const box = chapterItem.querySelector('.videos-box');
                box.classList.toggle('hidden');
                btn.textContent = box.classList.contains('hidden') ? 'Watch Videos' : 'Hide Videos';
            });
        });
    }

    function displayChapters(className, subjectName, pdfs) {
        document.getElementById('subject-title').textContent = `${subjectName} - ${className}`;
        const chaptersGrid = document.getElementById('chapters-grid');
        chaptersGrid.innerHTML = '';

        if (!pdfs || pdfs.length === 0) {
            chaptersGrid.innerHTML = '<p>No question papers found.</p>';
            return;
        }

        pdfs.forEach(yearData => {
            const yearSection = document.createElement('div');
            yearSection.className = 'year-section';
            yearSection.innerHTML = `<h3>${yearData.year}</h3>`;
            const papersGrid = document.createElement('div');
            papersGrid.className = 'papers-grid';
            yearData.papers.forEach(paper => {
                let filesHTML = paper.files.map(file => `<a href="${file.url}" target="_blank">${file.type}</a>`).join('');
                const paperCard = document.createElement('div');
                paperCard.className = 'paper-card';
                paperCard.innerHTML = `<h4>${paper.name}</h4><div class="paper-links">${filesHTML}</div>`;
                papersGrid.appendChild(paperCard);
            });
            yearSection.appendChild(papersGrid);
            chaptersGrid.appendChild(yearSection);
        });
    }

    // --- INITIALIZATION --- //
    const pagePath = window.location.pathname.split('/').pop();

    if (pagePath === 'index.html' || pagePath === '') {
        document.querySelectorAll('.class-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const classNum = parseInt(btn.dataset.class);
                selectClass(classNum);
            });
        });
        // Select Class 10 by default
        selectClass(10);
    } 
    
    else if (pagePath === 'chapters.html') {
        const selectedClass = localStorage.getItem('selectedClass');
        const selectedSubject = localStorage.getItem('selectedSubject');
        const pdfs = JSON.parse(localStorage.getItem('previousYearQuestions'));
        displayChapters(selectedClass, selectedSubject, pdfs);
    }

});
