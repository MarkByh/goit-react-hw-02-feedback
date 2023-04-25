import { Component } from 'react';
import { Section } from './section';
import { Statistics } from './statistics';
import { Notification } from './notification';
import { FeedbackOptions } from './feedbackOptions';
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  }
  handleClick = e => {
    const option = e.currentTarget.value;
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  render() {
    const total = this.countTotalFeedback();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given yet" />
          )}
        </Section>
      </div>
    );
  }
}
export default Feedback;
