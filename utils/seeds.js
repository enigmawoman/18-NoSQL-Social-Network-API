// functions for seeding the database
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {listusers, listthoughts} = require('./data')

connection.on('error', (err) => err);
// connection to the database - 'flatens' existing data in the db ready for re-seeding
connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log("successfully deleted database")

    //inserting many users to the user collection in the db
    const dataUsers = await User.insertMany(listusers);
    console.log(dataUsers)
    console.log("successfully seeded users")
    //inserting many thoughts to the thoughts collection in the db
    const dataThoughts = await Thought.insertMany(listthoughts)
    console.log(dataThoughts)
    console.log("successfully seeded thoughts")
    //for each user in the database, add a thought and a friends(a user from the database)
    for (var i=0; i<dataUsers.length; i++){
        var newUpdate = await User.findOneAndUpdate( 
            {_id:dataUsers[i]._id},
            {$push:{thoughts:dataThoughts[i]._id, friends:dataUsers[i]._id}},
            {runValidators: true, new: true}
        )
        console.log(newUpdate)
    }

    console.info('Seeding complete! 🌱');
    process.exit(0);
})


