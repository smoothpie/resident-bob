import { useState, useEffect } from 'react';
import CaretUpOutline from 'react-ionicons/lib/CaretUpOutline';
import CaretDownOutline from 'react-ionicons/lib/CaretDownOutline';
import styles from './SortSelect.module.scss';

export default function SortSelect(props: any) {
  const { options, style, onSelect, defaultValue } = props;

  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<any>(options[0]);

  useEffect(() => {
    if (defaultValue) {
      setSelectedOption(defaultValue);
    }
  }, [defaultValue]);

  const handleOptionSelect = (option: any) => {
    if (option.value === undefined) {
      setSelectedOption(options[0]);
    } else {
      setSelectedOption(option);
    }

    if (onSelect) {
      onSelect(option);
    }

    setShowDropdown(false);
  };

  return (
    <div
      className={
        showDropdown ? `${styles.select} ${styles.selectOpen}` : styles.select
      }
      style={style}
    >
      <div
        className={
          showDropdown
            ? `${styles.input} ${styles.inputSelected}`
            : styles.input
        }
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Sort: {selectedOption.label}
        {showDropdown ? (
          <CaretUpOutline
            cssClasses={styles.icon}
            width='10px'
            height='10px'
            color='rgba(46, 46, 46, 0.45)'
          />
        ) : (
          <CaretDownOutline
            cssClasses={styles.icon}
            width='10px'
            height='10px'
            color='rgba(46, 46, 46, 0.45)'
          />
        )}
      </div>
      {showDropdown && (
        <ul className={styles.list}>
          {options.map((option: any, i: number) => (
            <li key={i} onClick={() => handleOptionSelect(option)}>
              <input
                className={styles.radio}
                type='radio'
                name='options'
                value={option.value}
                checked={option.value === selectedOption.value}
                onChange={() => handleOptionSelect(option)}
              />
              <p>{option.label}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
