import { create } from 'zustand'
type loggedInState = {
  loggedIn: boolean
}

const useLoggedIn = create<loggedInState>()((set) => ({
  loggedIn: false,
}))

export default useLoggedIn
