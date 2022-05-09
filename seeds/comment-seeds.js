const { Comment } = require('../models');

// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique neque quisquam ipsam reprehenderit? Minus incidunt natus laboriosam consequuntur quaerat, voluptatum minima id quibusdam exercitationem. Maiores doloribus modi voluptates deleniti quaerat?

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Lorem ipsum dolor sit amet."
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "consectetur adipiscing elit."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Quisque ullamcorper tortor tempor cursus bibendum."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Pellentesque tincidunt euismod mattis."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Phasellus mollis ultrices pretium."
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Duis velit erat, malesuada sed semper sit amet, sagittis sit amet diam."
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Phasellus quis blandit elit, vitae mollis erat."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Aliquam porttitor eu arcu a condimentum."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;