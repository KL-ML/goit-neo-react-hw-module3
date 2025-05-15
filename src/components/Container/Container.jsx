import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Container.module.css';

export default function Container({ children, variant }) {
  return (
    <div className={css.tabletWrap}>
      <div className={clsx(css.cardContainer, css[variant])}>{children}</div>
    </div>
  );
}

Container.PropTypes = {
  children: PropTypes.any,
  variant: PropTypes.string.isRequired,
};
