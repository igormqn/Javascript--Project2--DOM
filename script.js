document.querySelector('#to-remove').remove();

// Create the elements
let siteHeader = document.createElement('header');
let navigation = document.createElement('div');
let paragraph = document.createElement('p');

// Customize them
siteHeader.textContent = "Welcome";
siteHeader.style.backgroundColor = "#4b9be3";
siteHeader.style.color = "white";
siteHeader.style.padding = "30px";
siteHeader.style.fontSize = "3em";
siteHeader.style.textAlign = "center";

navigation.innerHTML = "<a href='#'>Home</a> / <a href='#'>Another Page</a>";
navigation.style.backgroundColor = "#abd6f1";
navigation.style.padding = "15px";

paragraph.textContent = "This is a paragraph created with JavaScript!";
paragraph.style.margin = "15px";

// Add them to the document
document.body.append(siteHeader, navigation, paragraph);
