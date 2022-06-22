---
template: BlogPost
path: /community-forum-blogpost
type: blog
date: 2022-06-22T10:36:13.673Z
title: Building a Full-Stack Experience from Scratch with Next.js & Express
metaDescription: >-
  Full-stack websites can be complex projects to tackle. Complexity ranges based
  on application, and adding micro-services to your existing architecture can
  prove to be an arduous task on it's own. I recently completed a full-stack
  forum website with Next.js, Apollo GraphQL, Express, PostgreSQL, and Redis in
  order to familiarize myself with each of the moving parts in more detail. This
  blog post will be a brief overview of how the application functions, and how
  the app is architected.
thumbnail: /assets/fullstack-blogpost.jpg
---
## Architect the project

I'm by no means a designer, so the hardest part of any of my projects is always the initial look and feel of the app. Settling on a final design is always a battle with how indecisive I can get as well. For these reasons, I start my planning process with a high-level overview of *what* my app will do and *how* I want it to function. 

#### What are we looking to build?

* A forum website
* Authenticated users can post text messages to the public site
* Authenticated users can vote on posts, similar to liking and disliking
* Users can create accounts and perform the usual user account operations (login, sign up, forgot password/change password, etc.)

#### How are we planning to build it?

At this point in the planning stage, I knew I wanted to use Express as a backend to control my application data, but none of the other aspects were decided on. I knew I needed:

* A RDBMS for relational data between users, posts, and points (like/dislike) and persisting that data
* A way to query the API efficiently
* State management for user authentication and cookies
* A frontend that can consume the data and provide the CRUD operations needed for the back-end architecture

A NoSQL database such as MongoDB or Couchbase won't work well for our implementation as they don't handle relations well out-of-the-box, not as well as a RDBMS would. For this reason, I settled on PostgreSQL as a relational database to pair with GraphQL on the server-side. Because I'm using TypeScript on both the client and the server, I chose TypeORM for mapping relations between the database and application, specifically the [Active Record approach](https://typeorm.io/active-record-data-mapper#what-is-the-active-record-pattern).

I had already decided on a React+TypeScript frontend, but I hadn't specifically picked out any libraries or frameworks to assist with the the user interface and components. For this, I decided to use Next.js (for server-side-rendering some pages) and Chakra UI for their extensive TypeScript support. For running and caching queries on the client side, I stuck with the Apollo Client.

### Building the Server

I prefer to start with the server when it comes to full-stack applications as it allows me to focus on the data and implementation rather than the look and feel of the app, something I often get caught up with. In our case, the server is very simple, setting up the PostgreSQL and Redis functions, and spinning up the GraphQL API for our single endpoint. It's important to note that our server is purely for spinning up the API and connecting with data, there are no views sent from any of the servers endpoints. Next.js handles the client-side routing for switching between "pages". With the server connected to each of its services, we can start defining the schema for our database.

#### Entities

Within the /entities folder of the server/src directory, three entities are defined which will map data to our database tables, as well as setup the tables on the database if needed.

##### User

Maps to the User table in the database and is used for creating users and authenticating them. Passwords are hashed with argon2 algorithm.

* id (PK, auto-increment)
* createdAt, updatedAt (automatically sets to datetime that user is created, updated)
* username (required string)
* email (required string with some validation)
* password (required string hashed on server)
* posts (an array of Post entities)
* votes (an array of Upvote entities)

##### Post

Holds all the posts that the website contains, mapping them to both Users and Upvotes.

* id (PK, auto-increment)
* createdAt, updatedAt (automatically sets to datetime that user is created, updated)
* title (required string)
* text (required string)
* points (required number, defaults to 0)
* voteStatus (number (-1 or 1) or null)
* creatorId (number)
* creator (User)
* upvotes (array of Upvotes)

##### Upvote

Handles all the data associated with a vote on a specific post. Each post holds an array of these to track likes/dislikes.

* value (number)
* userId (PK number)
* user (User who owns the vote)
* postId (number from Post which owns the Upvote)
* post (Post entity that defines CASCADE_ON_DELETE

#### Resolvers

Building out the resolvers will be the last large step of building out the back end, this is what will connect our API operations to the database (through our entities). In a /resolver folder resides a file for each entity we want to perform operations on - User and Post. The Post resolver contains 3 field resolvers, 4 mutations, and 3 queries:

* Query all posts
* Query all posts by user ID
* Query one post by post ID
* Create Post (Mutation)
* Update Post (Mutation)
* Delete Post (Mutation)
* Vote on Post (Mutation)
* Text snippet resolver for returning post preview on list view
* Post creator resolver used to optimize GraphQL queries
* Vote status resolver for updating client cache

The User resolver contains 1 field resolver, 5 mutations, and 2 queries:

* Email field resolver to get the current users email
* Change password mutation
* Forgot password mutation
* Register mutation
* Login mutation
* Logout mutation
* Query current user
* Query all users
