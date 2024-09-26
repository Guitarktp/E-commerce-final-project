import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../utils/axiosInstance";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const token = queryParams.get('token');

      if (token) {
        try {
          const response = await axiosInstance.get(`/users/verify-email?token=${token}`);
          const { access_token } = response.data;
          localStorage.setItem('token', access_token);
          navigate('/uploadprofile');
        } catch (error) {
          console.error('Error verifying email:', error);
        }
      }
    };

    verifyEmail();
  }, [navigate]);

  return (
    <div>
      <h1>Verifying your email...</h1>
    </div>
  );
};

export default Dashboard;
