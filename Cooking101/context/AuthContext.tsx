import React, { useContext, useState, useEffect, ReactNode } from "react"
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

type AuthContextData = {
    currentUser?: FirebaseAuthTypes.User|null;
    loading: boolean;
    signUpOrLogIn(email: string, password: string): Promise<void>;
    logout(): Promise<void>;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData)

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export function AuthProvider({ children }: {children: ReactNode}) {
    const [currentUser, setCurrentUser] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)


    // //   Handle user state changes
    // function onAuthStateChanged(user: any) {
    //     setCurrentUser(user);
    //     console.log('auth state changed! user:', user)
    //     if (loading) setLoading(false);
    // }


    async function signUpOrLogIn(email: string, password: string) {
    try {
        await auth().createUserWithEmailAndPassword(email, password)
        console.log('User account created & signed in!');
    } catch(err: any) {
        if (err.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        }
        if (err.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        }
        console.error(err);
        };
    }

    function logout() {
        return auth().signOut()
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        if (loading) {
            setLoading(false)
        }
        return subscriber
    }, [])

    const value = {
        currentUser,
        loading,
        signUpOrLogIn,
        logout,
    }

    return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
    )
}