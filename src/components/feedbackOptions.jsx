import PropTypes from 'prop-types';
// import { List, Button } from './FeedbackOptions.styled';
import style from './style.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={style.buttonList}>
    {options.map(option => (
      <li key={option}>
        <button
          className={style.feedbackBtn}
          type="button"
          value={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
