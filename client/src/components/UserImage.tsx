import styled from "@emotion/styled";

type userImageProps = {
  imageWidth: number;
  spacingTop?: number;
};

const UserImage = styled("img")<userImageProps>`
  width: ${({ imageWidth }) => imageWidth}px;
  border-radius: 50%;
  ${({ spacingTop }) => (spacingTop ? `margin-top:${spacingTop}px` : "")};
`;

export default UserImage;
