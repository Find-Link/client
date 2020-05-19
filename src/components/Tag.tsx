import React, { ReactElement } from 'react';
import TagsInput from 'react-tagsinput';

export type TagItem = string;

interface Props {
  tags: TagItem[];
  onChange: (newTags: TagItem[]) => void;
}

function Tag({ tags, onChange }: Props): ReactElement {
  return (
    <TagsInput value={tags} onChange={onChange} />
  );
}

export default Tag;
