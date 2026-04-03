const ageGate = document.getElementById("ageGate");
const enterBtn = document.getElementById("enterBtn");
const leaveBtn = document.getElementById("leaveBtn");

const accepted = sessionStorage.getItem("portal_age_ok");

if (accepted === "yes") {
  ageGate.classList.add("hidden");
}

enterBtn.addEventListener("click", () => {
  sessionStorage.setItem("portal_age_ok", "yes");
  ageGate.classList.add("hidden");
});

leaveBtn.addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});
