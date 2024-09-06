const person = {
  firstName: "Sai",
  lastName: "Rakindi",
  getFullName(firstName, lastName) {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

person.getFullName("FirstName", "Lastname");
