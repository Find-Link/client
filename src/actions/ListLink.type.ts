import { LinkSchema } from './Link.type';
import { PostSchema } from './post.type';
import { WithId } from '../services/utils';

export interface ListLinkSchema extends WithId {
  title: string;
  links: LinkSchema[];
  post: PostSchema;
}
