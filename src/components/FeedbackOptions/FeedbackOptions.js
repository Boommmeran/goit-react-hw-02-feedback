import PropTypes from 'prop-types';
import capitalize from 'helpers/capitalize';
import { Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Btn key={option} onClick={onLeaveFeedback}>
          {capitalize(option)}
        </Btn>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired
};