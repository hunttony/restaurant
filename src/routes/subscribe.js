const express = require('express');
const router = express.Router();
const dbHandler = require('../lib/dbHandler');



router.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send('Email is required');
  }

  try {
    // Read existing subscribers from the database
    const data = await fs.readFile(DB_PATH);
    const subscribers = JSON.parse(data);

    // Add the new subscriber to the array
    subscribers.push({ email });

    // Write the updated subscribers back to the database
    await fs.writeFile(DB_PATH, JSON.stringify(subscribers, null, 2), 'utf8');

    res.status(200).send('Subscription successful');
  } catch (error) {
    console.error('Error subscribing:', error);
    res.status(500).send('Internal Server Error');
  }
});



module.exports = router