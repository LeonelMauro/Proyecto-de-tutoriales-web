import { Request, Response } from "express";
import { User } from "../database/entities/User";

class ConfigUser{
    async handle(req: Request , res: Response){
        const {password} = req.body;
        try {
            const user = await User.findOne({where:{password}});
            return res.render("autentic", {
                user: user
              });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
};
export { ConfigUser};