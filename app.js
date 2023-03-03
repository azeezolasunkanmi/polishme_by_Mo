const nails = [
  {
    id: 1,
    // img: "img/nail13.jpg",
    img: "https://img.freepik.com/premium-photo/acai-bowl-brazilian-cuisine-popular-dish_168892-1861.jpg?size=626&ext=jpg",
    title: "Xmas Rex",
    category: "Acrylic",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/beautiful-woman-s-nails-with-beautiful-french-manicure_186202-8905.jpg?size=338&ext=jpg&ga=GA1.2.2137654147.1617893799&semt=sph",
    title: "Zebra Times",
    category: "Acrylic",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/young-woman-getting-her-nails-done-salon_23-2148976103.jpg?size=626&ext=jpg&ga=GA1.2.2137654147.1617893799&semt=sph",
    title: "Temple Joy",
    category: "Acrylic",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-photo/woman-with-nail-art-promoting-design-luxury-earrings-ring_114579-3704.jpg?size=626&ext=jpg&ga=GA1.2.2137654147.1617893799&semt=sph",
    title: "Blueberry Lines",
    category: "Stick-ON",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 5,
    img: "https://img.freepik.com/free-photo/beautiful-woman-s-nails-with-beautiful-creative-manicure_186202-6917.jpg?size=338&ext=jpg&ga=GA1.2.2137654147.1617893799&semt=sph",
    title: "Sunday Blue",
    category: "Stick-ON",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 6,
    img: "https://img.freepik.com/free-photo/beautiful-women-hands-with-black-manicure-after-spa-procedures-spa-treatment-concept_186202-8901.jpg?size=626&ext=jpg&ga=GA1.1.2137654147.1617893799&semt=sph",
    title: "Acrylic Debs",
    category: "Stick-ON",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 7,
    img: "https://img.freepik.com/free-photo/healthy-beautiful-manicure-blossom-flowers_23-2148766553.jpg?size=626&ext=jpg&ga=GA1.1.2137654147.1617893799&semt=sph",
    title: "Freeby Red",
    category: "Gel-Polish",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 8,
    img: "https://t3.ftcdn.net/jpg/00/75/84/40/240_F_75844097_lkabj2Fru2PnFyC6vYqEXDHYYmNWjs5K.jpg",
    title: "Tricky Treat",
    category: "Gel-Polish",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 9,
    img: "https://img.freepik.com/free-photo/beautiful-woman-s-nails-with-beautiful-french-manicure-art-design_186202-5311.jpg?size=626&ext=jpg&ga=GA1.2.2137654147.1617893799&semt=sph",
    title: "Brownian Gel",
    category: "Gel-Polish",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 10,
    img: "https://t3.ftcdn.net/jpg/00/75/84/40/240_F_75844097_lkabj2Fru2PnFyC6vYqEXDHYYmNWjs5K.jpg",
    title: "Vicky Art",
    category: "Nail-Art",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 11,
    img: "https://img.freepik.com/free-photo/red-bottle-nail-polish_186202-448.jpg?size=626&ext=jpg&ga=GA1.2.2137654147.1617893799&semt=sph",
    title: "Dolly Pee",
    category: "Nail-Art",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 12,
    img: "https://img.freepik.com/free-photo/beautiful-woman-s-nails-with-beautiful-creative-manicure_186202-6918.jpg?size=338&ext=jpg&ga=GA1.1.2137654147.1617893799&semt=sph",
    title: "Pinks",
    category: "Nail-Art",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 13,
    img: "https://img.freepik.com/free-photo/close-up-beauty-nail-art_23-2149249992.jpg?size=338&ext=jpg&ga=GA1.1.2137654147.1617893799&semt=sph",
    title: "Twinkle little toes",
    category: "Nail-Wrap",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 14,
    img: "https://img.freepik.com/free-photo/beautiful-woman-s-nails-with-beautiful-creative-manicure_186202-6918.jpg?size=338&ext=jpg&ga=GA1.1.2137654147.1617893799&semt=sph",
    title: "Acrylic",
    category: "Acrylic",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 15,
    img: "https://img.freepik.com/free-photo/beautiful-woman-s-nails-with-beautiful-french-white-manicure_186202-6106.jpg?size=338&ext=jpg&ga=GA1.1.2137654147.1617893799&semt=sph",
    title: "Stick On",
    category: "Nail-Wrap",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 16,
    img: "https://img.freepik.com/free-photo/beautiful-woman-s-nails-with-beautiful-creative-manicure_186202-6917.jpg?size=338&ext=jpg&ga=GA1.2.2137654147.1617893799&semt=sph",
    title: "french tips",
    category: "Nail-Wrap",
    price: "N80000",
    time: "60 mins",
  },
  {
    id: 17,
    img: "https://img.freepik.com/free-photo/beautiful-woman-s-nails-with-beautiful-creative-manicure_186202-6918.jpg?size=338&ext=jpg&ga=GA1.1.2137654147.1617893799&semt=sph",
    title: "Stick On",
    category: "Nail-Wrap",
    price: "N80000",
    time: "60 mins",
  },
];

// select elements

const navToggle = document.querySelector(".hambuger");
const navContainer = document.querySelector(".links-container");
const nav = document.querySelector(".nav-links");
const upBtn = document.querySelector(".go-up");
const scrollLinks = document.querySelectorAll(".scroll-link");
const btnContainer = document.querySelector(".tab");
const tabsContainer = document.querySelector(".tab-content");
const formOverlay = document.querySelector(".form-overlay");
const closeBtn = document.querySelector(".close-btn");
const bookForm = document.querySelector(".book-form");

// DISPLAY  SERVICE TABS WHEN PAGE LOADS
window.addEventListener("DOMContentLoaded", function () {
  displayTabContents(chooseCategory(nails, "Acrylic"));
  displayTabButtons();
});

// CHOOSE CATEGORY
const chooseCategory = function (arr, category) {
  const cart = arr.filter(item => {
    if (item.category === category) return item;
  });

  return cart;
};

// DISPLAY TAB CONTENTS
function displayTabContents(tabContents) {
  let displayTab = tabContents.map(item => {
    return ` <div>
    <img src="${item.img}" alt="${item.title}"/>
    <h3>${item.title}</h3>
    <p>${item.time}</p>
    <p>${item.price}</p>
    <a class="service-links book-now" href="#">Book Now!</a>
  </div>`;
  });
  displayTab = displayTab.join("");

  tabsContainer.innerHTML = displayTab;
  // SELECT BOOK NOW BUTTONS
  const bookNow = document.querySelectorAll(".book-now");
  // BOOK NOW BUTTONS EVENT LISTENERS
  bookNow.forEach(btn => {
    btn.addEventListener("click", function () {
      formOverlay.classList.add("open-form");
      clearInputs();
    });
  });
}

//  DISPLAY TAB BUTTON CATEGORIES AND ADD EVENT LISTENERS
function displayTabButtons() {
  // get tab button names
  const categories = nails.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, []);
  // create button for each category
  const tabBtns = categories
    .map(category => {
      return `<button type="button" data-id=${category} class="tablinks">${category}</button>`;
    })
    .join("");
  // put buttons in html
  btnContainer.innerHTML = tabBtns;

  // SELECT ALL BUTTONS
  const filterBtns = btnContainer.querySelectorAll(".tablinks");

  // TOGGLE ACTIVE ON BUTTONS
  const btnActive = () => {
    filterBtns.forEach(btn => btn.classList.remove("active"));
  };

  //  ADD EVENT LISTENERS TO BUTTONS
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
      // remove active class from other buttons
      btnActive();
      // add active class
      e.currentTarget.classList.add("active");
      // get btn category
      const category = e.currentTarget.dataset.id;

      // display tab content for selected category
      displayTabContents(chooseCategory(nails, category));
    });
  });
}

// TOGGLE NAV BUTTON
navToggle.addEventListener("click", function (e) {
  navContainer.classList.toggle("show");
});

// FIXED NAVBAR AND BACK TO TOP BUUTON
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    upBtn.classList.add("show-up");
  } else {
    upBtn.classList.remove("show-up");
  }
});

// SMOOTH SCROLL /////////////////////*NEED FIXING//////////////////////////////////////////////////

scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    if (navContainer.classList.contains("show")) {
      navContainer.classList.remove("show");
    }
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = nav.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains("fixed-nav");

    let position = element.offsetTop;
    console.log(position);

    if (fixedNav) {
      position = position - navHeight;
    }

    if (!fixedNav) {
      position = position;
      console.log(position);
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

// BOOK NOW CLOSE BUTTON
closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  formOverlay.classList.remove("open-form");
});

// FORM VALIDATION

const form = document.getElementById("form");
const fname = document.getElementById("fname");
const tel = document.getElementById("tel");
const style = document.getElementById("style");
const date = document.getElementById("date");

let clearInputs = () => {
  fname.value = tel.value = style.value = date.value = "";
};

form.addEventListener("submit", e => {
  formOverlay.classList.remove("open-form");
});
