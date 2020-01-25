import React from 'react';
import TargetContainer from '../containers/TargetContainer';
import ScoreContainer from '../containers/ScoreContainer';
import '../styles/board.scss';

export function Board() {
    return (
        <section className='board'>
            <TargetContainer/>
            <ScoreContainer/>
        </section>
    );
}
