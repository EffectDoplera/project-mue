import { User } from 'firebase/auth'
import { createContext, FC, useContext, useState } from 'react'
import { AuthFirebaseService } from '../../core/services/authorize/AuthFirebaseService'

type AuthContext = {
  user: User | null
  login?: any
}

const AuthContext = createContext<AuthContext>({
  user: null,
})

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string) => {
    const authUser = await AuthFirebaseService.login(email, password)

    setUser(authUser ?? null)
  }

  return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
