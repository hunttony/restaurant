// routes/dbRouter.js

const express = require('express');
const router = express.Router();
const dbHandler = require('../lib/dbHandler');



// Get all menu items
router.get('/menuItems', async (req, res) => {
  try {
    const menuItems = await dbHandler.getAllMenuItems();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new menu item
router.post('/menuItems', async (req, res) => {
  // Extract menu item data from request body
  const menuItemData = req.body;

  try {
    const newMenuItem = await dbHandler.addMenuItem(menuItemData);
    res.status(201).json(newMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a menu item
router.put('/menuItems/:id', async (req, res) => {
  // Extract menu item ID from request parameters
  const menuItemId = req.params.id;
  // Extract updated menu item data from request body
  const updatedMenuItemData = req.body;

  try {
    const updatedMenuItem = await dbHandler.updateMenuItem(menuItemId, updatedMenuItemData);
    res.json(updatedMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a menu item
router.delete('/menuItems/:id', async (req, res) => {
  // Extract menu item ID from request parameters
  const menuItemId = req.params.id;

  try {
    await dbHandler.deleteMenuItem(menuItemId);
    res.json({ message: 'Menu item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
