
const yargs = require("yargs");
const argv = yargs
  .command("add", "Adds a new note", {
    title: {
      describe: "Title of note",
      alias: "t",
      demandOption: true
    },
    body: {
      describe: "Body of note",
      alias: "b",
      demandOption: true
    }
  })
  .command("list", "List all notes")
  .help()
  .alias("help", "h")
  .argv;

console.log(argv);
