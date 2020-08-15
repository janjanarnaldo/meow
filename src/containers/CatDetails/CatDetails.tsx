import React, { useEffect } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Actions as catActions } from '../../actions/cat';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import * as catSelectors from '../../selectors/cat';

interface MatchParams {
  catId: string;
}

interface Props extends RouteComponentProps<MatchParams>{
  cat: Cat | null;
  loadCat: typeof catActions.loadCat;
}

export const CatDetails = (props: Props) => {
  const { cat, loadCat } = props;
  const { url, breedId, breedName, breedOrigin, breedTemperament, breedDescription } = cat || {};
  const { catId } = useParams();

  useEffect(() => {
    catId && loadCat(catId);
  }, [catId, loadCat]);

  return (
    <Card style={{ marginBottom: '20px' }}>
      <Card.Header>
        <Button variant="primary" href={`/?breed=${breedId}`}>Back</Button>
      </Card.Header>
      <Card.Img src={url} />
      <Card.Body>
        <h4>{breedName}</h4>
        <h5>Origin: {breedOrigin}</h5>
        <h6>{breedTemperament}</h6>
        <p>{breedDescription}</p>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = (state: RootState) => ({
  cat: catSelectors.working(state),
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadCat: catActions.loadCat,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(CatDetails)
