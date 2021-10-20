import { createContext } from "react";

export const context = createContext(null)

export default function UserStore({children}) {
  const user = {
    printConsole: (value) => console.log(value),
    name: 'jjm',
    age: 26,
    city: 'goyang',
  }

  return (
    <context.Provider value={user}>{children}</context.Provider>
  )
}
