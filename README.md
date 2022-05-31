# csv-filter-challenge-public

# Instructions

1. Click "Use this template" to create a copy of this repository in your personal github account.
1. Using technology of your choice, complete assignment listed below.
1. Update the README in your new repo with:
   - a `How-To` section containing any instructions needed to execute your program.
   - an `Assumptions` section containing documentation on any assumptions made while interpreting the requirements.
1. Send an email to Scoir (andrew@scoir.com) with a link to your newly created repo containing the completed exercise (preferably no later than one day before your interview).

## Expectations

1. This exercise is meant to drive a conversation.
1. Please invest only enough time needed to demonstrate your approach to problem solving, code design, etc.
1. Within reason, treat your solution as if it would become a production system.

## Assignment

Create a command line application that parses a CSV file and filters the data per user input.

The CSV will contain three fields: `first_name`, `last_name`, and `dob`. The `dob` field will be a date in YYYYMMDD format.

The user should be prompted to filter by `first_name`, `last_name`, or birth year. The application should then accept a name or year and return all records that match the value for the provided filter.

Example input:

```
first_name,last_name,dob
Bobby,Tables,19700101
Ken,Thompson,19430204
Rob,Pike,19560101
Robert,Griesemer,19640609
```

## How-To

In order to run the application, [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) must be installed.

```
# Clone the repository
git clone https://github.com/rayrayyn/csv-filter-challenge-public

# Go into the repository
cd csv-filter-challenge-public

# Install the dependencies
npm install

# Start the Application
npm start

# Follow the instructions as directed by the command line application
```

## Assumptions

1. Drag and drop for getting the path of the csv file to be read
1. Dynamic approach for fields rather than hardcoding it
1. Filter is not case sensitive
1. Newly filtered CSV file will be created in the same folder the application is in
1. If filter does not match, display message rather than creating a new CSV file

## Improvements/Future Action Items

1. Switch to Typescript
1. Add error handling (if a non-existant csv file is provided)
1. Add better validation (if the user names the output file the same as the input file)
1. Move strings/constants to a different file
1. Possibly test cases for the command line application
1. Compile into an executable or turn into a GUI
