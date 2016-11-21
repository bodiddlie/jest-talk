import React, {Component, PropTypes} from 'react';


export class LoremList extends Component {
    static propTypes = {
        paragraphCount: PropTypes.number.isRequired
    };

    render() {
        let lorems = [];
        for (let i = 0; i < this.props.paragraphCount; i++) {
            lorems.push(<LoremItem key={i} number={i+1} />);
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

export const LoremItem = ({number}) => (
    <div>
        <h3>Item #{number}</h3>
        <p>Here is some text.</p>
    </div>
);