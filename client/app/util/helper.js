import history from './history';

export const navigateToPage = pathname => (e) => {
  e.preventDefault();
  history.push(pathname);
};
