import React, { Component } from 'react';
import Match from './match';
import scrap from '../data/scrap';

class MatchsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchs: []
    };
  }

  componentWillReceiveProps() {
    const insertState = (data) => {
      this.setState({
        matchs: data
      });
    };

    function doIt(date) {
      let matchsList = scrap(date);
      insertState(matchsList);
    }

    doIt(this.props.date);
  }

  render() {
    return (
      <div>
        { this.state.matchs.map((match) => {
          return (<Match
            key={match.name}
            name={match.name}
            hour={match.hour}
            channel={match.channel}
                  />
          );
        })}
      </div>
    );
  }
}

export default MatchsList;
