// Comment 1 - Originally i structured the code with Data, Cached Elements, Manipulation , function. Than for Task 5.2 i was having and error and spent more thn 6hr only to find out that i had typo in textContent. during this process i did lab 1 & 2 twice upto 5.2 and restructure according to solution.
// Comment 2 - Task 5 & 6 i am not clear what the purpose is or what function suppose do. Having little hard time to understand the pseudo code.


// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  //Task 1.0
  const mainEL = document.querySelector("main");
  //Task 1.1
  mainEL.style.backgroundColor = 'var(--main-bg)';
  //Task 1.2
  mainEL.innerHTML = "<h1>SEI Rocks!</h1>";
  //Task 1.3
  mainEL.classList.add("flex-ctr");
  
  //Task 2.0
  const topMenuEl = document.getElementById("top-menu");
  //Task 2.1
  topMenuEl.style.height = "100%";
  //Task 2.2
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  //Task 2.3
  topMenuEl.classList.add("flex-around");
  
  //Task 3.0
  //Task 3.1
  function addLinks(linkObj){
   const link = document.createElement("a");
   const hrefValue = linkObj.href;
   const linkContent = linkObj.text;
   link.setAttribute("href", hrefValue);
   link.textContent = linkContent;
   topMenuEl.appendChild(link);
  }
  menuLinks.forEach(addLinks);
  console.log(menuLinks);
  
  // Cached Elements
  
  
  //Select Elements
  
    //Task 4
  var subMenuEl = document.getElementById("sub-menu");
  //Task 4.1
  subMenuEl.style.height = "100%";
  //Task 4.2
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  //Task 4.3
  subMenuEl.classList.add("flex-around");
  //Task 4.4
  subMenuEl.style.position = "absolute"
  //Task 4.5
  subMenuEl.style.top = 0;
  
  //Task 5.0
  
  //Task 5.1
  var topMenuLinks = document.querySelectorAll("#top-menu a");
  var showingSubMenu = false;
  
  //Task 5.2
  // topMenuEl.addEventListener('click', function(evt) {
  //   evt.preventDefault();
  //   const link = evt.target;
  //   console.log(link.textContent);
  //   });
  
  topMenuEl.addEventListener('click', function(ev) {
    ev.preventDefault();
    const clickedTarget = ev.target;
    if(clickedTarget.tagName !== "A") return;
    console.log(clickedTarget.textContent); // Spent atleast 6 hours just to find out i was missing t in tex't'Content 
    //Task 5.3
    if (clickedTarget.classList.contains("active")) {
      clickedTarget.classList.remove("active");
      showingSubMenu = false;
      subMenuEl.style.top = 0;
      return;
    }
    //Task 5.4
    topMenuLinks.forEach(function(link){
      link.classList.remove("active");
    });
    //Task 5.5
    clickedTarget.classList.add("active");
  });
  
 
  // topMenuLinks.classList.add("active");
  // console.log(topMenuLinks.classList);
  // showingSubMenu = true;
  // subMenuEl.style.height = "100%";
  // subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  // subMenuEl.classList.add("flex-around");
  // subMenuEl.style.position = "absolute";
  // showingSubMenu = true;
  
  
  // functions