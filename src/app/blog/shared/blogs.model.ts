import { BlogModel } from './blog.model';
import { PageModel } from '../../shared/page.model';

export class BlogsModel {
    blogposts: BlogModel[];
    page: PageModel;
}
