// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


// Task 1.0
const mainEl = document.querySelector('main')

// Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)'

// Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

// Task 1.3
mainEl.classList.add('flex-ctr')

// Task 2.0
const topMenuEl = document.getElementById('top-menu')

// Task 2.1
topMenuEl.style.height = '100%'

// Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// Task 2.3
topMenuEl.classList.add('flex-around')

// Task 3.0
menuLinks.forEach(function(link) { // -> create a forEach loop to iterate through each menu item
    const linkEl = document.createElement('a') // -> create an 'a' element
    linkEl.setAttribute('href', link.href) // -> add an href attribute with the href value of the link object
    linkEl.innerText = link.text // -> set element's content to the value of the text property
    // console.log(link.text)
    topMenuEl.appendChild(linkEl) // -> append new element to topMenuEl
})
