<template>
    <div>
        <Building />
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from "vue-property-decorator";
    import Building from "@/components/Building.vue";

    @Component({
        name:'Note',
        components:{Building}
    })
    export default class Note extends Vue{

    }
</script>

<style lang="stylus" scoped>

</style>