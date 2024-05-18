'use client'

import React, {createContext, Dispatch, useContext, useReducer} from 'react'

type Config = {
  darkMode: boolean
  isLoggedIn: boolean
  userId: string|null
  password: string|null
  email: string|null
}
const initConfig: Config = {
  darkMode: false,
  isLoggedIn: false,
  userId: null,
  password: null,
  email: null,
}
interface IContext {
  config: Config
  dispatch: Dispatch<IAction>
}
const GlobalConfigContext = createContext<IContext>({
  config: initConfig, dispatch: () => {}
})

interface Prop{
  children: React.ReactNode
}
export default function GlobalConfigProvider({ children }: Prop) {
  const [config, dispatch] = useReducer(configReducer, initConfig)

  const value = { config, dispatch }
  return (
    <GlobalConfigContext.Provider value={value}>
      {children}
    </GlobalConfigContext.Provider>
  )
}

function configReducer(config: Config, action:IAction){
  switch (action.type) {
    case ActionType.DARK_MODE_TOGGLED: {
      return { ...config, darkMode: !config.darkMode }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
enum ActionType {
  DARK_MODE_TOGGLED = 'dark_mode_toggled',
  USER_LOGGED_IN = 'user_logged_in',
  EMAIL_CHANGED = 'email_changed',
}
type IAction = {
  type: ActionType
  userId?: string

}

export function useGlobalConfig() {
  return useContext(GlobalConfigContext)
}

// Actions
const toggleDarkMode = (dispatch: Dispatch<IAction>) =>
  dispatch({type: ActionType.DARK_MODE_TOGGLED})
export { toggleDarkMode }