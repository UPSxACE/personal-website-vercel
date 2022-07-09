import styled from "styled-components";

export function ProfilePicture() {
  return (
    <PictureDiv>
      <PictureBase src="" />
    </PictureDiv>
  );
}

const PictureBase = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px;
  background-color: black;
`;

const PictureDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
