class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password; // Note: This will be hashed before storage
  }
}

module.exports = User;
