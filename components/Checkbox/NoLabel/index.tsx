import styles from '../Checkbox.module.scss';

type Checkbox = {
  name?: string;
  label?: string;
  className?: string;
  checked?: boolean;
  onChange?: (e) => void;
};

const Checkbox: React.FC<Checkbox> = (props) => {
  const { name, checked, onChange } = props;
  return (
    <input
      id={name}
      type='checkbox'
      className={styles.input}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
