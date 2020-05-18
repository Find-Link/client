import React, { useState, ReactElement } from 'react';
import TagsInput from 'react-tagsinput';

function Tag(): ReactElement {
  const [tags, setTags] = useState([]);

  const onChange = (tag: any): void => {
    console.log(tag);
    setTags(tag);
  };

  return (
    <TagsInput value={tags} onChange={onChange} />
  );
}

export default Tag;
