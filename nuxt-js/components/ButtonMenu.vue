<template>
    <div >
        <button class="menu-button" id="less" @click='menuNone' v-bind:style='{ display: lessActiv()}'><i class="material-icons" style="font-size:36px">expand_less</i></button>
        <button class="menu-button" id="more" @click='menuNone' v-bind:style='{ display: moreActiv()}'><i class="material-icons" style="font-size:36px">expand_more</i></button>
    </div>

</template>
<script>
    export default {
        methods:{

            menuNone() {
                this.$store.state.leftMenu = !this.$store.state.leftMenu;
            },

            lessActiv() {
                if (this.$store.state.leftMenu === false) {
                    console.log(this.$store.state.leftBar,"bar");
                    return 'none'}
                else {
                    return 'inline'}
            },

            moreActiv() {
                if (this.$store.state.leftMenu === true) {
                    console.log(this.$store.state.leftBar,"bar");
                    return 'none'}
                else {
                    return 'inline'}
            }

        }

    }
</script>
<style>
.menu-button{
    display: inline;
    width:100%;
    height: 58px;
}
</style>