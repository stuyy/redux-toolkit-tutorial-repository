import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const ProfileCard = () => {
  const userSlice = useSelector((state: RootState) => state.user);
  return (
    <div>
      <div>
        <span>{userSlice.id}</span>
      </div>
      <div>
        <span>{userSlice.username}</span>
      </div>
      <div>
        <span>{userSlice.email}</span>
      </div>
    </div>
  );
};
