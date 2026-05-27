import styles from "./DynamicButton.module.css";
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

const DynamicButton = ({
  label,
  onClick,
  color = "primary", // DEFAULT COLOR
}: DynamicButtonProps) => {
  const btnClass = [styles.btn, styles["btn-" + color]].join(" ");
  return (
    <button type="button" className={btnClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default DynamicButton;
