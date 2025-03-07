interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User | null {
  const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bobsmith@example.com' },
  ];

  return users.find((user) => user.id === id) ?? null;
}
