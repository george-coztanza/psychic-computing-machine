const bodyOptions = {
  describe: "Content of note",
  demand: true,
  alias: "b"
};
const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};

const argv = require("yargs")
  .command("add","Add a new note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list","List all notes")
  .command("read","Read a specific note",{
    title: titleOptions
  })
  .command("remove","Remove a note",{
    title: titleOptions
  })
  .help()
  .argv;

const func = require("./common-functions.js");

var input = argv._[0];

switch (input) {
  case "add":
    func.add(argv.title,argv.body);
    break;
  case "list":
    func.list();
    break;
  case "remove":
    func.remove(argv.title);
    break;
  case "read":
    func.read(argv.title);
    break;
  default:
    console.log("Invalid input");
    break;
};
