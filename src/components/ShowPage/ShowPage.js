// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

import React, { Component } from 'react'
import { connect } from "react-redux";

import { showRequest } from "./../../actions/show";
import styles from "./ShowPage.module.css"

const Person = ({ person: {name, image} }) => {
    return (
        <div className="t-person">
            <p>{name}</p>
            {
                image && <img src={image.medium} alt={name} className={styles.img}/>
            }
        </div>
    )
}

class ShowPage extends Component {
    componentDidMount() {
        const { match: { params: {id} }, showRequest } = this.props

        showRequest(id)
    }

    render() {
        const { isLoading } = this.props
        if ( isLoading ) {
            return <p>Идет загрузка</p>
        }

        const { showInfo: { name, image, summary, _embedded: { cast } }} = this.props

        return (
            <div>
                <p>{ name }</p>

                { image && <img src={ image.original } alt={ name }/> }

                <div dangerouslySetInnerHTML={{ __html: summary }}></div>

                { 
                    cast.length && 
                    <div className={styles.cast}>
                    {
                        cast.map(({person, person: { id }}) => {
                            return <Person key={id} person={ person }/>
                        })
                    }
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ shows: { showInfo, isLoading } }) => ({ showInfo, isLoading })
const mapDispatchToProps = { showRequest };

export default connect( mapStateToProps, mapDispatchToProps )( ShowPage )