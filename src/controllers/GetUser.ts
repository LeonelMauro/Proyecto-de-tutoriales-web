import { Request, Response } from "express";
import { User } from "../database/entities/User";

class GetUser {
    async handle(req: Request, res: Response) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            console.error("Error retrieving users:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export { GetUser };
