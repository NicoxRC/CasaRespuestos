import { User } from '../models/User';
import { Request, Response } from 'express';
import { userInterface } from '../types/userInterface';

export = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user, password } = req.query;
    const users: userInterface[] = await User.findAll();
    if (users[0].user !== user || users[0].password !== password) {
      throw new Error('Not Found.');
    }
    res.status(200).json(users);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(404).json({ error: error.message })
      : null;
  }
};
