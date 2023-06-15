const list = document.querySelector(".list");

async function getData() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character?page=3"
  );
  const data = await response.json();
  return data;
}

render();
async function render() {
  const character = await getData();
  list.innerHTML = "";
  character.results.forEach((item) => {
    list.innerHTML += `
    <div class="card">
        <h2>${item.name}</h2>
        <div class="img">
          <img
            src="${item.image}"
            alt=""
          />
        </div>
    </div>
  `;
  });
}
