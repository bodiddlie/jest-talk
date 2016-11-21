import React, {Component, PropTypes} from 'react';

export class LoremList extends Component {
    static propTypes = {
        paragraphCount: PropTypes.number.isRequired
    };

    render() {
        let lorems = [];
        for (let i = 0; i < this.props.paragraphCount; i++) {
            lorems.push(<LoremItem/>);
        }
        return (
            <div>
                {lorems}
            </div>
        )
    }
}

export const LoremItem = () => (
    <p>Here is some text</p>
);