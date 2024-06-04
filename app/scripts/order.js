class EventListener {
  static initialize() {
    this.changeMeal();
    this.returnHome();
  }
  
  static changeMeal() {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    let broth = params.get("broth");
    let protein = params.get("protein");

    if (protein.includes("yasai"))
      protein = protein.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1, item.length)).join(" ");

    const payload = {
      broth: 
        broth.charAt(0).toUpperCase() + broth.slice(1, broth.length),
      protein: 
        protein.charAt(0).toUpperCase() + protein.slice(1, protein.length),
    }

    const headline = document.querySelector(".headline");
    const imgSelected = headline.querySelector(`.${protein.split(" ")[0].toLocaleLowerCase()}`);
    imgSelected.classList.toggle("invisible");

    const title = headline.querySelector("h1");
    title.textContent = `${payload.broth} and ${payload.protein} Ramen`;
  }

  static returnHome() {
    const btn = document.querySelector(".btn > button");
  
    btn.addEventListener("click", function () {
      window.location.href = "/"
    })
  }
}

window.addEventListener("DOMContentLoaded", function () {
  EventListener.initialize();
})