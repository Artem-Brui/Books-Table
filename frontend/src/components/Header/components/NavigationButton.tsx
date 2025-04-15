import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigateButton: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('dashboard');

  const buttonText = isDashboard ? 'Add new Book' : 'Back to Dashboard';
  const buttonPath = isDashboard ? '/add' : '/dashboard';

  return (
    <button
      className="button 
        is-success
        is-align-self-flex-end
        mb-4"
      onClick={() => navigate(buttonPath)}
    >
      {buttonText}
    </button>
  );
};

export default NavigateButton;