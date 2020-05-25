import { WithId } from '../services/utils';
import { PostSchema } from './post.type';

export interface SourceSchema extends WithId {
  text: string;
  link: string;
  posts: PostSchema[];
}
