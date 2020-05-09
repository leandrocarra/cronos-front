import React, { useState } from 'react';
import axios from 'axios';
import * as style from './NewClockStyle';

const URL = 'http://localhost:7777/add';

const NewClock = () => {
  const [newClock, setNewClock] = useState({
    description: '',
    investedTime: '',
  });
  const [success, setSuccess] = useState(false);
  const handleChangeNewClock = (e) =>{ setNewClock({
      ...newClock,
      [e.target.name]: [e.target.value],
    })
  };

  const handleAddNewClock = () => {
    console.log({...newClock})
    axios.post(URL, {...newClock})
      .then(() => setSuccess(true));
  }

  return (
    <style.StyledNewClock__container>
      {success ? (
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
          <style.StyledNewClock__button onClick={handleAddNewClock}>
            ADICIONAR NOVO
          </style.StyledNewClock__button>
        </>
      )}
    </style.StyledNewClock__container>
  );
}
 
export default NewClock;