import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Actions as breedActions } from '../../actions/breed';
import { Actions as catActions } from '../../actions/cat';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import CatCard from '../../components/CatCard';
import Dropdown from '../../components/Dropdown';

const DEFAULT_PAGE = 1;

export const Homepage = (props: any) => {
  const { breeds, loadBreeds, cats, loadCats } = props;
  const [selectedBreed, setSelectedBreed] = useState(''); // todo get breedid from url
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

  useEffect(() => {
    loadBreeds();
  }, [loadBreeds]);

  const handleSelectBreed = (id: string) => {
    setSelectedBreed(id);
    setCurrentPage(DEFAULT_PAGE);
    loadCats(id, currentPage);
  }

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    loadCats(selectedBreed, nextPage);
  }

  const hasCats = !!cats.length;
  const hasMoreCats = hasCats && true; // todo use a prop to see more cats

  const renderCat = (cat: Cat, idx: number) => <CatCard key={idx} {...cat}/>;
  const renderCats = () => {
    return hasCats ? cats.map(renderCat) : <Col style={{ marginBottom: '20px' }}>No cats available</Col> ;
  }

  return (
    <Card >
      <Card.Body>
        <Card.Title as="h1">Cat Browser</Card.Title>
        <Dropdown title="Breed" selected={selectedBreed} options={breeds} handleOnChange={handleSelectBreed}/>
        <Row>
          {renderCats()}
        </Row>
        {
          hasMoreCats && <Row>
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
  breeds: state.breed,
  cats: state.cat,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadBreeds: breedActions.loadBreeds,
      loadCats: catActions.loadCats,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
