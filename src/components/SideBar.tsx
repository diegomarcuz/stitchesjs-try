import { useEffect, useState, useContext } from 'react';
import { AxiosInstance } from 'axios'
import { styled } from '../../stitches.config'
import { Button } from './Button';
import { GenreContext } from '../context/genre'


interface SideBarProps {
  api: AxiosInstance;
}

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '24rem',
  width: '100%',
  padding: '2rem',
  background: '&background2',

  '& > span': {
    marginBottom: '4.5rem',
    fontSize: '3rem',
    fontWeight: 600,
    color: '$yellow',

    p: {
      display: 'inline',
      color: '$white'
    }
  }
})
const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
})



export function SideBar({ api }: SideBarProps) {
  const [genres, setGenres] = useState<Genre[]>([]);

  const genreContext = useContext(GenreContext)

  useEffect(() => {
    api.get<Genre[]>('genres')
      .then(response => {
        setGenres(response.data);
      })
  }, [])


  return (
    <Nav>

      <span>Watch<p>Me</p></span>

      <ButtonContainer>
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => genreContext.setSelectedGenre(genre)}
            selected={genreContext.selectedGenre.id === genre.id}
          />
        ))}
      </ButtonContainer>
    </Nav>

  )
}