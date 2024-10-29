import { UserModel } from "../model/model";
import bcrypt from "bcrypt";
import z from "zod";

export async function signup(req, res) {

    // check data 
    const signupBody = z.object({
        username: z.string().min(5).max(50),
        email: z.string().min(10).max(500).email(),
        password: z.string().min(8).max(50)
    })

    const parsedData = signupBody.safeParse(req.body)

    if (!parsedData.success) {
        res.json({
            msg: "error while parsing data",
            err: parsedData.error
        })
    }

    const { username, email, password } = req.body

    // hash password
    bcrypt.hash(password, process.env.SALT_ROUNDS, async (err, hashedPassword) => {
        if (err) {
            req.json({
                msg: "error while generating hash",
                error: err
            })
        } else {
            const newUser = await UserModel.create({ username, email, password: hashedPassword })
            if (newUser){
                res.json({
                    msg:"Created New User SuccessFully.",
                    data:newUser
                })
            }else{
                req.json({msg:"Unable to create new User."})
            }

        }
    });
}


export async function login(req,res) {
    const loginBody = z.object({
        username: z.string().min(5).max(50),
        password: z.string().min(8).max(50)
    })

    const parsedData = loginBody.safeParse(req.body)

    if (!parsedData.success) {
        res.json({
            msg: "error while parsing data",
            err: parsedData.error
        })
    }
    const {username,password} = req.body

    const userFound = UserModel.findOne({username})
    if (userFound){
        const match = await bcrypt.compare(password,userFound.password)
        if (match){
            // generate token and send it.
            res.json({
                msg:"Login SuccessFul"
            })
        }else{
            res.json({
                msg:"invalid Creds."
            })
        }
    }else{
        res.json({
            msg:"invalid Creds."
        })
    }

}