import React, { useState } from 'react';
import styled from 'styled-components';
import Note from '../../molecules/Note/Note';

const Wrapper = styled.div`
  width: 400px;
  height: auto;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : ' translateX(400px)')};
  transition: transform 0.6s ease-in-out;
  position: absolute;
  right: 0;
  top: 40px;
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

const WidgetHandler = styled.button`
  width: 80px;
  height: 30px;
  max-height: 700px;

  background-color: ${({ theme }) => theme.colors.darkGrey};
  transform: rotate(-90deg);
  position: absolute;
  left: -55px;
  border-radius: 8px 8px 0 0;
  top: 40px;
  color: white;
  border: none;
`;

const NotesWrapper = styled.div`
  overflow-y: scroll;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}> notes </WidgetHandler>
      <NotesWrapper>
        <Note />
        <Note />
        <Note />
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;
