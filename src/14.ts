interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John Doe",
  age: 30,
};

function greet(user: User) {
  console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}

greet(user);
