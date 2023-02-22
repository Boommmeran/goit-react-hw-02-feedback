import PropTypes, { string } from 'prop-types';
import { ButtonList, ButtonItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <ButtonItem key={option}>
          <Button
            type="button"
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        </ButtonItem>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(string).isRequired,
};
