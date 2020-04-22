import React, {Component} from 'react'

export default class Input extends Component {
    state = {
        term: '',
    };
    constructor(props) {
        super(props);
        this.state = { ...props.value };
    }
    onChangeHandler = (ev) => {
        const { value, name } = ev.target;
        this.setState({ [name]: value }, () => {
            this.props.onInput({ ...this.state });
        });
    };
    render() {
        const {name} = this.props
        return (
            <form>
                {/* <h3>{name.charAt(0).toUpperCase() + name.substring(1) + ': '}</h3> */}
                <input
                    type="text"
                    placeholder={name.charAt(0).toUpperCase() + name.substring(1) + '...'}
                    onChange={this.onChangeHandler}
                    name={name}
                    value={this.props.value}
                />
            </form>
        );
    }
}