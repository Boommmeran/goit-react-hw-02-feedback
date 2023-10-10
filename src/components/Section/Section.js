import PropTypes from 'prop-types';
import { StyledSect, StyledTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSect>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSect>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};