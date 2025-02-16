const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://absan639:Abavni25@cluster0.vzw18.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
});
    console.log('Connected to MongoDB');
    const collection = mongoose.connection.db.collection('food_items');
    const foodItems = await collection.find({}).toArray();{

    const collection = mongoose.connection.db.collection('food_Category');
    const foodCategory = await collection.find({}).toArray();
    global.food_items = foodItems;
    global.food_Category = foodCategory;
    }

}
module.exports = mongoDB;
