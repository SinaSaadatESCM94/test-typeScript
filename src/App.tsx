import React, { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";

function App() {
  const [value, setValue] = useState(0);
  return (
    <main className="w-100 vh-100 d-flex flex-column align-items-center justify-content-center  gap-5">
      <section className="w-100 d-flex align-items-center justify-content-center mb-5 h3">
        {value}
      </section>
      <section className="w-100 d-flex align-items-center justify-content-center gap-5">
        <div className="col-4 d-flex align-items-center justify-content-center">
          <Button
            label="increment"
            variant="bg-secondary"
            onClick={() => setValue((prev: number) => prev + 1)}
          />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <Button
            label="decrement"
            variant="bg-danger"
            onClick={() => setValue((prev: number) => prev - 1)}
          />
        </div>
      </section>
      <section className="w-100 d-flex align-items-center justify-content-center">
        <div className="col-4 d-flex align-items-center justify-content-center">
          <Input />
        </div>
      </section>
    </main>
  );
}

export default App;
