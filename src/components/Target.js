import React from 'react';
import Chance from 'chance';
import '../styles/target.scss';

const chance = new Chance();

export class Target extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x: chance.d100(),
            y: chance.d100()
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            x: chance.d100(),
            y: chance.d100()
        });

        this.props.hit();
    }

    render() {
        return (
            <div className='target' style={{
                top: `${this.state.y}vh`,
                left: `${this.state.x}vw`
            }} onClick={this.onClick}/>
        )
    }
}
