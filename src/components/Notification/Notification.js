import PropTypes from 'prop-types';
import { StyledMessage } from './Notification.styled';

const Notification = ({ message }) => {
  return <StyledMessage>{message}</StyledMessage>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired
};