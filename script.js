
let nbaTeams = document.querySelector(".nbaTeams")
const url = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/teams',
  params: { page: '0' },
  headers: {
    'X-RapidAPI-Key': 'e361b21c15msh61446e17c915eddp12e6e9jsne3c97b143012',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
};
// pulling data from api
async function basketBall() {
  let response = await axios(url);
  
  teams(response.data.data);
}
basketBall();
//create funting and selecting data from api
function teams(arr) {
  console.log(arr)


  arr.forEach((person) => {
    let characterHTML = `
    <div class="slide hidden ">

    <img class="image " src="" alt="">
    <h3>Team: ${person.name}</h3>
    <p>City: ${person.city}</p>
    <p>Division: ${person.division}</p>
    <p>Conference: ${person.conference}</p>
   
    </div>
    `;
    nbaTeams.insertAdjacentHTML("beforeend", characterHTML);
  });


    

  //add add class to img tag so that src can be targeted individually
  changeImg = document.querySelectorAll(".image")
 
 
 
  //setting up the first div so that it can be displayed
  changeImg[0].classList.add("team1")
  document.querySelector(".team1").src = "hawks.png";
  firstDiv = document.querySelector(".hidden")
  firstDiv.classList.replace("hidden","visible")

  //continue to add the class on the image tag
  changeImg[1].classList.add("team2")
  changeImg[2].classList.add("team3")
  changeImg[3].classList.add("team4")
  changeImg[4].classList.add("team5")
  changeImg[5].classList.add("team6")
  changeImg[6].classList.add("team7")
  changeImg[7].classList.add("team8")
  changeImg[8].classList.add("team9")
  changeImg[9].classList.add("team10")
  changeImg[10].classList.add("team11")
  changeImg[11].classList.add("team12")
  changeImg[12].classList.add("team13")
  changeImg[13].classList.add("team14")
  changeImg[14].classList.add("team15")
  changeImg[15].classList.add("team16")
  changeImg[16].classList.add("team17")
  changeImg[17].classList.add("team18")
  changeImg[18].classList.add("team19")
  changeImg[19].classList.add("team20")
  changeImg[20].classList.add("team21")
  changeImg[21].classList.add("team22")
  changeImg[23].classList.add("team23")
  changeImg[24].classList.add("team24")
  changeImg[25].classList.add("team25")
  changeImg[26].classList.add("team26")
  changeImg[27].classList.add("team27")
  changeImg[28].classList.add("team28")
  changeImg[29].classList.add("team29")

  // button functionality

    let prevButton = document.querySelector(".prev");
    let nextButton = document.querySelector(".next");
  let slides= document.querySelectorAll(".slide")

    let curSlide = 0;
    let maxSlide = slides.length - 1;

  
  
  
    nextButton.addEventListener("click", function () {
   
      if (curSlide === maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      
      }

      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
      });
    });

 
 
 
    prevButton.addEventListener("click", function () {
      if (curSlide === 0) {
        curSlide = maxSlide;
      } else {
        curSlide--;
      }

      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
      });
    });
  }



























