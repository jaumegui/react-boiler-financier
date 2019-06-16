import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'rc-calendar';
import MatchsList from './components/matchsList';
import '../node_modules/rc-calendar/assets/index.css';
import '../assets/stylesheets/application.scss';

const now = new Date();
const TODAY = {
  day: now.getDate(),
  month: now.getMonth() + 1,
  year: now.getFullYear()
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const date = {
      day: e._d.getDate(),
      month: e._d.getMonth() + 1,
      year: e._d.getFullYear()
    };
    this.setState({
      date: date,
    });
  }

  render() {
    let matchComponent;
    if (Object.getOwnPropertyNames(this.state.date).length === 0) {
      matchComponent = <MatchsList date={this.props.date} />;
    } else {
      matchComponent = <MatchsList date={this.state.date} />;
    }
    return (
      <div className="application">
        <Calendar onChange={this.handleClick} format="DD/MM/YYYY" showDateInput={false} />
        <div className="match-list">{ matchComponent }</div>
      </div>
    );
  }
}

ReactDOM.render(
  <App date={TODAY} />,
  document.getElementById('root')
);
