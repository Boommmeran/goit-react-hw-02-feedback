import React, { Component } from 'react';
import { Statistics } from '../Statistics';
import { FeedbackOptions } from '../FeedbackOptions';
import { Section } from '../Section';
import { Notification } from '../Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = button => {
    this.setState({ [button]: this.state[button] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const { good } = this.state;
    return `${Math.round((good * 100) / this.countTotalFeedback()) || 0} %`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { onLeaveFeedback, countTotalFeedback, countPositiveFeedback } = this;
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            options={['good', 'bad', 'neutral']}
          />
        </Section>
        <Section title={'Statistics'}>
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              title={'Statistics'}
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={countTotalFeedback}
              countPositiveFeedbackPercentage={
                countPositiveFeedback
              }
            />
          )}
        </Section>
      </Container>
    );
  }
}
