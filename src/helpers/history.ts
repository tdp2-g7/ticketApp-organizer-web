import { useNavigate, NavigateFunction } from 'react-router-dom';

// eslint-disable-next-line import/no-mutable-exports
export let globalNavigate: NavigateFunction;

export const GlobalHistory = () => {
  globalNavigate = useNavigate();

  return null;
};
