export default function Contact(doc) {
  const contentDiv = doc.getElementById("content");

  const titleDiv = doc.createElement("section");
  titleDiv.classList.add("title");
  titleDiv.classList.add("contact");

  const mainTitle = doc.createElement("h1");
  mainTitle.innerText = "Contact";

  titleDiv.appendChild(mainTitle);
  contentDiv.appendChild(titleDiv);

  const textDiv = doc.createElement("section");
  textDiv.classList.add("text");

  const textParagraph1 = doc.createElement("p");
  textParagraph1.innerText = "If you want our famous taco's recipe, we unfortunately can't help you.";
  const textParagraph2 = doc.createElement("p");
  textParagraph2.innerText = "But for any other request, feel free to contact us by filling this form!";

  textDiv.appendChild(textParagraph1);
  textDiv.appendChild(textParagraph2);

  const form = doc.createElement("form");

  const formDiv1 = doc.createElement("div");
  const firstnameLabel = doc.createElement("label");
  firstnameLabel.setAttribute("for", "firstname");
  firstnameLabel.innerText = "Firstname:";
  const firstnameInput = doc.createElement("input");
  firstnameInput.setAttribute("type", "text");
  firstnameInput.setAttribute("name", "firstname");
  firstnameInput.setAttribute("id", "firstname");
  formDiv1.appendChild(firstnameLabel);
  formDiv1.appendChild(firstnameInput);
  form.appendChild(formDiv1);

  const formDiv2 = doc.createElement("div");
  const lastnameLabel = doc.createElement("label");
  lastnameLabel.setAttribute("for", "lastname");
  lastnameLabel.innerText = "Lastname:";
  const lastnameInput = doc.createElement("input");
  lastnameInput.setAttribute("type", "text");
  lastnameInput.setAttribute("name", "lastname");
  lastnameInput.setAttribute("id", "lastname");
  formDiv2.appendChild(lastnameLabel);
  formDiv2.appendChild(lastnameInput);
  form.appendChild(formDiv2);

  const formDiv3 = doc.createElement("div");
  const emailLabel = doc.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.innerText = "Email adress:";
  const emailInput = doc.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("id", "email");
  formDiv3.appendChild(emailLabel);
  formDiv3.appendChild(emailInput);
  form.appendChild(formDiv3);

  const formDiv4 = doc.createElement("div");
  const messageLabel = doc.createElement("label");
  messageLabel.setAttribute("for", "message");
  messageLabel.innerText = "Message:";
  const textArea = doc.createElement("textarea");
  textArea.setAttribute("rows", "5");
  textArea.setAttribute("name", "message");
  textArea.setAttribute("id", "message");
  formDiv4.appendChild(messageLabel);
  formDiv4.appendChild(textArea);
  form.appendChild(formDiv4);

  const sendButton = doc.createElement("button");
  sendButton.setAttribute("type", "button");
  sendButton.innerText = "Send";
  form.appendChild(sendButton);

  textDiv.appendChild(form);
  contentDiv.appendChild(textDiv);
}
