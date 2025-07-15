const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Données en mémoire
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST create new item
app.post('/items', (req, res) => {
  const newItem = {
    id: Date.now(),
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// DELETE an item by ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = items.length;
  items = items.filter(item => item.id !== id);
  const deleted = items.length !== initialLength;

  if (deleted) {
    console.log(`Item supprimé: ${id}`);
    res.status(204).send(); // No Content
  } else {
    console.log(`Item introuvable pour suppression: ${id}`);
    res.status(404).json({ error: "Item non trouvé" });
  }
});

// Test route
app.get('/', (req, res) => {
  res.send('API is running ✅');
});

// Root test route
app.get('/', (req, res) => {
  res.send('API is running ✅');
});

app.listen(port, () => {
  console.log(`🚀 API server running on http://localhost:${port}`);
});
