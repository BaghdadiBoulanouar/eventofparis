import React from 'react';

import axios from 'axios';

export default class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    axios.get('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-')
      .then((res) => {
        const events = res.data.records.map(({ fields }) => ({
          title: fields.title,
        }));
        this.setState({ events });
      });
  }

  render() {
    const { events } = this.state;
    return (
      <ul>
        { events.map((event) => <li>{event.title}</li>)}
      </ul>
    );
  }
}
