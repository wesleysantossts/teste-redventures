class Meal {
  static async getBroths() {
    const response = await fetch("http://3.83.94.172:8080/api/broths", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "PSf@d39m[-8s9:m%x]NA({xG<Og(ur"
      }
    });
  
    return response;
  }
  
  static async getProteins() {
    const response = await fetch("http://3.83.94.172:8080/api/proteins", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "PSf@d39m[-8s9:m%x]NA({xG<Og(ur"
      }
    });
  
    return response;
  }
  
  static async createOrder(payload) {
    const response = await fetch("http://3.83.94.172:8080/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "PSf@d39m[-8s9:m%x]NA({xG<Og(ur"
      },
      body: JSON.stringify(payload)
    });
  
    return response;
  }

}

class EventListener {
  static async initialize() {
    this.createCard("broth");
    this.createCard("protein");
  }

  static changeStyle({component, selector, attribute, value}) {
    component.querySelectorAll(selector).forEach(item => item.style[attribute] = value);
  }
  
  static async handleClick(selector, meal) {
    const colorBoxes = document.querySelectorAll(selector);
    let lastClickedBox = null;
    
    colorBoxes.forEach(box => {
      box.addEventListener('click', function() {
        if (lastClickedBox) {
          lastClickedBox.style.backgroundColor = "#FAFAED";
  
          EventListener.changeStyle({ component: lastClickedBox, selector: ".title", attribute: "color", value: "#1820EF" });
          EventListener.changeStyle({ component: lastClickedBox, selector: ".description", attribute: "color", value: "black" });
          EventListener.changeStyle({ component: lastClickedBox, selector: ".price", attribute: "color", value: "#FF4E42" });
          lastClickedBox.querySelectorAll(".icon").forEach((item, index) => {
            if (index === 0) item.style.display = "flex";
            if (index === 1) {
              item.style.display = "none";
              item.classList.toggle("selected");
            }
          });
        }
  
        const mealSelected = box.querySelector(".slide-content > p.title").textContent;
        box.querySelectorAll(".icon").forEach((item, index) => {
          if (index === 0) item.style.display = "none";
          if (index === 1) {
            item.style.display = "flex";
            item.classList.toggle("selected");
  
            if (selector === ".slide-broth") 
              meal.broth = String(mealSelected).toLowerCase();
            else
              meal.protein = String(mealSelected).toLowerCase();
          }
        });
        box.dataset.originalColor = box.style.backgroundColor;
        box.style.backgroundColor = '#1820EF';
        EventListener.changeStyle({ component: box, selector: ".title", attribute: "color", value: "#FFF" });
        EventListener.changeStyle({ component: box, selector: ".description", attribute: "color", value: "#FFF" });
        EventListener.changeStyle({ component: box, selector: ".price", attribute: "color", value: "#FFC024" });
        lastClickedBox = box;
  
        if (
          !!meal.broth &&
          !!meal.protein
        ) {
          const button = document.querySelector(".make-order");
          button.removeAttribute("disabled");
          button.style.background = "#1820EF";
  
          button.addEventListener("click", async function () {
            const broths = await (await Meal.getBroths()).json();
            const proteins = await (await Meal.getProteins()).json();
            const payload = {
              brothId: broths.filter(item => String(item.name.toLowerCase()) === meal.broth)[0].id,
              proteinId: proteins.filter(item => String(item.name.toLowerCase()) === meal.protein)[0].id,
            }
            
            const response = await (await Meal.createOrder(payload)).json();
  
            const params = new URLSearchParams({...meal, orderId: response.id}).toString();
            const url = `/order.html?${params}`
            window.location.href = url;
          })
        }
      });
    });
  }

  static async eventChangeColor() {
    const meal = { broth: null, protein: null };
    this.handleClick('.slide-broth', meal);
    this.handleClick('.slide-protein', meal);
  }
  
  static async createCard(type) {
    if (!type) return;
    
    let data;
    let index;
    if (type === "broth") {
      data = await (await Meal.getBroths()).json();
      index = 0;
    } 
    if (type === "protein") {
      data = await (await Meal.getProteins()).json();
      index = 1;
    } 
    const slider = document.getElementsByClassName("slider-container");
  
    for (const item of data) {
      let el = document.createElement("div");
      el.classList.add(`slide-${type}`);
      el.innerHTML = `
        <div class="slide-content">
          <div>
            <img class="icon" src="${item.imageInactive}"/>
            <img class="icon" src="${item.imageActive}"/>
          </div>
          <p class="title">${item.name}</p>
          <p class="description">${item.description}</p>
          <p class="price">US$ ${item.price}</p>
        </div>
        <style>
          .slide-content {
            width: 100%;
            padding: 40px 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
  
            img {
              margin-bottom: 14px;
            }
            
            img:nth-child(2) {
              display: none;
            } 
            
            .title {
              font-size: 20px;
              font-weight: 900;
              line-height: 24px;
              text-align: center;
              margin-bottom: 10px;
              color: ##1820EF;
            }
            
            .description {
              font-size: 14px;
              font-weight: 400;
              line-height: 16px;
              text-align: center;
              color: #000;
              margin-bottom: 36px;
            }
  
            .price {
              color: #FF4E42;
              font-size: 20px;
              font-weight: 900;
              line-height: 24px;
              text-align: center;
            }
          }
        </style>
      `;
      slider[index].appendChild(el);
      this.eventChangeColor();
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  EventListener.initialize();
})