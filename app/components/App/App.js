import React from 'react';
import AddGoal from '../AddGoal/AddGoal';
import CSSAsignment from '../CSSAsignment/CSSAsignment';
import styles from './App.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.state = {
      goals: [{
        id: 0,
        name: '',
        description: '',
      }],
    };
    this.saveGoal = () => {
      // use this array to save to API etc
      console.log(this.state.goals);
      // use this array to save to API etc
    };
    this.addGoal = () => {
      this.counter += 1;
      const newgoal = {
        id: this.counter,
        name: '',
        description: '',
      };
      const newgoals = this.state.goals;
      newgoals.push(newgoal);
      this.setState({
        goals: newgoals,
      });
    };
    this.removeGoal = (id) => {
      const goals = this.state.goals.filter(goal => (
        goal.id !== id
      ));
      this.setState({
        goals,
      });
    };
    this.setValue = (e, field, id) => {
      const name = e.target.value;
      const goals = this.state.goals.map((goal) => {
        const newgoal = goal;
        if (newgoal.id === id) {
          newgoal[field] = name;
        }
        return newgoal;
      });
      this.setState({
        goals,
      });
    };
  }
  render() {
    return (
      <main className={styles.container}>
        { this.state.goals.length > 0 &&
          this.state.goals.map(goal => (
            <AddGoal key={`goal-${goal.id}`} setValue={this.setValue} removeGoal={this.removeGoal} goal={goal} />
          ))
        }
        <div>
          <button onClick={this.addGoal} type="button" className="btn btn-goal">Add a New Goal</button>
          <button onClick={this.saveGoal} type="button" className="btn btn-save right">Save</button>
        </div>
        <CSSAsignment />
      </main>
    );
  }
}

export default App;
