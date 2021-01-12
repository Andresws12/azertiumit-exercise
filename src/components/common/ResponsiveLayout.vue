<template>
    <div>
        <mq-layout mq="lg+"> <slot /></mq-layout>
        <mq-layout :mq="['sm', 'md']"> <slot name="mobile" /></mq-layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'ResponsiveLayout',
})
export default class ResponsiveLayout extends Vue {}
</script>
