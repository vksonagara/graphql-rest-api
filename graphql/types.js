const typeDefs = `
    type Query {
        users: [User!]
        user(id: String!): User
        posts: [Post]
        post(id: String!): Post
        comments(postId: String!): [Comment]
    }
    type Mutation {
        createUser(input: userInput): User
        deleteUser(id: String!): Boolean
        addPost(userId: String!, input: postInput): Post
        deletePost(id: String!): Boolean
        addComment(userId: String!, postId: String!, input: commentInput): Comment
        deleteComment(id: String): Boolean
    }
    type User {
        _id: String!
        name: String!
        email: String!
        posts: [Post]
    }
    type Post {
        _id: String!
        title: String!
        body: String!
        author: User!
        comments: [Comment]
    }
    type Comment {
        _id: String!
        body: String!
        author: User!
    }
    input userInput {
        name: String!
        email: String!
        password: String!
    }
    input postInput {
        title: String!
        body: String!
    }
    input commentInput {
        body: String!
    }
    schema {
        query: Query
        mutation: Mutation
    }
`;

module.exports = typeDefs;