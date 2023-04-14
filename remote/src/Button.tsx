import useCountStore from "./store";

function Button() {
  const { count, setCount } = useCountStore(state => state);

  // const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount()}>
        Button from remote app {count} from 5003
      </button>
    </div>
  );
}

export default Button;
