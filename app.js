const argv = require("yargs").argv;
const notes = require("./notes.js");


const command = argv._[0]
// Add gives the title of a new note a length <= 20
if (command === "add") {
  let title = argv.title.substring(0, 20);
  let body = argv.body;
  const is_duplicate = notes.Add_Note(title, body);
  if (is_duplicate === true) {
    console.log("Note added.");
  } else {
    console.log("This is a duplicate.");
  }
  console.log();
}
else if (command === "remove") {
  const title = argv.title;
  console.log("Remove function choosen.");
  notes.Remove_Note(title);
  console.log();
}
else if (command === "list") {
  console.log("List function choosen.");
  notes.List_Notes();
  console.log();
}
else if (command === "read") {
  const title = argv.title;
  console.log("Read function choosen.");
  notes.Read_Note(title);
  console.log();
}































//
