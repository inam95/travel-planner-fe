import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { registerUser } from '../utils/api';
import {
  Button,
  Input,
  InputContainer,
  InputContainerHeader,
  InputLabel
} from '../utils/styles';
import { RegisterUserParams } from '../utils/types';
import styles from './index.module.scss';

export const RegisterForm = () => {
  const navigate = useNavigate();
  const mutation = useMutation(registerUser, {
    onSuccess: () => navigate('/login'),
    onError: error => {
      console.log(error);

      toast.error('Could not create account', {
        theme: 'dark'
      });
    }
  });
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<RegisterUserParams>();

  const onSubmit = async (data: RegisterUserParams) => {
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
            required: 'Username is required',
            minLength: {
              value: 5,
              message: 'Min. 5 characters'
            },
            maxLength: {
              value: 16,
              message: 'Max 16 characters'
            }
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
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Min. 5 characters'
            },
            maxLength: {
              value: 32,
              message: 'Max 32 characters'
            }
          })}
        />
      </InputContainer>
      <Button>Create Account</Button>
    </form>
  );
};

export default RegisterForm;
