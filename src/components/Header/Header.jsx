import PropTypes from 'prop-types';

import HeaderTitle from '../HeaderTitle/HeaderTitle';
import Logo from '../Logo/Logo';
import css from './Header.module.css';

export default function Header({ logoImgPath, onUpdate }) {
  return (
    <header className={css.header}>
      <Logo logoImgPath={logoImgPath} />
      <HeaderTitle
        moduleNumber={2}
        moduleTitle={'State and life cycle.'}
        onUpdate={onUpdate}
      />
    </header>
  );
}

Header.PropTypes = {
  logoImgPath: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
