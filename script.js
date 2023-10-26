// Menu data structure
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// PART 1

// Task 1.0
const mainEl = document.querySelector("main");

// Task 1.1
mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// Task 1.3
mainEl.classList.add("flex-ctr");

// Task 2.0
const topMenuEl = document.getElementById("top-menu");

// Task 2.1
topMenuEl.style.height = "100%";

// Task 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Task 2.3
topMenuEl.classList.add("flex-around");

// Task 3.0
menuLinks.forEach(function (link) {
  // -> create a forEach loop to iterate through each menu item
  const linkEl = document.createElement("a"); // -> create an 'a' element
  linkEl.setAttribute("href", link.href); // -> add an href attribute with the href value of the link object
  linkEl.innerText = link.text; // -> set element's content to the value of the text property
  // console.log(link.text)
  topMenuEl.appendChild(linkEl); // -> append new element to topMenuEl
});

// PART 2

// Task 4.0
const subMenuEl = document.getElementById("sub-menu");

// Task 4.1
subMenuEl.style.height = "100%";

// Task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Task 4.3
subMenuEl.classList.add("flex-around");

// Task 4.4
subMenuEl.style.position = "absolute";

// Task 4.5
subMenuEl.style.top = "0";

// Task 5.1
const topMenuLinks = topMenuEl.querySelectorAll("a");
let showingSubMenu = false;

// Task 5.2
topMenuEl.addEventListener("click", function (event) {
  // -> set up event handler
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return; // -> exit if click is not a menu item
  }
  // -> run this code is menu item is clicked
  console.log(event.target.innerText); // -> log the content of the clicked <a> to verify handler is working
  // Task 5.3
  if (event.target.className === "active") {
    event.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
  // Task 5.4 -> shifting active state to current element
  // New menu item is clicked
  topMenuLinks.forEach(function (linkEl) {
    // console.log(linkEl)
    linkEl.classList.remove("active");
    // console.log(linkEl)
  });

  // Task 5.5
  event.target.classList.add("active");
  // Task 5.6
  const link = event.target; // -> Saving the link in a variable
  let currentLink = menuLinks.find((linkObj) => {
    return linkObj.text.toUpperCase() === link.innerText;
    // console.log(linkObj.text) // -> about
    // console.log(link.innerText) // -> ABOUT
  });
  console.log(currentLink.subLinks);
  //  return link.text === currentLink.innerText
  //   })
  //   console.log('foundLink: ', foundLink)

  // Task 5.7 Updated
  if (currentLink.subLinks) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  if (showingSubMenu) {
    buildSubMenu(currentLink.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
    mainEl.innerHTML = "<h1>About</h1>";
  }

  function buildSubMenu(linksArr) {
    subMenuEl.innerHTML = "";
    for (let linkObj of linksArr) {
      // -> revised with for... of approach
      const subLinkEl = document.createElement("a");
      subLinkEl.setAttribute("href", linkObj.href);
      subLinkEl.innerText = linkObj.text;
      subMenuEl.appendChild(subLinkEl);
    }
  }

  // if (link.innerText !== "ABOUT") {
  // Task 5.8
  // subMenuEl.innerHTML = ""; -> moved to above
  // console.log(currentLink.subLinks)
  // currentLink.subLinks.forEach(function (subLink) { -> moved iteration to above
  //   let subLinkEl = document.createElement("a");
  //   subLinkEl.setAttribute("href", subLink.href);
  //   subLinkEl.innerText = subLink.text;
  //   subMenuEl.appendChild(subLinkEl);
  // console.log(subLinkEl)
  // console.log(subMenuEl)
  // -> Clicked CATALOG, ORDERS, or ACCOUNT
  // showingSubMenu = true;
  // console.log(showingSubMenu)
  // subMenuEl.style.top = "100%"; ->moved to if (showingSubMenu)

  // Task 6.0
  subMenuEl.addEventListener("click", function (subEvent) {
    subEvent.preventDefault();
    if (subEvent.target.tagName !== "A") {
      return;
    }
    console.log(subEvent.target.innerText);

    // Task 6.1 -> reset visual menu on submenu click
    showingSubMenu = false;
    subMenuEl.style.top = "0";

    // Task 6.2
    topMenuLinks.forEach(function (linkEl) {
      // -> repeat same iteration as above
      linkEl.classList.remove("active");
    });

    // Task 6.3
    let pageName = link.innerText;
    // console.log('link inner text', link.innerText)
    mainEl.innerHTML = `<h1>${pageName}</h1>`; // -> string interpolation
  });
});
// console.log(showingSubMenu)
// subMenuEl.style.top = "0"; -> moved to above
// mainEl.innerHTML = "<h1>About</h1>"; -> moved to above
//   return;

// // // Console logs to check work
// console.log("topMenuEl: ", topMenuEl);
// console.log("topMenuLinks: ", topMenuLinks);
// console.log("menuLinks: ", menuLinks);
