const fs = require("fs");
const func = require("./common-functions-2.js")

var add = (title, body) => {
  var taskCompleted = func.commonWriteFunction("database.json",title,body);
  if (taskCompleted){
    console.log("Note added");
  } else {
    console.log("Unable to add notes since this is a duplicate")
  }
};

var list = () => {
  var notes = func.commonReadFunction("database.json");
  if(notes.length === 0){
    console.log("Nothing to list. No notes");
  }
  else {
    notes.forEach(function(element) {
      console.log("------");
      console.log(`Title: ${element.title}`);
      console.log(`Body: ${element.body}`);
    });
  }
};

var remove = (title) => {
  var notes = func.commonReadFunction("database.json");
  if(notes.length === 0){
    console.log(`${title} cannot be deleted as there are no notes`);
    return;
  }
  var filteredNotes = notes.filter((element) => element.title !== title);
  if(filteredNotes.length !== notes.length){
    fs.writeFileSync("database.json",JSON.stringify(filteredNotes));
  } else {
    console.log(`${title} not found`);
    return;
  }
  console.log(`${title} has been removed from notes`);
};

var read = (title) => {
  var notes = func.commonReadFunction("database.json");
  if(notes.length === 0){
    console.log(`${title} cannot be read as there are no notes`);
    return;
  }
  var filteredNotes = notes.filter((element) => element.title === title);
  if(filteredNotes.length === 0){
    console.log(`${title} not found`);
    return;
  }
  filteredNotes.forEach(function(element) {
    console.log("------");
    console.log(`Title: ${element.title}`);
    console.log(`Body: ${element.body}`);
  });
};

module.exports = {
  add,
  list,
  remove,
  read
};
