const check = document.getElementById("ageCheck");
const links = document.querySelectorAll(".gated");

check.addEventListener("change", () => {
  links.forEach(link => {
    if(check.checked){
      link.classList.remove("disabled");
    } else {
      link.classList.add("disabled");
    }
  });
});