import React from 'react';
import './App.css';
import collegeBasketballTeams from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return (
    <div>
      <h1>Get Ready For March Madness! </h1>
      <p>
        With March Madness coming up, we want to to help you by letting you get
        to know all the of the team in the NCAA Basketball League. Below
        contains information about each School including their Mascot and
        Location.
      </p>
    </div>
  );
}

class Sports extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props; // Destructure for easier access

    return (
      <div>
        <h2>{school}</h2> {/* Use curly braces to insert variables */}
        <h3>Mascot: {name}</h3> {/* Same here */}
        <h4>
          {city}, {state}
        </h4>{' '}
        {/* And here */}
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {collegeBasketballTeams.teams.map((team) => (
        <Sports key={team.tid} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
