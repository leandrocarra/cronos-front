import React from 'react';
import { connect } from 'react-redux';

import minusIcon from '../../icons/minus.svg';

import { actionsApi } from '../../modules/api';
import { bindActionCreators } from 'redux';

import * as style from './DeleteClockStyle';

const DeleteClock = ({ data, deleteData }) => {
  return (
    <style.StyledDeleteClock__container>
      <ul>
        {data.map((item) => (
          <li key={item._id} onClick={() => deleteData(item._id)}>
           <img src={minusIcon} alt="icon"/> <div>{item.description}</div>
          </li>
        ))}
      </ul>
    </style.StyledDeleteClock__container>
  );
}

const mapStateToProps = state => ({
  data: state.api.data
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(actionsApi ,dispatch)
)
 
export default connect(mapStateToProps, mapDispatchToProps)(DeleteClock);