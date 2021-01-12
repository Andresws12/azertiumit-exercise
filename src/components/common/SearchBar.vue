<template>
    <div class="field has-addons has-addons-right">
        <div class="control">
            <input
                class="input"
                type="text"
                :placeholder="`${$t('views.home.search')}...`"
                v-model="internalValue"
                @keyup.enter="search"
                data-cy="import-log-search-bar"
            />
        </div>
        <div class="control">
            <a
                class="button is-info search-icon"
                @click="search"
                data-cy="import-log-search-bar-btn"
            >
                <span class="icon">
                    <i class="fas fa-search search-icon_search"></i>
                </span>
                <span>{{ $t('views.home.search') }}</span>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({
    name: 'SearchBar',
})
export default class SearchBar extends Vue {
    @Prop(String) private value: string;

    private internalValue: string = '';

    private created(): void {
        this.internalValue = this.value;
    }

    private search(): void {
        this.$emit('search', this.internalValue);
    }

    @Watch('value')
    private onChange(): void {
        this.internalValue = this.value;
    }
}
</script>

<style lang="scss" scoped>
.search-icon {
    &:hover {
        box-shadow: 0 0 0 0.125em rgba(255, 146, 4, 0.25);
    }
}
</style>
