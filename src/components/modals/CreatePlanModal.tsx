import { FC, Dispatch, SetStateAction } from 'react';
import { Cross } from 'akar-icons';
import ModalContainer from '.';
import { ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '../../utils/styles';
import { motion } from 'framer-motion';
import CreatePlanForm from '../forms/CreatePlanForm';

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const CreatePlanModal: FC<Props> = ({ setShowModal }) => {
  return (
    <ModalOverlay>
      <motion.div animate={{ y: 50 }}>
        <ModalContainer>
          <ModalHeader>
            <span>Create Plan</span>
            <Cross size={16} strokeWidth={4} cursor="pointer" onClick={() => setShowModal(false)} />
          </ModalHeader>
          <ModalContent>
            <CreatePlanForm />
          </ModalContent>
          <ModalFooter></ModalFooter>
        </ModalContainer>
      </motion.div>
    </ModalOverlay>
  );
};

export default CreatePlanModal;
