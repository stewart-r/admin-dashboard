import { IAuthor } from './author';

export interface IBlogPostViewModel {
    author: IAuthor;
    id: number;
    title: string;
    body: string;
}
