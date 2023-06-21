import PropTypes from 'prop-types';
import { StatisticsBox } from './StatisticsBox.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatisticsBox>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage || 0}%</p>
    </StatisticsBox>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
