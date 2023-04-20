import React from "react";

interface InputProps {}

const Input: React.FC<InputProps> = ({}) => {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center">
      <input type="text" />
    </div>
  );
};

export default Input;
