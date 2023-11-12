import filter from 'leo-profanity';

const cleanMessage = (message, replacedKey = '*') => filter.clean(message, replacedKey);

export default cleanMessage;
