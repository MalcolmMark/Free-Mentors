import { User } from "../models/user.model";
import { Session } from "inspector";
/* User Data */

export let users = [
    new User(1, 'angeko@gmail.com', 'Koko', 'Ange', '$2a$10$Skf6psO9yOsoG/FMZ2gAzeoFkAyRTM/G3Y8pMnQ9.NHx21YeIttxO', 'Miduha', 'I am ...', 'Developer', 'Swift', 'admin'),
    new User(2, 'moise@gmail.com', 'Koko', 'Ange', '$2a$10$Skf6psO9yOsoG/FMZ2gAzeoFkAyRTM/G3Y8pMnQ9.NHx21YeIttxO', 'Miduha', 'I am ...', 'Developer', 'Swift', 'mentee'),
    new User(3, 'ezra@gmail.com', 'Koko', 'Ange', '$2a$10$Skf6psO9yOsoG/FMZ2gAzeoFkAyRTM/G3Y8pMnQ9.NHx21YeIttxO', 'Miduha', 'I am ...', 'Developer', 'Swift', 'mentee'),
    new User(4, '@gmail.com', 'Koko', 'Ange', '$2a$10$Skf6psO9yOsoG/FMZ2gAzeoFkAyRTM/G3Y8pMnQ9.NHx21YeIttxO', 'Miduha', 'I am ...', 'Developer', 'Swift', 'mentee'),
];

/* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZ2Vrb0BnbWFpbC5jb20iLCJpYXQiOjE1NjczNjczMjd9.hH3utDCmPjVZVAcPlflTmfb-u9h82hIrQS_dcGEjd6Q */

export const sessions = [
    new Session(1, 2, 3, 'Would you be my mentor', 'malcolmmarkokabo@gmail.com'),
]