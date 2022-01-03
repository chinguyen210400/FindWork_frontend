import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const STYLES = ['btn--primary', 'btn--outline', 'btn--test','btn--findwork','btn--noti','btn--signup','btn--accept','btn--view'];
=======
const STYLES = ['btn--primary', 'btn--outline', 'btn--test','btn--findwork','btn--noti','btn--signup', 'btn--green', 'btn--yellow'];
>>>>>>> 41509c8467a457dadc0e14154f222301fca0d010

const SIZES = ['btn--medium', 'btn--large','btn--mini','btn--max'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
  );
};