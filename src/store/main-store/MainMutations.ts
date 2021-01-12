import { Mutations } from 'vuex-smart-module';

import { RepositoryEntity } from '@/models/Repository';

import MainState from './MainState';

export default class MainMutations extends Mutations<MainState> {
    public setRepositories(repositories: RepositoryEntity[]): void {
        this.state.repositories = repositories;
    }

    public changeLanguajeToSpanish(): void {
        this.state.currentLanguage = 'es';
    }

    public changeLanguajeToEnglish(): void {
        this.state.currentLanguage = 'en';
    }

    public startLoading(): void {
        this.state.isLoading = true;
    }

    public stopLoading(): void {
        this.state.isLoading = false;
    }

    public setSearchTerm(searchTerm: string): void {
        this.state.searchTerm = searchTerm;
    }

    public setPage(page: number): void {
        this.state.page = page;
    }

    public setPageLength(pageLength: number): void {
        this.state.pageLength = pageLength;
    }

    public setTotal(total: number): void {
        this.state.total = total;
    }
}
