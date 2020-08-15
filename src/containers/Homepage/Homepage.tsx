import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Actions as breedActions } from '../../actions/breed';
import { Actions as catActions } from '../../actions/cat';

import * as breedSelectors from '../../selectors/breed';
import * as catSelectors from '../../selectors/cat';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import CatCard from '../../components/CatCard';
import Dropdown from '../../components/Dropdown';

const DEFAULT_PAGE = 1;

interface Props {
  breeds: Breeds,
  loadBreeds: typeof breedActions.loadBreeds,
  cats: Cats,
  loadCats: typeof catActions.loadCats,
  selectedBreedId: SelectedBreedId,
  currentPage: CurrentPage,
  hasMoreCats: HasMoreCats,
  setSelectedBreedId: typeof breedActions.setSelectedBreedId,
  setCurrentPage: typeof catActions.setCurrentPage,
}

export const Homepage = (props: Props) => {
  const {
    breeds,
    loadBreeds,
    cats,
    loadCats,
    selectedBreedId,
    currentPage,
    hasMoreCats,
    setSelectedBreedId,
    setCurrentPage,
  } = props;

  useEffect(() => {
    loadBreeds();
  }, [loadBreeds]);

  const handleSelectBreed = useCallback((id: string) => {
    setSelectedBreedId(id);
    setCurrentPage(DEFAULT_PAGE);
    loadCats(id, currentPage);
  }, [currentPage, loadCats, setCurrentPage, setSelectedBreedId]);

  const location = useLocation();
  useEffect(() => {
    if (!location.search) return;

    const breedId = location.search.replace('?breed=', '');
    handleSelectBreed(breedId);
  }, [location.search, handleSelectBreed]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    loadCats(selectedBreedId, nextPage);
  }

  const hasCats = !!cats.length;
  const showLoadMore = hasCats && hasMoreCats;

  const renderCat = (cat: Cat, idx: number) => <CatCard key={idx} {...cat}/>;
  const renderCats = () => {
    return hasCats ? cats.map(renderCat) : <Col style={{ marginBottom: '20px' }}>No cats available</Col> ;
  }

  return (
    <Card >
      <Card.Body>
        <Card.Title as="h1">Cat Browser</Card.Title>
        <Dropdown title="Breed" selected={selectedBreedId} options={breeds} handleOnChange={handleSelectBreed}/>
        <Row>
          {renderCats()}
        </Row>
        {
          showLoadMore && <Row>
            <Col>
              <Button variant="success" disabled={!hasCats} onClick={handleLoadMore}>Load More</Button>
            </Col>
          </Row>
        }
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state: RootState) => ({
  breeds: breedSelectors.list(state),
  cats: catSelectors.list(state),
  selectedBreedId: breedSelectors.selectedBreedId(state),
  currentPage: catSelectors.currentPage(state),
  hasMoreCats: catSelectors.hasMoreCats(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadBreeds: breedActions.loadBreeds,
      setSelectedBreedId: breedActions.setSelectedBreedId,
      loadCats: catActions.loadCats,
      setCurrentPage: catActions.setCurrentPage,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
