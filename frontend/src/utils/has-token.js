const hasToken = () => !!JSON.parse(localStorage.getItem('user'));

export default hasToken;
