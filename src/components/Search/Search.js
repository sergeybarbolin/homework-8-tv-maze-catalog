// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { searchRequest } from './../../actions/search';
import ShowPreview from './../ShowPreview';

import styles from './Search.module.css';

class Search extends Component {
    state = { value: '' }

    onChange = e => this.setState({ value: e.target.value })

    onSubmit = () => {
        const { value } = this.state
        const { searchRequest } = this.props

        value && searchRequest(value)
    }

    render() {
        const { shows, isLoading } = this.props

        return (
            <Fragment>
                <div className={ styles.previewList }>
                    <input
                        className={ styles.input }
                        type="text"
                        placeholder="Название сериала"
                        onChange={ this.onChange }
                    />

                    <div className={ styles.buttonWrapper }>
                        <button
                            className={ `${styles.button} t-search-button` }
                            onClick={ this.onSubmit }
                        >
                            Найти
                        </button>
                    </div>

                    { isLoading && <div>Идет поиск</div> }
                </div>
                <div className={ styles.searchPanel }>
                    { 
                        shows.map(({ image, name, id, summary }) => (
                            <ShowPreview
                                key={id}
                                image={image}
                                name={name}
                                id={id}
                                summary={summary}
                            />
                        )) 
                    }
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ search: { shows, isLoading } }) => ({ shows, isLoading });
const mapDispatchToProps = { searchRequest };

export default connect( mapStateToProps, mapDispatchToProps )( Search );