import React, {Component, PropTypes} from 'react';

const styles = [
    { backgroundColor: 'PapayaWhip' },
    { backgroundColor: 'Orchid' },
    { backgroundColor: 'DodgerBlue' },
    { backgroundColor: 'FireBrick' },
    { backgroundColor: 'Goldenrod' },
];

export class LoremList extends Component {
    static propTypes = {
        paragraphCount: PropTypes.number.isRequired,
    };

    render() {
        let lorems = [];
        for (let i = 0; i < this.props.paragraphCount; i++) {
            lorems.push(<LoremItem key={i} number={i+1} color={styles[i % 5]} />);
        }
        return (
            <div>
                <div>
                {lorems}
                </div>
            </div>
        )
    }
}

export const LoremItem = ({number, color}) => (
    <div>
        <h3>Item #{number}</h3>
        <p style={color}>Here is some text.</p>
    </div>
);