import { User } from "../models/user.model";
import { Session } from "../models/session.model";
import { Review } from "../models/review.model";
import { users, sessions, reviews } from "../db/data";
import { genToken } from "../helpers/token.helper";

export const signin = (req, res) => {
    const token = genToken(req.body.email);
    
    return res.status(200).send({
        "status": 200,
        "message": "User is successfully logged in",
        "data": {
            "token" : token,
        }
    });
};

export const signup = (req, res) => {
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
    
    if (req.user.role === "Admin") {
        const index = users.findIndex(u => u.userId == req.params.userId);

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

export const createSession = (req, res) => {
    const session = new Session(sessions.length + 1, req.body.mentorId, req.user.userId, req.body.questions, req.user.email);
    sessions.push(session);

    return res.status(200).send({
        "status": 200,
        "data": session
    });
}

export const acceptSession = (req, res) => {
    const index = sessions.findIndex(u => u.userId == req.params.sessionId);
    sessions[index].status = "accepted";
    return res.status(200).send({
        "status": 200,
        "data": session
    });
}

export const rejectSession = (req, res) => {
    const index = sessions.findIndex(u => u.userId == req.params.sessionId);
    sessions[index].status = "rejected";
    return res.status(200).send({
        "status": 200,
        "data": session
    });
}

const reviewController = {
    createReview: (req, res) => {
      const s = sessions.find((s) => s.sessionId.toString() === req.params.sessionId);
      if (s && s.status !== "rejected") {
        const review = new Review(s.sessionId, s.mentorId, req.user.userId,
          req.body.score, req.user.menteeFullName, req.body.remark);
  
        reviews.push(review);
        return res.status(201).send({
          status: 201,
          message: "review created successfully",
          data: review,
        });
      }
      return res.status(400).send({
        status: 400,
        message: "Bad request",
      });
    },
    deleteReview: (req, res) => {
      const del = reviews.findIndex((rev) => rev.sessionId.toString() === req.params.sessionId);
      if (del > -1) {
        reviews.splice(del, 1);
        return res.status(200).send({
          status: 200,
          data: {
            message: "Review successfully deleted",
          },
        });
      }
      return 0;
    },
  };

export const deleteSession = (req, res) => {
    const se = sessions.filter((s) =>{
        return s.sessionId != req.params.sessionId;
    });

    sessions = se;
    return res.status(200).send({
        "status": 200,
        'message' : 'Review successfully deleted'
    });
}

export default { signin, signup, updateUserToMentor, getAllMentors, getMentorById, createSession, rejectSession, reviewSession, deleteSession  }