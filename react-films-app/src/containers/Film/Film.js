import React, { Component } from 'react'
import { fetchFilmById } from '../../redux/actions/actions'
import { connect } from 'react-redux'
import Card from '../Card/Card'


class Film extends Component {

    componentDidMount() {
        this.props.fetchFilmById(this.props.match.params.id)
    }



    render() {

        const film = this.props.film
        console.log(film)
        return (

            <div>
                 {film === null 
                 ? 'Loading' 
                 : <Card key={film.id} film={film} showButton = {false}></Card>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        film: state.film,
        loading: state.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFilmById: id => dispatch(fetchFilmById(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Film)