export const ACTION_ONE = 'ACTION_ONE';
export const ACTION_TWO = 'ACTION_TWO';

export const doActionOne = () => {
  return {type: ACTION_ONE};
}

export const doActionTwo = (id) => {
  return {type: ACTION_TWO, id};
}