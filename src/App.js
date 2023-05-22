import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("I'm mounted :)");

    // useEffect의 return 값은 cleanup 함수이다.
    return () => console.log("I'm unmounted :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    // Hello 컴포넌트가 null이면, React는 Hello 컴포넌트를 unmount한다.
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
