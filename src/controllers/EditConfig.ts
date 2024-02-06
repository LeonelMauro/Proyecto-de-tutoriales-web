import { Request, Response } from "express";
import { User } from "../database/entities/User";

class EditConfig{
    async handle(req: Request , res: Response){
        const {id} = req.body;
        try {
            const user = await User.findOne({where:{id}});
            return res.render("edit", {
                user: user
              });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
};
export { EditConfig};