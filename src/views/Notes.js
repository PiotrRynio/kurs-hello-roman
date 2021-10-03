import React from 'react';
import styled from 'styled-components';
import FormField from '../components/molecules/FormField/FormField';
import { Button } from '../components/atoms/Button/Button';
import { Title } from '../components/atoms/Title/Title';
import DeleteButton from '../components/atoms/DeleteButton/DeleteButton';

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

export const Notes = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <StyledFormField label="Title" name="title" id="title" />
        <StyledFormField isTextarea label="Content" name="content" id="content" />

        <Button>Add</Button>
      </FormWrapper>

      <NotesWrapper>
        <NoteWrapper>
          <Title>Title</Title>
          <p>
            Ea saepe laborum repellendus aut voluptates qui. Suscipit minima enim occaecati. Soluta nemo deleniti. Ratione eum repellat reprehenderit.
            Ad qui inventore. Rerum et officiis. Rerum inventore dolorem aut eligendi incidunt.{' '}
          </p>
          <StyledDeleteButton />
        </NoteWrapper>

        <NoteWrapper>
          <Title>Title</Title>
          <p>
            Ea saepe laborum repellendus aut voluptates qui. Suscipit minima enim occaecati. Soluta nemo deleniti. Ratione eum repellat reprehenderit.
            Ad qui inventore. Rerum et officiis. Rerum inventore dolorem aut eligendi incidunt.{' '}
          </p>
          <StyledDeleteButton />
        </NoteWrapper>

        <NoteWrapper>
          <Title>Title</Title>
          <p>
            Ea saepe laborum repellendus aut voluptates qui. Suscipit minima enim occaecati. Soluta nemo deleniti. Ratione eum repellat reprehenderit.
            Ad qui inventore. Rerum et officiis. Rerum inventore dolorem aut eligendi incidunt.{' '}
          </p>
          <StyledDeleteButton />
        </NoteWrapper>
      </NotesWrapper>
    </Wrapper>
  );
};
// {/*<Input name={name} id={id} type={type} value={value} onChange={onChange}  data-testid={label} ref={ref} />*/}
