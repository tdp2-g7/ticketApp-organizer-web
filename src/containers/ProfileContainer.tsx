import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from 'src/hooks/useTypedSelector';
import { onEditProfileRequested } from 'src/redux/actions/user.actions';
import Layout from 'src/views/Layout/Layout';
import Profile from 'src/views/Profile/Profile';
import { IEditProfileForm } from 'src/views/Profile/types';

const ProfileContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { user } = useTypedSelector((state) => state.user);

  const getBase64Picture = async (file: any) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // eslint-disable-next-line func-names
    reader.onload = function () {
      resolve(reader.result);
    };
  });

  const onEditProfile = async (formdata: IEditProfileForm) => {
    const imageBase64: any = await getBase64Picture(formdata.image[0]);
    const data = {
      id: user?.userId,
      name: formdata.name,
      description: formdata.description,
      image: imageBase64.split(',')[1],
    };
    dispatch(onEditProfileRequested(data));
  };

  return (
    <Layout>
      {user && <Profile user={user} onEditProfile={onEditProfile} />}
    </Layout>
  );
};
export default ProfileContainer;
