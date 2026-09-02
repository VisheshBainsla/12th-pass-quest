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
   GENERAL HINDI — CHAPTER DATA
   Verified syllabus structure will be
   populated with actual content next.
========================================= */

const subjectData = {

  Hindi: {

    title: "General Hindi",

    chapters: [

      {
        id: "hindi-1",
        number: 1,
        name: "गद्य साहित्य"
      },

      {
        id: "hindi-2",
        number: 2,
        name: "पद्य साहित्य"
      },

      {
        id: "hindi-3",
        number: 3,
        name: "कहानी साहित्य"
      },

      {
        id: "hindi-4",
        number: 4,
        name: "खण्ड-काव्य"
      },

      {
        id: "hindi-5",
        number: 5,
        name: "संस्कृत खण्ड"
      },

      {
        id: "hindi-6",
        number: 6,
        name: "निबन्ध लेखन"
      },

      {
        id: "hindi-7",
        number: 7,
        name: "पत्र लेखन"
      },

      {
        id: "hindi-8",
        number: 8,
        name: "व्याकरण"
      },

      {
        id: "hindi-9",
        number: 9,
        name: "अपठित गद्यांश एवं पद्यांश"
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
      "General Hindi • Exam Preparation",

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
    document.getElementById("chapterList");


  if (!list) return;


  const data =
    subjectData[currentSubject];


  /*
     Subjects whose chapter data has not
     been added yet.
  */

  if (!data) {

    list.innerHTML = `

      <div class="revision-box">

        <h2>📚 ${currentSubject} Revision</h2>

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

      <h2>📚 ${data.title}</h2>

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
          '${chapter.name.replace(/'/g, "\\'")}'
        )"
      >

        <div class="chapter-number">
          ${chapter.number}
        </div>

        <div class="chapter-info">

          <h3>
            ${chapter.name}
          </h3>

          <p>
            📖 Revision • 🎯 Exam Focus
          </p>

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
  chapterName
) {

  currentChapter = chapterId;


  localStorage.setItem(
    "currentChapter",
    chapterId
  );


  document.getElementById(
    "chapterTitle"
  ).textContent =
    chapterName;


  /*
     Actual chapter content will be
     inserted here from verified material.
  */

  document.getElementById(
    "englishSummary"
  ).textContent =
    "Chapter summary will be added using verified UP Board study material.";


  document.getElementById(
    "hindiSummary"
  ).textContent =
    "सत्यापित UP Board अध्ययन सामग्री के आधार पर इस अध्याय का संक्षिप्त सारांश यहाँ जोड़ा जाएगा।";


  document.getElementById(
    "keyPoints"
  ).innerHTML = `

    <li>
      Important concepts will be added.
    </li>

    <li>
      Board-focused points will be added.
    </li>

    <li>
      Important exam concepts will be highlighted.
    </li>

  `;


  document.getElementById(
    "examFocus"
  ).textContent =
    "Previous-year and model-paper based exam focus will be added here.";


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


  /* -----------------------------
     CHAPTER
  ----------------------------- */

  if (
    savedPage === "chapter" &&
    savedSubject
  ) {

    document.getElementById(
      "subjectTitle"
    ).textContent =
      savedSubject;


    document.getElementById(
      "chapterTitle"
    ).textContent =
      "Chapter";


    document.getElementById(
      "englishSummary"
    ).textContent =
      "Chapter summary will be restored here.";


    document.getElementById(
      "hindiSummary"
    ).textContent =
      "अध्याय का सारांश यहाँ दिखाई देगा।";


    document.getElementById(
      "keyPoints"
    ).innerHTML = `

      <li>
        Important concepts will be shown here.
      </li>

      <li>
        Board-focused points will be shown here.
      </li>

      <li>
        Important exam concepts will be shown here.
      </li>

    `;


    document.getElementById(
      "examFocus"
    ).textContent =
      "Exam-focused material will be shown here.";


    showPage(
      "chapter",
      false
    );


    return;

  }


  /* -----------------------------
     REVISION
  ----------------------------- */

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


  /* -----------------------------
     SUBJECT
  ----------------------------- */

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


  /* -----------------------------
     HOME
  ----------------------------- */

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
