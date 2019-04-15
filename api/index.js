const router = require('express').Router();
const userHandler = require('./userHandler.js');
const postHandler = require('./postHandler.js');
const commentHandler = require('./commentHandler.js');
const authMiddleware = require('../auth/authenticate.js');


/**
 * Users resource router
 */
router.get('/users/:userId', authMiddleware.forLoggedInUsers, userHandler.getUserWithId);
router.get('/users', authMiddleware.forLoggedInUsers, userHandler.getAllUsers);
router.post('/users', userHandler.createUser);
router.put('/users/:userId', authMiddleware.forLoggedInUsers, userHandler.updateUserWithId);
router.delete('/users/:userId', authMiddleware.forLoggedInUsers, userHandler.deleteUserWithId);


/**
 * Posts resource router
 */
router.get('/posts', postHandler.getAllPosts);
router.get('/users/:userId/posts', postHandler.getAllPostsByUserId);
router.post('/users/:userId/posts', authMiddleware.forLoggedInUsers, postHandler.createPostByUserId);
router.put('/posts/:postId', authMiddleware.forLoggedInUsers, postHandler.updatePostByPostId);
router.delete('/posts/:postId', authMiddleware.forLoggedInUsers, postHandler.deletePostByPostId);

/**
 * Comments resource router
 */
router.get('/posts/:postId/comments', commentHandler.getAllCommentsByPostId);
router.post('/users/:userId/posts/:postId/comments', authMiddleware.forLoggedInUsers, commentHandler.createCommentByPostAndUserId);
router.put('/comments/:commentId', authMiddleware.forLoggedInUsers, commentHandler.updateCommentByCommentId);
router.delete('/comments/:commentId', authMiddleware.forLoggedInUsers, commentHandler.deleteCommentByCommentId);

module.exports = router;