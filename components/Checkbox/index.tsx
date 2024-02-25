import styles from "./Checkbox.module.scss";
import Image from "next/image";

type Checkbox = {
  name?: string;
  label?: string;
  className?: string;
  checked?: boolean;
  onChange?: (e) => void;
};

const Checkbox: React.FC<Checkbox> = (props) => {
  const { name, label, className, checked, onChange } = props;
  const checkboxClassName = `${styles.checkbox} ${
    checked ? styles.checkboxActive : ""
  } ${className || ""}`;

  return (
    <div className={checkboxClassName}>
      <input
        id={name}
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
