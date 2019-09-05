import chai from 'chai';
import chaiHttp from 'chai-http';
import app from "../app";

chai.use(chaiHttp);
chai.should();

describe('Users: ', () => {
    const data = {
        first_name: "Malcolm",
        last_name: "Mark",
        address: "Kigali",
        email: "malcolmmarkokabo@gmail.com",
        password: "0775315500",
        bio: "I dig code",
        occupation: "Andela Fellow",
        expertise: "Swift"
    };
    it('should create new user.', (done) => {
        chai.request(app).post('/api/v1/auth/signup').send(data)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });

    it('should return error if all required fields are not supplied when no email', (done) => {
        const userData = {
            first_name: "Malcolm",
            last_name: "Mark",
            address: "Kigali",
            email: '',
            password: "0775315500",
            bio: "I dig code",
            occupation: "Andela Fellow",
            expertise: "Swift"
        };
        chai.request(app).post('/api/v1/auth/signup').send(userData)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it('should return error if all required fields are not supplied when no firstname', (done) => {
        const userData = {
            first_name: "",
            last_name: "Mark",
            address: "Kigali",
            email: 'wukfjf@gmail.com',
            password: "0775315500",
            bio: "I dig code",
            occupation: "Andela Fellow",
            expertise: "Swift"
        };
        chai.request(app).post('/api/v1/auth/signup').send(userData)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it('should return error if all required fields are not supplied when no lastname ', (done) => {
        const userData = {
            first_name: "Malcolm",
            last_name: "",
            address: "Kigali",
            email: 'googo@gmail.com',
            password: "0775315500",
            bio: "I dig code",
            occupation: "Andela Fellow",
            expertise: "Swift"
        };
        chai.request(app).post('/api/v1/auth/signup').send(userData)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
    it('should return error if all required fields are not supplied when no bio', (done) => {
        const userData = {
            first_name: "Malcolm",
            last_name: "Mark",
            address: "Kigali",
            email: 'malcolm@gmail.com',
            password: "0775315500",
            bio: "",
            occupation: "Andela Fellow",
            expertise: "Swift"
        };
        chai.request(app).post('/api/v1/auth/signup').send(userData)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it('should return error if all required fields are not supplied when no address', (done) => {
        const userData = {
            first_name: "Malcolm",
            last_name: "Mark",
            address: "",
            email: 'malcolm@gmail.com',
            password: "0775315500",
            bio: "I dig code",
            occupation: "Andela Fellow",
            expertise: "Swift"
        };
        chai.request(app).post('/api/v1/auth/signup').send(userData)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it('should return error if all required fields are not supplied when no occupation', (done) => {
        const userData = {
            first_name: "Malcolm",
            last_name: "Mark",
            address: "Kigali",
            email: 'malcolm@gmail.com',
            password: "0775315500",
            bio: "I dig code",
            occupation: "",
            expertise: "Swift"
        };
        chai.request(app).post('/api/v1/auth/signup').send(userData)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it('should return error if all required fields are not supplied when no expertise', (done) => {
        const userData = {
            first_name: "Malcolm",
            last_name: "Mark",
            address: "Kigali",
            email: '',
            password: "0775315500",
            bio: "I dig code",
            occupation: "Andela Fellow",
            expertise: ""
        };
        chai.request(app).post('/api/v1/auth/signup').send(userData)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it('should return error if email already exists', (done) => {
        chai.request(app).post('/api/v1/auth/signup').send(data)
            .end((err, res) => {
                res.should.have.status(409);
                done();
            });
    });

    it('should return a token and user details', (done) => {
        chai.request(app).post('/api/v1/auth/signin').send({
            email: "malcolmmarkokabo@gmail.com",
            password: "0775315500"
        })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });


it('should return status code 200 when user is changed to mentor', (done) => {
    chai.request(app).patch(`/api/v1/user/${3}`).send()
        .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZ2Vrb0BnbWFpbC5jb20iLCJpYXQiOjE1NjczNjczMjd9.hH3utDCmPjVZVAcPlflTmfb-u9h82hIrQS_dcGEjd6Q')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
});
it('should return status 404 if no record found', (done) => {
    chai.request(app).patch('/api/v1/user/:userId').send()
    .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZ2Vrb0BnbWFpbC5jb20iLCJpYXQiOjE1NjczNjczMjd9.hH3utDCmPjVZVAcPlflTmfb-u9h82hIrQS_dcGEjd6Q')
        .end((err, res) => {
            res.should.have.status(404);
            done();
        })
});
it('should return status 404 only admin is allowed to access it', (done) => {
    chai.request(app).patch('/api/v1/user/:userId').send()
    .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZ2Vrb0BnbWFpbC5jb20iLCJpYXQiOjE1NjczNjczMjd9.hH3utDCmPjVZVAcPlflTmfb-u9h82hIrQS_dcGEjd6Q')
        .end((err, res) => {
            res.should.have.status(404);  
            done();
        })
});

});