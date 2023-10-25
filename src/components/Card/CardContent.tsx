import { HTMLAttributes } from 'react';
import './CardContent.scss';
import { css } from '../../util/css';

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  
}

function CardContent({...props}: CardContentProps) {
  return <div {...props} className={css('card__content card-content', props.className)} />;
}

export default CardContent;
