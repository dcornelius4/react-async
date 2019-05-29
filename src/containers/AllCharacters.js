import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import Loading from '../components/Loader';
import Paging from '../components/Paging';
import { getCharacters } from '../services/rickAndMortyApi';

export default class AllCharacters extends PureComponent {
  state = {
    currentPage: 1,
    totalPages: 1,
    characters: [],
    loading: true
  }

  fetchCharacters = () => {
    this.setState({ loading: true });
    getCharacters(this.state.currentPage)
      .then(({ totalPages, characters }) => this.setState({
        totalPages,
        characters,
        loading: false }));
  }

  nextPage = page => {
    this.setState({ currentPage: page });
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentPage !== this.state.currentPage) {
      this.fetchCharacters();
    }
  }

  render() {
    const {
      currentPage,
      totalPages,
      characters,
      loading } = this.state;
    if(loading) return <Loading />;

    return (
      <Paging currentPage={currentPage} totalPages={totalPages} nextPage={this.nextPage}>
        <Characters characters={characters} />;
      </Paging>
    );
  }
}
