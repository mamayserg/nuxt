<template>
    <div>
    <b-navbar type="white" variant="white">
        <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item-dropdown text="$" right>
                <b-dropdown-item href="#">Menager</b-dropdown-item>
                <b-dropdown-item href="#">user</b-dropdown-item>
            </b-nav-item-dropdown>

            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown text="Acountname" right>
                <b-dropdown-item href="#">Menager</b-dropdown-item>
                <b-dropdown-item href="#">user</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="En" right>
                <b-dropdown-item href="#">Ukr</b-dropdown-item>
                <b-dropdown-item href="#">Eng</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
</div>
</template>
<script>
    export default {

    }
</script>
<style>

</style>