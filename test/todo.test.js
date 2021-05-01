const server = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe("Testing Todos Controller", () => {
  //GET All Todos
  describe("GET All Todos", () => {
    it("Should return all todos", (done) => {
      chai
        .request(server)
        .get("/todo")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.be.an("object");

          done();
        });
    });

    it("Should not return all todos", (done) => {
      chai
        .request(server)
        .get("/todo")
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });

  //GET a Single Todo
  describe("GET a Single Todo", () => {
    it("Should return a single todo", (done) => {
      const todoId = "6069f5601293d648bc323427";
      chai
        .request(server)
        .get(`/todo/${todoId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.an("object");

          done();
        });
    });

    it("Should not return a todo", (done) => {
      const todoId = "6069f5601293d648bc323428";
      chai
        .request(server)
        .get(`/todo/${todoId}`)
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });

  //CREATE a Todo
  describe("CREATE a Todo", () => {
    it("Should create a todo", (done) => {
      const todo = {
        text: "assignment-8",
        completed: "true",
      };

      chai
        .request(server)
        .post("/todo")
        .send(todo)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an("object");

          done();
        });
    });

    it("Should not create a todo", (done) => {
      const todo = {
        completed: "true",
      };

      chai
        .request(server)
        .post("/todo")
        .send(todo)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.have.be.an("object");

          done();
        });
    });
  });

  //UPDATE a Todo
  describe("UPDATE Todo Info", () => {
    it("Should update todo info", (done) => {
      const todo = {
        text: "final-project",
        completed: "false",
      };
      const todoId = "6089701fd67f9c1c54d77ff4";
      chai
        .request(server)
        .patch(`/todo/${todoId}`)
        .send(todo)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.be.an("object");

          done();
        });
    });

    it("Should not update todo info", (done) => {
      const todo = {
        completed: "false",
      };
      const todoId = "6089701fd67f9c1c54d77ff4";
      chai
        .request(server)
        .patch(`/todo/${todoId}`)
        .send(todo)
        .end((err, res) => {
          res.should.have.status(404);
          res.should.have.be.an("object");

          done();
        });
    });
  });

  //DELETE a Todo
  describe("DELETE a Todo", () => {
    it("Should delete an todo", (done) => {
      const todoId = "6089701fd67f9c1c54d77ff4";
      chai
        .request(server)
        .delete(`/todo/${todoId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.be.an("object");

          done();
        });
    });

    it("Should not delete an todo", (done) => {
      const todoId = "6089701fd67f9c1c54d77ff4";
      chai
        .request(server)
        .delete(`/todo/${todoId}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.should.have.be.an("object");

          done();
        });
    });
  });
});
