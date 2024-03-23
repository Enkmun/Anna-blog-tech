# Anna-blog-tech

## Description
Tech Blog is a CMS-style blog site where developers can publish articles, blog posts, and share their thoughts and opinions on various technical topics. Built completely from scratch, Tech Blog follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents

1. Acceptance Criteria
2. Installation
3. Usage
4. Credits
5. License
6. User Story
## User Story
md

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
Acceptance Criteria
md
## Acceptance Criteria
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
...


## Installation
To run Tech Blog locally, follow these steps:

* Clone this repository to your local machine.
* Navigate to the root directory of the project in your terminal.
* Run npm install to install all dependencies.
* Set up your MySQL database by running the provided schema and seed files.
* Configure the .env file with your MySQL username, password, and database name.
* Run npm start to start the server.
## Usage
Once the server is running, you can access the Tech Blog site through your web browser. Here are some key features:

* Homepage: Presents existing blog posts, navigation links, and the option to log in.
* Authentication: Users can sign up, sign in, or log out to access different functionalities.
* Dashboard: Logged-in users can access their dashboard to view existing posts, create new posts, and manage their posts.
* Blog Posts: Users can click on existing blog posts to view details, leave comments, or create new comments.
* Idle Timeout: Users are prompted to log in again if they remain idle on the site for a set time.
## Credits
Tech Blog was created by Enkhnaran Anna.

License
This project is licensed under the MIT License.





