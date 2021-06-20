

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { GenreProvider } from './context/genre'

import { api } from './services/api';





export function App() {
  return (
    <GenreProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar api={api} />
        <Content api={api} />
      </div>
    </GenreProvider>
  )
}