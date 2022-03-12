const requestURL = 'https://aizeky.github.io/wdd230/Lesson9/json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });

  function displayBusinesses(businesses) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    let add = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let img = document.createElement('img');
    h2.textContent = `${businesses.name}`;
    add.textContent = `${businesses.address}`;
    phone.textContent = `${businesses.phone}`;
    email.textContent = `${businesses.email}`;
    img.setAttribute('src', businesses.imageurl);
    img.setAttribute('alt', `${businesses.name}`
    );

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(add);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(img);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.cards').appendChild(card);
  }

  const listButton = document.querySelector('.list_button')
  listButton.addEventListener('click', () => {
      document.querySelector(".cards").classList.add('list');
  });

  const gridButton = document.querySelector('.grid_button')
  gridButton.addEventListener('click', () => {
      document.querySelector(".cards").classList.remove('list');
  });
