
import { User } from "../models/user.model";

import { Session } from "inspector";

/* User Data */

export let users = [///ksjkfjjf
    new User(1,'malcolm@gmail.com','Malcolm','Mark','$2b$10$2XrxxSH6jjbi6T33hOn/k.Sb3OYGLWO0unI5aYKjs3Tuauo1dnOTq','Kigali','I am a dev','Developer','swift','Admin'),
];  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbGNvbG1AZ21haWwuY29tIiwiaWF0IjoxNTY3MzA3NzE5fQ.M3l_ClQYFpk4qq2ZTXj4Yv1jkh8L6mcmp3sOxYGyvk4

/*  */
export let sessions = [
    new Session(1, 2, 3,'Koko Ange angeko@gmail.com ksjkfjjf', "angeko@gmail.com")
];

/*  */
export let reviews = [
    new Review(1, 2, 2, 1, "Kako baba", "remarks...")
];



export const sessions = [
    new Session(1, 2, 3, 'Would you be my mentor', 'malcolmmarkokabo@gmail.com'),
]