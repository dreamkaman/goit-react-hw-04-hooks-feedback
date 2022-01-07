import { useState } from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

function Feedback() {
  const [feedbackState, setfeedbackState] = useState({ good: 0, neutral: 0, bad: 0 });

  const { good, neutral, bad } = feedbackState;

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) / 100;
  };

  const leaveFeedbackHandle = name => {
    setfeedbackState(prevstate => ({ ...prevstate, [name]: prevstate[name] + 1 }));
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
          options={Object.keys(feedbackState)}
          onLeaveFeedback={leaveFeedbackHandle}
        />
      </Section>
      <Section title="Statistics">{element}</Section>
    </>
  );
}

export default Feedback;
