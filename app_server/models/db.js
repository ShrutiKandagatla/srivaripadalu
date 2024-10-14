const mongoose = require('mongoose');

// MongoDB connection string (replace <username>, <password>, <database> with actual details)
const dbURI = 'mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Increase timeout
      socketTimeoutMS: 45000, // Increase socket timeout
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit the app on error
  }
};

// Query Schema
const querySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Query = mongoose.model('Query', querySchema);

module.exports = { connectDB, Query };
