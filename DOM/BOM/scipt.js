//Example 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });

//Example 2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

//Example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let content = document.getElementById("coffeType");
  content.textContent = "Espresso";
  content.style.padding = "5px";
  content.style.backgroundColor = "brown";
});

//Example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Egg";
  document.getElementById("shoppingList").appendChild(newItem);
});

//Example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let Itemlist = document.getElementById("tasklist");
    Itemlist.lastElementChild.remove();
  });

//Example 6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("clicked");
  });

//Example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target) {
    alert("you selected " + event.target.textContent);
  }
});

//Example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent = feedback;
  });

//Example 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

//Example 10

document
  .getElementById("togglehighlights")
  .addEventListener("click", function () {
    let description = document.getElementById("discriptionText");
    description.classList.toggle("highlight");
  });
