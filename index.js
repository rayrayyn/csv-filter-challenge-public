const fs = require("fs");
const inquirer = require("inquirer");

const main = async () => {
  const { file_path } = await inquirer.prompt([
    {
      type: "input",
      name: "file_path",
      message:
        "Please drag and drop your CSV file into the command line application",
      validate(value) {
        if (value.includes(".csv")) {
          return true;
        }

        return "Please provide a CSV file";
      },
    },
  ]);
  const csvData = fs.readFileSync(file_path, "utf8").split("\r\n");
  const csvFields = csvData[0].split(",");

  const { field_filter, value_filter } = await inquirer.prompt([
    {
      type: "list",
      name: "field_filter",
      message: "What field would you like to filter by?",
      choices: csvFields,
    },
    {
      type: "input",
      name: "value_filter",
      message: "What value would you like to filter by?",
      validate(value) {
        if (value) {
          return true;
        }

        return "Please provide a value to filter by";
      },
    },
  ]);
  const selectedIndex = csvFields.indexOf(field_filter);

  csvData.shift();
  const filteredData = csvData
    .filter((item) =>
      item.split(",")[selectedIndex].toLowerCase().includes(value_filter)
    )
    .join("\n");
  const finalData = csvFields + "\n" + filteredData;

  if (!filteredData) {
    return console.log("No data was filtered with the provided value.");
  }

  const { file_name } = await inquirer.prompt([
    {
      type: "input",
      name: "file_name",
      message: "Please provide a name for the newly created CSV file",
      validate(value) {
        if (value) {
          return true;
        }

        return "Please provide a name for the CSV file";
      },
    },
  ]);
  fs.writeFileSync(`${file_name}.csv`, finalData, "utf-8");
  return console.log("File created!");
};

main();
