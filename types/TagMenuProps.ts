import { TagList } from '@/types';

export interface TagMenuProps {
  chosenTags: TagList[] | undefined;
  onClick: (tag: TagList) => void;
  tagList: TagList[];
  tagTitles: string[];
}
