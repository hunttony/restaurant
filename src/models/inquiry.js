// inquiry.js
class inquiries {
  constructor({ name, email, phone, company, industry, goals, solutions, budget, startdate, additionalInfo }) {
    this.id = null; // ID will be set when saving to DB
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.company = company;
    this.industry = industry;
    this.goals = goals;
    this.solutions = solutions;
    this.budget = budget;
    this.startdate = startdate;
    this.additionalInfo = additionalInfo;
    this.submittedAt = new Date().toISOString(); // Capture the submission timestamp
  }
}

module.exports = inquiries;
