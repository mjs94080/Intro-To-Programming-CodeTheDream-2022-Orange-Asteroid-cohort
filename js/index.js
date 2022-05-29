let today = new Date();
console.log(today);
let thisYear = today.getFullYear();
console.log(thisYear);

const footer = document.querySelector("footer");
console.log(footer);

let copyright = document.createElement("p");
copyright.innerHTML = `&copy MacKenzie ${thisYear}`; //template literal
footer.appendChild(copyright);
console.log(copyright);

skills = ["HTML", "CSS", "JAVASCRIPT", "AWS CLOUD", "GIT", "AJAX", "JSON"];
console.log(skills);

skillsSection = document.querySelector(".skills");
console.log(skillsSection);

skillsList = skillsSection.querySelector("ul");
console.log(skillsList);

for (i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  console.log(skill);

  skill.innerText = `${skills[i]}`; //template literal
  console.log(skill.innerText);

  skillsList.appendChild(skill);
  console.log(skillsList);
}

const messageForm = document.getElementsByName("leave_message")[0];
console.log(messageForm);
messageForm.addEventListener("submit", (event) => {
  event.preventDefault(); //prevent browser refresh

  var nameForm = event.target.name.value;
  console.log(nameForm);
  var emailForm = event.target.email.value;
  console.log(emailForm);
  var newMessages = event.target.message.value;
  console.log(newMessages);

  const messageSection = document.getElementById("messages");
  console.log(messageSection);

  const messageList = messageSection.querySelector("ul");
  console.log(messageList);

  const newMessage = document.createElement("li");
  console.log(newMessage);

  messageList.appendChild(newMessage);

  /*On the next line, set the inner HTML of your newMessage element with the following information:
  1) <a> element that displays the "name" and links to the "email" (hint: use the mailto: prefix)
  2) <span> element that displays the "message" */
  newMessage.innerHTML = `<a href="mailto:${emailForm}">${nameForm}</a> wrote: <span> ${newMessages}</span>`; //used template literals

  /* Create a new <button> element and store it in a variable named removeButton:
  1) Set the inner text to "remove"
  2) Set the type attribute to "button"
  3) Add an event listener to the removeButton element that handles the "click" event
     3a) Inside the callback function, find the button's parent element using DOM Traversal
        (hint: parentNode property) and store it in a variable named entry
     3b) Remove the entry element from the DOM (hint: remove method)*/
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");

  removeButton.addEventListener("click", (events) => {
    var entry = events.target.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);

  document.getElementsByName("leave_message")[0].reset(); //reset form
});

/*Fetch GitHub Repositories*/

/*Create a new XMLHttpRequest object and store it in a variable named 
 githubRequest.
 Call the open method on your githubRequest object and pass the necessary 
 arguments
 1. method: the method of your request (in this case, "GET")
 2. url: the url of your request (in this case,
 "https://api.github.com/users/{GITHUB_USERNAME}/repos")
 Finally, call the send method on your githubRequest object to actually send 
 the request.
 Save and refresh your browser*/
githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/mjs94080/repos");
githubRequest.send();

/*Handle Response from Server*/

/*Below the last line of code you just wrote, add a "load" event listener 
  on your githubRequest object and pass the necessary arguments
 1. event: the event that is being handled (in this case, "load")
 2. callback: the function that runs when this event occurs
 Inside the callback function you just created, parse the response and store
 it in a variable named repositories
 hint: JSON.parse(this.response)
 Log the value of repositories in the console*/

githubRequest.addEventListener("load", () => {
  const repositories = JSON.parse(githubRequest.response);
  console.log(repositories);

  /*Display Repositories in List*/

  /* Using "DOM Selection", select the #projects section by id and 
  store it in a variable named projectSection.*/
  const projectSection = document.getElementById("projects");

  /*Using "DOM Selection", query the projectSection (instead of the 
  entire document) to find the <ul> element and store it in a variable
  named projectList.*/
  const projectList = projectSection.querySelector("ul");

  /*Create a for loop to iterate over your repositories Array, starting
   at index 0.
   Inside the loop, create a new list item (li) element and store it in a 
   variable named project.
   hint: createElement method*/
  for (let i = 0; i < repositories.length; i++) {
    const project = document.createElement("li");

    /* On the next line, set the inner text of your project variable to
  the current Array element's name property.
  hint: access the Array element using bracket notation*/
    project.innerText = repositories[i].name;

    /*On the next line, append the project element to the projectList element
   hint: appendChild method*/
    projectList.appendChild(project);
  }
});
