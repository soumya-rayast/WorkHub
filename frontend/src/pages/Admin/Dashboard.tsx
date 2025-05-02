import React, { useContext } from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'
import { UserContext } from '../../context/userContext';
import DashboardLayout from '../../components/Layouts/DashboardLayout';

const Dashboard = () => {
  useUserAuth();

  const { user } = useContext(UserContext);
  
  return (
    <DashboardLayout>

    </DashboardLayout>
  )
}

export default Dashboard
