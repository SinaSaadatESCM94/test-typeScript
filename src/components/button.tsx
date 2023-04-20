import React, { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  bgVariat?: string;
  variant?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = ({
  label,
  variant = "bg-primary",
  type = "button",
  onClick,
}) => {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center">
      <button
        className={`w-100 d-flex align-items-center justify-content-center h5 m-0 py-2 px-5 border-0 bg-primary text-white rounded-2 text-capitalize ${variant}`}
        onClick={onClick}
        type={type}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
