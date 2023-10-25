import { HTMLAttributes } from 'react';
import './Card.scss';
import { css } from '../../util/css';
import CardHeader from './CardHeader';
import CardContent from './CardContent';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

function Card({...props}: CardProps) {
  return <div {...props} className={css('card', props.className)} />;
}

Card.Header = CardHeader;
Card.Content = CardContent;

export default Card;
