import { useContext } from 'react'
import { AuthContext } from 'src/contexts/auth/authContext'

export const useAuth = () => useContext(AuthContext)
