const mongoose = require("mongoose");

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://fedevworks:XNLmdgkTfhK6l6gS@expensecluster.zk09ipr.mongodb.net/',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex:true
      },
      () => {
        console.log('Connected to DB...!');
      })
  } catch (e) {
    // console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;