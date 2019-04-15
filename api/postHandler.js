const postController = require('../controllers/postController.js');

const postHandler = {
    getAllPosts,
    getAllPostsByUserId,
    createPostByUserId,
    updatePostByPostId,
    deletePostByPostId
};

function getAllPosts(req, res) {
    postController.getPosts().then(posts => {
        res.send(posts);
    }).catch(err => {
        res.status(404).send();
    });
}

function getAllPostsByUserId(req, res) {
    const userId = req.params.userId;
    postController.getPostsByUserId(userId).then(posts => {
        res.send(posts);
    }).catch(err => {
        res.status(404).send();
    });
}

function createPostByUserId(req, res) {
    const userId = req.params.userId;
    const { title, body } = req.body;
    postController.createPost(title, body, userId).then(post => {
        res.send(post);
    }).catch(err => {
        res.status(409).send();
    });
}

function updatePostByPostId(req, res) {
    const fields = req.body.fields;
    const { postId } = req.params;
    postController.updatePost(postId, fields).then(post => {
        res.status(204).send();
    }).catch(err => {
        console.log(err);
        res.status(400).send();
    });
}

function deletePostByPostId(req, res) {
    const { postId } = req.params;
    postController.deletePost(postId).then(isDeleted => {
        if(isDeleted)
            res.status(204).send();
        res.status(409).send();
    }).catch(err => {
        res.status(409).send();
    });
}

module.exports = postHandler;