/* =========================================================
   12th PASS QUEST — FINAL app.js
   Complete syllabus + navigation/progress engine

   Subjects:
   1. General Hindi
   2. English
   3. Economics
   4. Sociology
   5. Drawing Design
   ========================================================= */

const SUBJECT_DATA = {

  /* =======================================================
     GENERAL HINDI
     ======================================================= */

  Hindi: {
    title: "General Hindi",
    subtitle: "हिन्दी — General Hindi",

    chapters: [

      {
        title: "इकाई 1 — गद्य साहित्य",
        english: "Unit 1 — Prose Literature",

        summaryEn:
          "Study the history and development of Hindi prose literature and the prescribed prose and story sections.",

        summaryHi:
          "इस इकाई में हिन्दी गद्य साहित्य के इतिहास तथा निर्धारित गद्य और कहानी साहित्य का अध्ययन किया जाता है।",

        points: [
          "हिन्दी गद्य साहित्य का इतिहास एवं विकास",
          "निर्धारित गद्य-पाठों के लेखक, विषय और मुख्य विचार",
          "कहानी साहित्य का विकास",
          "कहानी का सार, उद्देश्य तथा प्रमुख पात्र"
        ],

        exam: [
          "लेखक/रचनाकार परिचय तैयार करें।",
          "पाठ का सार और उद्देश्य अपने शब्दों में लिखने का अभ्यास करें।",
          "मुख्य विचार और पात्र-चित्रण पर प्रश्नों की तैयारी करें।"
        ]
      },

      {
        title: "निर्धारित गद्य-पाठ",
        english: "Prescribed Prose Texts",

        summaryEn:
          "Prepare the prescribed Hindi prose works and understand their authors, themes and important ideas.",

        summaryHi:
          "निर्धारित गद्य-पाठों के लेखक, विषय, मुख्य विचार और परीक्षा में पूछे जाने वाले महत्वपूर्ण बिंदुओं की तैयारी करें।",

        points: [
          "राष्ट्र का स्वरूप — वासुदेव शरण अग्रवाल",
          "अशोक के फूल — डॉ. हजारी प्रसाद द्विवेदी",
          "भाषा और आधुनिकता — प्रो. जी. सुन्दर रेड्डी",
          "तेजस्वी मन के सम्पादित अंश — डॉ. ए.पी.जे. अब्दुल कलाम",
          "राबर्ट नर्सिंग होम में — कन्हैयालाल मिश्र ‘प्रभाकर’",
          "निन्दा रस — हरिशंकर परसाई"
        ],

        exam: [
          "प्रत्येक पाठ का लेखक परिचय और मुख्य विचार तैयार करें।",
          "संदर्भ/व्याख्या और लघु-दीर्घ उत्तर लिखने का अभ्यास करें।"
        ]
      },

      {
        title: "इकाई 2 — पद्य साहित्य",
        english: "Unit 2 — Poetry Literature",

        summaryEn:
          "Study the history of Hindi poetry, prescribed poems and poetic beauty elements.",

        summaryHi:
          "इस इकाई में हिन्दी पद्य साहित्य के इतिहास, निर्धारित कविताओं तथा काव्य-सौन्दर्य के तत्वों का अध्ययन किया जाता है।",

        points: [
          "हिन्दी पद्य साहित्य का इतिहास एवं विकास",
          "निर्धारित कविताओं के कवि और मुख्य भाव",
          "काव्य-सौन्दर्य",
          "रस, अलंकार और छन्द आदि"
        ],

        exam: [
          "कवि परिचय और कविता का केंद्रीय भाव तैयार करें।",
          "रस, अलंकार और छन्द की पहचान का अभ्यास करें।"
        ]
      },

      {
        title: "निर्धारित पद्य-पाठ",
        english: "Prescribed Poetry Texts",

        summaryEn:
          "Prepare the prescribed Hindi poems, their poets, central ideas and poetic features.",

        summaryHi:
          "निर्धारित कविताओं के कवि, केंद्रीय भाव, विषय और काव्य-सौन्दर्य की तैयारी करें।",

        points: [
          "पवन-दूतिका — अयोध्या सिंह उपाध्याय ‘हरिऔध’",
          "कैकेयी का अनुताप, गीत — मैथिलीशरण गुप्त",
          "श्रद्धा-मनु, गीत — जयशंकर प्रसाद",
          "नौका विहार, बापू के प्रति, परिवर्तन — सुमित्रानन्दन पंत",
          "गीत — महादेवी वर्मा",
          "अभिनव मनुष्य, पुरुरवा, उर्वशी — रामधारी सिंह ‘दिनकर’",
          "मैंने आहुति बनकर देखा, हिरोशिमा — अज्ञेय"
        ],

        exam: [
          "कवि और कविता के भाव/विषय पर प्रश्न तैयार करें।",
          "काव्यांश की व्याख्या और काव्य-सौन्दर्य पर अभ्यास करें।"
        ]
      },

      {
        title: "कहानी साहित्य",
        english: "Story Literature",

        summaryEn:
          "Prepare the development of Hindi story literature and the prescribed stories, including their summaries, purposes and characters.",

        summaryHi:
          "कहानी साहित्य के विकास तथा निर्धारित कहानियों के सार, उद्देश्य और पात्रों की तैयारी करें।",

        points: [
          "यात्रा — जैनेन्द्र कुमार",
          "पंचलाइट — फणीश्वर नाथ ‘रेणु’",
          "लाटी — शिवानी",
          "कहानी-साहित्य का विकास"
        ],

        exam: [
          "कहानी का सार, उद्देश्य और प्रमुख पात्र लिखने का अभ्यास करें।"
        ]
      },

      {
        title: "खण्ड-काव्य",
        english: "Khand-Kavya / Long Narrative Poetry",

        summaryEn:
          "Prepare the prescribed Khand-Kavya works, their stories and important character sketches.",

        summaryHi:
          "निर्धारित खण्ड-काव्यों की कथा-वस्तु और चरित्र-चित्रण की तैयारी करें।",

        points: [
          "मुक्ति यज्ञ — सुमित्रानन्दन पंत",
          "सत्य की जीत",
          "रश्मिरथी — रामधारी सिंह ‘दिनकर’",
          "आलोकवृत्त — गुलाब खण्डेलवाल",
          "त्यागपथी — रामेश्वर शुक्ल ‘अंचल’",
          "श्रवण कुमार — शिव बालक शुक्ल"
        ],

        exam: [
          "कथा-वस्तु और प्रमुख पात्रों के चरित्र-चित्रण का अभ्यास करें।"
        ]
      },

      {
        title: "इकाई 3 — संस्कृत खण्ड",
        english: "Unit 3 — Sanskrit Section",

        summaryEn:
          "Prepare the prescribed Sanskrit prose and poetry passages, translation and comprehension.",

        summaryHi:
          "निर्धारित संस्कृत गद्य-पद्य अंश, उनके अनुवाद तथा बोध से जुड़े प्रश्नों की तैयारी करें।",

        points: [
          "भौजस्योदयम्",
          "आत्मज्ञः एवं सर्वज्ञः",
          "संस्कृत भाषायाः महत्त्वम्",
          "जातक कथा",
          "सुभाषित रत्नानि",
          "महामना मालवीयः",
          "पंचशील-सिद्धान्ताः"
        ],

        exam: [
          "संस्कृत अंशों का हिन्दी अर्थ/अनुवाद करने का अभ्यास करें।",
          "पाठ के मुख्य भाव और प्रश्नोत्तर तैयार करें।"
        ]
      },

      {
        title: "इकाई 4 — निबन्ध, पत्र एवं व्याकरण",
        english: "Unit 4 — Essay, Letter Writing & Grammar",

        summaryEn:
          "Prepare essay writing, letter writing, grammar and unseen prose/poetry.",

        summaryHi:
          "इस इकाई में निबन्ध, पत्र-लेखन, व्याकरण तथा अपठित गद्य-पद्य की तैयारी की जाती है।",

        points: [
          "निबन्ध लेखन",
          "पत्र लेखन",
          "मुहावरे एवं लोकोक्तियाँ",
          "सूक्ष्म शब्द-भेद",
          "अनेक शब्दों के लिए एक शब्द",
          "वाक्य शुद्धि",
          "रस, अलंकार और छन्द",
          "अपठित गद्य एवं पद्य"
        ],

        exam: [
          "निबन्ध और पत्र निर्धारित प्रारूप में लिखने का अभ्यास करें।",
          "व्याकरण के छोटे प्रश्न नियमित रूप से revise करें।",
          "अपठित गद्य/पद्य में उत्तर पाठ के अर्थ के आधार पर दें।"
        ]
      }

    ]
  },


  /* =======================================================
     ENGLISH
     ======================================================= */

  English: {
    title: "English",
    subtitle: "English — Class XII",

    chapters: [

      {
        title: "Reading",
        english: "Reading Skills",

        summaryEn:
          "Prepare for the long unseen passage, very short-answer questions and vocabulary-based questions.",

        summaryHi:
          "Reading section में unseen passage, very short answers और vocabulary questions की तैयारी करें।",

        points: [
          "One long unseen passage",
          "4 very short answer questions",
          "3 vocabulary questions"
        ],

        exam: [
          "Passage पहले पूरा पढ़ें, फिर प्रश्नों के उत्तर दें।",
          "उत्तर passage के अर्थ के अनुसार संक्षेप में लिखें।"
        ]
      },

      {
        title: "Writing",
        english: "Writing Skills",

        summaryEn:
          "Prepare article writing and formal letters such as letters to the editor, complaint and business letters.",

        summaryHi:
          "Writing section में लगभग 150 शब्दों का article और formal letters की तैयारी करें।",

        points: [
          "Article: descriptive, argumentative or autobiographical",
          "About 150 words",
          "Letter to the Editor",
          "Complaint letter",
          "Business letter"
        ],

        exam: [
          "Article का clear introduction, body और conclusion रखें।",
          "Formal letter में format, subject और appropriate closing न भूलें।"
        ]
      },

      {
        title: "Grammar",
        english: "Grammar",

        summaryEn:
          "Grammar covers narration, synthesis, transformation, syntax, idioms, phrasal verbs, synonyms, antonyms, one-word substitution, homophones and translation.",

        summaryHi:
          "Grammar में narration, synthesis, transformation, syntax, idioms, phrasal verbs, synonyms, antonyms, one-word substitution, homophones और translation शामिल हैं।",

        points: [
          "Narration",
          "Synthesis",
          "Transformation",
          "Syntax",
          "Idioms / Phrases",
          "Phrasal Verbs",
          "Synonyms / Antonyms",
          "One-word Substitution",
          "Homophones",
          "Hindi to English translation — 7–8 sentences"
        ],

        exam: [
          "Grammar rules को examples के साथ practice करें।",
          "Translation में simple और grammatically correct English लिखें।"
        ]
      },

      {
        title: "Flamingo — Prose",
        english: "Flamingo — Prose",

        summaryEn:
          "Prepare the prescribed Flamingo prose chapters, themes, characters and important questions.",

        summaryHi:
          "Flamingo की निर्धारित prose chapters में story, theme, characters और important questions तैयार करें।",

        points: [
          "The Last Lesson — Alphonse Daudet",
          "Lost Spring — Anees Jung",
          "Deep Water — William Douglas",
          "The Rattrap — Selma Lagerlof",
          "Indigo — Louis Fischer",
          "Poets And Pancakes — Ashokamitran",
          "The Interview — Christopher Silvester",
          "Going Places — A.R. Barton"
        ],

        exam: [
          "हर chapter का theme और important characters समझकर पढ़ें।",
          "Short और long-answer questions अपने शब्दों में लिखने का अभ्यास करें।"
        ]
      },

      {
        title: "Flamingo — Poetry",
        english: "Flamingo — Poetry",

        summaryEn:
          "Prepare the prescribed poems, central ideas, themes and figures of speech.",

        summaryHi:
          "निर्धारित कविताओं के central idea, theme और figures of speech की तैयारी करें।",

        points: [
          "My Mother At Sixty-Six — Kamala Das",
          "Keeping Quiet — Pablo Neruda",
          "A Thing of Beauty — John Keats",
          "A Road Side Stand — Robert Frost",
          "Aunt Jennifer’s Tigers — Adrienne Rich",
          "Simile",
          "Metaphor",
          "Personification",
          "Oxymoron",
          "Apostrophe",
          "Hyperbole",
          "Onomatopoeia"
        ],

        exam: [
          "Central idea और poetic devices की पहचान करें।",
          "Poem का meaning अपने शब्दों में लिखने का अभ्यास करें।"
        ]
      },

      {
        title: "Vistas",
        english: "Vistas — Supplementary Reader",

        summaryEn:
          "Prepare the prescribed Vistas chapters, their themes, characters and exam-oriented questions.",

        summaryHi:
          "Vistas की सभी निर्धारित chapters की कहानी, theme, characters और important questions तैयार करें।",

        points: [
          "The Third Level — Jack Finney",
          "The Tiger King — Kalki",
          "Journey to the End of the Earth — Tishani Doshi",
          "The Enemy — Pearl S. Buck",
          "On the Face of It — Susan Hill",
          "Memories of Childhood — Zitkala Sa & Bama"
        ],

        exam: [
          "Chapter-wise summary और character/theme based questions तैयार करें।"
        ]
      }

    ]
  },


  /* =======================================================
     ECONOMICS
     ======================================================= */

  Economics: {
    title: "Economics",
    subtitle: "Economics — Class XII",

    chapters: [

      {
        title: "1. Introduction",
        english: "Introduction",

        summaryEn:
          "Understand basic economic concepts and the central ideas used in microeconomics.",

        summaryHi:
          "Microeconomics के मूल concepts और basic economic ideas समझें।",

        points: [
          "Basic economic concepts",
          "Microeconomic approach",
          "Scarcity and choice"
        ],

        exam: [
          "Definitions और concepts को examples के साथ समझें।"
        ]
      },

      {
        title: "2. Consumer Equilibrium and Demand",
        english: "Consumer Equilibrium and Demand",

        summaryEn:
          "Study utility, consumer equilibrium, demand and elasticity of demand.",

        summaryHi:
          "Utility, consumer equilibrium, demand और elasticity of demand की तैयारी करें।",

        points: [
          "Utility and marginal utility",
          "Consumer equilibrium",
          "Demand",
          "Law of demand",
          "Elasticity of demand"
        ],

        exam: [
          "Definitions के साथ diagrams/formulas जहाँ आवश्यक हों practice करें।",
          "Demand और elasticity के numerical/conceptual questions करें।"
        ]
      },

      {
        title: "3. Producer Behaviour and Supply",
        english: "Producer Behaviour and Supply",

        summaryEn:
          "Study production, costs, revenue, producer behaviour and supply.",

        summaryHi:
          "Production, costs, revenue, producer behaviour और supply की तैयारी करें।",

        points: [
          "Production",
          "Costs",
          "Revenue",
          "Producer behaviour",
          "Supply"
        ],

        exam: [
          "Cost/revenue concepts और supply-related questions practice करें।"
        ]
      },

      {
        title: "4. Types of Markets and Price Determination under Perfect Competition",
        english: "Markets and Price Determination",

        summaryEn:
          "Study types of markets and equilibrium price determination under perfect competition.",

        summaryHi:
          "Markets के प्रकार तथा perfect competition में price determination समझें।",

        points: [
          "Types of markets",
          "Perfect competition",
          "Market equilibrium",
          "Price determination"
        ],

        exam: [
          "Equilibrium और price determination को diagram के साथ practice करें।"
        ]
      },

      {
        title: "5. National Income and Related Aggregates",
        english: "National Income and Related Aggregates",

        summaryEn:
          "Study national income concepts and related aggregates such as GDP, GNP, NDP and NNP.",

        summaryHi:
          "National income और GDP, GNP, NDP, NNP जैसे aggregates की तैयारी करें।",

        points: [
          "National income",
          "GDP",
          "GNP",
          "NDP",
          "NNP",
          "Related aggregates"
        ],

        exam: [
          "Aggregates के differences और calculations को practice करें।"
        ]
      },

      {
        title: "6. Money and Banking",
        english: "Money and Banking",

        summaryEn:
          "Study money, banking and the role and functions of the central bank and monetary tools.",

        summaryHi:
          "Money, banking, RBI तथा monetary policy tools की तैयारी करें।",

        points: [
          "Money and its functions",
          "Commercial banking",
          "Money creation",
          "RBI",
          "CRR / SLR",
          "Repo / Reverse Repo",
          "OMO",
          "MSF"
        ],

        exam: [
          "Banking terms की definitions और functions याद करें।"
        ]
      },

      {
        title: "7. Determination of Income and Employment",
        english: "Income and Employment",

        summaryEn:
          "Study aggregate demand, consumption, saving, income determination and excess/deficient demand.",

        summaryHi:
          "Aggregate demand, consumption, saving, income determination तथा excess/deficient demand समझें।",

        points: [
          "Aggregate demand",
          "Consumption",
          "Saving",
          "Income determination",
          "Employment",
          "Excess demand",
          "Deficient demand"
        ],

        exam: [
          "Concepts के साथ numerical/diagram-based questions practice करें।"
        ]
      },

      {
        title: "8. Government Budget and the Economy",
        english: "Government Budget and the Economy",

        summaryEn:
          "Study government receipts, expenditure, taxes and budget deficits.",

        summaryHi:
          "Government receipts, expenditure, taxes और budget deficits की तैयारी करें।",

        points: [
          "Government budget",
          "Receipts",
          "Expenditure",
          "Taxes",
          "Budget deficits"
        ],

        exam: [
          "Revenue/capital items और deficit concepts में अंतर समझें।"
        ]
      },

      {
        title: "9. Balance of Payments",
        english: "Balance of Payments",

        summaryEn:
          "Study balance of payments and exchange-rate related concepts.",

        summaryHi:
          "Balance of Payments और exchange rate से जुड़े concepts समझें।",

        points: [
          "Balance of Payments",
          "Components of BOP",
          "Exchange rates",
          "Foreign exchange concepts"
        ],

        exam: [
          "BOP components और exchange-rate concepts के short answers practice करें।"
        ]
      }

    ]
  },


  /* =======================================================
     SOCIOLOGY
     ======================================================= */

  Sociology: {
    title: "Sociology",
    subtitle: "Sociology — Class XII",

    chapters: [

      {
        title: "1. भारतीय समाज : एक परिचय",
        english: "Indian Society: An Introduction",

        summaryEn:
          "Introduction to Indian society and its major social features.",

        summaryHi:
          "भारतीय समाज की प्रकृति और प्रमुख सामाजिक विशेषताओं का परिचय।",

        points: [
          "Indian society",
          "Social structure",
          "Major social features"
        ],

        exam: [
          "Definitions और concepts अपने शब्दों में लिखें।"
        ]
      },

      {
        title: "2. भारतीय समाज की जनसांख्यिकीय संरचना",
        english: "Demographic Structure of Indian Society",

        summaryEn:
          "Study population, demographic patterns and major population-related concepts.",

        summaryHi:
          "जनसंख्या और demographic structure से जुड़े प्रमुख concepts की तैयारी।",

        points: [
          "Malthus",
          "Demographic transition",
          "Rural-urban differences",
          "Population policy"
        ],

        exam: [
          "Demographic concepts और differences revise करें।"
        ]
      },

      {
        title: "3. सामाजिक संस्थाएँ : निरन्तरता एवं परिवर्तन",
        english: "Social Institutions: Continuity and Change",

        summaryEn:
          "Study family, kinship, caste and tribal society with continuity and change.",

        summaryHi:
          "परिवार, नातेदारी, जाति और जनजातीय समाज में निरन्तरता एवं परिवर्तन।",

        points: [
          "Family",
          "Kinship",
          "Caste",
          "Tribal society"
        ],

        exam: [
          "Continuity और change के examples तैयार करें।"
        ]
      },

      {
        title: "4. बाजार एक सामाजिक संस्था के रूप में",
        english: "Market as a Social Institution",

        summaryEn:
          "Understand markets as social institutions and related ideas of liberalism and globalization.",

        summaryHi:
          "बाजार को सामाजिक संस्था के रूप में तथा liberalism/globalization से संबंध समझें।",

        points: [
          "Market as social institution",
          "Globalization",
          "Liberalism"
        ],

        exam: [
          "Market और society के संबंध पर short/long answers practice करें।"
        ]
      },

      {
        title: "5. सामाजिक विषमता एवं बहिष्कार के स्वरूप",
        english: "Forms of Social Inequality and Exclusion",

        summaryEn:
          "Study social inequality, exclusion and issues affecting disadvantaged groups.",

        summaryHi:
          "सामाजिक असमानता, बहिष्कार और वंचित समूहों से जुड़े मुद्दों की तैयारी।",

        points: [
          "Caste prejudice",
          "SC / OBC / Adivasi",
          "Women",
          "Disability",
          "Social exclusion"
        ],

        exam: [
          "Concept + example format में answers लिखें।"
        ]
      },

      {
        title: "6. सांस्कृतिक विविधता की चुनौतियाँ",
        english: "Challenges of Cultural Diversity",

        summaryEn:
          "Study cultural diversity and challenges such as communalism, regionalism and minority rights.",

        summaryHi:
          "सांस्कृतिक विविधता, communalism, regionalism, minority rights और secularism की तैयारी।",

        points: [
          "Communalism",
          "Cultural diversity",
          "Regionalism",
          "Minority rights",
          "Secularism"
        ],

        exam: [
          "हर concept की definition और Indian context का example समझें।"
        ]
      },

      {
        title: "7. परियोजना कार्य के लिए सुझाव",
        english: "Suggestions for Project Work",

        summaryEn:
          "Prepare basic methods and approaches useful for sociology project work.",

        summaryHi:
          "Sociology project work के लिए survey, interview, observation आदि methods समझें।",

        points: [
          "Survey",
          "Interview",
          "Observation",
          "Project work"
        ],

        exam: [
          "Method और उसका purpose याद रखें।"
        ]
      },

      {
        title: "8. संरचनात्मक परिवर्तन",
        english: "Structural Change",

        summaryEn:
          "Study colonialism, industrialization and urbanization as major structural changes.",

        summaryHi:
          "औपनिवेशिकता, औद्योगीकरण और नगरीकरण से होने वाले structural changes।",

        points: [
          "Colonialism",
          "Industrialization",
          "Urbanization"
        ],

        exam: [
          "Causes और effects को points में लिखें।"
        ]
      },

      {
        title: "9. सांस्कृतिक परिवर्तन",
        english: "Cultural Change",

        summaryEn:
          "Study Sanskritization, Westernization, modernization, secularization and social reform.",

        summaryHi:
          "Sanskritization, Westernization, modernization, secularization और social reform समझें।",

        points: [
          "Sanskritization",
          "Westernization",
          "Modernization",
          "Secularization",
          "Social reform"
        ],

        exam: [
          "Concepts के बीच differences revise करें।"
        ]
      },

      {
        title: "10. संविधान एवं सामाजिक परिवर्तन",
        english: "Constitution and Social Change",

        summaryEn:
          "Study constitutional values and institutions contributing to social change.",

        summaryHi:
          "संविधान, सामाजिक परिवर्तन, Panchayati Raj और pressure groups की भूमिका।",

        points: [
          "Constitutional norms",
          "Panchayati Raj",
          "Pressure groups",
          "Social change"
        ],

        exam: [
          "Constitution और social change के संबंध पर answers तैयार करें।"
        ]
      },

      {
        title: "11. ग्रामीण समाज में विकास एवं परिवर्तन",
        english: "Change and Development in Rural Society",

        summaryEn:
          "Study rural social structure, agrarian relations, land reforms, Green Revolution and globalization.",

        summaryHi:
          "ग्रामीण समाज, agrarian structure, land reforms, Green Revolution और globalization का अध्ययन।",

        points: [
          "Agrarian structure",
          "Caste and class",
          "Land reforms",
          "Green Revolution",
          "Globalization",
          "Liberalization"
        ],

        exam: [
          "Rural change के causes और effects लिखने का अभ्यास करें।"
        ]
      },

      {
        title: "12. औद्योगिक समाज में परिवर्तन और विकास",
        english: "Change and Development in Industrial Society",

        summaryEn:
          "Study industrialization, labour, labour unions and strikes.",

        summaryHi:
          "औद्योगीकरण, labour, labour unions और strikes से जुड़े परिवर्तन।",

        points: [
          "Industrialization",
          "Labour",
          "Labour unions",
          "Strikes"
        ],

        exam: [
          "Industrial society के major features revise करें।"
        ]
      },

      {
        title: "13. भूमण्डलीकरण और सामाजिक परिवर्तन",
        english: "Globalization and Social Change",

        summaryEn:
          "Study globalization and its effects on employment, politics, culture, consumption and corporate culture.",

        summaryHi:
          "Globalization के employment, politics, culture, consumer और corporate culture पर प्रभाव।",

        points: [
          "Employment",
          "Political change",
          "Culture",
          "Consumer culture",
          "Corporate culture"
        ],

        exam: [
          "Positive/negative effects को balanced points में लिखें।"
        ]
      },

      {
        title: "14. जनसम्पर्क साधन और जनसंचार",
        english: "Mass Communication and Media",

        summaryEn:
          "Study modern mass media including television, radio and newspapers and their social effects.",

        summaryHi:
          "TV, radio, newspaper और modern media के सामाजिक प्रभावों की तैयारी।",

        points: [
          "Mass communication",
          "Television",
          "Radio",
          "Newspaper",
          "Globalization and media"
        ],

        exam: [
          "Media की social role और effects पर answers तैयार करें।"
        ]
      },

      {
        title: "15. सामाजिक आन्दोलन",
        english: "Social Movements",

        summaryEn:
          "Study types of social movements and major farmers, workers, Dalit, backward caste, women, tribal and ecological movements.",

        summaryHi:
          "Social movements के प्रकार तथा प्रमुख किसान, मजदूर, दलित, पिछड़ा वर्ग, महिला, आदिवासी और ecological movements।",

        points: [
          "Types of social movements",
          "Farmers' movements",
          "Workers' movements",
          "Dalit movements",
          "Backward caste movements",
          "Women's movements",
          "Tribal movements",
          "Ecological movements"
        ],

        exam: [
          "Movement का कारण, उद्देश्य और प्रमुख विशेषताएँ लिखने का अभ्यास करें।"
        ]
      }

    ]
  },


  /* =======================================================
     DRAWING DESIGN
     ======================================================= */

  Drawing: {
    title: "Drawing Design",
    subtitle: "Drawing / Alekhan — Class XII",

    chapters: [

      {
        title: "Section A — Objective",
        english: "Section A — Objective Questions",

        summaryEn:
          "Prepare the objective section covering the prescribed drawing and design concepts.",

        summaryHi:
          "Objective section के लिए drawing/design से जुड़े prescribed concepts revise करें।",

        points: [
          "Objective questions",
          "Basic art/design concepts"
        ],

        exam: [
          "Short factual questions की practice करें।"
        ]
      },

      {
        title: "Section B — आलेखन / Design",
        english: "Section B — Drawing & Design",

        summaryEn:
          "Create original creative designs based on natural and decorative forms using at least three colours.",

        summaryHi:
          "प्राकृतिक एवं सजावटी रूपों पर आधारित मौलिक creative designs तैयार करें और कम से कम तीन रंगों का प्रयोग करें।",

        points: [
          "Flowers, buds and leaves",
          "Shells and butterflies",
          "Swans, deer and elephant",
          "Textile printing / weaving / embroidery",
          "Leather craft",
          "Pottery",
          "Alpana",
          "Geometric shapes",
          "Graph designs",
          "Minimum 3 colours"
        ],

        exam: [
          "Composition, neatness, originality and colour use पर ध्यान दें।"
        ]
      },

      {
        title: "Section C — Object Drawing",
        english: "Section C — Object Drawing",

        summaryEn:
          "Practice drawing common household objects with light, shade, reflection, foreground and background.",

        summaryHi:
          "घरेलू वस्तुओं के drawing में light, shade, reflection, foreground और background का अभ्यास करें।",

        points: [
          "Utensils and crockery",
          "Lamp and lantern",
          "Bottles and glass",
          "Shoes",
          "Attaché",
          "Thermos",
          "Umbrella",
          "Packets",
          "Fruits and vegetables",
          "Light / shade / reflection",
          "Foreground / background"
        ],

        exam: [
          "Object proportions और light-shadow को carefully practice करें।"
        ]
      },

      {
        title: "Section C — Nature Drawing",
        english: "Section C — Nature Drawing",

        summaryEn:
          "Practice flowers, buds, stems, leaves and complete plants using natural colours and appropriate light/shade.",

        summaryHi:
          "फूल, कलियाँ, तने, पत्तियाँ और पूरे पौधे का natural drawing अभ्यास करें।",

        points: [
          "Kaner / Hibiscus",
          "Buds, stems and leaves",
          "Full plant",
          "Natural colours",
          "Light / shade / reflection",
          "Water / poster colours"
        ],

        exam: [
          "Observation और natural form को साफ़-सुथरे तरीके से दिखाएँ।"
        ]
      },

      {
        title: "Section C — Memory Drawing",
        english: "Section C — Memory Drawing",

        summaryEn:
          "Practice drawing familiar household objects and simple animals/birds from memory.",

        summaryHi:
          "घरेलू वस्तुओं तथा सरल animals/birds के memory drawings का अभ्यास करें।",

        points: [
          "Household objects",
          "Simple animals",
          "Birds",
          "Pencil / crayon"
        ],

        exam: [
          "Simple composition और recognizable forms पर focus करें।"
        ]
      },

      {
        title: "Section C — Natural Scene / Landscape",
        english: "Section C — Natural Scene / Landscape",

        summaryEn:
          "Practice dawn, seasonal and rural/social scenes with people, animals, huts and sky.",

        summaryHi:
          "प्रभात, ऋतुओं तथा ग्रामीण/सामाजिक scenes में people, animals, huts और sky का अभ्यास करें।",

        points: [
          "Dawn",
          "Seasons",
          "People",
          "Animals",
          "Huts",
          "Sky",
          "Rural / social scenes",
          "Water / poster / oil / oil pastel / charcoal pencil"
        ],

        exam: [
          "Foreground/background और overall composition balanced रखें।"
        ]
      }

    ]
  }

};


/* =========================================================
   APP STATE
   ========================================================= */

const STATE_KEYS = {
  page: "12pq_currentPage",
  subject: "12pq_currentSubject",
  chapter: "12pq_currentChapter",
  progress: "12pq_overallProgress"
};

let currentPage = "home";
let currentSubject = null;
let currentChapter = 0;


/* =========================================================
   HELPER
   ========================================================= */

function $(id) {
  return document.getElementById(id);
}


/* =========================================================
   PAGE SYSTEM
   ========================================================= */

function showPage(pageId, push = true) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
    page.style.display = "none";
  });

  const target = $(pageId);

  if (target) {
    target.classList.add("active");
    target.style.display = "block";
  }

  currentPage = pageId;

  localStorage.setItem(
    STATE_KEYS.page,
    currentPage
  );

  if (currentSubject) {
    localStorage.setItem(
      STATE_KEYS.subject,
      currentSubject
    );
  }

  localStorage.setItem(
    STATE_KEYS.chapter,
    String(currentChapter)
  );

  if (push) {

    history.pushState(
      {
        page: currentPage,
        subject: currentSubject,
        chapter: currentChapter
      },
      "",
      "#" + currentPage
    );
  }

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
}


/* =========================================================
   SUBJECT
   ========================================================= */

function openSubject(subjectKey) {

  if (!SUBJECT_DATA[subjectKey]) {
    return;
  }

  currentSubject = subjectKey;
  currentChapter = 0;

  if ($("subjectTitle")) {

    $("subjectTitle").textContent =
      SUBJECT_DATA[subjectKey].title;
  }

  if ($("subjectSubtitle")) {

    $("subjectSubtitle").textContent =
      SUBJECT_DATA[subjectKey].subtitle;
  }

  showPage("subjectPage");
}


/* =========================================================
   REVISION
   ========================================================= */

function openRevision() {

  if (!currentSubject) {
    return;
  }

  if ($("revisionTitle")) {

    $("revisionTitle").textContent =
      SUBJECT_DATA[currentSubject].title +
      " — Chapter Revision";
  }

  renderChapterList();

  showPage("revisionPage");
}


/* =========================================================
   CHAPTER LIST
   ========================================================= */

function renderChapterList() {

  const box = $("chapterList");

  if (!box || !currentSubject) {
    return;
  }

  box.innerHTML = "";

  SUBJECT_DATA[currentSubject].chapters.forEach(
    (chapter, index) => {

      const card =
        document.createElement("button");

      card.type = "button";

      card.className =
        "chapter-card";

      card.innerHTML = `

        <div class="chapter-number">
          ${index + 1}
        </div>

        <div class="chapter-info">

          <div class="chapter-title">
            ${chapter.title}
          </div>

          <div class="chapter-english">
            ${chapter.english}
          </div>

        </div>

        <div class="chapter-arrow">
          ›
        </div>

      `;

      card.addEventListener(
        "click",
        () => openChapter(index)
      );

      box.appendChild(card);
    }
  );
}


/* =========================================================
   CHAPTER DETAIL
   ========================================================= */

function openChapter(index) {

  if (!currentSubject) {
    return;
  }

  const chapters =
    SUBJECT_DATA[currentSubject].chapters;

  if (!chapters[index]) {
    return;
  }

  currentChapter = index;

  const chapter =
    chapters[index];


  if ($("chapterTitle")) {

    $("chapterTitle").textContent =
      chapter.title;
  }


  if ($("chapterEnglishTitle")) {

    $("chapterEnglishTitle").textContent =
      chapter.english;
  }


  if ($("englishSummary")) {

    $("englishSummary").textContent =
      chapter.summaryEn;
  }


  if ($("hindiSummary")) {

    $("hindiSummary").textContent =
      chapter.summaryHi;
  }


  if ($("keyPoints")) {

    $("keyPoints").innerHTML =
      chapter.points
        .map(point => `<li>${point}</li>`)
        .join("");
  }


  if ($("examFocus")) {

    $("examFocus").innerHTML =
      chapter.exam
        .map(point => `<li>${point}</li>`)
        .join("");
  }


  showPage("chapterPage");
}


/* =========================================================
   PROGRESS
   ========================================================= */

function loadProgress() {

  const saved =
    Number(
      localStorage.getItem(
        STATE_KEYS.progress
      ) || 0
    );

  const progress =
    Math.max(
      0,
      Math.min(100, saved)
    );


  if ($("overallProgress")) {

    $("overallProgress").textContent =
      progress + "%";
  }


  if ($("progressFill")) {

    $("progressFill").style.width =
      progress + "%";
  }
}


function setProgress(value) {

  const progress =
    Math.max(
      0,
      Math.min(
        100,
        Number(value) || 0
      )
    );

  localStorage.setItem(
    STATE_KEYS.progress,
    String(progress)
  );

  loadProgress();
}


function markSectionComplete() {

  const oldProgress =
    Number(
      localStorage.getItem(
        STATE_KEYS.progress
      ) || 0
    );

  setProgress(
    Math.min(
      100,
      oldProgress + 5
    )
  );
}


/* =========================================================
   BACK BUTTON
   ========================================================= */

function goBack() {

  if (currentPage === "chapterPage") {

    showPage(
      "revisionPage",
      false
    );

    return;
  }


  if (
    currentPage === "revisionPage" ||
    currentPage === "subjectPage"
  ) {

    showPage(
      "home",
      false
    );

    return;
  }


  showPage(
    "home",
    false
  );
}


/* =========================================================
   PHONE / BROWSER BACK
   ========================================================= */

window.addEventListener(
  "popstate",
  () => {

    const hash =
      location.hash.replace(
        "#",
        ""
      );


    if (hash === "chapterPage") {

      showPage(
        "chapterPage",
        false
      );

    }

    else if (
      hash === "revisionPage"
    ) {

      showPage(
        "revisionPage",
        false
      );

    }

    else if (
      hash === "subjectPage"
    ) {

      showPage(
        "subjectPage",
        false
      );

    }

    else {

      showPage(
        "home",
        false
      );
    }

  }
);


/* =========================================================
   RESTORE AFTER REFRESH
   ========================================================= */

function restorePage() {

  const savedPage =
    localStorage.getItem(
      STATE_KEYS.page
    ) || "home";


  const savedSubject =
    localStorage.getItem(
      STATE_KEYS.subject
    );


  const savedChapter =
    Number(
      localStorage.getItem(
        STATE_KEYS.chapter
      ) || 0
    );


  if (
    savedSubject &&
    SUBJECT_DATA[savedSubject]
  ) {

    currentSubject =
      savedSubject;

    if ($("subjectTitle")) {

      $("subjectTitle").textContent =
        SUBJECT_DATA[
          savedSubject
        ].title;
    }


    if ($("subjectSubtitle")) {

      $("subjectSubtitle").textContent =
        SUBJECT_DATA[
          savedSubject
        ].subtitle;
    }


    currentChapter =
      savedChapter;


    if (
      savedPage ===
      "chapterPage"
    ) {

      openChapter(
        Math.min(
          savedChapter,
          SUBJECT_DATA[
            savedSubject
          ].chapters.length - 1
        )
      );

      return;
    }


    if (
      savedPage ===
      "revisionPage"
    ) {

      if ($("revisionTitle")) {

        $("revisionTitle").textContent =
          SUBJECT_DATA[
            savedSubject
          ].title +
          " — Chapter Revision";
      }


      renderChapterList();

      showPage(
        "revisionPage",
        false
      );

      return;
    }


    if (
      savedPage ===
      "subjectPage"
    ) {

      showPage(
        "subjectPage",
        false
      );

      return;
    }

  }


  showPage(
    "home",
    false
  );
}


/* =========================================================
   SUBJECT CARD EVENTS
   ========================================================= */

function wireSubjectCards() {

  document
    .querySelectorAll(
      "[data-subject]"
    )
    .forEach(card => {

      card.addEventListener(
        "click",
        () => {

          openSubject(
            card.dataset.subject
          );

        }
      );

    });
}


/* =========================================================
   FEATURE CARD EVENTS
   ========================================================= */

function wireFeatureCards() {

  document
    .querySelectorAll(
      "[data-action]"
    )
    .forEach(card => {

      card.addEventListener(
        "click",
        () => {

          const action =
            card.dataset.action;


          if (
            action ===
            "revision"
          ) {

            openRevision();

          }

          /*
            Future modules:

            previous-papers
            model-papers
            mock-exam
            mistakes
            progress
          */

        }
      );

    });
}


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadProgress();

    wireSubjectCards();

    wireFeatureCards();

    restorePage();

  }
);
