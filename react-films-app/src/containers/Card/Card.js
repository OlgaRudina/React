import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Card.module.css'


export default class Card extends Component {

    render() {

        const film = this.props.film

        return(

        <div className={film.director === 'Hayao Miyazaki'? `${classes.special} ${classes.Card}` : classes.Card}>
            <div>
                <h5 className="card-title">{film.title}</h5>
                <div className={classes.details}>
                    {this.props.showButton 
                    ? <NavLink className="btn btn-primary" to={'/film/' + film.id}>Open</NavLink>
                    : <NavLink className="btn btn-primary" to={'/' }>Go back</NavLink>}
                    
                </div>
            </div>
        </div>
        )
    }

}
