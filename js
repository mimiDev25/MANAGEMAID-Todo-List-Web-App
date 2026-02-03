//Constants
const indexButtons = document.getElementById("listswitch_buttons");
//NameList Field
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const newListName = document.getElementById("listname");
const includeDate = document.getElementById("include_date");
const includeTime = document.getElementById("include_time");
const includeDetails = document.getElementById("include_details");
//ListBody
const listField = document.getElementById("list1");
const listHeader = document.getElementById("listheader");
const listBody = document.getElementById("listbody");
const listBody2 = document.getElementById("listbody2");
const listFooter = document.getElementById("listfooter");
//Side Menu
const hamburgerMenu = document.getElementById("aside");

let currentList = {
  name: "",
  columns: [],
  items: []
};

newListName.addEventListener("input", () => {
  currentList.name = newListName.value;
  renderList();
});
  checkboxes.forEach(box => {
    box.addEventListener("change", () =>{
      updateColumns();
      renderList();
    });
  });
function updateColumns(){
  
}  
function renderList(){
  
}
