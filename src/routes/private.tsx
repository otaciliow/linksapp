import { ReactNode, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../services/firebaseconnection';
import { onAuthStateChanged } from 'firebase/auth';

interface IPrivateProps{
    children: ReactNode;
}

export function Private({ children }: IPrivateProps): any {

    const [loading, setLoading] = useState(true);
    const [signed, setsigned] = useState(false);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userData = {
                    uid: user?.uid,
                    email: user?.email,
                }

                localStorage.setItem('@react-linksapp', JSON.stringify(userData));
                setLoading(false);
                setsigned(true);
            } else {
                setLoading(false);
                setsigned(false);
            }
        })

        return () => {
            unsub();
        }

    }, [])

    if (loading) {
        return <></>
    }

    if (!signed) {
        return <Navigate to="/login"/>;
    }

    return children;
}