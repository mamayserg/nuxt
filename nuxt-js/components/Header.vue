<template>
        <div>
        <b-navbar toggleable="lg" type="light" variant="white" id="head">
            <b-navbar-brand href="#" v-if="!this.$store.state.leftMenu"><i class="material-icons" @click='menu'>menu</i></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <div class="nav-right" v-bind:style='{ display: menuActiv()}'>
                    <b-nav-item href="#"  @click='menu'>
                        <img  class="head-img1" src="https://cdn3.iconfinder.com/data/icons/arrows-85/24/Arrow-256.png">
                        <img  class="head-img2" src="https://cdn1.iconfinder.com/data/icons/basic-ui-icon-rounded-colored/512/icon-10-256.png">
                        syndex</b-nav-item>
                    </div>
                    <img class="nav-img" src="http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/v1/933301/icon-169_rxh3o1.png">
                    <span id="text-point">{{currency}}</span>
                    <b-nav-item-dropdown  >
                        <b-dropdown-item  @click="currency=point.eur">EURO</b-dropdown-item>
                        <b-dropdown-item @click="currency=point.rub">RUB</b-dropdown-item>
                        <b-dropdown-item @click="currency=point.usd">USD</b-dropdown-item>
                        <b-dropdown-item @click="currency=point.uah">UAH</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                <!-- Right aligned nav items -->

                <b-navbar-nav class="ml-auto">
                    <img class="nav-img" src="https://cdn4.iconfinder.com/data/icons/seo-web-outline-1/100/seo__web_outline_1_13-512.png">
                    <b-nav-item-dropdown  class="border-2" text="Acountname"  right>
                        <b-dropdown-item href="#">long</b-dropdown-item>
                        <b-dropdown-item href="#">short</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <div class="icons">
                    <b-navbar-nav >
                        <div @click="nutification">
                    <img  class="nav-img" src="https://image.flaticon.com/icons/png/512/61/61073.png">
                        </div>
                        <div>
                    <img  class="nav-img" src="https://image.flaticon.com/icons/svg/149/149295.svg" >
                        </div>
                        <b-nav-item href="#"><img  class="nav-question-img" src="https://cdn1.iconfinder.com/data/icons/seo-vol-2-7/64/43-512.png">
                        </b-nav-item>
                    </b-navbar-nav>
                    </div>
                    <b-nav-item-dropdown class="border-1" right>
                        <!-- Using 'button-content' slot -->
                        <template slot="button-content" ><span id="text-lang" >{{language}}</span></template>
                        <b-dropdown-item  v-on:click="checklanguage(lng.rus)">РУС</b-dropdown-item>
                        <b-dropdown-item v-on:click="checklanguage(lng.eng)" >ENG</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                lng: {
                    rus: 'rus',
                    eng: 'eng',
                },
                    currency: "0.00",
                    point:{
                        eur:"30.21",
                        rub:"0.52",
                        usd:"26.93",
                        uah:"1.00"

                    }

            }
        },
        computed:{
           language(){
                return this.$store.state.language
            }
        },
    methods: {
            nutification(){
                alert('Добрый день,у Вас нет уведомлений')
            },
            checklanguage(prop){
                console.log(prop);
                this.$store.commit('changeLanguage',prop)
            },
            menu() {
             this.$store.state.leftMenu = !this.$store.state.leftMenu
             console.log(this.$store.state.leftMenu, "dsf");
            },
            menuActiv() {
               if (this.$store.state.leftMenu === false) {
                   this.$store.state.leftBar=0;
                   console.log(this.$store.state.leftBar,"bar");
                   return 'none'}
            else {
                   return ''}
       }
     }
    }

</script>
<style>
    #head{
        height: 70px;
    }

    .head-img1{
         margin-left:3px ;
         margin-bottom: 8px;
         height: 20px;
         width: 15px;
     }
    .head-img2{
        margin-right:1px ;
        margin-top: 8px;
        height: 22px;
        width: 15px;
    }

    .border-2{
        padding-right:20px ;
        border-right:2px solid lightgray;
    }
    .border-1{
         margin-left: 10px;
        border-right: 10px;
        border-left:1px solid lightgray;
    }
    #text-point{
        padding-top: 10px;
        font-style: normal;
        font-weight: bold;
        color: blue;
    }
    #text-lang{
        font-style: normal;
        font-weight: bold;
        color: blue;
        margin-left: 20px;
    }
    .nav-question-img{
        margin-bottom:1px;
        margin-left: 20px;
        width: 30px;
        height: 30px;
    }
    .nav-img{
        margin-top:4px ;
        margin-left: 30px;
        width: 30px;
        height: 30px;
    }
    .nav-right{
        text-align: left;
        font-size:30px ;
        font-weight: bold;
        height:100%;
        width: 260px;
        color: black;
        background-color:rgb(240, 244, 251);


    }
    .lang{
        position: relative;
        right:1px;
    }

    .nav{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
    }

</style>