import { useState } from 'react'
import { CardUser } from './components/CardUser'
import { FormPerfil } from './components/FormPerfil'
import { HeaderApp } from './components/HeaderApp'
import { AppContainer } from './AppStyle'

export default  function App() {
  return (
    <AppContainer>
      <HeaderApp />
      <FormPerfil />
    </AppContainer>
  )
}

