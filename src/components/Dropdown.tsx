import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

interface Props {
  title: string;
  selected: Option['id'];
  options: [];
  handleOnChange(value: Option['id']): void;
}

interface Option {
  id: string | number;
  name: string;
}

export default function Dropdown(props: Props) {
  const { title, selected, options, handleOnChange } = props;
  const renderOption = (option: Option, idx: number) => <option key={idx} value={option.id}>{option.name}</option>;

  const selectPlaceholder = { id: '', name: `Select ${title}` };
  return (
    <Row style={{ padding: '10px 0px' }}>
      <Col md={3} sm={6}>
        <Form.Group controlId="form.Select">
          <Form.Label>{title}</Form.Label>
          <Form.Control as="select" value={selected} onChange={e => handleOnChange(e.target.value)}>
            {[selectPlaceholder, ...options].map(renderOption)}
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>
  )
}
