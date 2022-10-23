import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { loginUser } from '../utils/api';
import {
  Button,
  Input,
  InputContainer,
  InputContainerHeader,
  InputLabel
} from '../utils/styles';
import { LoginUserParams } from '../utils/types';
import styles from './index.module.scss';

export const RegisterForm = () => {
  const navigate = useNavigate();
  const mutation = useMutation(loginUser, {
    onSuccess: () => navigate('/app/plans'),
    onError: error => {
      console.log(error);

      toast.error('Could not login', {
        theme: 'dark'
      });
    }
  });
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<LoginUserParams>();

  const onSubmit = async (data: LoginUserParams) => {
    try {
      const { data: user } = await mutation.mutateAsync(data);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputContainerHeader>
          <InputLabel htmlFor="username">Username</InputLabel>
        </InputContainerHeader>
        <Input
          id="username"
          {...register('username', {
            required: 'Username is required'
          })}
        />
      </InputContainer>
      <InputContainer>
        <InputContainerHeader>
          <InputLabel htmlFor="password">Password</InputLabel>
        </InputContainerHeader>
        <Input
          id="password"
          type="password"
          {...register('password', {
            required: 'Password is required'
          })}
        />
      </InputContainer>
      <Button>Login</Button>
    </form>
  );
};

export default RegisterForm;
