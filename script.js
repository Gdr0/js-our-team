// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
const container = document.getElementById("container");

const team = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
  },
  {
    nome: "Angela Carrol",
    ruolo: "Chief Editor",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
  },
];

console.log(team);

for (let i = 0; i < team.length; i++) {
  const card = createMyElement("div", "card");
  const name = createMyElement("h1", "nome");
  const role = createMyElement("h3", "ruolo");
  container.append(card);
  card.append(name);
  card.append(role);
  let teamI = team[i];
  let teamNome = teamI.nome;
  name.append(teamNome);
  let teamRuolo = teamI.ruolo;
  role.append(teamRuolo);
  console.log(teamRuolo, teamNome);
}

// funzioni
function createMyElement(tagtype, classname) {
  const currentElement = document.createElement(tagtype);
  currentElement.classList.add(classname);
  return currentElement;
}
