import { createContext, useContext, useState } from "react";

const CountdownContext = createContext()

export function CountdownProvider({ children }) {
  const [sprints, setSprints] = useState(() => {
    const valueLocalStorage = localStorage.getItem('sprint')

    if (valueLocalStorage) {
      return JSON.parse(valueLocalStorage);
    }
    
    return []
  })

  const addMoreOneSprintLocalStorage = (time) => {
    const updatedStorage = [...sprints];
    updatedStorage.push({
      valueTime: time,
      sprint: 1
    })
    
    setSprints(updatedStorage)
    localStorage.setItem('sprint', JSON.stringify(updatedStorage))
  }

  const clearLocalStorage = () => {
    localStorage.clear('sprint')
    window.alert('Histórico limpo com sucesso!')
  }

  return (
    <CountdownContext.Provider value={{ sprints, setSprints, addMoreOneSprintLocalStorage, clearLocalStorage }}>
      {children}
    </CountdownContext.Provider>
  )
}

export function useCountdown() {
  const context = useContext(CountdownContext)

  return context
}
