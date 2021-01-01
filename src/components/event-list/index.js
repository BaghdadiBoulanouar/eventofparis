import React from 'react';

import axios from 'axios';

export default class EventList extends React.Component {
  state = {
    events: []
  }

  componentDidMount() {
    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-')
      .then(res => {
        const events = res.data;
        this.setState({ events });
      })
  }

  render() {
    return (
      <ul>
        { this.state.events.map(event => <li>{event.title}</li>)}
      </ul>
    )
  }
}
  