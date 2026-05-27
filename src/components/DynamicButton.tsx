import React from "react";

interface DynamicButtonProps {
  label: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick: () => void;
}

const DynamicButton = ({ label, onClick, color }: DynamicButtonProps) => {
  const btnClass = `btn btn-${color || "primary"}`;
  return (
    <button type="button" className={btnClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default DynamicButton;
