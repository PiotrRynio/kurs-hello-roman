import React from 'react';
import styled from 'styled-components';
import FormField from '../components/molecules/FormField/FormField';
import { Button } from '../components/atoms/Button/Button';
import { useSelector } from 'react-redux';
import Note from '../components/molecules/Note/Note';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-gap: 30px;
  padding: 30px;
`;

// background: ${({theme}) => theme.color.white};
const FormWrapper = styled.div`
  padding: 20px;
  border-radius: 25px;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledFormField = styled(FormField)`
  width: 100%;
  height: ${({ isTextarea }) => (isTextarea ? '300px' : 'unset')};
`;

const NotesWrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
`;

export const Notes = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <Wrapper>
      {/*{console.log(notes)}*/}
      <FormWrapper>
        <StyledFormField label="Title" name="title" id="title" />
        <StyledFormField isTextarea label="Content" name="content" id="content" />

        <Button>Add</Button>
      </FormWrapper>

      <NotesWrapper>
        {notes.length ? notes.map(({ content, title, id }) => <Note key={id} title={title} content={content} />) : <p>Create your first note!</p>}
      </NotesWrapper>
    </Wrapper>
  );
};
