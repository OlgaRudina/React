import React from 'react'
// import Radium from 'radium'
import './Car.css'
import PropTypes from 'prop-types'
import withClass from '../hoc/withClass'

class Car extends React.Component { //stateful component
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus()
        }
    }


    render() {

        // if (Math.random() > 0.7){
        //     throw new Error('Car random failed')
        // }

        const inputClasses = ['input']

        if (this.props.name) {
            inputClasses.push('green')
        }
        else {
            inputClasses.push('red')
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }

        // const style = {   //for Radium
        //     border: '1px solid #ccc',
        //     boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        //     ':hover': {
        //         border: '1px solid #aaa',
        //         boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
        //         cursor: 'pointer'
        //     }
        // }

        return (
            <React.Fragment>
                <h3>Car Name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    ref={this.inputRef}
                    className={inputClasses.join(' ')}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
    index: PropTypes.number,
}

export default withClass(Car, 'Car')