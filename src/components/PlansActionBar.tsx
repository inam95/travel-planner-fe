import { CirclePlusContainer, PlansActionBarContainer } from '../utils/styles';
import { CirclePlus } from 'akar-icons';
import CreatePlanModal from './modals/CreatePlanModal';
import { useState } from 'react';

const PlansActionBar = () => {
  const [showCreatePlanModal, setShowCreatePlanModal] = useState(false);
  return (
    <>
      <PlansActionBarContainer>
        <CirclePlusContainer onClick={() => setShowCreatePlanModal(true)}>
          <CirclePlus />
          <span>Create Plan</span>
        </CirclePlusContainer>
      </PlansActionBarContainer>
      {showCreatePlanModal && (
        <CreatePlanModal setShowModal={setShowCreatePlanModal} />
      )}
    </>
  );
};

export default PlansActionBar;
