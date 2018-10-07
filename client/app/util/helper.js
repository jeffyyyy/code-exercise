import history from './history';

export const navigateToPage = pathname => (e = null) => {
  if (e) {
    e.preventDefault();
  }
  history.push(pathname);
};

export const formatDollar = (value) => {
  if (typeof value !== 'number') {
    return '';
  }
  return `$${value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
};
