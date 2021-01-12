import { RepositoryEntity } from '@/models/Repository';

export default class MainState {
    public page: number = 1;
    public total: number = 0;
    public pageLength: number = 10;
    public searchTerm: string = '';
    public isLoading: boolean = false;
    public currentLanguage: string = 'en';
    public repositories: RepositoryEntity[] = [];
}
