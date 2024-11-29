export default function Menu(doc) {
  const contentDiv = doc.getElementById("content");

  const titleDiv = doc.createElement("section");
  titleDiv.classList.add("title");

  const mainTitle = doc.createElement("h1");
  mainTitle.innerText = "Our menu";

  titleDiv.appendChild(mainTitle);
  contentDiv.appendChild(titleDiv);

  const textDiv = doc.createElement("section");
  textDiv.classList.add("text");

  const introParagraph = doc.createElement("p");
  introParagraph.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, atque aliquam dolorem debitis dolores soluta quod, perferendis dignissimos expedita esse quia eligendi voluptate ab quisquam. Velit autem nam perferendis placeat!";
  textDiv.appendChild(introParagraph);

  const menuList = doc.createElement("ul");
  const menuItem1 = doc.createElement("li");
  menuItem1.innerText = "Traditionnal tacos";
  menuList.appendChild(menuItem1);

  const menuItem2 = doc.createElement("li");
  menuItem2.innerText = "Veggie tacos";
  menuList.appendChild(menuItem2);

  const menuItem3 = doc.createElement("li");
  menuItem3.innerText = "Beef tacos";
  menuList.appendChild(menuItem3);

  const menuItem4 = doc.createElement("li");
  menuItem4.innerText = "Chicken tacos";
  menuList.appendChild(menuItem4);

  const menuItem5 = doc.createElement("li");
  menuItem5.innerText = "Pork tacos";
  menuList.appendChild(menuItem5);

  textDiv.appendChild(menuList);
  contentDiv.appendChild(textDiv);
}
