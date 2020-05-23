import { CommentSchema } from './Comment.type';
import { TagSchema } from './Tag.type';
import { SourceSchema } from './Source.type';
import { ListLinkSchema } from './ListLink.type';
import { WithId } from '../services/utils';

enum Post {
  ADD_POST = 'ADD_POST',
}

export interface PostSchema extends WithId {
  title: string;
  thumbnail: string;
  description: string;
  listLinks: ListLinkSchema[];
  sources: SourceSchema[];
  tags: TagSchema[];
  category: 'movie' | 'game' | 'application' |'manga';
  comments: CommentSchema[];
}

// export type AddPost = CardState & CreationState;

// export type PostSchema = CardState & CreationState;

export default Post;
