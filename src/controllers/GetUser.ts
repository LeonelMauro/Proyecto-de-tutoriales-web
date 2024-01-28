// En GetUser.ts
import { Request, Response } from 'express';
import { User } from '../database/entities/User';

class GetUser {
  async handle(req: Request, res: Response) {
    try {
        
      const users = await User.find();  
      return res.render("users", {
        users: users
      });   
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}

export { GetUser };
