import { WithId } from '../services/utils';
import { PostSchema } from './post.type';

export interface TagSchema extends WithId {
  text: string;
  slug: string;
  posts: PostSchema[];
}
