import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Loader } from "@mantine/core";

import { useAuth } from '../contexts/AuthContext';

export default function Logout() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        logout();
        navigate('/signin');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <center><Loader /></center>;
}