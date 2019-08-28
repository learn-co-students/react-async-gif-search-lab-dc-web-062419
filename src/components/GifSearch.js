import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: none;
  text-align: center;
  border-bottom: 1px solid black;

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  background: #fff;
  border: 1px solid black;

  :hover {
    background: #000;
    color: white;
    border-radius: 5px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  height: 100px;
`;

export default class GifSearch extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Input
          type="text"
          value={this.props.serachTerm}
          onChange={this.props.handleChange}
          placeholder="Serach Gifs"
        />
        <Button type="submit">Find Gifs</Button>
      </Form>
    );
  }
}
