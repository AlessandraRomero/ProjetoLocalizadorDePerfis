import { useState } from 'react'
import { CardUser } from './components/CardUser'
import { FormPerfil } from './components/FormPerfil'
import { HeaderApp } from './components/HeaderApp'
import { List } from './components/List'

export default  function App() {
  return (
    <div>
      <FormPerfil />
      <List/>
    </div>
  )
}

