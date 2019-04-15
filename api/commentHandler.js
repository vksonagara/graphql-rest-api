const commentController = require('../controllers/commentController.js');

const commentHandler = {
    getAllCommentsByPostId,
    createCommentByPostAndUserId,
    updateCommentByCommentId,
    deleteCommentByCommentId
};

function getAllCommentsByPostId(req, res) {
    const { postId } = req.params;
    commentController.getCommentsByPostId(postId).then(comments => {
        res.send(comments);
    }).catch(err => {
        res.status(404).send();
    });
}

function createCommentByPostAndUserId(req, res) {
    const { userId, postId } = req.params;
    const { body } = req.body;
    commentController.createComment(body, userId, postId).then(comment => {
        res.send(comment);
    }).catch(err => {
        res.status(409).send();
    });
}

function updateCommentByCommentId(req, res) {
    const { commentId } = req.params;
    const fields = req.body.fields;
    commentController.updateComment(commentId, fields).then(comment => {
        res.status(204).send();
    }).catch(err => {
        res.status(400).send();
    });
}

function deleteCommentByCommentId(req, res) {
    const { commentId } = req.params;
    commentController.deleteComment(commentId).then(isDeleted => {
        if(isDeleted)
            res.status(204).send();
        res.status(409).send();
    }).catch(err => {
        res.status(409).send();
    });
}

module.exports = commentHandler;