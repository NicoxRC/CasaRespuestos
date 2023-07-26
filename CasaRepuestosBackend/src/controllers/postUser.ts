import { User } from '../models/User';
import { Request, Response } from 'express';

export = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user, password } = req.body;
    if (!user || !password) throw new Error('Bad Request.');
    const newUser = await User.create({ user, password });
    res.status(202).json(newUser);
  } catch (error) {
    error instanceof Error
      ? res.status(400).json({ error: error.message })
      : null;
  }
};
