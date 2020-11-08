import React, { Component } from 'react'
import { fetchFilms } from '../../redux/actions/actions'
import { connect } from 'react-redux'
import Card from '../Card/Card';



class FilmsList extends Component {

    renderFilms() {
        return this.props.films.map((film) => {
            console.log(film)
            return (
                    <Card key={film.id} film={film} showButton = {true}/>
            )
        })
    }

    componentDidMount() {
        this.props.fetchFilms()
    }

    render() {
        return (
            <div>
                {this.renderFilms()}
            </div>

        )
    }
}


function mapStateToProps(state) {
    return {
        films: state.films,
        loading: state.loading
    }

}

function mapDispatchToProps(dispatch) {
    return {
        fetchFilms: () => dispatch(fetchFilms()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FilmsList)