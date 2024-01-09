let result = [];

async function getData() {
  const response = await fetch('data/data.json');
  result = await response.json();

  result.forEach((person) => {
    let article = document.createElement('article');
    article.textContent = `${person.firstName} ${person.lastName}`;

    people.appendChild(article);
  });
}

getData();
