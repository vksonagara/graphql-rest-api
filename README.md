# Project Name
GraphQL Rest API

## Description
This is a GraphQL and REST API implementation of simple CRUD operations on Users, Posts and Comments in same server. Application is implemented using NodeJS, MongoDB, Express, Mongoose, Apollo Server, JWT.

## Table of Content
1.  Installation
2.  Usage
3.  Todo List

## Installation
To start the web server you have to installed these programs:

1.  **MongoDB**
Visit the official [documentation](https://docs.mongodb.com/) of the MongoDB for installation guide.
2.  **NodeJS**
Visit the officila [documentation](https://nodejs.org/en/docs/) of the NodeJS for installation guide.
3. **Dependency Package Installation**
When you install the NodeJS, it comes with **NPM**(Node Package Manager) to install dependency packages. Run this command from your terminal in root directory of this project:
```
npm install
```
4. **Run Server**
Run the following command from terminal in root directory of the project to start the web server
```
npm run dev
```
Now you can visit http://localhost/graphql for GraphQL API
and Check out different resource URL for REST API in Usage section of this documetation.

## Usage
1.  **Rest API**

**Users resource URL**:
- *GET /api/users/:userId* => to get a user with given userId (requires authentication)
- *POST /api/users* => to create a new user (for signup)
- *PUT /api/users/:userId* => to edit a user data with given userId (requires authentication and access control)
- *DELETE /api/users/:userId* => to delete a user with given userId (requires authentication and access control)

**Posts resource URL**:
- *GET /api/posts* => to get all posts
- *GET /api/posts/:postId* => to get a post with given postId
- *GET /api/users/:userId/posts* => to get all posts of a user with given userId
- *POST /api/posts/:postId* => to create a post (requires authentication)
- *PUT /api/posts/:postId* => to edit a post with given postId (requires authentication and access control)
- *DELETE /api/posts/:postId* => to delete a post with given postId (requires authentication and access control)

**Comments resource URL**:
- *GET /api/posts/:postId/comments* => to get all comments on a post with given postId
- *POST /api/users/:userId/posts/:postId/comments* => to create a comment on a post by a user with given postId and userId (requires authentication)
- *PUT /api/comments/:commentId* => to edit a comment with given commentId (requires authentication and access control)
- *DELETE /api/comments/:commentId* => to delete a comment with given commentId (requires authentication and access control)

2. **GraphQL API**

**Queries**:
users => to get all users
user(userId) => to get a user with given userId
posts => to get all posts
post(postId) => to get a post with given postId
comments(postId) => to get all comments on a post with given postId

**Mutations**:
createUser(input) => to create a user
deleteUser(userId) => to delete a user with given userId
addPost(userId, input) => to create a post with given userId
deletePost(postId) => to delete a post with given postId
addComment(userId, postId, input) => to create a comment with given userId and postId
deleteComment(commentId) => to delete a comment with given comment id

## Todo List
- [ ] To add access control in REST API
- [ ] To add authentication and access control in GraphQL API
- [ ] To add query filters on Posts resource and Post queries in REST API and GraphQL API respectively.
