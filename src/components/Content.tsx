import { useEffect, useState, useContext } from 'react';
import { AxiosInstance } from 'axios'

import { MovieCard } from './MovieCard';


import { styled } from '../../stitches.config';
import { GenreContext } from '../context/genre'


interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  api: AxiosInstance;
}


const Container = styled('div', {
  maxWidth: '52.5rem',
  width: '100%',
  margin: '0 auto'
})

const Header = styled('header', {
  '& span': {
    color: '$white', //  token defined in stitches.config
  },
  '& span.category': {
    display: 'block',
    marginTop: '2rem',
    fontSize: '2.25rem',
    fontWeight: 600,
    color: '$gray'
  }

})

const Main = styled('main', {
  width: '100%',
  marginTop: ' 5.625rem',

  '& .movies-list': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '4.75rem',
    listStyle: 'none'
  }
})


export function Content({ api }: ContentProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

  const genreContext = useContext(GenreContext)

  useEffect(() => {
    api.get<Movie[]>(`movies/?Genre_id=${genreContext.selectedGenre.id}`)
      .then(response => {
        setMovies(response.data);
      });
  }, [genreContext.selectedGenre.id]);

  return (
    <Container>
      <Header>
        <span className="category">Categoria:<span> {genreContext.selectedGenre.title}</span></span>
      </Header>

      <Main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </Main>
    </Container>
  )
}