import Add from './Add';
import Remove from './Remove';

const modals = {
  adding: Add,
  removing: Remove,
  // renaming: Rename,
};

export default (modalName) => modals[modalName];
