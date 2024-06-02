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

const eventListener = async () => {
  const brothData = await (await getBroths()).json();
  const proteinData = await (await getProteins()).json();
  const slider = document.getElementsByClassName("slider-container");
  
  for (const broth of brothData) {
    let el = document.createElement("div");
    el.classList.add("slide");
    el.innerHTML = `
      <div class="slide-content">
        <div>
          <img src="${broth.imageInactive}"/>
        </div>
        <p class="title">${broth.name}</p>
        <p class="description">${broth.description}</p>
        <p class="price">US$ ${broth.price}</p>
      </div>
      <style>
        .slide-content {
          width: 100%;
          padding: 40px 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          img {
            margin-bottom: 14px;
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
    slider[0].appendChild(el);
  }
  
  for (const protein of proteinData) {
    let el = document.createElement("div");
    el.classList.add("slide");
    el.innerHTML = `
      <div class="slide-content">
        <div>
          <img src="${protein.imageInactive}"/>
        </div>
        <p class="title">${protein.name}</p>
        <p class="description">${protein.description}</p>
        <p class="price">US$ ${protein.price}</p>
      </div>
      <style>
        .slide-content {
          width: 100%;
          padding: 40px 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          img {
            margin-bottom: 14px;
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
    slider[1].appendChild(el);
  }
}  

window.addEventListener('DOMContentLoaded', () => {
  eventListener();
})