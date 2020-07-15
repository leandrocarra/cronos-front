import React, { useState } from 'react';
import { connect } from 'react-redux';

import { actionsApi } from '../../modules/api';
import { bindActionCreators } from 'redux';

import * as style from './EditClockStyle';

const EditClock = ({ postData, toggleSuccess }) => {
  const [EditClock, setEditClock] = useState({
    description: '',
    investedTime: '',
  });
  const handleChangeEditClock = (e) =>{
    setEditClock({
      ...EditClock,
      [e.target.name]: [e.target.value],
    })
  };

  const handleEditClock = (EditClock) => {
    postData(EditClock)
  }
  
  return (
    <style.StyledEditClock__container>
      {toggleSuccess ? (
        <style.StyledEditClock__success>
          ALTERADO
        </style.StyledEditClock__success>
      ) : (
        <>
          <div>
            <input
              type="text"
              placeholder="titulo"
              name="description"
              value={EditClock.description}
              onChange={handleChangeEditClock}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="TEMPO INICIAL"
              name="investedTime"
              value={EditClock.investedTime}
              onChange={handleChangeEditClock}
            />
          </div>
          <style.StyledEditClock__button onClick={() => handleEditClock(EditClock)}>
            ADICIONAR NOVO
          </style.StyledEditClock__button>
        </>
      )}
    </style.StyledEditClock__container>
  );
}

const mapStateToProps = state => ({
  data: state.api.data,
  toggleSuccess: state.sanfona.toggleSuccess,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(actionsApi ,dispatch)
)
 
export default connect(mapStateToProps, mapDispatchToProps)(EditClock);