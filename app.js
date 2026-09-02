/* =========================================
   12th PASS QUEST
   Main Application
========================================= */


/* =========================================
   PAGE SYSTEM
========================================= */

const pages = {
  home: document.getElementById("home"),
  subject: document.getElementById("subjectPage"),
  revision: document.getElementById("revisionPage"),
  chapter: document.getElementById("chapterPage")
};


let currentSubject =
  localStorage.getItem("currentSubject") || "";

let currentChapter =
  localStorage.getItem("currentChapter") || "";

let currentPage =
  localStorage.getItem("currentPage") || "home";


/* =========================================
   SUBJECT DATA

   Hindi + English meaning together
========================================= */

const subjectData = {

  Hindi: {

    titleHindi: "सामान्य हिन्दी",
    titleEnglish: "General Hindi",

    chapters: [

      {
        id: "hindi-1",
        number: 1,
        hindi: "गद्य साहित्य",
        english: "Prose Literature"
      },

      {
        id: "hindi-2",
        number: 2,
        hindi: "पद्य साहित्य",
        english: "Poetry Literature"
      },

      {
        id: "hindi-3",
        number: 3,
        hindi: "कहानी साहित्य",
        english: "Short Story Literature"
      },

      {
        id: "hindi-4",
        number: 4,
        hindi: "खण्ड-काव्य",
        english: "Narrative / Sectional Poetry"
      },

      {
        id: "hindi-5",
        number: 5,
        hindi: "संस्कृत खण्ड",
        english: "Sanskrit Section"
      },

      {
        id: "hindi-6",
        number: 6,
        hindi: "निबन्ध लेखन",
        english: "Essay Writing"
      },

      {
        id: "hindi-7",
        number: 7,
        hindi: "पत्र लेखन",
        english: "Letter Writing"
      },

      {
        id: "hindi-8",
        number: 8,
        hindi: "व्याकरण",
        english: "Grammar"
      },

      {
        id: "hindi-9",
        number: 9,
        hindi: "अपठित गद्यांश एवं पद्यांश",
        english: "Unseen Prose & Poetry Passages"
      }

    ]

  }

};


/* =========================================
   PAGE DISPLAY
========================================= */

function showPage(pageName, save = true) {

  Object.values(pages).forEach(page => {

    if (page) {
      page.classList.remove("active");
    }

  });


  if (pages[pageName]) {
    pages[pageName].classList.add("active");
  }


  currentPage = pageName;


  if (save) {
    localStorage.setItem(
      "currentPage",
      pageName
    );
  }


  window.scrollTo(0, 0);
}


/* =========================================
   SUBJECT
========================================= */

function openSubject(subject, fromBack = false) {

  currentSubject = subject;

  localStorage.setItem(
    "currentSubject",
    subject
  );


  document.getElementById(
    "subjectTitle"
  ).textContent = subject;


  const subtitles = {

    Hindi:
      "सामान्य हिन्दी • General Hindi • Exam Preparation",

    English:
      "English • Exam Preparation",

    Economics:
      "Economics • Exam Preparation",

    Sociology:
      "Sociology • Exam Preparation",

    Drawing:
      "Drawing Design • Exam Preparation"

  };


  document.getElementById(
    "subjectSubtitle"
  ).textContent =
    subtitles[subject] ||
    "Exam-focused preparation";


  showPage("subject");


  if (!fromBack) {

    history.pushState(

      {
        page: "subject",
        subject: subject
      },

      "",

      "#subject"

    );

  }

}


/* =========================================
   CHAPTER REVISION
========================================= */

function openRevision() {

  localStorage.setItem(
    "currentPage",
    "revision"
  );


  document.getElementById(
    "revisionTitle"
  ).textContent =
    currentSubject + " Revision";


  renderChapterList();


  showPage("revision");


  history.pushState(

    {
      page: "revision",
      subject: currentSubject
    },

    "",

    "#revision"

  );

}


/* =========================================
   CHAPTER LIST
========================================= */

function renderChapterList() {

  const list =
    document.getElementById(
      "chapterList"
    );


  if (!list) return;


  const data =
    subjectData[currentSubject];


  /* -----------------------------------------
     Subjects not added yet
  ----------------------------------------- */

  if (!data) {

    list.innerHTML = `

      <div class="revision-box">

        <h2>
          ${currentSubject}
        </h2>

        <p>
          Chapter-wise revision is being
          prepared using verified UP Board
          syllabus and study material.
        </p>

      </div>

    `;

    return;

  }


  let html = `

    <div class="revision-box">

      <h2>
        📚 ${data.titleHindi}
      </h2>

      <p>
        ${data.titleEnglish}
      </p>

      <p>
        Select a chapter to start
        exam-focused revision.
      </p>

    </div>


    <div class="chapter-grid">

  `;


  data.chapters.forEach(chapter => {

    html += `

      <button
        class="chapter-card"
        onclick="openChapter(
          '${chapter.id}',
          '${chapter.hindi.replace(/'/g, "\\'")}',
          '${chapter.english.replace(/'/g, "\\'")}'
        )"
      >

        <div class="chapter-number">

          ${chapter.number}

        </div>


        <div class="chapter-info">

          <h3>
            ${chapter.hindi}
          </h3>

          <p>
            ${chapter.english}
          </p>

          <small>
            📖 Revision • 🎯 Exam Focus
          </small>

        </div>


        <div class="chapter-arrow">
          →
        </div>

      </button>

    `;

  });


  html += `

    </div>

  `;


  list.innerHTML = html;

}


/* =========================================
   CHAPTER DETAIL
========================================= */

function openChapter(
  chapterId,
  hindiName,
  englishName
) {

  currentChapter = chapterId;


  localStorage.setItem(
    "currentChapter",
    chapterId
  );


  /*
     Hindi title
  */

  document.getElementById(
    "chapterTitle"
  ).textContent =
    hindiName;


  /*
     English meaning
     Displayed inside the page
     if an English title element exists.
  */

  const chapterEnglish =
    document.getElementById(
      "chapterEnglishTitle"
    );


  if (chapterEnglish) {

    chapterEnglish.textContent =
      englishName;

  }


  /*
     Temporary content area.
     Actual verified lesson content
     will be added next.
  */

  document.getElementById(
    "englishSummary"
  ).textContent =
    "A short, exam-focused English summary will be added from verified UP Board study material.";


  document.getElementById(
    "hindiSummary"
  ).textContent =
    "सत्यापित UP Board अध्ययन सामग्री के आधार पर इस अध्याय का छोटा और परीक्षा-केंद्रित सारांश यहाँ जोड़ा जाएगा।";


  document.getElementById(
    "keyPoints"
  ).innerHTML = `

    <li>
      Important concepts
      (महत्वपूर्ण अवधारणाएँ)
    </li>

    <li>
      Board-focused points
      (बोर्ड परीक्षा के महत्वपूर्ण बिंदु)
    </li>

    <li>
      Important exam concepts
      (परीक्षा के लिए महत्वपूर्ण बातें)
    </li>

  `;


  document.getElementById(
    "examFocus"
  ).textContent =
    "Previous-year questions and official model-paper based exam focus will be added here.";


  showPage("chapter");


  history.pushState(

    {
      page: "chapter",
      subject: currentSubject,
      chapter: chapterId
    },

    "",

    "#chapter-" + chapterId

  );

}


/* =========================================
   BACK BUTTON
========================================= */

function goBack() {

  if (currentPage === "chapter") {

    showPage("revision");

    renderChapterList();

    history.replaceState(

      {
        page: "revision",
        subject: currentSubject
      },

      "",

      "#revision"

    );

    return;

  }


  if (currentPage === "revision") {

    showPage("subject");

    history.replaceState(

      {
        page: "subject",
        subject: currentSubject
      },

      "",

      "#subject"

    );

    return;

  }


  if (currentPage === "subject") {

    showPage("home");

    history.replaceState(

      {
        page: "home"
      },

      "",

      "#home"

    );

    return;

  }


  showPage("home");

}


/* =========================================
   PHONE / BROWSER BACK
========================================= */

window.addEventListener(
  "popstate",
  function () {

    if (currentPage === "chapter") {

      showPage("revision");

      renderChapterList();

      return;

    }


    if (currentPage === "revision") {

      showPage("subject");

      return;

    }


    if (currentPage === "subject") {

      showPage("home");

      return;

    }


    showPage(
      "home",
      false
    );

  }
);


/* =========================================
   REFRESH RESTORE
========================================= */

function restorePage() {

  const savedPage =
    localStorage.getItem(
      "currentPage"
    ) || "home";


  const savedSubject =
    localStorage.getItem(
      "currentSubject"
    ) || "";


  const savedChapter =
    localStorage.getItem(
      "currentChapter"
    ) || "";


  currentSubject =
    savedSubject;


  currentChapter =
    savedChapter;


  /* -----------------------------------------
     CHAPTER
  ----------------------------------------- */

  if (
    savedPage === "chapter" &&
    savedSubject
  ) {

    const data =
      subjectData[savedSubject];


    let chapter = null;


    if (data) {

      chapter =
        data.chapters.find(
          item =>
            item.id === savedChapter
        );

    }


    document.getElementById(
      "subjectTitle"
    ).textContent =
      savedSubject;


    document.getElementById(
      "chapterTitle"
    ).textContent =
      chapter
        ? chapter.hindi
        : "Chapter";


    const chapterEnglish =
      document.getElementById(
        "chapterEnglishTitle"
      );


    if (chapterEnglish) {

      chapterEnglish.textContent =
        chapter
          ? chapter.english
          : "";

    }


    document.getElementById(
      "englishSummary"
    ).textContent =
      "A short, exam-focused English summary will be added from verified UP Board study material.";


    document.getElementById(
      "hindiSummary"
    ).textContent =
      "सत्यापित UP Board अध्ययन सामग्री के आधार पर सारांश यहाँ जोड़ा जाएगा।";


    document.getElementById(
      "keyPoints"
    ).innerHTML = `

      <li>
        Important concepts
        (महत्वपूर्ण अवधारणाएँ)
      </li>

      <li>
        Board-focused points
        (बोर्ड परीक्षा के महत्वपूर्ण बिंदु)
      </li>

      <li>
        Important exam concepts
        (महत्वपूर्ण परीक्षा बिंदु)
      </li>

    `;


    document.getElementById(
      "examFocus"
    ).textContent =
      "Exam-focused material will be added here.";


    showPage(
      "chapter",
      false
    );


    return;

  }


  /* -----------------------------------------
     REVISION
  ----------------------------------------- */

  if (
    savedPage === "revision" &&
    savedSubject
  ) {

    document.getElementById(
      "revisionTitle"
    ).textContent =
      savedSubject + " Revision";


    renderChapterList();


    showPage(
      "revision",
      false
    );


    return;

  }


  /* -----------------------------------------
     SUBJECT
  ----------------------------------------- */

  if (
    savedPage === "subject" &&
    savedSubject
  ) {

    openSubject(
      savedSubject,
      true
    );


    return;

  }


  /* -----------------------------------------
     HOME
  ----------------------------------------- */

  showPage(
    "home",
    false
  );


  history.replaceState(

    {
      page: "home"
    },

    "",

    "#home"

  );

}


/* =========================================
   PROGRESS
========================================= */

function loadProgress() {

  const progress =
    Number(
      localStorage.getItem(
        "overallProgress"
      )
    ) || 0;


  const progressText =
    document.getElementById(
      "overallProgress"
    );


  const progressFill =
    document.getElementById(
      "progressFill"
    );


  if (progressText) {

    progressText.textContent =
      progress + "%";

  }


  if (progressFill) {

    progressFill.style.width =
      progress + "%";

  }

}


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    loadProgress();

    restorePage();

  }
);
