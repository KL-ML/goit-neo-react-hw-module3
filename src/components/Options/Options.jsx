import PropTypes from 'prop-types';

import Button from '../Button/Button';
import css from './Options.module.css';

export default function Options({ buttons, onUpdate, total, reset }) {
  return (
    <>
      <div className={css.options}>
        {Object.keys(buttons).map(btn => (
          <Button
            key={btn}
            text={btn}
            handleClick={onUpdate}
            variant="filled"
          />
        ))}
        {total !== 0 && (
          <Button text="reset" handleClick={reset} variant="outlined" />
        )}
      </div>
    </>
  );
}

Options.PropTypes = {
  buttons: PropTypes.object,
  onUpdate: PropTypes.func,
  total: PropTypes.number,
  reset: PropTypes.func,
};
