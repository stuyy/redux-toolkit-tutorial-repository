import { RootState } from '../store';
import { useSelector } from 'react-redux';
export const UserDetails = () => {
  const userSlice = useSelector((state: RootState) => state.user);
  return (
    <div>
      <h1>User Details</h1>
      <p>{userSlice.id}</p>
      <p>{userSlice.username}</p>
      <p>{userSlice.email}</p>
    </div>
  );
};
