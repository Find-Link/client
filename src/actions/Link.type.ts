import { ListLinkSchema } from './ListLink.type';
import { WithId } from '../services/utils';

export interface LinkSchema extends WithId {
  text: string;
  link: string;
  listLink: ListLinkSchema;
}
