/* =========================================================
   12th PASS QUEST
   Final all-in-one app engine
   ========================================================= */

"use strict";

/* =========================================================
   SUBJECT DATA
   ========================================================= */

const SUBJECTS = {

  hindi: {
    code: "102",
    title: "General Hindi",
    hindi: "सामान्य हिन्दी",
    icon: "📚",
    description: "गद्य, पद्य, कहानी, खण्ड-काव्य, संस्कृत, व्याकरण, पत्र और निबन्ध।",

    chapters: [

      {
        title: "राष्ट्र का स्वरूप",
        summary: "इस पाठ में राष्ट्र की संकल्पना, उसकी सांस्कृतिक पहचान और समाज के सामूहिक जीवन से उसके सम्बन्ध पर विचार किया गया है।",
        points: [
          "राष्ट्र केवल भौगोलिक भूमि का नाम नहीं है।",
          "साझी संस्कृति, इतिहास और सामूहिक चेतना राष्ट्र की पहचान बनाते हैं।",
          "राष्ट्रीय एकता के लिए विविधताओं का सम्मान आवश्यक है।"
        ],
        exam: [
          "राष्ट्र के स्वरूप को स्पष्ट कीजिए।",
          "राष्ट्र निर्माण में संस्कृति की भूमिका बताइए।"
        ],
        practice: "राष्ट्र और केवल राज्य में क्या अन्तर है? अपने शब्दों में समझाइए।",
        keywords: ["भूगोल", "संस्कृति", "इतिहास", "सामूहिक", "चेतना", "एकता"]
      },

      {
        title: "अशोक के फूल",
        summary: "पाठ में भारतीय संस्कृति, प्रकृति और इतिहास के माध्यम से जीवन-मूल्यों तथा सांस्कृतिक निरन्तरता पर विचार किया गया है।",
        points: [
          "लेखक प्रकृति के माध्यम से सांस्कृतिक स्मृति को सामने लाते हैं।",
          "अशोक का फूल भारतीय सौन्दर्य और परम्परा का प्रतीक बनता है।",
          "पाठ में अतीत और वर्तमान के सम्बन्ध पर विचार मिलता है।"
        ],
        exam: [
          "अशोक के फूल का सांस्कृतिक महत्व स्पष्ट कीजिए।",
          "पाठ के आधार पर भारतीय संस्कृति की विशेषताएँ लिखिए।"
        ],
        practice: "अशोक के फूल को सांस्कृतिक प्रतीक क्यों माना जा सकता है?",
        keywords: ["संस्कृति", "परम्परा", "प्रकृति", "इतिहास", "अशोक", "सौन्दर्य"]
      },

      {
        title: "भाषा और आधुनिकता",
        summary: "पाठ भाषा और आधुनिक समाज के बदलते सम्बन्ध पर केन्द्रित है। भाषा समाज की आवश्यकताओं के अनुसार विकसित होती रहती है।",
        points: [
          "भाषा स्थिर नहीं होती।",
          "आधुनिक विज्ञान और तकनीक नए शब्दों तथा अभिव्यक्ति के रूप लाते हैं।",
          "भाषा का विकास समाज और समय के परिवर्तन से जुड़ा है।"
        ],
        exam: [
          "भाषा और आधुनिकता का सम्बन्ध समझाइए।",
          "भाषा परिवर्तन के प्रमुख कारण लिखिए।"
        ],
        practice: "आधुनिकता भाषा को किस प्रकार प्रभावित करती है?",
        keywords: ["भाषा", "आधुनिकता", "समाज", "परिवर्तन", "विज्ञान", "तकनीक"]
      },

      {
        title: "तेजस्वी मन",
        summary: "पाठ युवा मन, लक्ष्य, ज्ञान, रचनात्मकता और राष्ट्र निर्माण के लिए सकारात्मक सोच की आवश्यकता पर बल देता है।",
        points: [
          "युवा शक्ति राष्ट्र की महत्वपूर्ण शक्ति है।",
          "बड़े लक्ष्य के लिए ज्ञान और अनुशासन आवश्यक हैं।",
          "सकारात्मक और रचनात्मक सोच विकास में सहायक होती है।"
        ],
        exam: [
          "तेजस्वी मन की विशेषताएँ बताइए।",
          "युवा राष्ट्र निर्माण में कैसे योगदान दे सकते हैं?"
        ],
        practice: "तेजस्वी मन से क्या आशय है?",
        keywords: ["युवा", "लक्ष्य", "ज्ञान", "राष्ट्र", "रचनात्मक", "अनुशासन"]
      },

      {
        title: "राबर्ट नर्सिंग होम में",
        summary: "पाठ मानवीय संवेदना, अस्पताल के अनुभव और व्यक्ति के व्यवहार के माध्यम से जीवन की मानवीय परिस्थितियों को सामने लाता है।",
        points: [
          "मानवीय संवेदना पाठ का महत्वपूर्ण पक्ष है।",
          "बीमारी और असहायता मनुष्य को जीवन के वास्तविक पक्ष से परिचित कराती है।",
          "व्यवहार में सहानुभूति का विशेष महत्व है।"
        ],
        exam: [
          "पाठ में मानवीय संवेदना कैसे व्यक्त हुई है?",
          "लेखक के अनुभवों की विशेषताएँ बताइए।"
        ],
        practice: "पाठ का मुख्य मानवीय संदेश क्या है?",
        keywords: ["मानव", "संवेदना", "बीमारी", "सहानुभूति", "अनुभव"]
      },

      {
        title: "निन्दा रस",
        summary: "हरिशंकर परसाई व्यंग्य के माध्यम से मनुष्य की निन्दा करने की प्रवृत्ति और सामाजिक व्यवहार पर टिप्पणी करते हैं।",
        points: [
          "व्यंग्य सामाजिक कमजोरियों को उजागर करता है।",
          "निन्दा की प्रवृत्ति व्यक्ति और समाज दोनों को प्रभावित करती है।",
          "हास्य के माध्यम से गंभीर सामाजिक बात कही गई है।"
        ],
        exam: [
          "निन्दा रस की व्यंग्यात्मक विशेषताएँ लिखिए।",
          "परसाई की व्यंग्य शैली की विशेषताएँ बताइए।"
        ],
        practice: "निन्दा की प्रवृत्ति पर पाठ क्या संदेश देता है?",
        keywords: ["व्यंग्य", "निन्दा", "समाज", "हास्य", "कमजोरी", "परसाई"]
      },

      {
        title: "पवन-दूतिका",
        summary: "काव्य में विरह, संदेश और प्रकृति के माध्यम से भावनात्मक अभिव्यक्ति दिखाई देती है।",
        points: [
          "विरह और प्रेम प्रमुख भाव हैं।",
          "प्रकृति को भावों की अभिव्यक्ति का माध्यम बनाया गया है।",
          "दूत के माध्यम से संदेश पहुँचाने की परम्परा दिखाई देती है।"
        ],
        exam: [
          "पवन-दूतिका का मुख्य भाव स्पष्ट कीजिए।",
          "काव्य में प्रकृति चित्रण की विशेषताएँ बताइए।"
        ],
        practice: "पवन-दूतिका में प्रमुख भाव कौन-सा है?",
        keywords: ["विरह", "प्रेम", "प्रकृति", "संदेश", "दूत"]
      },

      {
        title: "कैकेयी का अनुताप",
        summary: "कविता में कैकेयी के पश्चाताप और आत्मग्लानि के माध्यम से मानवीय मन की जटिलता व्यक्त हुई है।",
        points: [
          "कैकेयी अपने निर्णय के परिणाम से दुखी है।",
          "पश्चाताप कविता का प्रमुख भाव है।",
          "आत्मग्लानि और ममता का भाव दिखाई देता है।"
        ],
        exam: [
          "कैकेयी के अनुताप का कारण बताइए।",
          "कविता में पश्चाताप की अभिव्यक्ति स्पष्ट कीजिए।"
        ],
        practice: "कैकेयी को किस बात का पश्चाताप है?",
        keywords: ["कैकेयी", "अनुताप", "पश्चाताप", "आत्मग्लानि", "ममता"]
      },

      {
        title: "श्रद्धा-मनु",
        summary: "काव्य में मनु और श्रद्धा के माध्यम से मानव जीवन, विश्वास और भावनात्मक संतुलन की अभिव्यक्ति मिलती है।",
        points: [
          "श्रद्धा विश्वास और संवेदना का प्रतीक है।",
          "मनु मानव जीवन की सक्रिय चेतना का प्रतिनिधित्व करते हैं।",
          "मानव जीवन में भावना और कर्म दोनों महत्वपूर्ण हैं।"
        ],
        exam: [
          "श्रद्धा के व्यक्तित्व की विशेषताएँ लिखिए।",
          "मनु और श्रद्धा के सम्बन्ध का महत्व बताइए।"
        ],
        practice: "श्रद्धा का प्रतीकात्मक महत्व क्या है?",
        keywords: ["श्रद्धा", "मनु", "विश्वास", "मानव", "भावना", "कर्म"]
      },

      {
        title: "नौका विहार",
        summary: "कविता में प्रकृति के सौन्दर्य और नदी के दृश्य को संवेदनशील दृष्टि से प्रस्तुत किया गया है।",
        points: [
          "प्रकृति का सुंदर चित्रण मिलता है।",
          "नदी और नाव का दृश्य कविता का प्रमुख आधार है।",
          "दृश्यात्मकता और कल्पना काव्य को प्रभावी बनाती है।"
        ],
        exam: [
          "नौका विहार का प्रकृति चित्रण स्पष्ट कीजिए।",
          "कविता की दृश्यात्मक विशेषताएँ बताइए।"
        ],
        practice: "नौका विहार में प्रकृति का कौन-सा रूप दिखाई देता है?",
        keywords: ["प्रकृति", "नदी", "नाव", "सौन्दर्य", "दृश्य"]
      },

      {
        title: "गीत",
        summary: "महादेवी वर्मा के गीतों में संवेदना, विरह, आत्मानुभूति और करुण भाव की प्रधानता दिखाई देती है।",
        points: [
          "आत्मानुभूति प्रमुख है।",
          "विरह और करुणा की अनुभूति मिलती है।",
          "भाषा भावपूर्ण और संगीतात्मक है।"
        ],
        exam: [
          "महादेवी वर्मा के काव्य की विशेषताएँ लिखिए।",
          "गीत का प्रमुख भाव स्पष्ट कीजिए।"
        ],
        practice: "महादेवी वर्मा के गीतों की प्रमुख विशेषता क्या है?",
        keywords: ["संवेदना", "विरह", "करुणा", "आत्मानुभूति", "संगीतात्मक"]
      },

      {
        title: "अभिनव मनुष्य",
        summary: "कविता आधुनिक मनुष्य की शक्ति, वैज्ञानिक चेतना और मानवता के बीच संतुलन की आवश्यकता पर विचार करती है।",
        points: [
          "आधुनिक मनुष्य के पास विज्ञान और तकनीक की शक्ति है।",
          "शक्ति के साथ मानवता और जिम्मेदारी आवश्यक है।",
          "मनुष्य को विनाश के बजाय निर्माण की दिशा चुननी चाहिए।"
        ],
        exam: [
          "अभिनव मनुष्य की विशेषताएँ बताइए।",
          "विज्ञान और मानवता के सम्बन्ध को स्पष्ट कीजिए।"
        ],
        practice: "अभिनव मनुष्य से क्या अपेक्षा की गई है?",
        keywords: ["आधुनिक", "विज्ञान", "मानवता", "शक्ति", "जिम्मेदारी", "निर्माण"]
      },

      {
        title: "हिरोशिमा",
        summary: "कविता युद्ध की विनाशकारी शक्ति और मानव पीड़ा को सामने लाती है तथा शांति की आवश्यकता का संकेत देती है।",
        points: [
          "युद्ध का परिणाम विनाश और मानवीय पीड़ा है।",
          "हिरोशिमा मानव इतिहास की त्रासदी का प्रतीक है।",
          "कविता शांति और मानवता की ओर संकेत करती है।"
        ],
        exam: [
          "हिरोशिमा कविता का संदेश स्पष्ट कीजिए।",
          "कविता में युद्ध-विरोधी चेतना कैसे व्यक्त हुई है?"
        ],
        practice: "हिरोशिमा कविता का मुख्य संदेश क्या है?",
        keywords: ["युद्ध", "विनाश", "हिरोशिमा", "मानवता", "शांति", "पीड़ा"]
      },

      {
        title: "मुक्ति यज्ञ",
        summary: "खण्ड-काव्य में स्वतंत्रता, संघर्ष और त्याग की भावना प्रमुख है।",
        points: [
          "स्वतंत्रता के लिए संघर्ष का महत्व।",
          "त्याग और साहस की भावना।",
          "सामूहिक उद्देश्य के लिए व्यक्तिगत बलिदान।"
        ],
        exam: [
          "मुक्ति यज्ञ के प्रमुख भाव लिखिए।",
          "खण्ड-काव्य में संघर्ष और त्याग का महत्व बताइए।"
        ],
        practice: "मुक्ति यज्ञ का मुख्य उद्देश्य क्या है?",
        keywords: ["स्वतंत्रता", "संघर्ष", "त्याग", "बलिदान", "साहस"]
      },

      {
        title: "रश्मिरथी",
        summary: "कर्ण के व्यक्तित्व, संघर्ष, दानशीलता, आत्मसम्मान और सामाजिक परिस्थितियों को केंद्र में रखकर मानवीय मूल्यों को सामने लाया गया है।",
        points: [
          "कर्ण संघर्षशील और दानवीर व्यक्तित्व है।",
          "सामाजिक पहचान और जन्म से जुड़े प्रश्न उठते हैं।",
          "आत्मसम्मान और मित्रता महत्वपूर्ण मूल्य हैं।"
        ],
        exam: [
          "कर्ण के चरित्र की प्रमुख विशेषताएँ लिखिए।",
          "रश्मिरथी में सामाजिक विषमता का चित्रण स्पष्ट कीजिए।"
        ],
        practice: "कर्ण के चरित्र की दो प्रमुख विशेषताएँ बताइए।",
        keywords: ["कर्ण", "दान", "आत्मसम्मान", "संघर्ष", "मित्रता", "सामाजिक"]
      },

      {
        title: "सत्य की जीत",
        summary: "खण्ड-काव्य में सत्य, नैतिकता और संघर्ष के माध्यम से जीवन-मूल्यों को प्रमुखता दी गई है।",
        points: [
          "सत्य को नैतिक शक्ति के रूप में प्रस्तुत किया गया है।",
          "सत्य के मार्ग पर कठिनाइयाँ आती हैं।",
          "अंततः नैतिकता और सत्य की विजय का संदेश मिलता है।"
        ],
        exam: [
          "सत्य की जीत का मुख्य संदेश लिखिए।",
          "काव्य में सत्य के महत्व को स्पष्ट कीजिए।"
        ],
        practice: "सत्य को जीवन में महत्वपूर्ण क्यों माना गया है?",
        keywords: ["सत्य", "नैतिकता", "संघर्ष", "विजय", "मूल्य"]
      },

      {
        title: "संस्कृत खण्ड",
        summary: "संस्कृत खण्ड में संस्कृत भाषा, ज्ञान, नीति, कथाओं और भारतीय परम्परा से सम्बन्धित सामग्री का अध्ययन किया जाता है।",
        points: [
          "संस्कृत भारतीय ज्ञान-परम्परा की महत्वपूर्ण भाषा है।",
          "सुभाषितों में नीति और जीवन-मूल्य मिलते हैं।",
          "कथाओं के माध्यम से नैतिक शिक्षा दी जाती है।"
        ],
        exam: [
          "संस्कृत भाषा के महत्व पर टिप्पणी कीजिए।",
          "सुभाषितों से मिलने वाली शिक्षा बताइए।"
        ],
        practice: "संस्कृत भाषा का महत्व अपने शब्दों में लिखिए।",
        keywords: ["संस्कृत", "ज्ञान", "परम्परा", "नीति", "सुभाषित", "शिक्षा"]
      },

      {
        title: "व्याकरण, पत्र और निबन्ध",
        summary: "इस भाग में व्याकरण, शब्द-प्रयोग, वाक्य-शुद्धि, मुहावरे, पत्र तथा निबन्ध लेखन की परीक्षा-उपयोगी तैयारी की जाती है।",
        points: [
          "मुहावरों और लोकोक्तियों का अर्थ समझना जरूरी है।",
          "वाक्य-शुद्धि में व्याकरणिक नियमों पर ध्यान दें।",
          "पत्र और निबन्ध में प्रारूप, भाषा और विषय-वस्तु तीनों महत्वपूर्ण हैं।"
        ],
        exam: [
          "औपचारिक पत्र का प्रारूप लिखिए।",
          "निबन्ध लेखन में किन बातों का ध्यान रखना चाहिए?"
        ],
        practice: "परीक्षा में अच्छे निबन्ध की तीन विशेषताएँ लिखिए।",
        keywords: ["व्याकरण", "मुहावरा", "वाक्य", "पत्र", "निबन्ध", "प्रारूप"]
      }

    ]
  },


  english: {
    code: "117",
    title: "English",
    hindi: "अंग्रेज़ी",
    icon: "🇬🇧",
    description: "Reading, Writing, Grammar, Flamingo and Vistas.",

    chapters: [

      {
        title: "Reading Skills",
        summary: "Reading section tests comprehension through unseen passages, short answers and vocabulary-based questions.",
        points: [
          "Read the complete passage once before answering.",
          "Answer only from information supported by the passage.",
          "For vocabulary, understand the word from its context."
        ],
        exam: [
          "Answer comprehension questions in clear sentences.",
          "Find meanings, synonyms or antonyms from context."
        ],
        practice: "What is the most important strategy for an unseen passage?",
        keywords: ["read", "passage", "context", "comprehension", "vocabulary"]
      },

      {
        title: "Writing Skills",
        summary: "The writing section includes article writing and formal letters such as letters to the editor, complaints and business communication.",
        points: [
          "Follow the correct format.",
          "Keep the content relevant to the topic.",
          "Use simple, grammatically correct English."
        ],
        exam: [
          "Write an article in about 150 words.",
          "Write a formal letter to the editor."
        ],
        practice: "Why is format important in formal writing?",
        keywords: ["format", "article", "letter", "formal", "content", "grammar"]
      },

      {
        title: "Grammar",
        summary: "Important areas include narration, synthesis, transformation, syntax, idioms, phrasal verbs, synonyms, antonyms, one-word substitution and homophones.",
        points: [
          "Understand the rule before applying it.",
          "Check tense and subject-verb agreement.",
          "In transformation questions, preserve the original meaning."
        ],
        exam: [
          "Change direct speech into indirect speech.",
          "Transform sentences without changing meaning."
        ],
        practice: "What should be preserved while transforming a sentence?",
        keywords: ["meaning", "tense", "grammar", "syntax", "transformation"]
      },

      {
        title: "The Last Lesson",
        summary: "The story presents the emotional value of language, education and identity through a final French lesson under political pressure.",
        points: [
          "Language is connected with identity and culture.",
          "The final lesson creates a sense of loss.",
          "The story values education and one's mother tongue."
        ],
        exam: [
          "Why was the last lesson important to Franz?",
          "How did the teacher feel about the final lesson?"
        ],
        practice: "What does the story teach us about language?",
        keywords: ["language", "identity", "education", "French", "lesson", "culture"]
      },

      {
        title: "Lost Spring",
        summary: "The chapter focuses on poverty, child labour and the loss of childhood among disadvantaged children.",
        points: [
          "Poverty limits educational opportunities.",
          "Child labour takes away childhood.",
          "The chapter exposes social and economic inequality."
        ],
        exam: [
          "Why do the children work instead of going to school?",
          "Explain the significance of the title."
        ],
        practice: "What is the central issue in Lost Spring?",
        keywords: ["poverty", "child", "labour", "school", "childhood", "inequality"]
      },

      {
        title: "Deep Water",
        summary: "William Douglas describes his fear of water and the gradual process through which he overcame it.",
        points: [
          "Fear can be overcome through determination and practice.",
          "The experience shows the importance of confidence.",
          "The author learns to face fear rather than avoid it."
        ],
        exam: [
          "How did Douglas overcome his fear of water?",
          "What message does the chapter give?"
        ],
        practice: "How can fear be overcome according to Deep Water?",
        keywords: ["fear", "water", "confidence", "practice", "determination"]
      },

      {
        title: "The Rattrap",
        summary: "The story uses the metaphor of a rattrap to show how the world can trap people through temptations, greed and wrong choices.",
        points: [
          "The world is compared to a trap.",
          "Kindness can transform a person's behaviour.",
          "The peddler changes because of trust and respect."
        ],
        exam: [
          "Why did the peddler think the world was a rattrap?",
          "How did Edla influence the peddler?"
        ],
        practice: "Why is the world compared to a rattrap?",
        keywords: ["rattrap", "trap", "temptation", "kindness", "Edla", "change"]
      },

      {
        title: "Indigo",
        summary: "The chapter describes Gandhi's involvement with poor peasants and his approach to injustice, courage and civil resistance.",
        points: [
          "Gandhi listened to the problems of peasants.",
          "He used peaceful resistance.",
          "The chapter highlights courage and leadership."
        ],
        exam: [
          "Why did Gandhi go to Champaran?",
          "What qualities of Gandhi are shown?"
        ],
        practice: "What was Gandhi's method of dealing with injustice?",
        keywords: ["Gandhi", "Champaran", "peasants", "injustice", "resistance"]
      },

      {
        title: "Poets and Pancakes",
        summary: "The chapter gives a humorous account of Gemini Studios and discusses film production, people and workplace culture.",
        points: [
          "The chapter contains humour and satire.",
          "Gemini Studios represents the world of film production.",
          "The author observes people and workplace relationships closely."
        ],
        exam: [
          "What was the role of the make-up department?",
          "Describe the atmosphere of Gemini Studios."
        ],
        practice: "What makes Poets and Pancakes humorous?",
        keywords: ["Gemini", "studio", "make-up", "film", "humour", "satire"]
      },

      {
        title: "My Mother at Sixty-Six",
        summary: "The poem expresses the poet's fear of losing her ageing mother and contrasts old age with images of youth and vitality.",
        points: [
          "Ageing and separation are central themes.",
          "The poet feels anxiety about her mother's mortality.",
          "Contrasting images intensify the emotional effect."
        ],
        exam: [
          "Why was the poet's mother compared to a late winter moon?",
          "What is the main theme of the poem?"
        ],
        practice: "What fear does the poet experience?",
        keywords: ["mother", "ageing", "fear", "separation", "mortality"]
      },

      {
        title: "Keeping Quiet",
        summary: "The poem encourages a moment of silence and introspection so that humanity can understand itself and avoid destructive behaviour.",
        points: [
          "Silence can provide time for reflection.",
          "The poem is not a call for permanent inactivity.",
          "It promotes peace and understanding."
        ],
        exam: [
          "What does the poet mean by keeping quiet?",
          "Why is introspection important?"
        ],
        practice: "What is the purpose of keeping quiet?",
        keywords: ["silence", "reflection", "peace", "introspection", "humanity"]
      },

      {
        title: "A Thing of Beauty",
        summary: "The poem celebrates beauty as a lasting source of joy, comfort and hope in human life.",
        points: [
          "Beauty gives permanent joy.",
          "Beautiful things reduce sadness and suffering.",
          "Nature is an important source of beauty."
        ],
        exam: [
          "How is a thing of beauty a source of joy?",
          "What role does nature play?"
        ],
        practice: "Why does beauty give lasting joy?",
        keywords: ["beauty", "joy", "nature", "comfort", "hope"]
      },

      {
        title: "A Roadside Stand",
        summary: "The poem highlights the poverty and neglected hopes of rural people who seek economic improvement.",
        points: [
          "Rural people desire a better life.",
          "The poem criticises urban indifference.",
          "Economic inequality is an important theme."
        ],
        exam: [
          "What do the roadside people expect?",
          "How does the poem show rural-urban inequality?"
        ],
        practice: "What is the main concern of the roadside stand owners?",
        keywords: ["rural", "poverty", "inequality", "urban", "hope"]
      },

      {
        title: "Aunt Jennifer's Tigers",
        summary: "The poem contrasts Aunt Jennifer's oppressed life with the fearless tigers she creates in embroidery.",
        points: [
          "The tigers symbolise freedom and confidence.",
          "Aunt Jennifer represents oppression.",
          "Art becomes a form of escape and expression."
        ],
        exam: [
          "What do the tigers symbolise?",
          "How is Aunt Jennifer's life contrasted with the tigers?"
        ],
        practice: "What do Aunt Jennifer's tigers represent?",
        keywords: ["tigers", "freedom", "oppression", "art", "fearless"]
      },

      {
        title: "The Third Level",
        summary: "The story explores escapism, imagination and the desire to escape the stress of modern life.",
        points: [
          "The third level represents an escape from modern pressures.",
          "Reality and imagination are deliberately blurred.",
          "The story questions what people seek when life becomes stressful."
        ],
        exam: [
          "What was the third level?",
          "Why did Charley want to find it?"
        ],
        practice: "What does the third level symbolise?",
        keywords: ["third level", "escape", "imagination", "stress", "reality"]
      },

      {
        title: "The Enemy",
        summary: "The story presents a moral conflict between professional duty, humanity and wartime nationalism.",
        points: [
          "Dr Sadao faces a difficult moral decision.",
          "Humanity conflicts with wartime hatred.",
          "The story values compassion and professional duty."
        ],
        exam: [
          "Why did Dr Sadao help the wounded soldier?",
          "What moral conflict does the story present?"
        ],
        practice: "Why was Dr Sadao's decision difficult?",
        keywords: ["Sadao", "humanity", "war", "duty", "soldier", "compassion"]
      },

      {
        title: "On the Face of It",
        summary: "The play explores loneliness, appearance, self-confidence and the importance of accepting oneself.",
        points: [
          "Physical appearance should not determine self-worth.",
          "Human connection can reduce loneliness.",
          "Derry gradually becomes more confident."
        ],
        exam: [
          "How did Mr Lamb influence Derry?",
          "What message does the play give?"
        ],
        practice: "What change occurs in Derry?",
        keywords: ["Derry", "Mr Lamb", "confidence", "loneliness", "appearance"]
      }

    ]
  },


  economics: {
    code: "136",
    title: "Economics",
    hindi: "अर्थशास्त्र",
    icon: "📈",
    description: "Micro Economics + Macro Economics.",

    chapters: [

      {
        title: "Introduction",
        summary: "Economics studies how scarce resources are allocated among alternative uses.",
        points: [
          "Resources are limited while wants are numerous.",
          "Choice creates opportunity cost.",
          "Microeconomics studies individual units; macroeconomics studies the economy as a whole."
        ],
        exam: [
          "Define opportunity cost.",
          "Distinguish microeconomics and macroeconomics."
        ],
        practice: "What is opportunity cost?",
        keywords: ["scarcity", "choice", "opportunity", "cost", "microeconomics", "macroeconomics"]
      },

      {
        title: "Consumer Equilibrium and Demand",
        summary: "This unit explains utility, consumer equilibrium, demand and elasticity of demand.",
        points: [
          "Marginal utility is the additional utility from one more unit.",
          "Consumer equilibrium depends on utility and prices.",
          "Demand generally changes inversely with price.",
          "Price elasticity measures responsiveness of quantity demanded."
        ],
        exam: [
          "Explain consumer equilibrium.",
          "Define price elasticity of demand."
        ],
        practice: "What is the law of demand?",
        keywords: ["utility", "consumer", "equilibrium", "demand", "elasticity", "price"]
      },

      {
        title: "Producer Behaviour and Supply",
        summary: "The unit explains production, costs, revenue, profit and supply decisions.",
        points: [
          "Fixed costs do not change with output in the short run.",
          "Variable costs change with output.",
          "Marginal cost is the change in total cost from one more unit.",
          "Supply shows the quantity sellers are willing to sell."
        ],
        exam: [
          "Distinguish fixed and variable cost.",
          "Explain the law of supply."
        ],
        practice: "What is marginal cost?",
        keywords: ["producer", "cost", "fixed", "variable", "marginal", "supply"]
      },

      {
        title: "Perfect Competition and Price Determination",
        summary: "Perfect competition has many buyers and sellers, homogeneous products and free entry and exit.",
        points: [
          "Firms are price takers.",
          "Market price is determined by demand and supply.",
          "Equilibrium occurs where demand equals supply."
        ],
        exam: [
          "State characteristics of perfect competition.",
          "Explain market equilibrium."
        ],
        practice: "What is meant by a price taker?",
        keywords: ["perfect", "competition", "price", "demand", "supply", "equilibrium"]
      },

      {
        title: "National Income and Related Aggregates",
        summary: "National income accounting measures production and income generated by an economy.",
        points: [
          "GDP measures domestic production.",
          "GNP adds net factor income from abroad to GDP.",
          "NDP and NNP account for depreciation.",
          "Real GDP adjusts for price changes."
        ],
        exam: [
          "Differentiate GDP and GNP.",
          "Explain national income concepts."
        ],
        practice: "What is GDP?",
        keywords: ["GDP", "GNP", "NDP", "NNP", "income", "production"]
      },

      {
        title: "Money and Banking",
        summary: "Money facilitates exchange and banking institutions create credit and manage monetary conditions.",
        points: [
          "Money acts as medium of exchange and store of value.",
          "Commercial banks create credit.",
          "RBI regulates monetary and banking conditions.",
          "CRR, SLR, repo rate and OMO are policy tools."
        ],
        exam: [
          "Explain functions of money.",
          "Explain the role of RBI."
        ],
        practice: "What are two functions of money?",
        keywords: ["money", "bank", "RBI", "credit", "CRR", "repo"]
      },

      {
        title: "Determination of Income and Employment",
        summary: "The unit explains aggregate demand, consumption, saving and equilibrium income.",
        points: [
          "Aggregate demand consists of planned spending.",
          "Consumption and saving are related to income.",
          "Equilibrium occurs when planned expenditure equals output.",
          "Deficient demand can create unemployment."
        ],
        exam: [
          "Explain aggregate demand.",
          "What is deficient demand?"
        ],
        practice: "What is aggregate demand?",
        keywords: ["aggregate", "demand", "income", "employment", "consumption", "saving"]
      },

      {
        title: "Government Budget and Economy",
        summary: "Government budget records expected receipts and expenditure and is used for allocation, redistribution and stabilisation.",
        points: [
          "Revenue receipts do not create liabilities in the normal sense.",
          "Capital receipts affect liabilities or assets.",
          "Fiscal deficit measures the government's borrowing requirement.",
          "Budget policy can influence growth and distribution."
        ],
        exam: [
          "Define fiscal deficit.",
          "Explain objectives of government budget."
        ],
        practice: "What is a government budget?",
        keywords: ["budget", "receipts", "expenditure", "fiscal", "deficit", "government"]
      },

      {
        title: "Balance of Payments",
        summary: "Balance of Payments records economic transactions between residents of a country and the rest of the world.",
        points: [
          "Current account records trade in goods, services and transfers.",
          "Capital/financial transactions relate to investment and financing.",
          "Exchange rates affect international transactions.",
          "Balance of payments provides an overall external-sector picture."
        ],
        exam: [
          "Define Balance of Payments.",
          "Explain current account."
        ],
        practice: "What does the Balance of Payments record?",
        keywords: ["BOP", "current", "capital", "exchange", "trade", "international"]
      }

    ]
  },


  sociology: {
    code: "142",
    title: "Sociology",
    hindi: "समाजशास्त्र",
    icon: "👥",
    description: "Indian society, social institutions, inequality, change, development, media and movements.",

    chapters: [

      {
        title: "Indian Society: An Introduction",
        summary: "Indian society is characterised by diversity, social institutions and multiple cultural traditions.",
        points: [
          "Indian society contains linguistic, religious and regional diversity.",
          "Institutions such as family, caste and community influence social life.",
          "Unity and diversity exist together."
        ],
        exam: [
          "Explain the diversity of Indian society.",
          "What is meant by unity in diversity?"
        ],
        practice: "Why is Indian society called diverse?",
        keywords: ["Indian", "society", "diversity", "family", "caste", "culture"]
      },

      {
        title: "Demographic Structure of Indian Society",
        summary: "Demography studies population size, composition, distribution and change.",
        points: [
          "Population growth is influenced by birth, death and migration.",
          "Age structure affects the working population.",
          "Demographic transition explains changes in population patterns."
        ],
        exam: [
          "What is demographic transition?",
          "Explain factors affecting population change."
        ],
        practice: "What does demography study?",
        keywords: ["population", "demography", "birth", "death", "migration", "age"]
      },

      {
        title: "Social Institutions: Continuity and Change",
        summary: "Family, kinship, caste and other institutions continue while changing with social conditions.",
        points: [
          "Institutions organise social behaviour.",
          "Family structures can change over time.",
          "Caste continues to influence social relationships but also changes."
        ],
        exam: [
          "Explain continuity and change in family.",
          "Discuss caste as a social institution."
        ],
        practice: "What is a social institution?",
        keywords: ["institution", "family", "kinship", "caste", "change", "society"]
      },

      {
        title: "Market as a Social Institution",
        summary: "Markets are not only economic arrangements; they are also shaped by social relationships, institutions and culture.",
        points: [
          "Markets operate within social rules.",
          "Economic exchanges can be influenced by caste, gender and networks.",
          "Liberalisation and globalisation changed market relations."
        ],
        exam: [
          "Why is the market called a social institution?",
          "Explain social factors affecting markets."
        ],
        practice: "Why is a market a social institution?",
        keywords: ["market", "social", "economic", "institution", "culture", "globalisation"]
      },

      {
        title: "Social Inequality and Exclusion",
        summary: "Social inequality refers to unequal access to resources and opportunities, while exclusion prevents groups from full participation.",
        points: [
          "Caste, class, gender and disability can create inequality.",
          "Exclusion can be social, economic or political.",
          "Equality requires access to opportunities and rights."
        ],
        exam: [
          "Explain social inequality.",
          "What is social exclusion?"
        ],
        practice: "What is social inequality?",
        keywords: ["inequality", "exclusion", "caste", "class", "gender", "rights"]
      },

      {
        title: "Cultural Diversity",
        summary: "Cultural diversity creates opportunities but can also produce conflicts involving communalism, regionalism and minority rights.",
        points: [
          "Diversity is an important feature of Indian society.",
          "Secularism supports equal respect for religions.",
          "Minority rights protect vulnerable groups."
        ],
        exam: [
          "What are the challenges of cultural diversity?",
          "Explain secularism."
        ],
        practice: "Why should cultural diversity be respected?",
        keywords: ["culture", "diversity", "secularism", "minority", "regionalism"]
      },

      {
        title: "Project Work",
        summary: "Sociological project work develops skills of observation, interview, survey and interpretation.",
        points: [
          "Choose a clear social topic.",
          "Collect information systematically.",
          "Present findings logically."
        ],
        exam: [
          "Name methods used in sociological research.",
          "Why is fieldwork useful?"
        ],
        practice: "Name two methods of collecting sociological data.",
        keywords: ["project", "survey", "interview", "observation", "data"]
      },

      {
        title: "Structural Change",
        summary: "Colonialism, industrialisation and urbanisation produced major structural changes in Indian society.",
        points: [
          "Colonial rule changed institutions and economic relations.",
          "Industrialisation created new occupations and classes.",
          "Urbanisation changed patterns of settlement and interaction."
        ],
        exam: [
          "Explain structural change.",
          "How did industrialisation affect society?"
        ],
        practice: "What is structural change?",
        keywords: ["structural", "colonialism", "industrialisation", "urbanisation", "change"]
      },

      {
        title: "Cultural Change",
        summary: "Processes such as Sanskritisation, Westernisation, modernisation and secularisation influence Indian culture.",
        points: [
          "Sanskritisation refers to cultural change through adoption of practices associated with higher-status groups.",
          "Westernisation involves influence of Western institutions and practices.",
          "Modernisation is associated with changing institutions and values."
        ],
        exam: [
          "Define Sanskritisation.",
          "Explain Westernisation."
        ],
        practice: "What is Sanskritisation?",
        keywords: ["Sanskritisation", "Westernisation", "modernisation", "secularisation", "culture"]
      },

      {
        title: "Constitution and Social Change",
        summary: "The Constitution provides a framework of rights, equality and social justice and influences social transformation.",
        points: [
          "Fundamental rights support equality.",
          "Constitutional provisions address discrimination.",
          "Democratic institutions support participation."
        ],
        exam: [
          "How does the Constitution promote social change?",
          "Explain the importance of equality."
        ],
        practice: "How can the Constitution bring social change?",
        keywords: ["Constitution", "rights", "equality", "justice", "social", "change"]
      },

      {
        title: "Change and Development in Rural Society",
        summary: "Rural society has changed through land reforms, Green Revolution, technology, migration and market integration.",
        points: [
          "Land relations influence rural class structure.",
          "Green Revolution increased agricultural productivity in selected areas.",
          "Migration connects rural and urban economies."
        ],
        exam: [
          "Explain rural social change.",
          "Discuss the impact of Green Revolution."
        ],
        practice: "Name two causes of rural social change.",
        keywords: ["rural", "land", "Green Revolution", "migration", "agriculture"]
      },

      {
        title: "Change and Development in Industrial Society",
        summary: "Industrialisation changes occupations, labour relations, urban life and class structure.",
        points: [
          "Factories create wage labour.",
          "Trade unions represent workers' interests.",
          "Industrialisation contributes to urbanisation."
        ],
        exam: [
          "What is industrialisation?",
          "Explain the role of trade unions."
        ],
        practice: "How does industrialisation change society?",
        keywords: ["industrialisation", "labour", "workers", "trade union", "urbanisation"]
      },

      {
        title: "Globalisation and Social Change",
        summary: "Globalisation increases connections among economies, cultures and societies.",
        points: [
          "Globalisation increases flows of goods, capital, information and culture.",
          "It creates new opportunities as well as inequalities.",
          "Consumer and corporate cultures expand."
        ],
        exam: [
          "Define globalisation.",
          "Explain two social effects of globalisation."
        ],
        practice: "What is globalisation?",
        keywords: ["globalisation", "economy", "culture", "consumer", "corporate", "change"]
      },

      {
        title: "Mass Communication and Media",
        summary: "Mass media spreads information and influences public opinion, culture and social interaction.",
        points: [
          "Media includes print, television, radio and digital platforms.",
          "Mass communication can shape public opinion.",
          "Media can support awareness and social change."
        ],
        exam: [
          "Explain the role of mass media.",
          "How can media influence society?"
        ],
        practice: "What is mass communication?",
        keywords: ["media", "communication", "information", "opinion", "society"]
      },

      {
        title: "Social Movements",
        summary: "Social movements are organised collective efforts to bring or resist social change.",
        points: [
          "Movements may demand rights, justice or environmental protection.",
          "They can influence public policy and social attitudes.",
          "Collective action is central to social movements."
        ],
        exam: [
          "Define social movement.",
          "Explain the importance of collective action."
        ],
        practice: "What is a social movement?",
        keywords: ["movement", "collective", "action", "rights", "change", "justice"]
      }

    ]
  },


  drawing: {
    code: "140",
    title: "Drawing Design",
    hindi: "चित्रकला / आलेखन",
    icon: "🎨",
    description: "Design, object drawing, nature drawing, memory drawing and landscape.",

    chapters: [

      {
        title: "Objective Section",
        summary: "The objective section tests basic knowledge of art, design, colours, techniques and drawing principles.",
        points: [
          "Revise basic art terminology.",
          "Know primary, secondary and complementary colours.",
          "Understand basic design and composition principles."
        ],
        exam: [
          "Define primary colours.",
          "What is composition?"
        ],
        practice: "Name the three primary colours.",
        keywords: ["red", "yellow", "blue", "primary", "colour"]
      },

      {
        title: "Creative Design",
        summary: "The design section requires original creative designs based on natural and decorative forms.",
        points: [
          "Use flowers, leaves, butterflies, animals and geometric forms as inspiration.",
          "Create a balanced composition.",
          "Use at least three colours where required."
        ],
        exam: [
          "Prepare a decorative design using natural forms.",
          "Create a balanced textile-inspired design."
        ],
        practice: "What makes a design visually balanced?",
        keywords: ["balance", "design", "colour", "composition", "natural"]
      },

      {
        title: "Object Drawing",
        summary: "Object drawing focuses on accurate observation, proportion, light, shade, reflection and foreground-background relationships.",
        points: [
          "Observe shape and proportion carefully.",
          "Show light and shade.",
          "Objects should have a clear relation with the surface and background."
        ],
        exam: [
          "Draw a composition of household objects.",
          "Show light and shade correctly."
        ],
        practice: "Why are light and shade important in object drawing?",
        keywords: ["object", "light", "shade", "proportion", "reflection"]
      },

      {
        title: "Nature Drawing",
        summary: "Nature drawing includes flowers, leaves, stems and plants using natural observation and suitable colours.",
        points: [
          "Observe the actual structure of the plant.",
          "Show natural colours and details.",
          "Use light and shade to create depth."
        ],
        exam: [
          "Draw a flowering plant.",
          "Show natural details and colours."
        ],
        practice: "What should be observed before drawing a plant?",
        keywords: ["plant", "flower", "leaf", "stem", "natural", "colour"]
      },

      {
        title: "Memory Drawing",
        summary: "Memory drawing represents scenes, objects, animals or daily-life situations from remembered visual experience.",
        points: [
          "Keep the composition simple and clear.",
          "Show proportion and action.",
          "Use suitable pencil, crayon or colour technique."
        ],
        exam: [
          "Draw a simple scene from memory.",
          "Show a daily-life activity."
        ],
        practice: "What is memory drawing?",
        keywords: ["memory", "scene", "objects", "animals", "composition"]
      },

      {
        title: "Landscape",
        summary: "Landscape drawing represents natural or rural scenes with attention to foreground, middle ground, background, sky and atmosphere.",
        points: [
          "Create depth using foreground, middle ground and background.",
          "Show sky and atmosphere according to time or season.",
          "Include suitable people, animals, huts or natural elements."
        ],
        exam: [
          "Draw a rural landscape.",
          "Create a seasonal or dawn scene."
        ],
        practice: "How can depth be shown in a landscape?",
        keywords: ["landscape", "foreground", "background", "sky", "depth", "scene"]
      }

    ]
  }

};


/* =========================================================
   MOCK QUESTIONS
   Original practice questions — NOT official PYQs
   ========================================================= */

const QUESTIONS = {

  hindi: [
    {
      q: "राष्ट्र की पहचान में कौन-सा तत्व महत्वपूर्ण है?",
      options: ["सिर्फ भूमि", "सिर्फ जनसंख्या", "साझी संस्कृति और चेतना", "सिर्फ सरकार"],
      answer: 2,
      explain: "राष्ट्र की पहचान में साझा संस्कृति, इतिहास और सामूहिक चेतना महत्वपूर्ण होते हैं।"
    },
    {
      q: "‘हिरोशिमा’ कविता का प्रमुख संदेश क्या है?",
      options: ["युद्ध का उत्सव", "शांति और मानवता", "धन का महत्व", "प्रकृति से दूरी"],
      answer: 1,
      explain: "कविता युद्ध की विनाशकारी शक्ति और मानवता तथा शांति की आवश्यकता को सामने लाती है।"
    },
    {
      q: "‘रश्मिरथी’ का प्रमुख पात्र कौन है?",
      options: ["कर्ण", "राम", "मनु", "अशोक"],
      answer: 0,
      explain: "रश्मिरथी में कर्ण का व्यक्तित्व और संघर्ष प्रमुख है।"
    },
    {
      q: "भाषा के विकास पर किसका प्रभाव पड़ता है?",
      options: ["समाज और समय", "केवल मौसम", "केवल खेल", "केवल भोजन"],
      answer: 0,
      explain: "भाषा समाज और समय के परिवर्तन के साथ विकसित होती है।"
    },
    {
      q: "निन्दा रस में प्रमुख शैली कौन-सी है?",
      options: ["व्यंग्य", "वैज्ञानिक", "गणितीय", "तकनीकी"],
      answer: 0,
      explain: "हरिशंकर परसाई की रचना में व्यंग्य के माध्यम से सामाजिक प्रवृत्तियों पर टिप्पणी की गई है।"
    },
    {
      q: "अच्छे निबन्ध में क्या आवश्यक है?",
      options: ["विषय से हटना", "स्पष्ट विषय-वस्तु", "बहुत कठिन शब्द", "अव्यवस्थित लेखन"],
      answer: 1,
      explain: "निबन्ध में विषय-वस्तु, क्रमबद्धता और स्पष्ट भाषा महत्वपूर्ण हैं।"
    },
    {
      q: "कैकेयी का प्रमुख भाव कौन-सा है?",
      options: ["अनुताप", "हास्य", "क्रोध", "उत्सव"],
      answer: 0,
      explain: "कैकेयी के अनुताप में पश्चाताप और आत्मग्लानि प्रमुख हैं।"
    },
    {
      q: "‘अभिनव मनुष्य’ में विज्ञान के साथ किसकी आवश्यकता है?",
      options: ["मानवता", "आलस्य", "अज्ञान", "स्वार्थ"],
      answer: 0,
      explain: "विज्ञान की शक्ति के साथ मानवता और जिम्मेदारी आवश्यक है।"
    }
  ],

  english: [
    {
      q: "What is the central concern of Lost Spring?",
      options: ["Sports", "Child labour and poverty", "Travel", "Science"],
      answer: 1,
      explain: "Lost Spring focuses on poverty, child labour and the loss of childhood."
    },
    {
      q: "What does the rattrap symbolise?",
      options: ["A school", "The world and its temptations", "A hospital", "A kingdom"],
      answer: 1,
      explain: "The world is compared to a rattrap because temptations can trap people."
    },
    {
      q: "Who is the narrator of Deep Water?",
      options: ["William Douglas", "Jack Finney", "Louis Fischer", "Robert Frost"],
      answer: 0,
      explain: "William Douglas narrates his experience of overcoming the fear of water."
    },
    {
      q: "What is a major theme of My Mother at Sixty-Six?",
      options: ["Fear of separation", "War", "Travel", "Technology"],
      answer: 0,
      explain: "The poet experiences anxiety about her ageing mother's mortality and separation."
    },
    {
      q: "What does Keeping Quiet encourage?",
      options: ["Violence", "Introspection and peace", "Competition", "War"],
      answer: 1,
      explain: "The poem encourages silence for reflection and understanding."
    },
    {
      q: "What do Aunt Jennifer's tigers symbolise?",
      options: ["Fear", "Freedom and confidence", "Poverty", "Illness"],
      answer: 1,
      explain: "The fearless tigers contrast with Aunt Jennifer's oppressed life."
    },
    {
      q: "What is the main conflict in The Enemy?",
      options: ["Money and education", "Humanity and wartime duty", "Sports and study", "Travel and work"],
      answer: 1,
      explain: "Dr Sadao faces a moral conflict between humanity and wartime nationalism."
    },
    {
      q: "Why did Charley seek the third level?",
      options: ["For escape from modern stress", "For money", "For a job", "For education"],
      answer: 0,
      explain: "The third level represents an escape from the pressures of modern life."
    }
  ],

  economics: [
    {
      q: "What does opportunity cost mean?",
      options: [
        "Total money spent",
        "Value of the next best alternative foregone",
        "Profit only",
        "Tax paid"
      ],
      answer: 1,
      explain: "Opportunity cost is the value of the next best alternative that is given up."
    },
    {
      q: "Demand generally has what relation with price?",
      options: ["Direct", "Inverse", "No relation", "Always equal"],
      answer: 1,
      explain: "Under the usual law of demand, quantity demanded varies inversely with price."
    },
    {
      q: "What is marginal cost?",
      options: [
        "Total fixed cost",
        "Change in total cost from one more unit",
        "Total revenue",
        "Average income"
      ],
      answer: 1,
      explain: "Marginal cost is the change in total cost due to one additional unit of output."
    },
    {
      q: "A perfectly competitive firm is generally a:",
      options: ["Price maker", "Price taker", "Monopoly", "Regulator"],
      answer: 1,
      explain: "Under perfect competition, an individual firm takes the market price."
    },
    {
      q: "GDP measures:",
      options: [
        "Domestic production",
        "Only exports",
        "Only imports",
        "Only taxes"
      ],
      answer: 0,
      explain: "GDP measures the value of final goods and services produced within domestic territory."
    },
    {
      q: "Which institution regulates monetary conditions in India?",
      options: ["RBI", "Election Commission", "UPSC", "NITI only"],
      answer: 0,
      explain: "The Reserve Bank of India is the central monetary authority."
    },
    {
      q: "Fiscal deficit indicates:",
      options: [
        "Government borrowing requirement",
        "Exports only",
        "Population growth",
        "Bank deposits only"
      ],
      answer: 0,
      explain: "Fiscal deficit broadly indicates the government's borrowing requirement."
    },
    {
      q: "Balance of Payments records transactions between:",
      options: [
        "Two families",
        "Residents of a country and rest of world",
        "Two schools",
        "Only banks"
      ],
      answer: 1,
      explain: "BOP records economic transactions between residents and the rest of the world."
    }
  ],

  sociology: [
    {
      q: "What does demography study?",
      options: ["Population", "Weather", "Physics", "Grammar"],
      answer: 0,
      explain: "Demography studies population size, structure, distribution and change."
    },
    {
      q: "Which is a social institution?",
      options: ["Family", "Rain", "Mountain", "Temperature"],
      answer: 0,
      explain: "Family is a major social institution."
    },
    {
      q: "Social inequality means:",
      options: [
        "Equal opportunities",
        "Unequal access to resources and opportunities",
        "Only population growth",
        "Only migration"
      ],
      answer: 1,
      explain: "Social inequality refers to unequal access to valued resources and opportunities."
    },
    {
      q: "What does secularism broadly support?",
      options: [
        "Equal respect and religious neutrality",
        "One compulsory religion",
        "No rights",
        "Only economic growth"
      ],
      answer: 0,
      explain: "Secularism supports equal citizenship and appropriate separation/neutrality in relation to religion."
    },
    {
      q: "Sanskritisation is associated with:",
      options: [
        "Cultural change",
        "Weather change",
        "Population counting",
        "Banking"
      ],
      answer: 0,
      explain: "Sanskritisation is a process of cultural and social change."
    },
    {
      q: "Globalisation increases:",
      options: [
        "Isolation only",
        "Connections among societies and economies",
        "Only local trade",
        "Only agriculture"
      ],
      answer: 1,
      explain: "Globalisation increases economic, cultural and informational connections."
    },
    {
      q: "Mass media can influence:",
      options: ["Public opinion", "Only rainfall", "Only temperature", "Only crops"],
      answer: 0,
      explain: "Mass media can shape public opinion, culture and social awareness."
    },
    {
      q: "A social movement is generally:",
      options: [
        "Collective effort for or against social change",
        "A single person's hobby",
        "A weather event",
        "A market price"
      ],
      answer: 0,
      explain: "Social movements involve collective action around social change or resistance."
    }
  ],

  drawing: [
    {
      q: "Which are primary colours?",
      options: [
        "Red, Yellow, Blue",
        "Green, Orange, Violet",
        "Black, White, Grey",
        "Pink, Brown, Grey"
      ],
      answer: 0,
      explain: "In the standard traditional colour model, red, yellow and blue are primary colours."
    },
    {
      q: "What is important in object drawing?",
      options: [
        "Only outline",
        "Proportion, light and shade",
        "Only text",
        "Only background"
      ],
      answer: 1,
      explain: "Object drawing requires proportion and effective treatment of light and shade."
    },
    {
      q: "Nature drawing mainly depends on:",
      options: ["Observation", "Guessing only", "Typing", "Calculation"],
      answer: 0,
      explain: "Nature drawing requires careful observation of natural forms."
    },
    {
      q: "Memory drawing represents:",
      options: [
        "Remembered visual experiences",
        "Only photographs",
        "Only text",
        "Only geometry"
      ],
      answer: 0,
      explain: "Memory drawing represents scenes or objects from remembered visual experience."
    },
    {
      q: "A landscape can create depth through:",
      options: [
        "Foreground, middle ground and background",
        "Only one object",
        "Only text",
        "Only border"
      ],
      answer: 0,
      explain: "Layering foreground, middle ground and background helps create spatial depth."
    },
    {
      q: "A balanced design should have:",
      options: [
        "Visual balance",
        "Random placement only",
        "No composition",
        "Only one shape"
      ],
      answer: 0,
      explain: "Balance is an important principle of visual composition."
    },
    {
      q: "Light and shade help show:",
      options: ["Form and depth", "Spelling", "Grammar", "Population"],
      answer: 0,
      explain: "Light and shade create volume, form and depth."
    },
    {
      q: "Which can be used as a natural design motif?",
      options: ["Leaf", "Only number", "Only paragraph", "Only equation"],
      answer: 0,
      explain: "Leaves and flowers are common natural motifs for decorative design."
    }
  ]

};


/* =========================================================
   STATE
   ========================================================= */

const STORAGE = "12th_pass_quest_v_final";

const defaultState = {
  theme: "light",
  completedChapters: {},
  mistakes: [],
  mockResults: [],
  lastLocation: {
    page: "home",
    subject: null,
    chapter: null
  },
  mock: null,
  drafts: {}
};

let state = loadState();

let currentSubject = null;
let currentChapter = null;
let currentMock = null;
let timerInterval = null;


/* =========================================================
   STORAGE
   ========================================================= */

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE);

    if (!saved) return structuredClone(defaultState);

    const parsed = JSON.parse(saved);

    return {
      ...structuredClone(defaultState),
      ...parsed
    };

  } catch (e) {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE, JSON.stringify(state));
}


/* =========================================================
   HELPERS
   ========================================================= */

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function shuffle(arr) {
  const a = [...arr];

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function subjectProgress(key) {
  const subject = SUBJECTS[key];

  if (!subject) return 0;

  const done = subject.chapters.filter((_, i) =>
    state.completedChapters[`${key}_${i}`]
  ).length;

  return Math.round((done / subject.chapters.length) * 100);
}

function overallProgress() {
  const values = Object.keys(SUBJECTS).map(subjectProgress);

  if (!values.length) return 0;

  return Math.round(
    values.reduce((a, b) => a + b, 0) / values.length
  );
}

function bestMock(key) {
  const scores = state.mockResults
    .filter(x => x.subject === key)
    .map(x => x.percent);

  return scores.length ? Math.max(...scores) + "%" : "--";
}

function pageTitle(key) {
  return SUBJECTS[key]?.title || key;
}


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function showPage(pageId, push = true) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(pageId);

  if (page) {
    page.classList.add("active");
  }

  if (push) {
    history.pushState(
      {
        page: pageId,
        subject: currentSubject,
        chapter: currentChapter
      },
      "",
      `#${pageId}`
    );
  }

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
}

function goHome() {
  if (state.mock) {
    confirmLeaveMock(() => {
      state.mock = null;
      saveState();
      stopTimer();
      showPage("home");
      renderHome();
    });

    return;
  }

  showPage("home");
  state.lastLocation = {
    page: "home",
    subject: null,
    chapter: null
  };

  saveState();
}

function goBack() {

  if (state.mock) {
    confirmLeaveMock(() => {
      stopTimer();
      state.mock = null;
      saveState();
      history.back();
    });

    return;
  }

  history.back();
}

window.addEventListener("popstate", () => {

  if (state.mock) {
    confirmLeaveMock(() => {
      state.mock = null;
      stopTimer();
      saveState();
      restoreFromHistory();
    });

    return;
  }

  restoreFromHistory();
});

function restoreFromHistory() {

  const hash = location.hash.replace("#", "");

  if (hash === "subjectPage" && currentSubject) {
    renderSubject(currentSubject, false);
    return;
  }

  if (hash === "revisionPage" && currentSubject) {
    renderRevision(currentSubject, false);
    return;
  }

  if (hash === "chapterPage" && currentSubject && currentChapter !== null) {
    renderChapter(currentSubject, currentChapter, false);
    return;
  }

  if (hash === "dynamicPage") {
    showPage("dynamicPage", false);
    return;
  }

  showPage("home", false);
  renderHome();
}


/* =========================================================
   HOME
   ========================================================= */

function renderHome() {

  document.getElementById("overallPercent").textContent =
    overallProgress() + "%";

  const grid = document.getElementById("subjectGrid");

  grid.innerHTML = Object.entries(SUBJECTS).map(([key, subject]) => {

    const progress = subjectProgress(key);

    return `
      <button class="subject-card" data-subject="${key}">

        <div class="subject-icon">
          ${subject.icon}
        </div>

        <h3>${esc(subject.title)}</h3>

        <p>${esc(subject.hindi)}</p>

        <div class="subject-progress">
          <div style="width:${progress}%"></div>
        </div>

        <small style="display:block;margin-top:6px;color:var(--muted)">
          ${progress}% complete
        </small>

      </button>
    `;

  }).join("");

  grid.querySelectorAll("[data-subject]").forEach(btn => {

    btn.addEventListener("click", () => {
      openSubject(btn.dataset.subject);
    });

  });

  renderContinue();
}

function renderContinue() {

  const card = document.getElementById("continueCard");

  if (!state.lastLocation.subject) {
    card.style.display = "none";
    return;
  }

  card.style.display = "flex";

  const subject = SUBJECTS[state.lastLocation.subject];

  if (!subject) return;

  document.getElementById("continueTitle").textContent =
    subject.title;

  document.getElementById("continueText").textContent =
    state.lastLocation.chapter !== null
      ? "Continue your last chapter."
      : "Continue your subject preparation.";

  document.getElementById("continueBtn").onclick = () => {

    if (state.lastLocation.chapter !== null) {
      openChapter(
        state.lastLocation.subject,
        state.lastLocation.chapter
      );
    } else {
      openSubject(state.lastLocation.subject);
    }

  };
}


/* =========================================================
   SUBJECT
   ========================================================= */

function openSubject(key, push = true) {

  if (!SUBJECTS[key]) return;

  currentSubject = key;
  currentChapter = null;

  renderSubject(key, push);
}

function renderSubject(key, push = true) {

  const subject = SUBJECTS[key];

  if (!subject) return;

  document.getElementById("subjectCode").textContent =
    "SUBJECT " + subject.code;

  document.getElementById("subjectTitle").textContent =
    subject.title;

  document.getElementById("subjectIcon").textContent =
    subject.icon;

  document.getElementById("subjectHindi").textContent =
    subject.hindi;

  document.getElementById("subjectHeroTitle").textContent =
    subject.title;

  document.getElementById("subjectDescription").textContent =
    subject.description;

  document.getElementById("chapterCount").textContent =
    subject.chapters.length;

  document.getElementById("subjectProgress").textContent =
    subjectProgress(key) + "%";

  document.getElementById("subjectScore").textContent =
    bestMock(key);

  document.getElementById("chapterPreviewCount").textContent =
    subject.chapters.length + " topics";

  renderChapterPreview(key);

  showPage("subjectPage", push);

  state.lastLocation = {
    page: "subjectPage",
    subject: key,
    chapter: null
  };

  saveState();
}

function renderChapterPreview(key) {

  const subject = SUBJECTS[key];

  document.getElementById("chapterPreviewList").innerHTML =
    subject.chapters.map((chapter, index) => {

      const done =
        !!state.completedChapters[`${key}_${index}`];

      return `
        <div class="chapter-card">

          <button
            data-chapter="${index}"
            data-subject="${key}"
          >

            <span class="chapter-number">
              ${index + 1}
            </span>

            <h3>${esc(chapter.title)}</h3>

            ${done ? `<span class="chapter-done">✓</span>` : ""}

            <p>${esc(chapter.summary)}</p>

          </button>

        </div>
      `;

    }).join("");

  document.querySelectorAll("[data-chapter]").forEach(btn => {

    btn.addEventListener("click", () => {

      openChapter(
        btn.dataset.subject,
        Number(btn.dataset.chapter)
      );

    });

  });
}


/* =========================================================
   REVISION
   ========================================================= */

function openRevision(key = currentSubject, push = true) {

  if (!SUBJECTS[key]) return;

  currentSubject = key;

  renderRevision(key, push);
}

function renderRevision(key, push = true) {

  const subject = SUBJECTS[key];

  document.getElementById("revisionSubjectTitle").textContent =
    subject.title;

  document.getElementById("revisionContent").innerHTML = `

    <div class="revision-intro">
      <h2>${subject.icon} ${esc(subject.title)}</h2>
      <p>
        Short revision • Key points • Exam focus • Practice
      </p>
    </div>

    <div class="section-heading">
      <h2>📚 Chapters</h2>
      <span>${subject.chapters.length}</span>
    </div>

    ${subject.chapters.map((chapter, index) => {

      const done =
        !!state.completedChapters[`${key}_${index}`];

      return `
        <div class="chapter-card">

          <button
            data-revision-chapter="${index}"
          >

            <span class="chapter-number">
              ${index + 1}
            </span>

            <h3>${esc(chapter.title)}</h3>

            ${done ? `<span class="chapter-done">✓</span>` : ""}

            <p>${esc(chapter.summary)}</p>

          </button>

        </div>
      `;

    }).join("")}

  `;

  document
    .querySelectorAll("[data-revision-chapter]")
    .forEach(btn => {

      btn.addEventListener("click", () => {

        openChapter(
          key,
          Number(btn.dataset.revisionChapter)
        );

      });

    });

  showPage("revisionPage", push);

  state.lastLocation = {
    page: "revisionPage",
    subject: key,
    chapter: null
  };

  saveState();
}


/* =========================================================
   CHAPTER
   ========================================================= */

function openChapter(key, index, push = true) {

  currentSubject = key;
  currentChapter = index;

  renderChapter(key, index, push);
}

function renderChapter(key, index, push = true) {

  const subject = SUBJECTS[key];
  const chapter = subject?.chapters[index];

  if (!chapter) return;

  const done =
    !!state.completedChapters[`${key}_${index}`];

  document.getElementById("chapterTitle").textContent =
    chapter.title;

  document.getElementById("chapterContent").innerHTML = `

    <div class="revision-intro">

      <span class="eyebrow">${esc(subject.title)}</span>

      <h2>${esc(chapter.title)}</h2>

      <p>${esc(chapter.summary)}</p>

    </div>


    <section class="revision-box">

      <h3>📖 Short Revision</h3>

      <p>${esc(chapter.summary)}</p>

    </section>


    <section class="revision-box">

      <h3>⭐ Key Points</h3>

      <ul>

        ${chapter.points.map(point =>
          `<li>${esc(point)}</li>`
        ).join("")}

      </ul>

    </section>


    <section class="revision-box">

      <h3>🎯 Exam Focus</h3>

      ${chapter.exam.map(item =>
        `<div class="exam-point">${esc(item)}</div>`
      ).join("")}

    </section>


    <section class="revision-box">

      <h3>✍️ Practice Answer</h3>

      <p class="practice-question">
        ${esc(chapter.practice)}
      </p>

      <textarea
        id="chapterAnswer"
        class="answer-box"
        placeholder="Type your answer here..."
      ></textarea>

      <div style="height:9px"></div>

      <button id="evaluateAnswer" class="primary-btn">
        Evaluate Answer
      </button>

      <div id="evalResult"></div>

    </section>


    <section class="revision-box">

      <h3>🧠 Quick Recall</h3>

      <p>
        Important concepts:
        <strong>${chapter.keywords.map(esc).join(" • ")}</strong>
      </p>

    </section>


    <section class="revision-box">

      <h3>✅ Chapter Status</h3>

      <p>
        ${done
          ? "You have marked this chapter as completed."
          : "Mark the chapter completed after revision."
        }
      </p>

      <button
        id="markChapterDone"
        class="${done ? "secondary-btn" : "success-btn"}"
      >
        ${done ? "✓ Completed" : "Mark as Completed"}
      </button>

    </section>

  `;

  const answerBox =
    document.getElementById("chapterAnswer");

  const draftKey = `${key}_${index}`;

  answerBox.value =
    state.drafts[draftKey] || "";

  answerBox.addEventListener("input", () => {

    state.drafts[draftKey] = answerBox.value;

    saveState();

  });

  document
    .getElementById("evaluateAnswer")
    .addEventListener("click", () => {

      evaluateWrittenAnswer(
        key,
        index,
        answerBox.value
      );

    });

  document
    .getElementById("markChapterDone")
    .addEventListener("click", () => {

      state.completedChapters[draftKey] = true;

      saveState();

      renderChapter(key, index, false);

      showToast("Chapter completed ✓");

    });

  document.getElementById("chapterDoneBtn").onclick = () => {

    state.completedChapters[draftKey] = true;

    saveState();

    renderChapter(key, index, false);

    showToast("Chapter completed ✓");

  };

  showPage("chapterPage", push);

  state.lastLocation = {
    page: "chapterPage",
    subject: key,
    chapter: index
  };

  saveState();
}


/* =========================================================
   WRITTEN ANSWER EVALUATION
   ========================================================= */

function evaluateWrittenAnswer(key, index, answer) {

  const chapter = SUBJECTS[key].chapters[index];

  const text = answer
    .toLowerCase()
    .trim();

  if (text.length < 15) {

    document.getElementById("evalResult").innerHTML = `
      <div class="eval-result">
        <strong>⚠️ Answer too short</strong>
        <p>
          Write a few meaningful sentences before evaluating.
        </p>
      </div>
    `;

    return;
  }

  const matched = chapter.keywords.filter(word =>
    text.includes(word.toLowerCase())
  );

  const uniqueMatched = [...new Set(matched)];

  const matchPercent = Math.min(
    100,
    Math.round(
      (uniqueMatched.length / chapter.keywords.length) * 100
    )
  );

  let estimatedMarks;

  if (matchPercent >= 80) {
    estimatedMarks = "Very Good";
  } else if (matchPercent >= 60) {
    estimatedMarks = "Good";
  } else if (matchPercent >= 40) {
    estimatedMarks = "Needs Improvement";
  } else {
    estimatedMarks = "Weak";
  }

  const missing = chapter.keywords.filter(
    word => !text.includes(word.toLowerCase())
  );

  document.getElementById("evalResult").innerHTML = `

    <div class="eval-result">

      <h3>📊 Estimated Evaluation</h3>

      <p>
        <strong>Concept Match:</strong>
        ${matchPercent}%
      </p>

      <p>
        <strong>Quality:</strong>
        ${estimatedMarks}
      </p>

      <p>
        <strong>Detected Key Points:</strong>
        ${uniqueMatched.length
          ? uniqueMatched.map(esc).join(", ")
          : "None detected"
        }
      </p>

      <p>
        <strong>Possible Missing Points:</strong>
        ${missing.length
          ? missing.map(esc).join(", ")
          : "No major keyword missing"
        }
      </p>

      <small>
        This is an app-based estimate, not official UP Board marking.
        Exact board marks cannot be guaranteed.
      </small>

    </div>

  `;
}


/* =========================================================
   PAPER RESOURCES
   ========================================================= */

function renderPapers(key = currentSubject) {

  const subject = SUBJECTS[key];

  openDynamicPage(
    "📄",
    `${subject.title} Papers`,
    `
      <div class="revision-intro">
        <h2>📄 Board Paper Resources</h2>
        <p>
          Official UPMSP resources + practice material
        </p>
      </div>

      <div class="list-card resource-card">

        <div class="resource-icon">🏛️</div>

        <div>
          <h3>Official UPMSP Model Papers</h3>

          <p>
            Official board model papers for Class 12.
          </p>

          <a
            href="https://upmsp.edu.in/Board_ModelPaper.aspx"
            target="_blank"
            rel="noopener"
          >
            Open Official Model Paper Page →
          </a>

        </div>

      </div>


      <div class="list-card resource-card">

        <div class="resource-icon">📚</div>

        <div>
          <h3>Official UPMSP Question Bank</h3>

          <p>
            Board office question bank resources.
          </p>

          <a
            href="https://upmsp.edu.in/Board_QuestionBank.aspx"
            target="_blank"
            rel="noopener"
          >
            Open Official Question Bank →
          </a>

        </div>

      </div>


      <div class="list-card resource-card">

        <div class="resource-icon">📖</div>

        <div>
          <h3>Official Syllabus</h3>

          <p>
            Check the latest Class 12 syllabus and subject codes.
          </p>

          <a
            href="https://upmsp.edu.in/Board_Syllabus.aspx"
            target="_blank"
            rel="noopener"
          >
            Open Official Syllabus →
          </a>

        </div>

      </div>


      <div class="revision-box">

        <h3>📝 PYQ Practice</h3>

        <p>
          नीचे दिए गए questions practice के लिए हैं.
          इन्हें official previous-year questions के रूप में claim नहीं किया जा रहा।
        </p>

        ${QUESTIONS[key].slice(0, 5).map((q, i) => `
          <div class="exam-point">
            <strong>Practice ${i + 1}.</strong>
            ${esc(q.q)}
          </div>
        `).join("")}

      </div>

      <div class="revision-box">

        <h3>⚠️ Important</h3>

        <p>
          Official papers और question banks के लिए ऊपर दिए गए
          UPMSP links use करो. App में generated practice questions
          अलग से labelled हैं.
        </p>

      </div>
    `,
    true
  );
}


/* =========================================================
   MODEL PAPERS
   ========================================================= */

function renderModels(key = currentSubject) {

  const subject = SUBJECTS[key];

  openDynamicPage(
    "📄",
    `${subject.title} Model Papers`,
    `

      <div class="revision-intro">
        <h2>📄 ${esc(subject.title)}</h2>
        <p>
          Board-pattern practice + official resource
        </p>
      </div>


      <div class="list-card">

        <span class="badge">OFFICIAL RESOURCE</span>

        <h3 style="margin-top:9px">
          UPMSP Class 12 Model Papers
        </h3>

        <p>
          Subject code:
          <strong>${subject.code}</strong>
        </p>

        <div style="height:10px"></div>

        <a
          href="https://upmsp.edu.in/Board_ModelPaper.aspx"
          target="_blank"
          rel="noopener"
          class="primary-btn"
          style="display:inline-block;text-decoration:none;color:white"
        >
          Open Official Model Papers
        </a>

      </div>


      <div class="revision-box">

        <h3>🎯 App Practice Model</h3>

        <p>
          इस section में app के original practice questions हैं.
          ये official model paper की copy नहीं हैं.
        </p>

        ${QUESTIONS[key].map((q, i) => `
          <div class="exam-point">
            <strong>${i + 1}.</strong>
            ${esc(q.q)}
          </div>
        `).join("")}

      </div>

    `,
    true
  );
}


/* =========================================================
   MISTAKES
   ========================================================= */

function renderMistakes(key = currentSubject) {

  const mistakes = state.mistakes.filter(
    item => item.subject === key
  );

  const subject = SUBJECTS[key];

  openDynamicPage(
    "❌",
    "My Mistakes",
    `

      <div class="revision-intro">
        <h2>❌ ${esc(subject.title)}</h2>
        <p>
          Questions you answered incorrectly
        </p>
      </div>

      ${
        mistakes.length
          ? mistakes.map((m, i) => `

            <div class="list-card">

              <span class="badge">MISTAKE ${i + 1}</span>

              <h3 style="margin-top:9px">
                ${esc(m.question)}
              </h3>

              <p>
                <strong>Your answer:</strong>
                ${esc(m.yourAnswer)}
              </p>

              <p style="margin-top:5px">
                <strong>Correct answer:</strong>
                ${esc(m.correctAnswer)}
              </p>

              <p style="margin-top:7px">
                ${esc(m.explanation)}
              </p>

            </div>

          `).join("")
          : `

            <div class="list-card" style="text-align:center">

              <div style="font-size:35px">🎉</div>

              <h3>No mistakes yet</h3>

              <p>
                Mock exam attempt karo.
                Wrong answers automatically yahan save honge.
              </p>

            </div>

          `
      }

      ${
        mistakes.length
          ? `
            <button
              id="clearMistakesBtn"
              class="danger-btn"
            >
              Clear ${subject.title} Mistakes
            </button>
          `
          : ""
      }

    `,
    true
  );

  const clear =
    document.getElementById("clearMistakesBtn");

  if (clear) {

    clear.onclick = () => {

      if (!confirm("Clear all mistakes for this subject?")) {
        return;
      }

      state.mistakes =
        state.mistakes.filter(
          x => x.subject !== key
        );

      saveState();

      renderMistakes(key, false);

      showToast("Mistakes cleared");
    };

  }
}


/* =========================================================
   PROGRESS
   ========================================================= */

function renderProgress(key = null) {

  const subjects = key
    ? [[key, SUBJECTS[key]]]
    : Object.entries(SUBJECTS);

  const totalCompleted =
    Object.values(state.completedChapters)
      .filter(Boolean).length;

  const totalChapters =
    Object.values(SUBJECTS)
      .reduce(
        (sum, subject) =>
          sum + subject.chapters.length,
        0
      );

  const mockCount = state.mockResults.length;

  openDynamicPage(
    "📊",
    "My Progress",
    `

      <div class="revision-intro">
        <h2>📊 Preparation Dashboard</h2>
        <p>
          Track your revision, mocks and mistakes.
        </p>
      </div>


      <div class="result-grid">

        <div class="mini-stat">
          <strong>${overallProgress()}%</strong>
          <span>Overall Revision</span>
        </div>

        <div class="mini-stat">
          <strong>${totalCompleted}/${totalChapters}</strong>
          <span>Chapters Done</span>
        </div>

        <div class="mini-stat">
          <strong>${mockCount}</strong>
          <span>Mocks Attempted</span>
        </div>

        <div class="mini-stat">
          <strong>${state.mistakes.length}</strong>
          <span>Mistakes</span>
        </div>

      </div>


      <div class="section-heading">
        <h2>Subjects</h2>
      </div>


      ${subjects.map(([id, subject]) => {

        const progress = subjectProgress(id);

        return `

          <div class="progress-card">

            <div class="progress-row">
              <strong>
                ${subject.icon} ${esc(subject.title)}
              </strong>

              <span>
                ${progress}%
              </span>
            </div>

            <div class="bar">
              <div style="width:${progress}%"></div>
            </div>

            <p style="font-size:10px;color:var(--muted);margin:8px 0 0">
              Best Mock: ${bestMock(id)}
            </p>

          </div>

        `;

      }).join("")}


      <div class="revision-box">

        <h3>🎯 PASS Readiness</h3>

        ${renderPassReadiness()}

      </div>


      <div class="revision-box">

        <h3>💡 Next Priority</h3>

        ${renderPriority()}

      </div>

    `,
    true
  );
}

function renderPassReadiness() {

  const progress = overallProgress();

  let status;
  let cls;

  if (progress >= 75) {
    status = "SAFE";
    cls = "status-safe";
  } else if (progress >= 50) {
    status = "BORDERLINE";
    cls = "status-borderline";
  } else {
    status = "NEEDS WORK";
    cls = "status-danger";
  }

  return `

    <div style="text-align:center;padding:12px">

      <div class="${cls}"
        style="font-size:27px;font-weight:900">
        ${status}
      </div>

      <p>
        Revision readiness:
        <strong>${progress}%</strong>
      </p>

      <small>
        This is a preparation indicator, not a prediction
        of your actual board result.
      </small>

    </div>

  `;
}

function renderPriority() {

  const sorted = Object.entries(SUBJECTS)
    .map(([id, subject]) => ({
      id,
      title: subject.title,
      progress: subjectProgress(id)
    }))
    .sort((a, b) => a.progress - b.progress);

  const weakest = sorted[0];

  if (!weakest) {
    return "<p>No data yet.</p>";
  }

  return `

    <p>
      Your current lowest revision subject is
      <strong>${esc(weakest.title)}</strong>
      at <strong>${weakest.progress}%</strong>.
    </p>

    <button
      id="priorityBtn"
      class="primary-btn"
    >
      Open ${esc(weakest.title)}
    </button>

  `;
}


/* =========================================================
   MOCK EXAM
   ========================================================= */

function startMock(key = currentSubject) {

  if (!SUBJECTS[key]) return;

  if (state.mock) {

    if (
      state.mock.subject === key &&
      confirm("An unfinished mock exists. Continue it?")
    ) {
      resumeMock();
      return;
    }

    if (
      !confirm(
        "Another mock is saved. Start a new mock and replace it?"
      )
    ) {
      return;
    }

  }

  const selectedQuestions =
    shuffle(QUESTIONS[key])
      .slice(0, Math.min(QUESTIONS[key].length, 8))
      .map(q => ({
        ...q,
        options: shuffle(
          q.options.map((text, index) => ({
            text,
            original: index
          }))
        ).map(x => x.text)
      }));

  /*
    Because shuffled options change indices, rebuild correct answer
    by matching original text.
  */

  const originalQuestions =
    shuffle(QUESTIONS[key])
      .slice(0, Math.min(QUESTIONS[key].length, 8));

  const finalQuestions = originalQuestions.map(q => {

    const optionObjects = shuffle(
      q.options.map((text, index) => ({
        text,
        correct: index === q.answer
      }))
    );

    return {
      q: q.q,
      options: optionObjects.map(x => x.text),
      answer: optionObjects.findIndex(x => x.correct),
      explain: q.explain
    };

  });

  currentMock = {
    subject: key,
    questions: finalQuestions,
    answers: Array(finalQuestions.length).fill(null),
    review: Array(finalQuestions.length).fill(false),
    current: 0,
    remaining: 15 * 60,
    startedAt: Date.now()
  };

  state.mock = currentMock;

  saveState();

  renderMock();
}

function resumeMock() {

  currentMock = state.mock;

  if (!currentMock) return;

  renderMock();
}

function renderMock() {

  const mock = state.mock;

  if (!mock) return;

  currentMock = mock;

  openDynamicPage(
    "⏱️",
    `${SUBJECTS[mock.subject].title} Mock`,
    "",
    false
  );

  renderMockInside();

  startTimer();
}

function renderMockInside() {

  const mock = state.mock;

  if (!mock) return;

  const q = mock.questions[mock.current];

  if (!q) return;

  document.getElementById("dynamicContent").innerHTML = `

    <div class="mock-header">

      <div class="mock-top">

        <div>
          <strong>
            Question ${mock.current + 1}
            / ${mock.questions.length}
          </strong>

          <div style="font-size:10px;color:var(--muted);margin-top:3px">
            ${esc(SUBJECTS[mock.subject].title)}
          </div>
        </div>

        <div id="mockTimer" class="timer">
          ${formatTime(mock.remaining)}
        </div>

      </div>


      <div class="question-palette">

        ${mock.questions.map((_, i) => `

          <button
            class="palette-btn
              ${mock.answers[i] !== null ? "answered" : ""}
              ${mock.review[i] ? "review" : ""}
            "
            data-palette="${i}"
          >
            ${i + 1}
          </button>

        `).join("")}

      </div>

    </div>


    <div class="question-card">

      <div class="question-no">
        QUESTION ${mock.current + 1}
      </div>

      <div class="question-text">
        ${esc(q.q)}
      </div>


      <div>

        ${q.options.map((option, index) => `

          <button
            class="option
              ${mock.answers[mock.current] === index
                ? "selected"
                : ""
              }
            "
            data-option="${index}"
          >
            <strong>${String.fromCharCode(65 + index)}.</strong>
            ${esc(option)}
          </button>

        `).join("")}

      </div>


      <div class="mock-actions">

        <button
          id="prevQuestion"
          class="secondary-btn"
          ${mock.current === 0 ? "disabled" : ""}
        >
          ← Previous
        </button>

        <button
          id="nextQuestion"
          class="primary-btn"
        >
          ${
            mock.current === mock.questions.length - 1
              ? "Finish"
              : "Next →"
          }
        </button>

        <button
          id="reviewQuestion"
          class="secondary-btn"
        >
          ${
            mock.review[mock.current]
              ? "✓ Marked"
              : "🔖 Mark Review"
          }
        </button>

        <button
          id="submitMock"
          class="danger-btn"
        >
          Submit Exam
        </button>

      </div>

    </div>

  `;


  document
    .querySelectorAll("[data-option]")
    .forEach(btn => {

      btn.onclick = () => {

        mock.answers[mock.current] =
          Number(btn.dataset.option);

        saveState();

        renderMockInside();

      };

    });


  document
    .querySelectorAll("[data-palette]")
    .forEach(btn => {

      btn.onclick = () => {

        mock.current =
          Number(btn.dataset.palette);

        saveState();

        renderMockInside();

      };

    });


  document.getElementById("prevQuestion").onclick = () => {

    if (mock.current > 0) {
      mock.current--;
      saveState();
      renderMockInside();
    }

  };


  document.getElementById("nextQuestion").onclick = () => {

    if (
      mock.current ===
      mock.questions.length - 1
    ) {
      submitMock();
      return;
    }

    mock.current++;

    saveState();

    renderMockInside();

  };


  document.getElementById("reviewQuestion").onclick = () => {

    mock.review[mock.current] =
      !mock.review[mock.current];

    saveState();

    renderMockInside();

  };


  document.getElementById("submitMock").onclick = () => {
    submitMock();
  };
}

function startTimer() {

  stopTimer();

  timerInterval = setInterval(() => {

    if (!state.mock) {
      stopTimer();
      return;
    }

    state.mock.remaining--;

    if (state.mock.remaining <= 0) {

      state.mock.remaining = 0;

      saveState();

      stopTimer();

      showToast("Time is up! Exam submitted.");

      setTimeout(() => {
        submitMock(true);
      }, 500);

      return;
    }

    if (state.mock.remaining % 5 === 0) {
      saveState();
    }

    const timer =
      document.getElementById("mockTimer");

    if (timer) {
      timer.textContent =
        formatTime(state.mock.remaining);
    }

  }, 1000);
}

function stopTimer() {

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

}

function formatTime(seconds) {

  const min =
    Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");

  const sec =
    (seconds % 60)
      .toString()
      .padStart(2, "0");

  return `${min}:${sec}`;
}


/* =========================================================
   SUBMIT MOCK
   ========================================================= */

function submitMock(auto = false) {

  if (!state.mock) return;

  if (!auto) {

    const unanswered =
      state.mock.answers.filter(
        x => x === null
      ).length;

    if (
      !confirm(
        unanswered
          ? `You have ${unanswered} unanswered questions. Submit?`
          : "Submit your mock exam?"
      )
    ) {
      return;
    }

  }

  stopTimer();

  const mock = state.mock;

  let correct = 0;

  mock.questions.forEach((q, i) => {

    if (mock.answers[i] === q.answer) {
      correct++;
    } else {

      const chosen =
        mock.answers[i] === null
          ? "Not answered"
          : q.options[mock.answers[i]];

      const correctAnswer =
        q.options[q.answer];

      state.mistakes.push({
        id: Date.now() + "_" + i,
        subject: mock.subject,
        question: q.q,
        yourAnswer: chosen,
        correctAnswer,
        explanation: q.explain,
        date: new Date().toISOString()
      });

    }

  });

  const total = mock.questions.length;

  const percent =
    Math.round((correct / total) * 100);

  const result = {
    id: Date.now(),
    subject: mock.subject,
    correct,
    total,
    percent,
    date: new Date().toISOString()
  };

  state.mockResults.push(result);

  state.mock = null;

  saveState();

  renderMockResult(result);
}


/* =========================================================
   MOCK RESULT
   ========================================================= */

function renderMockResult(result) {

  const subject =
    SUBJECTS[result.subject];

  let status;
  let cls;

  if (result.percent >= 75) {
    status = "SAFE";
    cls = "status-safe";
  } else if (result.percent >= 50) {
    status = "BORDERLINE";
    cls = "status-borderline";
  } else {
    status = "NEEDS WORK";
    cls = "status-danger";
  }

  const mistakes =
    state.mistakes.filter(
      m =>
        m.subject === result.subject &&
        new Date(m.date).getTime() >= result.id - 5000
    );

  openDynamicPage(
    "🏆",
    "Mock Result",
    `

      <div class="result-hero">

        <div style="font-size:45px">
          ${result.percent >= 50 ? "🎉" : "📚"}
        </div>

        <div class="result-score">
          ${result.percent}%
        </div>

        <h2 class="${cls}">
          ${status}
        </h2>

        <p>
          ${esc(subject.title)}
        </p>

        <p>
          <strong>
            ${result.correct}
          </strong>
          correct out of
          <strong>
            ${result.total}
          </strong>
        </p>

      </div>


      <div class="result-grid">

        <div class="mini-stat">
          <strong>${result.correct}</strong>
          <span>Correct</span>
        </div>

        <div class="mini-stat">
          <strong>${result.total - result.correct}</strong>
          <span>Wrong</span>
        </div>

        <div class="mini-stat">
          <strong>${result.percent}%</strong>
          <span>Score</span>
        </div>

        <div class="mini-stat">
          <strong>${mistakes.length}</strong>
          <span>Saved Mistakes</span>
        </div>

      </div>


      <div class="revision-box">

        <h3>📊 Analysis</h3>

        <p>
          ${
            result.percent >= 75
              ? "Good performance. Keep revising and practise mixed questions."
              : result.percent >= 50
                ? "You are around the borderline. Focus on weak topics and repeat the mock."
                : "More revision is needed. Start with important chapters and basic concepts."
          }
        </p>

      </div>


      <div class="revision-box">

        <h3>⚠️ Important</h3>

        <p>
          This mock score is a practice indicator.
          It is not an official prediction of board marks.
        </p>

      </div>


      <div style="display:grid;gap:9px">

        <button
          id="resultAgain"
          class="primary-btn"
        >
          🔄 Attempt Again
        </button>

        <button
          id="resultMistakes"
          class="secondary-btn"
        >
          ❌ View My Mistakes
        </button>

        <button
          id="resultProgress"
          class="secondary-btn"
        >
          📊 View Progress
        </button>

      </div>

    `,
    true
  );

  document.getElementById("resultAgain").onclick = () => {
    startMock(result.subject);
  };

  document.getElementById("resultMistakes").onclick = () => {
    renderMistakes(result.subject);
  };

  document.getElementById("resultProgress").onclick = () => {
    renderProgress(result.subject);
  };
}


/* =========================================================
   DYNAMIC PAGE
   ========================================================= */

function openDynamicPage(
  icon,
  title,
  html,
  push = true
) {

  document.getElementById("dynamicEyebrow").textContent =
    "12th PASS QUEST";

  document.getElementById("dynamicTitle").textContent =
    title;

  document.getElementById("dynamicContent").innerHTML =
    html;

  showPage("dynamicPage", push);

  document.getElementById("priorityBtn")?.addEventListener(
    "click",
    () => {
      const sorted = Object.entries(SUBJECTS)
        .map(([id]) => ({
          id,
          progress: subjectProgress(id)
        }))
        .sort((a, b) => a.progress - b.progress);

      if (sorted[0]) {
        openSubject(sorted[0].id);
      }
    }
  );
}


/* =========================================================
   FEATURE ROUTING
   ========================================================= */

function openFeature(feature) {

  switch (feature) {

    case "mistakes":
      renderAllMistakes();
      break;

    case "progress":
      renderProgress();
      break;

    case "mock":
      chooseMockSubject();
      break;

    case "papers":
      choosePaperSubject();
      break;

  }
}

function chooseMockSubject() {

  openDynamicPage(
    "⏱️",
    "Choose Mock Subject",
    `

      <div class="revision-intro">
        <h2>⏱️ Mock Exam</h2>
        <p>Select a subject to start a timed practice exam.</p>
      </div>

      ${Object.entries(SUBJECTS).map(([id, s]) => `

        <button
          class="list-card"
          style="width:100%;text-align:left;color:var(--text)"
          data-start-mock="${id}"
        >

          <strong>
            ${s.icon} ${esc(s.title)}
          </strong>

          <p>
            ${s.chapters.length} chapters •
            ${QUESTIONS[id].length} practice questions
          </p>

        </button>

      `).join("")}

    `,
    true
  );

  document
    .querySelectorAll("[data-start-mock]")
    .forEach(btn => {

      btn.onclick = () => {
        startMock(btn.dataset.startMock);
      };

    });
}

function choosePaperSubject() {

  openDynamicPage(
    "📄",
    "Choose Subject",
    `

      <div class="revision-intro">
        <h2>📄 Board Resources</h2>
        <p>Select a subject.</p>
      </div>

      ${Object.entries(SUBJECTS).map(([id, s]) => `

        <button
          class="list-card"
          style="width:100%;text-align:left;color:var(--text)"
          data-paper-subject="${id}"
        >

          <strong>
            ${s.icon} ${esc(s.title)}
          </strong>

          <p>
            PYQ practice + model paper resources
          </p>

        </button>

      `).join("")}

    `,
    true
  );

  document
    .querySelectorAll("[data-paper-subject]")
    .forEach(btn => {

      btn.onclick = () => {
        renderPapers(btn.dataset.paperSubject);
      };

    });
}

function renderAllMistakes() {

  const mistakes = state.mistakes;

  openDynamicPage(
    "❌",
    "My Mistakes",
    `

      <div class="revision-intro">
        <h2>❌ My Mistakes</h2>
        <p>All saved wrong answers.</p>
      </div>

      ${
        mistakes.length
          ? mistakes.map((m, i) => `

            <div class="list-card">

              <span class="badge">
                ${esc(SUBJECTS[m.subject]?.title || m.subject)}
              </span>

              <h3 style="margin-top:8px">
                ${esc(m.question)}
              </h3>

              <p>
                <strong>Your answer:</strong>
                ${esc(m.yourAnswer)}
              </p>

              <p>
                <strong>Correct:</strong>
                ${esc(m.correctAnswer)}
              </p>

              <p style="margin-top:6px">
                ${esc(m.explanation)}
              </p>

            </div>

          `).join("")
          : `

            <div class="list-card" style="text-align:center">
              <div style="font-size:38px">🎉</div>
              <h3>No mistakes saved</h3>
              <p>
                Your wrong mock answers will appear here.
              </p>
            </div>

          `
      }

      ${
        mistakes.length
          ? `
            <button
              id="clearAllMistakes"
              class="danger-btn"
            >
              Clear All Mistakes
            </button>
          `
          : ""
      }

    `,
    true
  );

  document.getElementById("clearAllMistakes")?.addEventListener(
    "click",
    () => {

      if (!confirm("Clear all saved mistakes?")) {
        return;
      }

      state.mistakes = [];

      saveState();

      renderAllMistakes(false);

      showToast("All mistakes cleared");

    }
  );
}


/* =========================================================
   CONFIRM LEAVE MOCK
   ========================================================= */

function confirmLeaveMock(callback) {

  const shouldLeave =
    confirm(
      "⚠️ Exam is in progress.\n\n" +
      "If you leave, your current mock will be saved " +
      "and you can continue it later.\n\n" +
      "Leave?"
    );

  if (shouldLeave) {
    callback();
  }

}


/* =========================================================
   MODAL
   ========================================================= */

function showModal(html) {

  document.getElementById("modalContent").innerHTML =
    html;

  document
    .getElementById("modal")
    .classList.remove("hidden");
}

function closeModal() {

  document
    .getElementById("modal")
    .classList.add("hidden");

}

document
  .getElementById("modalClose")
  .addEventListener(
    "click",
    closeModal
  );

document
  .querySelector(".modal-backdrop")
  .addEventListener(
    "click",
    closeModal
  );


/* =========================================================
   THEME
   ========================================================= */

function applyTheme() {

  document.body.classList.toggle(
    "dark",
    state.theme === "dark"
  );

  const symbol =
    state.theme === "dark"
      ? "☀️"
      : "🌙";

  document.getElementById("themeBtn").textContent =
    symbol;

  document.getElementById("revisionThemeBtn").textContent =
    symbol;
}

function toggleTheme() {

  state.theme =
    state.theme === "dark"
      ? "light"
      : "dark";

  saveState();

  applyTheme();
}


/* =========================================================
   EVENT WIRING
   ========================================================= */

document
  .getElementById("themeBtn")
  .addEventListener(
    "click",
    toggleTheme
  );

document
  .getElementById("revisionThemeBtn")
  .addEventListener(
    "click",
    toggleTheme
  );

document
  .querySelectorAll("[data-back]")
  .forEach(btn => {

    btn.addEventListener(
      "click",
      goBack
    );

  });

document
  .getElementById("dynamicBackBtn")
  .addEventListener(
    "click",
    goBack
  );


/* Subject modules */

document
  .querySelectorAll("[data-module]")
  .forEach(btn => {

    btn.addEventListener(
      "click",
      () => {

        const module =
          btn.dataset.module;

        switch (module) {

          case "revision":
            openRevision(currentSubject);
            break;

          case "pyq":
            renderPapers(currentSubject);
            break;

          case "model":
            renderModels(currentSubject);
            break;

          case "mock":
            startMock(currentSubject);
            break;

          case "mistakes":
            renderMistakes(currentSubject);
            break;

          case "progress":
            renderProgress(currentSubject);
            break;

        }

      }
    );

  });


/* Home features */

document
  .querySelectorAll("[data-feature]")
  .forEach(btn => {

    btn.addEventListener(
      "click",
      () => {
        openFeature(btn.dataset.feature);
      }
    );

  });


/* =========================================================
   SUBJECT MENU
   ========================================================= */

document
  .getElementById("subjectMenuBtn")
  .addEventListener(
    "click",
    () => {

      showModal(`

        <h2>${SUBJECTS[currentSubject]?.icon || "📚"}
          Subject Menu
        </h2>

        <div style="display:grid;gap:9px;margin-top:15px">

          <button
            id="menuRevision"
            class="secondary-btn"
          >
            📖 Revision
          </button>

          <button
            id="menuMock"
            class="secondary-btn"
          >
            ⏱️ Mock Exam
          </button>

          <button
            id="menuMistakes"
            class="secondary-btn"
          >
            ❌ My Mistakes
          </button>

          <button
            id="menuProgress"
            class="secondary-btn"
          >
            📊 Progress
          </button>

        </div>

      `);

      document.getElementById("menuRevision").onclick =
        () => {
          closeModal();
          openRevision(currentSubject);
        };

      document.getElementById("menuMock").onclick =
        () => {
          closeModal();
          startMock(currentSubject);
        };

      document.getElementById("menuMistakes").onclick =
        () => {
          closeModal();
          renderMistakes(currentSubject);
        };

      document.getElementById("menuProgress").onclick =
        () => {
          closeModal();
          renderProgress(currentSubject);
        };

    }
  );


/* =========================================================
   INITIALISE
   ========================================================= */

function init() {

  applyTheme();

  renderHome();

  /*
    If a previous mock exists, show continue card.
  */

  if (state.mock) {

    document.getElementById("continueCard").style.display =
      "flex";

    document.getElementById("continueTitle").textContent =
      "Unfinished Mock Exam";

    document.getElementById("continueText").textContent =
      `${SUBJECTS[state.mock.subject]?.title || "Subject"} mock is saved.`;

    document.getElementById("continueBtn").textContent =
      "Resume →";

    document.getElementById("continueBtn").onclick =
      () => resumeMock();

  }

  /*
    Restore last location only when hash exists.
    Otherwise home remains the default.
  */

  if (location.hash) {
    restoreFromHistory();
  }

}

init();
