import * as React from "react";
import { render } from "react-dom";

import createState from "react-hook-setstate";

type CreateStateResponse<T> = [T, (state: T) => void];
type CreateState<T> = (initState: T) => CreateStateResponse<T>;
type Optional<T> = { [P in keyof T]?: T[P] };

function cs<T>(initState: Optional<T>): CreateStateResponse<Optional<T>> {
  return createState(initState);
}

const App = () => {
  const [state, setState] = cs({
    counter1: 0,
    counter2: 0,
    c: { d: { e: 0 } }
  });

  return (
    <div>
      Counter 1: {state.counter1}
      <br />
      <button onClick={() => setState({ counter1: state.counter1 + 1 })}>
        Add
      </button>
      <hr />
      Counter 2: {state.counter2}
      <br />
      <button onClick={() => setState({ counter2: state.counter2 + 1 })}>
        Add
      </button>
      <br />
      Counter 3: {state.c.d.e}
      <br />
      <button onClick={() => setState({ c: { d: { e: state.c.d.e + 1 } } })}>
        Add
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
