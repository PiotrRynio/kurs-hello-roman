import React from 'react';
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

const Note = ({ title = 'untitled', content = 'No content' }) => {
  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton />
    </NoteWrapper>
  );
};

export default Note;
