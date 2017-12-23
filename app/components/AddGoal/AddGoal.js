import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddGoal.less';

const AddGoal = (props: Object) => (
  <div className={styles['goal-form']}>
    <button className="btn btn-remove" type="button" onClick={() => props.removeGoal(props.goal.id)}>X</button>
    <input className="form-el" onChange={(e) => { props.setValue(e, 'name', props.goal.id); }} value={props.goal.name} type="text" name="title" placeholder="Type a goal title here" />
    <textarea className="form-el" onChange={(e) => { props.setValue(e, 'description', props.goal.id); }} value={props.goal.description} name="description" placeholder="Type a goal description here" />
  </div>
);

AddGoal.propTypes = {
  removeGoal: PropTypes.func.isRequired,
  goal: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  setValue: PropTypes.func.isRequired,
};

export default AddGoal;
