<template>
    <div class="content">
    <div class="price">
        <h3>Укажите свои данные</h3>
        <div class="form-user">
            <b-form inline>
                <label class="sr-only" for="inline-form-input-name">Name</label>
                <b-input
                        id="inline-form-input-name"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        placeholder="Jane Doe"
                ></b-input>

                <label class="sr-only" for="inline-form-input-username">Username</label>
                <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-input id="inline-form-input-username" placeholder="Username"></b-input>
                </b-input-group>

                <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>

                <b-button variant="primary">Save</b-button>
            </b-form>
        </div>
    </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    .price{
        display: flex;
        justify-content: left;
        align-items: row;
        flex-direction: column;
        margin: 20%;
    }
    .form-user{
        position: relative;
        top:15px;
        left: 15px;
    }
</style>