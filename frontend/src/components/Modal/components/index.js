import Add from './Add';

const modals = {
  adding: Add,
  // removing: Remove,
  // renaming: Rename,
};

export default (modalName) => modals[modalName];
