import { useNavigate } from 'react-router-dom';
import AgeGate from '../../components/mobile/AgeGate';

const AgeVerification = () => {
  const navigate = useNavigate();

  const handleAgeVerify = (isAdult) => {
    if (isAdult) {
      navigate('/vehicle-loan/loan-products');
    } else {
      navigate('/vehicle-loan/under-18');
    }
  };

  return <AgeGate onVerify={handleAgeVerify} />;
};

export default AgeVerification;