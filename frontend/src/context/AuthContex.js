'use client'
import API from '@/services/API';
import { createContext, useContext, useEffect, useReducer } from 'react';

const AuthContex = createContext();
const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
}
const authReducer = (state, action) => {
    switch (action.type) {
        case 'loading': {
            return {
                ...state,
                isLoading: true,
            }
        }
        case 'signin': {
            return {
                user: action.payload,
                isAuthenticated: true,
                isLoading: false,
            }
        }
        case 'load/userData': {
            return {
                user: action.payload,
                isAuthenticated: true,
                isLoading: false,
            }
        }
        case 'rejected': {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        case 'logout': {
            return initialState
        }
        default: return state
    }
}
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    useEffect(() => {
        const getUserApi = async () => {
            dispatch({ type: 'loading' })
            try {
                const { data: { data } } = await API.get('/user/profile');
                dispatch({ type: 'load/userData', payload: data?.user })
            } catch (error) {
                dispatch({type:'rejected',payload:error?.response?.data?.message})
                console.log(error);
            }
        }
        getUserApi()
    }, [])
    return (
        <AuthContex.Provider value={{ state, dispatch }}>
            {children}
        </AuthContex.Provider>
    );
}
export default AuthProvider;

export const useAuth = () => {
    const context = useContext(AuthContex);
    if (context === undefined) throw new Error('not found Auth Context');
    return context;
}
