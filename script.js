// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
const container = document.getElementById("container");

const team = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    img: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela Carrol",
    ruolo: "Chief Editor",
    img: "img/angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    img: "img/walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    img: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    img: "img/scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    img: "img/barbara-ramos-graphic-designer.jpg",
  },
];

console.log(team);

for (let i = 0; i < team.length; i++) {
  const card = createMyElement("div", "card");
  const name = createMyElement("h1", "nome");
  const role = createMyElement("h3", "ruolo");
  const pic = createMyElement("img", "pic");
  container.append(card);
  card.append(name);
  card.append(role);
  card.append(pic);
  let teamI = team[i];
  let teamNome = teamI.nome;
  name.append(teamNome);
  let teamRuolo = teamI.ruolo;
  role.append(teamRuolo);
  let teamPic = teamI.img;
  pic.src = teamPic;
  pic.append(teamPic);
  console.log(teamRuolo, teamNome);
}

// funzioni
function createMyElement(tagtype, classname) {
  const currentElement = document.createElement(tagtype);
  currentElement.classList.add(classname);
  return currentElement;
}
