import { ButtonHTMLAttributes } from 'react';


import { Icon } from './Icon';
import { styled } from '../../stitches.config';




interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

export function Button({ iconName, title, selected, ...rest }: ButtonProps) {

  const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    maxWidth: '20rem',
    width: '100%',

    border: 0,
    background: '$backgroundButton',
    padding: '1.1875rem 2rem',
    borderRadius: '0.25rem',

    fontSize: '1.125rem',
    color: '$white',

    '&:hover': {
      background: '$backgroundButton2'
    },

    transition: 'background 200ms',


    '& + button': {
      marginTop: '1rem'
    },

    '&.selected': {
      background: '$backgroundButton2',
      color: '$yellow'
    }


  })
  return (
    <Button type="button"  {...selected && { className: "selected" }} {...rest}>
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </Button>
  );
}