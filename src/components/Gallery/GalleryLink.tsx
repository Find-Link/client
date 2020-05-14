import React, { memo, ReactElement } from 'react';
import Link from 'next/link';

interface ImageLink {
  image: string;
  link: string;
}

interface Props {
  data: ImageLink[];
}

function GalleryLink({ data }: Props): ReactElement {
  const renderImages = (): ReactElement[] => data.map(({ image, link }, index) => (
    <Link key={`${index}-${image}`} href={link}>
      <a>
        <img src={image} alt="Gallery" />
      </a>
    </Link>
  ));

  return (
    <div className="gallery-link">
      {renderImages()}
    </div>
  );
}

export default memo(GalleryLink);
