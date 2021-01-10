
## Table of contents
* [General info](#general-info)
* [Built With](#built-with)
* [Installation](#installation)
* [Usage](#usage)
* [Authors](#authors)
* [Contributing](#contributing)

## General info
OMDb Search app is web based application to search movies. 
Used http://www.omdbapi.com/ API to retrieve movies which will display in the app with details of each.
App is mobile/ tab resonsive so you can use in any resolution 

## Built With
Application is developed using, 
* Angular CLI - 10.2.1
* Node: 12.15.0
* SCSS
* Bootstrap

## Installation

Make sure that you have Node.js v12.15.0 and NPM version 6.13.0 or above installed in your local environment. 

Clone this repo to the desired local directory using

```bash
  git clone --depth=1 https://github.com/ImChamZ/omdb-search-app.git <YOUR_PROJECT_NAME>
```
Navigate into the project folder using

```bash
  cd <YOUR_PROJECT_NAME>
```
Open a new terminal or open the project in a IDE you desired. Install npm package dependencies using(first time only). 

```bash
  npm install
```

Serve the app in the development version using

```bash
  ng serve
```

Go to 'http://localhost:4200' in your browser.
OMDb Search App should up and running. Enjoy searching movies...........

## Usage

* Type title of a movie that you need to search in the search box on the header. 
* Click on 'SEARCH' button which will list down the available result from the API. 
* Once the result is loaded you can view each in details by cliking the 'DETAILS' button.

## Authors

* Chamara Chathuranga

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
