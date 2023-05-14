import React, { Children } from 'react'

type MainProps = {
  children: React.ReactNode
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

