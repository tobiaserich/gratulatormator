import React from "react";
import styled from "@emotion/styled";

type userImageProps = {
  src: string;
  imageWidth: number;
  spacingTop?: number;
};
type imageProps = {
  imageWidth: number;
  spacingTop?: number;
};

type placeholderProps = {
  containerWidth: number;
};

const Image = styled("img")<imageProps>`
  width: ${({ imageWidth }) => imageWidth}px;
  border-radius: 50%;
  ${({ spacingTop }) => (spacingTop ? `margin-top:${spacingTop}px` : "")};
`;

const ImgPlaceholder = styled("div")<placeholderProps>`
  width: ${({ containerWidth }) => containerWidth + "px"};
  height: ${({ containerWidth }) => containerWidth + "px"};
`;

const UserImage: React.FC<userImageProps> = ({
  src,
  imageWidth,
  spacingTop,
}) => {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <>
      <ImgPlaceholder containerWidth={imageWidth}>
        <Image
          src={src}
          imageWidth={imageWidth}
          spacingTop={spacingTop}
          onLoad={() => setImgLoaded(true)}
        />
      </ImgPlaceholder>
    </>
  );
};
export default UserImage;
