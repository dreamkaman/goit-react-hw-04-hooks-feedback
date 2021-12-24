import { useState } from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';


function Feedback()=> {
  const [good, setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  countTotalFeedback() {
    // const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    // const { good } = this.state;

    return Math.round((good / this.countTotalFeedback()) * 100) / 100;
  }

  leaveFeedbackHandle = name => {
    this.setState(prevstate => ({ [name]: prevstate[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const element = !this.countTotalFeedback() ? (
      <Notification message="There is no feedback" />
    ) : (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        percentage={this.countPositiveFeedbackPercentage()}
      />
    );

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedbackHandle}
          />
        </Section>
        <Section title="Statistics">{element}</Section>
      </>
    );
  }
}

export default Feedback;

Feedback.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
};
