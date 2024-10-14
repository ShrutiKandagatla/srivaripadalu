const { Query } = require('../models/db'); // Import the Query model

exports.addQuery = async (req, res) => {
  const { name, email, message } = req.body; // Extract data from the request body

  try {
    // Create a new query instance with data from the client-side form
    const newQuery = new Query({
      name,
      email,
      message, // Ensure the field is correctly mapped
    });

    // Save the query to MongoDB
    const savedQuery = await newQuery.save();
    
    // Send success response back to the client
    res.status(201).json({
      message: 'Query submitted successfully!',
      query: savedQuery,
    });
  } catch (error) {
    // Handle any errors and send an error response back to the client
    console.error('Error submitting query:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};
