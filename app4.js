let DATA = "Secret information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("data = ", DATA);
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "Some new value";
  }
}

let student1 = new User("Deepak", "abc@gmail.com");
let student2 = new User("Aman", "pqr@gamil.com");

let teacher1 = new User("Dean", "dean@gmail.com");

let admin1 = new Admin("Ashish", "Ash@gmail.com");
