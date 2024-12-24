import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <div>
        <img src={img} alt="not found" />
        <h3>Oh page not found</h3>
        <Link to='/dashboard'>back home</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Something went wrong!</h1>
      <Link to='/dashboard'>back home</Link>
    </div>
  );
};
export default Error;
