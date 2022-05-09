const { Post } = require('../models');

const postData = [
    {
        title: "Lorem Ipsum!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper tortor tempor cursus bibendum. Pellentesque tincidunt euismod mattis. Phasellus mollis ultrices pretium. Duis velit erat, malesuada sed semper sit amet, sagittis sit amet diam.",
        user_id: 3
    },
    {
        title: "Phasellus quis blandit elit!",
        post_content: "Phasellus quis blandit elit, vitae mollis erat. Aliquam porttitor eu arcu a condimentum. Vivamus blandit nisi vel viverra gravida. Suspendisse eleifend convallis congue. Pellentesque imperdiet, massa at suscipit tristique, ante mi porta velit, vel cursus diam nunc et est.",
        user_id: 1
    },
    {
        title: "Vivamus sollicitudin!",
        post_content: "Vivamus sollicitudin placerat leo et tempor. Mauris ligula est, porttitor et commodo sed, convallis in dolor. Duis pharetra tempus purus, ac mollis ante euismod vel. Mauris interdum magna eget lacus vestibulum, et iaculis neque luctus. Sed quis sodales augue. Nulla facilisi.",
        user_id: 2

    },
    {
        title: "Morbi porta lectus!",
        post_content: "Morbi porta lectus sed lorem suscipit luctus. Maecenas ac tempus quam, eu dapibus purus. Cras blandit ultricies justo, non malesuada urna congue vitae. Vivamus euismod elit id odio tristique condimentum. Sed est mi, vestibulum in interdum vitae, tincidunt vel diam.",
        user_id: 5
    },
    {
        title: "Phasellus volutpat!",
        post_content: "Phasellus volutpat vitae sem vel euismod. Donec id sem a eros pharetra commodo. Aliquam pretium malesuada neque, et iaculis velit aliquam aliquam. Mauris ullamcorper mollis sollicitudin. Vestibulum egestas, quam id vulputate eleifend, enim velit aliquam mi, vel facilisis lorem justo vitae massa. Fusce lorem elit, suscipit vitae nisl vitae, scelerisque condimentum metus.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;