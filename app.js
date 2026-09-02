
/* =========================================
   12th PASS QUEST
   Main Application Logic
========================================= */

const pages = {
  home: document.getElementById("home"),
  subject: document.getElementById("subjectPage")
};

let currentSubject = localStorage.getItem("currentSubject") || "";
let currentPage = localStorage.getItem("currentPage") || "home";

/* -----------------------------------------
   PAGE CONTROL
----------------------------------------- */

function showPage(pageName, addHistory = true) {

  Object.values(pages).forEach(page => {
    page.classList.remove("active");
  });

  if (pages[pageName]) {
    pages[pageName].classList.add("active");
  }

  currentPage = pageName;
  localStorage.setItem("currentPage", pageName);

  if (addHistory) {
    history.pushState(
      { page: pageName },
      "",
      "#" + pageName
    );
  }

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
}


/* -----------------------------------------
   OPEN SUBJECT
----------------------------------------- */

function openSubject(subject) {

  currentSubject = subject;

  localStorage.setItem(
    "currentSubject",
    subject
  );

  document.getElementById(
    "subjectTitle"
  ).textContent = subject;

  const subtitles = {
    Hindi: "General Hindi • Exam Preparation",
    English: "English • Exam Preparation",
    Economics: "Economics • Exam Preparation",
    Sociology: "Sociology • Exam Preparation",
    Drawing: "Drawing Design • Exam Preparation"
  };

  document.getElementById(
    "subjectSubtitle"
  ).textContent =
    subtitles[subject] || "Exam-focused preparation";

  showPage("subject");
}


/* -----------------------------------------
   GO BACK
----------------------------------------- */

function goBack() {

  if (currentPage === "subject") {

    showPage("home");

    history.replaceState(
      { page: "home" },
      "",
      "#home"
    );

    return;
  }

  showPage("home", false);
}


/* -----------------------------------------
   PHONE / BROWSER BACK BUTTON
----------------------------------------- */

window.addEventListener("popstate", function () {

  const hash = window.location.hash.replace("#", "");

  if (hash === "subject") {

    if (currentSubject) {
      openSubject(currentSubject);
    }

  } else {

    showPage("home", false);
  }
});


/* -----------------------------------------
   REFRESH RESTORE
----------------------------------------- */

function restorePage() {

  const savedPage =
    localStorage.getItem("currentPage");

  const savedSubject =
    localStorage.getItem("currentSubject");

  if (
    savedPage === "subject" &&
    savedSubject
  ) {

    openSubject(savedSubject);

    history.replaceState(
      { page: "subject" },
      "",
      "#subject"
    );

  } else {

    showPage("home", false);

    history.replaceState(
      { page: "home" },
      "",
      "#home"
    );
  }
}


/* -----------------------------------------
   PROGRESS
----------------------------------------- */

function loadProgress() {

  const progress =
    Number(
      localStorage.getItem("overallProgress")
    ) || 0;

  document.getElementById(
    "overallProgress"
  ).textContent = progress + "%";

  document.getElementById(
    "progressFill"
  ).style.width = progress + "%";
}


/* -----------------------------------------
   INITIALIZE
----------------------------------------- */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    loadProgress();

    restorePage();

  }
);
