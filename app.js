const BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const section = document.querySelector("#section");

for (let i = 1; i <= 898; i += 1) {
  // pokemon div
  const div = document.createElement('div');

  // add pokemon class to pokemon div
  div.classList.add('pokemon')

  // pokemon img
  const img = document.createElement("img");
  img.src = `${BASE_URL}${i}.png`;

  section.appendChild(div);
  div.appendChild(img);
}
