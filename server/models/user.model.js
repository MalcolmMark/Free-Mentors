export class User {
    constructor(userId, email, first_name, last_name, password, address, bio, occupation, expertise, role = "mentee") {
        this.userId = userId;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.address = address;
        this.bio = bio;
        this.occupation = occupation;
        this.expertise = expertise;
        this.role = role;
    }
}