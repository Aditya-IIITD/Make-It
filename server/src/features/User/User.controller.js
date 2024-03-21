import UserRepository from "./User.repository.js";

class UserController {
  constructor() {
    this.repository = new UserRepository();
  }
  async signUp(req, res) {
    try {
      const { name, email, password } = req.body;
      const response = await this.repository.signup(name, email, password);
      res.status(200).send(response);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const response = await this.repository.signin(email, password);
      res.status(200).send(response);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async signOut(req, res) {
    try {
      const response = await this.repository.signout();
      res.status(200).send(response);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

export default UserController;
