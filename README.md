# 18 NoSQL: Social Network API

Back End build | development and deployment of a social media backend API using noSQL database.

---

**Table of Contents:**

* [Description](#description)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Testing](#testing)
* [Using the code](#using-the-code)
* [Social Media API deployment](#the-social-media-api-deployment)
    * [Video Demonstration](#video-demonstration)
* [Usage](#usage)
* [License](#license) 
* [Questions](#questions)

---

## Description

We wanted to build a back end database for a social media site using node.js and express JS to create a RESTful API, MongoDB and Mongoose (noSQL) to manage the databases for users and their posted thoughts and reactions.


## User Story

* AS A social media startup
* I WANT an API for my social network that uses a NoSQL database
* SO THAT my website can handle large amounts of unstructured data


## Acceptance Criteria

* GIVEN a social network API
* WHEN I enter the command to invoke the application
* THEN my server is started and the Mongoose models are synced to the MongoDB database
* WHEN I open API GET routes in Insomnia for users and thoughts
* THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia
* THEN I am able to successfully create, update, and delete users and thoughts in my database
* WHEN I test API POST and DELETE routes in Insomnia
* THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list


Challenges in this project: I had some challenges with the delete routes on the controllers for both users and thoughts, but with some online research and furhter reading i was able to figure them out.
I am pleased with my progress reference setting up and using models. 


## Installation

Start by downloading the code from the repository, then load in VS code, open a terminal and make sure you are in the project folder.
Initialise the code by typing into the terminal:
```bash
npm i
```

## Using the code

To initialise the database you will need to run the following commands in the terminal to seed the database and run up the program:

Seed the database
```bash
npm run seed
```

- To get the database running locally you will need to enter into the terminal:
```bash
npm run start
```
go to the Insomnia or Postman App, where you will able to interact with the database via the back end routes.

Once you have finished using the database, be sure to run *(ctrl+C)* or *(^C)* to close down the session.

The code files are fully commented, to explain the flow and logic of the code, so that others can work on this and expand on it too.


## The social media API deployment.

### Video demonstration.

<a href="https://drive.google.com/file/d/1x2P6sxFXBdC-oGr2S15Fol5XMSfKWaux/view"><b>Link to FULL VERSION video walkthrough</b></a>


https://user-images.githubusercontent.com/112570078/218482184-b3313acb-13b1-4958-b854-0a5c2427924d.mp4



## Usage

This code can be used as an example of how to build a backend database using the technologies layed out in the description, if you have any questions or suggestions, please let  know using the links in the [questions](#questions) section of this README.

## License

NA

## Questions

If you have any questions, reach out [@enigmawoman](https://github.com/enigmawoman)</br>



