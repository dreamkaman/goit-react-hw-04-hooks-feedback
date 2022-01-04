import { useState } from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) / 100;
  };

  const leaveFeedbackHandle = name => {
    switch (name) {
      case 'good':
        setGood(prevstate => prevstate + 1);
        break;
      case 'neutral':
        setNeutral(prevstate => prevstate + 1);
        break;
      case 'bad':
        setBad(prevstate => prevstate + 1);
        break;
      default:
        return;
    }
  };

  const element = !countTotalFeedback() ? (
    <Notification message="There is no feedback" />
  ) : (
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={countTotalFeedback()}
      percentage={countPositiveFeedbackPercentage()}
    />
  );

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leaveFeedbackHandle}
        />
      </Section>
      <Section title="Statistics">{element}</Section>
    </>
  );
}

export default Feedback;

Feedback.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
};
