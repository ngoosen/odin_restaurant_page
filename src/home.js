export default function Home(doc) {
  const contentDiv = doc.getElementById("content");

  const titleDiv = doc.createElement("section");
  titleDiv.classList.add("title");

  const mainTitle = doc.createElement("h1");
  mainTitle.innerText = "The best restaurant in town!";

  titleDiv.appendChild(mainTitle);
  contentDiv.appendChild(titleDiv);

  const textDiv = doc.createElement("section");
  textDiv.classList.add("text");

  const textParagraph1 = doc.createElement("p");
  textParagraph1.innerText = "Can you believe how awesome our restaurant is? Cause I can't! I mean look at those tacos, they are absolutely magnificent!";
  const textParagraph2 = doc.createElement("p");
  textParagraph2.innerText = "So watcha waiting for, pal? Come over at 25 Taco Street in TacoTown and have a try at our signature tacos!";

  textDiv.appendChild(textParagraph1);
  textDiv.appendChild(textParagraph2);
  contentDiv.appendChild(textDiv);
}
