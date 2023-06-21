import PropTypes from 'prop-types';
import { FeedbackBox } from './FeedbackOptions.styled';
import { FeedbackOptionBtn } from './FeedbackOptionBtn.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackBox>
      {options.map(option => (
        <FeedbackOptionBtn
          key={option}
          type="button"
          name={option}
          onClick={e => onLeaveFeedback(e.target.name)}
        >
          {option[0].toUpperCase().concat(option.slice(1))}
        </FeedbackOptionBtn>
      ))}
    </FeedbackBox>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
