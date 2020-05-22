import React, { useState } from 'react';
import { connect } from 'react-redux';

import { actionsApi } from '../../modules/api';
import { bindActionCreators } from 'redux';

import * as style from './NewClockStyle';

const NewClock = ({ postData, toggleSuccess }) => {
  const [newClock, setNewClock] = useState({
    description: '',
    investedTime: '',
  });
  const handleChangeNewClock = (e) =>{
    setNewClock({
      ...newClock,
      [e.target.name]: [e.target.value],
    })
  };

  const handleSuccessAddClock = (newClock) => {
    postData(newClock)
  }
  
  return (
    <style.StyledNewClock__container>
      {toggleSuccess ? (
        <style.StyledNewClock__success>
          ADICIONADO
        </style.StyledNewClock__success>
      ) : (
        <>
          <div>
            <input
              type="text"
              placeholder="titulo"
              name="description"
              value={newClock.description}
              onChange={handleChangeNewClock}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="TEMPO INICIAL"
              name="investedTime"
              value={newClock.investedTime}
              onChange={handleChangeNewClock}
            />
          </div>
          <style.StyledNewClock__button onClick={() => handleSuccessAddClock(newClock)}>
            ADICIONAR NOVO
          </style.StyledNewClock__button>
        </>
      )}
    </style.StyledNewClock__container>
  );
}

const mapStateToProps = state => ({
  data: state.api.data,
  toggleSuccess: state.sanfona.toggleSuccess,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(actionsApi ,dispatch)
)
 
export default connect(mapStateToProps, mapDispatchToProps)(NewClock);