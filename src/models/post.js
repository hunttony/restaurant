class Post {
  constructor(id, userId, title, content, createdAt) {
    this.id = id;
    this.userId = userId; // Link to the user who posted
    this.title = title;
    this.content = content; // Text content or the path to the uploaded file
    this.createdAt = createdAt; // Timestamp
  }
}

module.exports = Post;
