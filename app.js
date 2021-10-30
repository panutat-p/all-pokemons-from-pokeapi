const BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const section = document.querySelector("#section");

for (let i = 1; i <= 898; i += 1) {
  // pokemon div (inline-block)
  const div = document.createElement("div");

  // pokemon img
  const img = document.createElement("img");
  img.src = `${BASE_URL}${i}.png`;

  // pokemon number label
  const label = document.createElement("span");
  label.innerText = `#${i}`;

  div.appendChild(img);
  div.appendChild(label);
  section.appendChild(div);
}
