const userController = require('../controllers/userController.js');
const postController = require('../controllers/postController.js');
const commentController = require('../controllers/commentController.js');

const resolvers = {
    Query: {
        users() {
            const users = userController.getUsers();
            return users;
            // Or you could use this code
            // return userController.getUsers().then(users => users).catch(err => err);
        },
        user(_, { id }) {
            const user = userController.getUser(id);
            return user;
        },
        posts() {
            const posts = postController.getPosts();
            return posts;
        },
        post(_, { id }) {
            const post = postController.getPost(id);
            return post;
        },
        comments(_, { postId }) {
            const comments = commentController.getCommentsByPostId(postId);
            return comments;
        }
    },
    Mutation: {
        createUser(_, { input }) {
            const user = userController.createUser(input.name, input.email, input.password);
            return user;
        },
        deleteUser(_, { id }) {
            const isDeleted = userController.deleteUser(id);
            return isDeleted;
        },
        addPost(_, { userId, input }) {
            const post = postController.createPost(input.title, input.body, userId);
            return post;
        },
        deletePost(_, { id }) {
            const isDeleted = postController.deletePost(id);
            return isDeleted;
        },
        addComment(_, { userId, postId, input }) {
            const comment = commentController.createComment(input.body, userId, postId);
            return comment;
        },
        deleteComment(_, { id }) {
            const isDeleted = commentController.deleteComment(id);
            return isDeleted;
        }
    },
    User: {
        posts(user) {
            const posts = postController.getPostsByUserId(user.id);
            return posts;
        }
    },
    Post: {
        author(post) {
            const user = userController.getUser(post.author);
            return user;
        },
        comments(post) {
            const comments = commentController.getCommentsByPostId(post.id);
            return comments;
        }
    },
    Comment: {
        author(comment) {
            const user = userController.getUser(comment.author);
            return user;
        }
    }
};

module.exports = resolvers;