import React, { Component } from 'react';
import { Title } from '../../atoms/Title/Title';
import styled from 'styled-components';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';

const NoteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h3,
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 20px;
  left: -40px;
`;

class Note extends Component {
  render() {
    return (
      <NoteWrapper>
        <Title>Title</Title>
        <p>
          Ea saepe laborum repellendus aut voluptates qui. Suscipit minima enim occaecati. Soluta nemo deleniti. Ratione eum repellat reprehenderit.
          Ad qui inventore. Rerum et officiis. Rerum inventore dolorem aut eligendi incidunt.{' '}
        </p>
        <StyledDeleteButton />
      </NoteWrapper>
    );
  }
}

export default Note;
