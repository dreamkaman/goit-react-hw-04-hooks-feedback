import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, percentage, total }) => {
  // const { good, neutral, bad, percentage, total } = props;
  return (
    <>
      <p>
        <span className={styles.spanText}>Good: </span>
        {good}
      </p>
      <p>
        <span className={styles.spanText}>Neutral: </span>
        {neutral}
      </p>
      <p>
        <span className={styles.spanText}>Bad: </span>
        {bad}
      </p>
      <p>
        <span className={styles.spanText}>Total: </span>
        {total}
      </p>
      <p>
        <span className={styles.spanText}>Positive feedback: </span>
        {percentage}
      </p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  percentage: PropTypes.number,
  total: PropTypes.number,
};
