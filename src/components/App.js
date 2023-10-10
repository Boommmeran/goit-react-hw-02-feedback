import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = evt => {
    const btnName = evt.target.innerText.toLowerCase();
    this.setState({
      [btnName]: this.state[btnName] + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return `${Math.round((good * 100) / this.countTotalFeedback()) || 0}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositiveFeedbackPercentage, handleClick } = this;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={handleClick}
        />
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback yet :("></Notification>
        )}
      </Section>
    );
  }
}

export default App;
