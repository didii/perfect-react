import { HTMLAttributes } from 'react';
import './CardHeader.scss';
import { css } from '../../util/css';

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

function CardHeader({...props}: CardHeaderProps) {
  return (
    <div {...props} className={css('card__header', 'card-header', props.className)} />
  );
}

export default CardHeader;
