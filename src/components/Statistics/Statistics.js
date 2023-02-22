import PropTypes from 'prop-types';
import { StatContainer, Stat } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <StatContainer>
      <Stat>Good: {good}</Stat>
      <Stat>Neutral: {neutral} </Stat>
      <Stat>Bad: {bad} </Stat>
      <Stat>Total: {countTotalFeedback()} </Stat>
      <Stat>PositiveFeedbacks: {countPositiveFeedbackPercentage()} </Stat>
    </StatContainer>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
