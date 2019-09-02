import { User } from "../models/user.model";
import { users } from "../db/data";
import { genToken } from "../helpers/token.helper";

const signin = (req, res) => {
    const token = genToken(req.body.email);
    
    return res.status(200).send({
        "status": 200,
        "message": "User is successfully logged in",
        "data": {
            "token" : token,
        }
    });
};

const signup = (req, res) => {
    const user = new User(users.length + 1, req.body.email, req.body.first_name, req.body.last_name, req.body.password, req.body.address, req.body.bio, req.body.occupation, req.body.expertise );
    
    users.push(user);

    const token = genToken(user.email);

    return res.status(201).send({
        "status" : 201,
        "message": "User created successfully",
        "data" : {
            "token" : token,
            "message": "User created successfully",
        }
    });
};

export const updateUserToMentor = (req, res) => {
    
    if (req.user.role === "admin") {
        const index = users.findIndex(u => u.userId.toString() === req.params.userId);

        if(index > -1){
            users[index].role = "mentor";

            return res.status(200).send({
                "status": 200,
                "message":"User account changed to mentor.",
            });
        }
        
        return res.status(404).send({
            "status": 404,
            "message": "No record found.",
        });
    }else{
        return res.status(404).send({
            "status": 404,
            "message": "You are not authorized to perform this action only admin is allowed to access it",
        });
    }
};

export const getAllMentors = (req, res) => {
    const mentors = users.filter(u => u.role == "mentor");
    return res.status(200).send({
        "status": 200,
        "data": mentors,
    });
}

export const getMentorById = (req, res) => {
    const mentor = users.find(u => u.userId == req.paramas.mentorId);
    return res.status(200).send({
        "status": 200,
        "data": mentor,
    });
}

export default { signin, signup }