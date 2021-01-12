<template>
    <div class="home-view section">
        <translations-button />
        <div class="home-container container">
            <p class="home-view_title title">{{ $t('views.home.title') }}</p>
            <b-field grouped group-multiline position="is-right">
                <search-bar
                    :value="searchTerm"
                    @search="onSearch"
                    data-cy="home-view-search-bar"
                />
            </b-field>
            <b-table
                :data="repositories"
                :loading="isLoading"
                striped
                bordered
                hoverable
                :mobile-cards="false"
                @page-change="onPageChange"
                paginated
                backend-pagination
                :total="totalElems"
                :per-page="pageLength"
                pagination-position="bottom"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page"
                data-cy="repositories-table"
            >
                <b-table-column
                    field="name"
                    :label="$t('views.home.repositoryName')"
                    v-slot="props"
                >
                    <div class="home-view_column-content" data-cy="column-name">
                        {{ props.row.name }}
                    </div>
                </b-table-column>
                <b-table-column field="url" label="URL" v-slot="props">
                    <div class="home-view_column-content" data-cy="column-url">
                        <a :href="props.row.url" target="_blank">
                            {{ props.row.url }}
                        </a>
                    </div>
                </b-table-column>
            </b-table>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

import SearchBar from '@/components/common/SearchBar.vue';
import TranslationsButton from '@/components/common/TranslationsButton.vue';

import { RepositoryEntity } from '@/models/Repository';

@Component({
    name: 'Home',
    components: {
        SearchBar,
        TranslationsButton,
    },
})
export default class Home extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get isLoading(): boolean {
        return this.mainStore.state.isLoading;
    }

    private get repositories(): RepositoryEntity[] {
        return this.mainStore.state.repositories;
    }

    private get totalElems(): number {
        return this.mainStore.state.total;
    }

    private get pageLength(): number {
        return this.mainStore.state.pageLength;
    }

    private get searchTerm(): string {
        return this.mainStore.state.searchTerm;
    }

    // Search
    private onSearch(searchTerm: string): void {
        this.mainStore.actions.changeSearchTerm({ searchTerm });
    }

    // Changing page
    private onPageChange(page: number): void {
        this.mainStore.actions.changePage({ page });
    }
}
</script>

<style lang="scss" scoped>
.home-view {
    &_column-content {
        display: inline;
        word-break: break-all;
    }
    &_title {
        font-size: 2rem;
        font-weight: 600;
        line-height: 1.125;
        text-align: center;
    }
}
</style>
