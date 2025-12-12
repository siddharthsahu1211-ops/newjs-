import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Mock database
let users = [
  {
    id: uuidv4(),
    firstName: 'John',
    lastName: 'Doe',
    email: 'johodo@gmail.com',
  },
  {
    id: uuidv4(),
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'sidh@gmail.com',
  },
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET user by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// POST new user
router.post('/', (req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = {
    id: uuidv4(),
    firstName,
    lastName,
    email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE user by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = users.length;
  users = users.filter((u) => u.id !== id);
  if (users.length === initialLength) return res.status(404).send('User not found');
  res.send(`User with id ${id} deleted from database.`);
});

// PATCH (update) user by ID
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;

  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).send('User not found');

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (email) user.email = email;

  res.send(`User with id ${id} has been updated`);
});

export default router;
