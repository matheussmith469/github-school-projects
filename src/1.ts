const getRandomTsCode = () => {
  const template = `
interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => (
  <div className="greeting">
    <h1>Hello, {name}!</h1>
  </div>
);
`;

return template;
};
