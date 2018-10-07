import history from './history';

export const navigateToPage = pathname => (e = null) => {
  if (e) {
    e.preventDefault();
  }
  history.push(pathname);
};
