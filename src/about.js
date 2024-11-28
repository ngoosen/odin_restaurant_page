export default function About(doc) {
  const contentDiv = doc.getElementById("content");

  const titleDiv = doc.createElement("section");
  titleDiv.classList.add("title");
  titleDiv.classList.add("about");

  const mainTitle = doc.createElement("h1");
  mainTitle.innerText = "About us";

  titleDiv.appendChild(mainTitle);
  contentDiv.appendChild(titleDiv);

  const textDiv = doc.createElement("section");
  textDiv.classList.add("text");

  const textParagraph1 = doc.createElement("p");
  textParagraph1.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae dolores incidunt, quo modi quisquam minus corporis esse ad nisi illum magnam ducimus voluptate repellat ipsum omnis vel. Sed, voluptas.";
  const textParagraph2 = doc.createElement("p");
  textParagraph2.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quo saepe sunt quidem impedit quis deleniti aut dolorum, cum hic quasi porro, exercitationem aliquid ad.";
  const textParagraph3 = doc.createElement("p");
  textParagraph3.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae cumque quasi non sed rerum in totam, voluptate nisi deleniti labore.";

  textDiv.appendChild(textParagraph1);
  textDiv.appendChild(textParagraph2);
  contentDiv.appendChild(textDiv);
}
