# SnippetStash

A code snippet and boilerplate library for new coders
https://snippet-stash.herokuapp.com/

**SnippetStash**
-To provide a database for coders to find communal code snippets and create/save their own library of snippets for future use.
-a user can create an account and login in order to store perosal snippets of code in addition to making comments about their code.
-if a user chooses to login onto page as a guest they may look at code that has been published on the public page

##Instructions

**App Setup**

1. Create a repository in Github  called SnippetStash and clone this repository onto your computer. 

2. Initialze a package.json file by running npm init from command line. The package.json file is required for installing third party npm packages and saving their version numbers.

3. Install npm packages needed: express, bodyParser, express-session, and passport. Make sure you read through appropriate npm documentaion so that you install necessary and useful npms.

4. Create a server.js file

5. Install the following npm packages:
    -bodyParser: npm install body-parser
    -express-session: npm i express-session
    -passport.js : npm i passport
    -MySQL : npm install mysql

6. Require the following npm packages inside of the server.js file
    -express
    -body-parser
    -express-session
    -passport 

**Database Setup**

1. In the SnippetStash directory create a file named schema.sql. Write SQL queries this file that do the following:
    -DROP DATABASE IF EXISTS snippetstash;
    -CREATE DATABASE snippetstash;
    -USE snippetstash;

2. Create a seeds.sql file, write insert queries to populate the new and existing user tables in addition to snippet categories table. 
*** Use sequelize to create table for Data set information for both user information and snippet categories

3. Run the schema.sql and seeds.sql files into the  mysql server from the command line

4. Run above SQL files  
    -Start MySQL command line tool and login: mysql -u root -p
        
    -With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the   
    queries in it -- in other words, you'll be creating your database.

    -Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.

    -Close out of the MySQL command line tool: exit.

**Configuration Setup**

1. Navigate into your SnippetStash directory, create a folder named config.

2. Create a config.json which will hold information regarding application configuration. A isAuthenticated.js file is a middleware for restricting routes a users is not allowed to visit if not logged in.
Finally a passport.js file. Inside the passport.js file, require passport and passport-local dependencies in addition to requiring our models: var db = require("../models");

Export the configured passport in module.exports = passport;

***Create MVC (Model, View, Controller) Formatted Application
In MVC everything has its own place so you can catch up on projects easier and find snippets of code when debugging or emproving a page. It also makes the application efficient and secure since only certain elements can do certain things. For example, only Models talk to the database, and only Views contain HTML markup and so forth.***

**Model Setup**

Inside SnippetStash directory, create a folder named models.
    -In models, make the following files:
        -category.js
        -comment.js
        -index.js
        -metadata.js
        -snippet.js
        -user.js

        * In these files create the code needed to call ORM functions category, comment,snippet and user data specific input for the 
        ORM. Export at the end of the files. 

**Controller Setup**

Navigate into your routes file.

In the **categories-api-routes.js** file this file should require our models: *var db = require("../models");*
This file should include two routes:
-display all snippet categories, (a GET Route to *"/api/categories"*)
-display one snippet category by its Id, (a GET Route to *"/api/categories/:CategoryId"*)

Next, in the **html-routes.js** this file should include 4 routes:
- display the home page, (a GET Route to *"/"*) 
- display the login page,(a GET Route to *"/login"* )
-to display the public page(a Get Route to *"/public"*) 
--redirects a non-member(one without user authentication) to the signup page to signup, (a GET Route to *"/members*")  

Next, in the **snippets-api-routes.js** this file should require our models: *var db = require("../models");* and it will contain all routes for:
 -creating a new snippet, ( a POST Route to *"/api/snippets"*)
 -retrievingall snippets, ( a GET Route to */api/snippets"*)
 -deleting a snippet, ( a DELETE Route to "*/api/snippets/delete/:id"*)
 -returning snippets of a specific category, (a GET Route to *"/api/snippets/:CategoryId"*)
 -Filtered member view by category, ( a GET Route to *"/api/user/snippets/:CategoryId/"* )
 -route to get a member,( a GET Route to *"/api/user"*)

The **users-api-routes.js** file should require our models: *var db = require("../models");* It will also include routes 
- GET all users *"/api/users"*
- GET a specific user *"api/users/:id"*
- DELETE a specific user *"/api/Users/:id"*

Finally the **api-routes.js** will require our models and passport.js. This file will use both POST and GET Routes.

POST Routes
- Used to handle incoming current member login information *"/api/login"*

-Used to handle incoming non-member signup Informations *"/api/signup"*

GET
-Route for logging out user *"/logout"*
- Route for retrieving user data  to be used on client side *"/api/user_data"*


**View Setup**
Inside SnippetStash directory, create a folder named **public**.
 Create the following files inside the public folder. These files will house the html for your project
    -public
        -login.html
        -members.html
        -public.html
        -signup.html

**Directory Structure**

 All recommended files and directories from the steps above should be organized so it matches the following:

SnippetStash
    -.gitignore  
    -models
        -category.js
        -comment.js
        -index.js
        -metadata.js
        -snippet.js
        -user.js
    -public
        -login.html
        -members.html
        -public.html
        -signup.html
      -CSS
      -Images
      -js
      -vendor
    -routes (GET and POST routes for adding retrieving new data)
        -api-routes.js
        -categories-api-routes.js
        -html-routes.js
        -snippets-api-routes.js
        -users-api-routes.js
    -node_modules
    -package.json
    -schema.sql
    -seeds.sql
    -server.js
