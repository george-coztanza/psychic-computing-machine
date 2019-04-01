const fs = require("fs");

var commonWriteFunction = (fileName,title,body) => {
  var objectToWrite = {
    title,
    body
  };
  var notes = [];
  notes = commonReadFunction(fileName);
  var duplicateNotes = notes.filter((object) => objectToWrite.title === object.title);
  if(duplicateNotes.length === 0){
    notes.push(objectToWrite)
    fs.writeFileSync(fileName,JSON.stringify(notes));
    return true;
  }
  else {
    return false;
  }
};

var commonReadFunction = (fileName) => {
  var notes = [];
  try {
    notes = JSON.parse(fs.readFileSync(fileName));
  } catch (e) {

  }
  return notes;
};

module.exports = {
  commonWriteFunction,
  commonReadFunction
};
