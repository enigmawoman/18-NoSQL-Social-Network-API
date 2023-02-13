const listusers = [
    {
        username: "sarahlg",
        email: "slg@hotmail.com"
    },
    {
        username: "DaveWills",
        email: "dw345@mail.com"
    },
    {
        username: "WendyHill",
        email: "wh876@mail.com"
    },
    {
        username: "LewisMatthews",
        email: "matthews0987@hmail.com"
    },
    {
        username: "felix",
        email: "cat678@tmail.com"
    }
]

const listthoughts = [
    {
        thoughtText: "Here's a cool thought...",
        username: "WendyHill",
        reactions: [
            {
                reactionBody: "great thought",
                username: "felix"
            }
        ]
    },
    {
        thoughtText: "What do we think of AI...",
        username: "LewisMatthews",
        reactions: [
            {
                reactionBody: "a step change",
                username: "sarahlg"
            }
        ]
    },{
        thoughtText: "A thought for today...",
        username: "LewisMatthews",
        reactions: [
            {
                reactionBody: "fantastic",
                username: "DaveWills"
            }
        ]
    },{
        thoughtText: "Hello thoughtful world",
        username: "WendyHill",
        reactions: [
            {
                reactionBody: "ghave a great day!",
                username: "felix"
            }
        ]
    },
    {
        thoughtText: "What do we thing of marshmallows?",
        username: "sarahlg",
        reactions: [
            {
                reactionBody: "awesome with hot choc!",
                username: "felix"
            }
        ]
    },
]

module.exports = {listusers, listthoughts}