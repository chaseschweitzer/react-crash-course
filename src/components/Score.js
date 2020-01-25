import React from 'react';
import '../styles/score.scss';

export function Score(props) {
    return (
        <span className='score'>{props.score}</span>
    );
}
