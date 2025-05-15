import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from './Button.module.css';

export default function Button({ text, handleClick, variant }) {
  return (
    <>
      <button
        onClick={() => handleClick(text)}
        className={clsx(css.button, css[variant])}
      >
        {text}
      </button>
    </>
  );
}

Button.PropTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
};
