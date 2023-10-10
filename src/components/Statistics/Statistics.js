import PropTypes from 'prop-types';
import { StatWrap, StatTitle, StatItem } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatWrap>
      <StatTitle>Statistics</StatTitle>
      <StatItem>Good: {good}</StatItem>
      <StatItem>Neutral: {neutral}</StatItem>
      <StatItem>Bad: {bad}</StatItem>
      <StatItem>Total: {total}</StatItem>
      <StatItem>Positive feedbacks: {positivePercentage}</StatItem>
    </StatWrap>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};