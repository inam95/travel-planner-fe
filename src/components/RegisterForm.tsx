import {
  Button,
  Input,
  InputContainer,
  InputContainerHeader,
  InputLabel
} from '../utils/styles';
import styles from './index.module.scss';

function RegisterForm() {
  return (
    <form className={styles.form}>
      <InputContainer>
        <InputContainerHeader>
          <InputLabel htmlFor="username">Username</InputLabel>
        </InputContainerHeader>
        <Input id="username" />
      </InputContainer>
      <InputContainer>
        <InputContainerHeader>
          <InputLabel htmlFor="password">Password</InputLabel>
        </InputContainerHeader>
        <Input id="password" type="password" />
      </InputContainer>
      <Button>Create Account</Button>
    </form>
  );
}

export default RegisterForm;
