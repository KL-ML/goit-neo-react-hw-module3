import PropTypes from 'prop-types';

import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import css from './Feedback.module.css';
import clsx from 'clsx';

export default function Feedback({ feedbacks, total, positive }) {
  return (
    <Container variant="friendsListContainer">
      <Heading variant="cardTitle">
        Feedback <span>| Results</span>
      </Heading>
      <ul className={css.feedback}>
        {Object.keys(feedbacks).map(value => (
          <li key={value} className={css.item}>
            <p className={clsx(css.type)}>
              <span className={clsx(css.before, css[value])}> </span>
              {value}:
            </p>
            <p className={clsx(css.number, css[value])}>{feedbacks[value]}</p>
          </li>
        ))}
        <li className={css.item}>
          <p>
            <span className={clsx(css.before, css.total)}> </span>
            Total:
          </p>
          <p className={clsx(css.number, css.total)}>{total}</p>
        </li>
        <li className={css.item}>
          <p>
            <span className={clsx(css.before, css.positive)}> </span>
            Positive:
          </p>
          <p className={clsx(css.number, css.positive)}>{positive}%</p>
        </li>
      </ul>
    </Container>
  );
}

Feedback.PropTypes = {
  feedbacks: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
