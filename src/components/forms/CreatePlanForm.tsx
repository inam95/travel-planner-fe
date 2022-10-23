import { useState } from 'react';
import DatePicker from 'react-datepicker';
import {
  Button,
  Input,
  InputContainer,
  InputContainerHeader,
  InputLabel
} from '../../utils/styles';
import styles from './index.module.scss';

const CreatePlanForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form className={styles.form}>
      <DatePicker
        selected={startDate}
        minDate={new Date()}
        onChange={(date: Date) => setStartDate(date)}
        popperPlacement="auto-end"
      />
      <InputContainer className={styles.inputContainer}>
        <InputContainerHeader>
          <InputLabel>Title</InputLabel>
        </InputContainerHeader>
        <Input />
      </InputContainer>
      <InputContainer className={styles.inputContainer}>
        <InputContainerHeader>
          <InputLabel>Description</InputLabel>
        </InputContainerHeader>
        <Input />
      </InputContainer>
      <Button className={styles.createPlanButton}>Create Plan</Button>
    </form>
  );
};

export default CreatePlanForm;
