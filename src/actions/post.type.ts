import { Action, WithId } from '../services/utils';
import { CommentSchema } from './Comment.type';
import { TagSchema } from './Tag.type';
import { SourceSchema } from './Source.type';
import { ListLinkSchema } from './ListLink.type';

enum Post {
  ADD_POST = 'ADD_POST',
  LIST_POST = 'LIST_POST',
}

export type Category = 'movie' | 'game' | 'application' |'manga';

const postDefs = `
  _id
  title
  thumbnail
  description
  listLinks {
    _id
    title
    links {
      _id
      text
      link
    }
  }
  sources {
    _id
    text
    link
  }
  tags {
    _id
    text
    slug
  }
  category
`;

export interface PostSchema extends WithId {
  title: string;
  thumbnail: string;
  description: string;
  listLinks: ListLinkSchema[];
  sources: SourceSchema[];
  tags: TagSchema[];
  category: Category;
  comments: CommentSchema[];
}

// export type AddPost = CardState & CreationState;

// export type PostSchema = CardState & CreationState;
export type AddPostAction = Action<Post.ADD_POST, PostSchema>;
export type ListPostAction = Action<Post.LIST_POST, PostSchema[]>;

export default Post;

export { postDefs };
