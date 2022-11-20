import {
  NavigationHeader,
  NavigationItemContainer,
  NavigationSidebar,
  Page
} from '../utils/styles';
import { IoCalendarOutline } from 'react-icons/io5';
import { BiCalendarPlus } from 'react-icons/bi';
import { useQueryClient } from '@tanstack/react-query';
import { User } from '../utils/types';
import { AxiosResponse } from 'axios';

const Sidebar = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<AxiosResponse<User>>([
    'user-auth-status'
  ])?.data;

  return (
    <NavigationSidebar>
      <NavigationHeader>{user?.username}</NavigationHeader>
      <NavigationItemContainer>
        <IoCalendarOutline />
        <span>Plans</span>
      </NavigationItemContainer>
      <NavigationItemContainer>
        <BiCalendarPlus />
        <span>Shared with you</span>
      </NavigationItemContainer>
    </NavigationSidebar>
  );
};

export default Sidebar;
