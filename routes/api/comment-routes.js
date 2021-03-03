const router = require('express').Router();
const { 
    addComment, 
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

// Post a comment route
router
    .route('/:pizzaId')
    .post(addComment);

// Post a reply/delete a comment route
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// Delete a reply route
router
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);

module.exports = router;