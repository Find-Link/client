import React, { memo, ReactElement } from 'react';
import { Row } from 'react-bootstrap';

import CardLinkItem from './CardLinkItem';
import { Category, PostSchema } from '../../actions/post.type';

interface Props {
  category: Category;
  data: PostSchema[];
}

function CardLink({ category, data }: Props): ReactElement {
  const renderItems = data.filter((card) => category === card.category).map(({
    _id, title, thumbnail, listLinks, sources, tags,
  }) => (
    <CardLinkItem
      key={_id}
      title={title}
      thumbnail={thumbnail}
      listLinks={listLinks}
      sources={sources}
      tags={tags}
      editable={false}
    />
  ));

  return (
    <div className="card-link">
      <h2 className="card-link-title">{category}</h2>
      <Row>
        {renderItems}
      </Row>
    </div>
  );
}

// const fetchCardLinkData = (): CardLinkData => {
//   const res: CardLinkData = [...Array(5)].map(() => ({
//     _id: faker.random.uuid(),
//     title: faker.name.firstName(),
//     thumbnail: faker.image.image(),
//     listLinks: [...Array(2)].map(() => ({
//       _id: faker.random.uuid(),
//       title: faker.name.firstName(),
//       links: [...Array(2)].map(() => ({
//         _id: faker.random.uuid(),
//         text: faker.name.firstName(),
//         link: faker.internet.url(),
//       })),
//     })),
//     sources: [],
//     tags: [],
//     editable: true,
//   }));

//   return res;
// };

// export { fetchCardLinkData };

export default memo(CardLink);
