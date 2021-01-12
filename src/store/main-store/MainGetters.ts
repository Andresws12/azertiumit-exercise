import { Getters } from 'vuex-smart-module';
import MainState from './MainState';

export default class MainGetters extends Getters<MainState> {
    public get query(): string {
        return `${this.getters.searchQuery}${this.getters.pageQuery}${this.getters.pageLengthQuery}`;
    }

    public get searchQuery(): string {
        return this.state.searchTerm ? `q=${this.state.searchTerm}` : '';
    }

    public get pageQuery(): string {
        return this.state.page ? `&page=${this.state.page}` : '';
    }

    public get pageLengthQuery(): string {
        return this.state.pageLength
            ? `&per_page=${this.state.pageLength}`
            : '';
    }
}
