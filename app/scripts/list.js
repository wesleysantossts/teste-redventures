const getBroths = async () => {
  const response = await fetch("http://localhost:8080/api/broths", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "PSf@d39m[-8s9:m%x]NA({xG<Og(ur"
    }
  });

  return response;
}

const getProteins = async () => {
  const response = await fetch("http://localhost:8080/api/proteins", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "PSf@d39m[-8s9:m%x]NA({xG<Og(ur"
    }
  });

  return response;
}

const changeStyle = ({component, selector, attribute, value}) => {
  component.querySelectorAll(selector).forEach(item => item.style[attribute] = value);
}

const handleClick = async (selector, counter) => {
  const colorBoxes = document.querySelectorAll(selector);
  let lastClickedBox = null;
  
  colorBoxes.forEach(box => {
    box.addEventListener('click', function() {
      if (lastClickedBox) {
        lastClickedBox.style.backgroundColor = "#FAFAED";

        changeStyle({ component: lastClickedBox, selector: ".title", attribute: "color", value: "#1820EF" });
        changeStyle({ component: lastClickedBox, selector: ".description", attribute: "color", value: "black" });
        changeStyle({ component: lastClickedBox, selector: ".price", attribute: "color", value: "#FF4E42" });
        lastClickedBox.querySelectorAll(".icon").forEach((item, index) => {
          if (index === 0) item.style.display = "flex";
          if (index === 1) {
            item.style.display = "none";
            item.classList.toggle("selected");
          }
        });
      }
      
      box.querySelectorAll(".icon").forEach((item, index) => {
        if (index === 0) item.style.display = "none";
        if (index === 1) {
          item.style.display = "flex";
          item.classList.toggle("selected");

          if (selector === ".slide-broth") 
            counter.broth = 1;
          else
            counter.protein = 1;
        }
      });
      box.dataset.originalColor = box.style.backgroundColor;
      box.style.backgroundColor = '#1820EF';
      changeStyle({ component: box, selector: ".title", attribute: "color", value: "#FFF" });
      changeStyle({ component: box, selector: ".description", attribute: "color", value: "#FFF" });
      changeStyle({ component: box, selector: ".price", attribute: "color", value: "#FFC024" });
      lastClickedBox = box;

      if (
        counter.broth === 1 &&
        counter.protein === 1
      ) {
        const button = document.querySelector(".make-order");
        button.removeAttribute("disabled");
        button.style.background = "#1820EF";

        button.addEventListener("click", function () {
          window.location.href = "order.html";
        })
      }
    });
  });
}

const eventChangeColor = async () => {
  const counter = { broth: null, protein: null };
  handleClick('.slide-broth', counter);
  handleClick('.slide-protein', counter);
}

const createCard = async (type) => {
  if (!type) return;
  
  let data;
  let index;
  if (type === "broth") {
    data = await (await getBroths()).json();
    index = 0;
  } 
  if (type === "protein") {
    data = await (await getProteins()).json();
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
    eventChangeColor();
  }
}

const eventListener = async () => {
  createCard("broth");
  createCard("protein");
}

window.addEventListener('DOMContentLoaded', () => {
  eventListener();
})