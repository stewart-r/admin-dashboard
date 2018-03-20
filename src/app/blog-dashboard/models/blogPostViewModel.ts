import { IAuthor } from './author';

type PostId = number | 'new';

export interface IBlogPostViewModel {
    author: IAuthor;
    id: PostId;
    title: string;
    body: string;
}
