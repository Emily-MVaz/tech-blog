const { User } = require('../models');

const userData = [
    {
        username: "amy-a",
        twitter: "amyazing",
        github: "amyazing",
        email: "amy-a@gmail.com",
        password: "amypassword"
    },
    {
        username: "brett-b",
        twitter: "bretter",
        github: "bretter",
        email: "brett-b@gmail.com",
        password: "brettpassword"
    },
    {
        username: "carlos-c",
        twitter: "carlosss",
        github: "carlosss",
        email: "carlos-c@gmail.com",
        password: "carlospassword"
    },
    {
        username: "dana-d",
        twitter: "danana",
        github: "danana",
        email: "dana-d@gmail.com",
        password: "danapassword"
    },
    {
        username: "emily-e",
        twitter: "emilyyyy",
        github: "emilyyyy",
        email: "emily-e@gmail.com",
        password: "emilypassword"
    },
    {
        username: "freddy-f",
        twitter: "fredd",
        github: "fredd",
        email: "freddy-f@gmail.com",
        password: "freddypassword"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;