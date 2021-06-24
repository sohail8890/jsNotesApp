showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {

  let addText = document.getElementById('addText');
  let addTitle = document.getElementById('addtitle');
  let notes = localStorage.getItem('notes');
  if (notes === null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let myobj = {
   text : addText.value,
    title : addtitle.value
  }
  notesObj.push(myobj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addText.value = "";
  console.log(notes);
  showNotes();


});

// function to show notes 

function showNotes() {
  let notes = localStorage.getItem('notes');
  if (notes === null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach(function (element, index) {
    html += ` <div class="noteCard card my-2 mx-2" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title"> ${element.title}</h5>
                    <p class="card-text"> Note :- ${element.text}.</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
                  </div>
                </div>`

  });
  let notesElm = document.getElementById('notes');
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else {
    notesElm.innerHTML = `<h3>Nothing to show!! Use above "Add a Note" button to add a note here.</h3> `;
  }

}
// function to Delete a note 

function deleteNote(index) {
  // console.log("im deleting a note", index);

  let notes = localStorage.getItem('notes');
  if (notes === null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();


}

 let search= document.getElementById('searchText');
search.addEventListener('input', function(){

let inputVal = search.value .toLowerCase();
// console.log("input event fired");
let noteCards= document.getElementsByClassName('noteCard');
Array.from(noteCards).forEach(function(element){
  let cardText = element.getElementsByTagName("p")[0].innerText;
  if(cardText.includes(inputVal)){
    element.style.display="block";
  }
  else{
    element.style.display="none";

  }
  // console.log(cardText);



})

})