import Counter from "./components/Counter";
import CounterLayout from "./CounterLayout";

const AppCounter: React.FC = () => {
  return (
    <CounterLayout>
      <Counter />
    </CounterLayout>
  );
};

export default AppCounter;
