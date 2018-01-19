const fs = require("fs");


const Fetch_Notes = () => {
  try {
    const notes_string = fs.readFileSync("notes-data.json");
    return JSON.parse(notes_string);
  } catch (e) {
    // console.log(e);
    return [];
  }
}
const Save_Notes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

const Add_Note = (title, body) => {
  const note = {
    title: title,
    body: body,
  }
  const notes = Fetch_Notes();
  if (notes.every(n => n.title != note.title)) {
    notes.push(note);
    Save_Notes(notes);
    return true;
  } else {
    return false;
  }
}

const List_Notes = () => {
  const notes = Fetch_Notes();
  console.log("Title                    Body");
  for (i in notes) {
    let space = " ".repeat(25-notes[i].title.length);
    console.log(notes[i].title + space + notes[i].body);
  }
}

const Read_Note = (title) => {
  const notes = Fetch_Notes();
  let i = notes.findIndex(note => note.title === title);
  if (i === -1) {
    console.log("A note with this title does not exist.");
  } else {
    let space = " ".repeat(25-notes[i].title.length);
    console.log(notes[i].title + space + notes[i].body);
  }
}

const Remove_Note = (title) => {
  const notes = Fetch_Notes();
  let i = notes.findIndex(note => note.title === title);
  if (i === -1) {
    console.log("A note with this title does not exist.");
  } else {
    notes.splice(i, 1);
    Save_Notes(notes);
    console.log("Note removed.");
  }
}





module.exports = {
  Add_Note,
  List_Notes,
  Read_Note,
  Remove_Note
}

































//
