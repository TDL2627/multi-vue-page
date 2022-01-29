// creating a object that contains an array 
let projects = [
    {
    //   imgURL: "/images/1.gif",
      title: "Smile of Sadness",
      genre:"Sad"
      
    }
  
  ];
  
  function createCard(card) {
    let createdCard = `<div class="project-card" genre=${card.genre} >
        <h1>${card.title}</h1>
        <a href="${card.imgURL}" download>Download</a>
      </div>
    `;
    return createdCard;
  }
  
  function renderCards() {
    let projectContainer = document.querySelector(".project-container");
    for (project of projects) {
      let card = createCard(project);
      projectContainer.innerHTML += card;
    }
  }
  
  renderCards();
  
  // filter
  function filterCards(category) {
    let cards = document.getElementsByClassName("project-card");
  
    if (category === "All") {
      for (card of cards) {
        card.style.display = "block";
      }
      return;
    }
  
    for (card of cards) {
      console.log(card);
      card.style.display = "none";
    }
  
    let selectedCards = document.querySelectorAll(`[genre='${category}']`);
  
    for (card of selectedCards) {
      card.style.display = "block";
    }
  }
 
