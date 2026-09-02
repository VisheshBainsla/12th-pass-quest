/* =========================================
   12th PASS QUEST
   Main Application
========================================= */

const pages = {
  home: document.getElementById("home"),
  subject: document.getElementById("subjectPage"),
  revision: document.getElementById("revisionPage"),
  chapter: document.getElementById("chapterPage")
};

let currentSubject = localStorage.getItem("currentSubject") || "";
let currentChapter = localStorage.getItem("currentChapter") || "";
let currentPage = localStorage.getItem("currentPage") || "home";


/* =========================================
   PAGE SYSTEM
========================================= */

function showPage(pageName, save = true) {

  Object.values(pages).forEach(page => {
    if (page) page.classList.remove("active");
  });

  if (pages[pageName]) {
    pages[pageName].classList.add("active");
  }

  currentPage = pageName;

  if (save) {
    localStorage.setItem("currentPage", pageName);
  }

  window.scrollTo(0, 0);
}


/* =========================================
   SUBJECT
========================================= */

function openSubject(subject, fromBack = false) {

  currentSubject = subject;

  localStorage.setItem("currentSubject", subject);

  document.getElementById("subjectTitle").textContent = subject;

  const subtitles = {
    Hindi: "General Hindi • Exam Preparation",
    English: "English • Exam Preparation",
    Economics: "Economics • Exam Preparation",
    Sociology: "Sociology • Exam Preparation",
    Drawing: "Drawing Design • Exam Preparation"
  };

  document.getElementById("subjectSubtitle").textContent =
    subtitles[subject] || "Exam-focused preparation";

  showPage("subject");

  if (!fromBack) {
    history.pushState(
      { page: "subject", subject: subject },
      "",
      "#subject"
    );
  }
}


/* =========================================
   CHAPTER REVISION
========================================= */

function openRevision() {

  localStorage.setItem("currentPage", "revision");

  document.getElementById("revisionTitle").textContent =
    currentSubject + " Revision";

  renderChapterList();

  showPage("revision");

  history.pushState(
    { page: "revision", subject: currentSubject },
    "",
    "#revision"
  );
}


/* =========================================
   CHAPTER LIST
========================================= */

function renderChapterList() {

  const list = document.getElementById("chapterList");

  list.innerHTML = `
    <div class="revision-box">
      <h2>📚 ${currentSubject} Revision</h2>
      <p>
        Chapter-wise exam-focused revision will be added here
        using verified UP Board syllabus and study material.
      </p>
    </div>

    <div class="revision-box">
      <h2>🎯 What you'll get</h2>
      <ul>
        <li>🇬🇧 English summary</li>
        <li>🇮🇳 हिंदी सारांश</li>
        <li>⭐ Important key points</li>
        <li>🎯 Exam-focused points</li>
        <li>📄 Previous-year questions</li>
        <li>📝 Model-paper questions</li>
      </ul>
    </div>
  `;

}


/* =========================================
   CHAPTER DETAIL
========================================= */

function openChapter(chapterNumber, chapterName) {

  currentChapter = chapterNumber;

  localStorage.setItem(
    "currentChapter",
    chapterNumber
  );

  document.getElementById("chapterTitle").textContent =
    chapterName;

  document.getElementById("englishSummary").textContent =
    "Verified exam-focused summary will be added here.";

  document.getElementById("hindiSummary").textContent =
    "सत्यापित परीक्षा-केंद्रित सारांश यहाँ जोड़ा जाएगा।";

  document.getElementById("keyPoints").innerHTML = `
    <li>Important point will be added from verified study material.</li>
    <li>Board-focused key point will be added here.</li>
    <li>Important exam concept will be added here.</li>
  `;

  document.getElementById("examFocus").textContent =
    "Previous-year and model-paper based exam focus will be added here.";

  showPage("chapter");

  history.pushState(
    {
      page: "chapter",
      subject: currentSubject,
      chapter: chapterNumber
    },
    "",
    "#chapter-" + chapterNumber
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
      { page: "home" },
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

window.addEventListener("popstate", function () {

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


  showPage("home", false);

});


/* =========================================
   REFRESH RESTORE
========================================= */

function restorePage() {

  const savedPage =
    localStorage.getItem("currentPage") || "home";

  const savedSubject =
    localStorage.getItem("currentSubject") || "";

  const savedChapter =
    localStorage.getItem("currentChapter") || "";


  if (savedPage === "chapter" && savedSubject) {

    currentSubject = savedSubject;
    currentChapter = savedChapter;

    document.getElementById("subjectTitle").textContent =
      savedSubject;

    document.getElementById("chapterTitle").textContent =
      "Chapter " + savedChapter;

    document.getElementById("englishSummary").textContent =
      "Verified exam-focused summary will be added here.";

    document.getElementById("hindiSummary").textContent =
      "सत्यापित परीक्षा-केंद्रित सारांश यहाँ जोड़ा जाएगा।";

    document.getElementById("keyPoints").innerHTML = `
      <li>Important point will be added here.</li>
      <li>Board-focused key point will be added here.</li>
      <li>Important exam concept will be added here.</li>
    `;

    document.getElementById("examFocus").textContent =
      "Exam-focused material will be added here.";

    showPage("chapter", false);

    return;
  }


  if (savedPage === "revision" && savedSubject) {

    currentSubject = savedSubject;

    document.getElementById("revisionTitle").textContent =
      savedSubject + " Revision";

    renderChapterList();

    showPage("revision", false);

    return;
  }


  if (savedPage === "subject" && savedSubject) {

    openSubject(savedSubject, true);

    return;
  }


  showPage("home", false);

  history.replaceState(
    { page: "home" },
    "",
    "#home"
  );
}


/* =========================================
   PROGRESS
========================================= */

function loadProgress() {

  const progress =
    Number(localStorage.getItem("overallProgress")) || 0;

  const progressText =
    document.getElementById("overallProgress");

  const progressFill =
    document.getElementById("progressFill");

  if (progressText) {
    progressText.textContent = progress + "%";
  }

  if (progressFill) {
    progressFill.style.width = progress + "%";
  }
}


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  loadProgress();

  restorePage();

});
