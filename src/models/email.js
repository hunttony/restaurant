class Email {
  constructor(email, id) {
    this.email = email;
    this.randomId = id;
    // Note: This will be hashed before storage
  }
}

module.exports = Email;
