import axios from 'axios'

const URL = 'http://localhost:7777';

export const listClocks = () => axios
  .get(URL)
  .then(({ data }) => data)