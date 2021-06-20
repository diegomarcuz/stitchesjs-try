import { Star, Clock } from 'react-feather';
import { styled } from '../../stitches.config';

// import '../styles/movie-card.scss';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

const MovieCardContainer = styled('div', {
  position: 'relative',
})
const MovieCardImage = styled('img', {
  width: '14.31rem',
  height: '21.25rem'
})

const MovieCardMeta = styled('div', {
  position: 'absolute',
  inset: '0',

  display: 'flex',
  justifyContent: 'center',

  background: 'rgba(31, 34, 41, 0.5)',

  '> div': {
    maxWidth: '12.31rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    '> span': {
      fontWeight: 600,
      fontSize: '1rem',
      color: '$white',
      marginTop: 'auto',
      marginBottom: '0.5rem'
    },

    '.specs': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',

      marginBottom: '1rem',

      'div': {
        display: 'flex',
        alignitems: 'center',

        fontWeight: 600,
        color: '$gray',

        'svg': {
          color: '$yellow',
          marginRight: '0.5rem'
        }
      }
    }
  },

})

export function MovieCard(props: MovieCardProps) {
  return (
    <MovieCardContainer>
      <MovieCardImage
        src={props.poster}
        alt={props.title}
      />

      <MovieCardMeta>
        <div>
          <span>{props.title}</span>
          <div className="specs">
            <div>
              <Star /> {props.rating}
            </div>

            <div>
              <Clock /> {props.runtime}
            </div>
          </div>
        </div>
      </MovieCardMeta>
    </MovieCardContainer>
  )
}