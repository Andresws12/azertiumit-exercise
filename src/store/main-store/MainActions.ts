import { Actions } from 'vuex-smart-module';

import { Repository } from '@/models/Repository';

import { getRepositories } from '@/webservices/RepositoryWebservice';

import MainState from './MainState';
import MainGetters from './MainGetters';
import MainMutations from './MainMutations';

export default class MainActions extends Actions<
    MainState,
    MainGetters,
    MainMutations,
    MainActions
> {
    public async getRepositories(): Promise<void> {
        try {
            this.commit('startLoading', null);
            const repositories: Repository = await getRepositories(
                this.getters.query
            );
            this.commit('setRepositories', repositories.items);
            this.commit('setTotal', repositories.total_count);
        } finally {
            this.commit('stopLoading', null);
        }
    }

    public changeLanguajeToSpanish(): void {
        this.commit('changeLanguajeToSpanish');
    }

    public changeLanguajeToEnglish(): void {
        this.commit('changeLanguajeToEnglish');
    }

    public changeSearchTerm({ searchTerm }: { searchTerm: string }): void {
        this.commit('setSearchTerm', searchTerm);
        this.dispatch('refreshAppState', null);
    }

    public refreshAppState(): void {
        this.dispatch('getRepositories', null);
    }

    public changePage({ page }: { page: number }): void {
        this.commit('setPage', page);
        this.dispatch('refreshAppState', null);
    }
}
