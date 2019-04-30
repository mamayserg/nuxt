<template>
  <div class="left-menu">
    <b-list-group >
      <b-list-group-item  variant="white" class="menu-list" button @click="leftMenu(1)">
        <h6>  <img class="list-img" src="https://cdn0.iconfinder.com/data/icons/commerce-outline/512/purse-512.png"/> Счетa</h6>
      </b-list-group-item>

      <b-list-group-item  variant="white" class="menu-list" button @click="leftMenu(2)">
        <h6>  <img class="list-img" src="https://img.icons8.com/cotton/420/recieve.png"/>Пополнить</h6>
      </b-list-group-item>

      <b-list-group-item  variant="white" class="menu-list" button @click="leftMenu(3)">
        <h6>  <img class="list-img" src="https://cdn3.iconfinder.com/data/icons/coin-and-cash/32/7--512.png"/>Пeревести</h6>
      </b-list-group-item>

      <b-list-group-item  variant="white" class="menu-list" button @click="leftMenu(4)">
        <h6>  <img class="list-img" src="https://icons-for-free.com/iconfiles/png/512/refresh-131964784961013457.png"/> Обменять</h6>
      </b-list-group-item>

      <b-list-group-item  variant="white" class="menu-list" button @click="leftMenu(5)">
        <h6> <img class="list-img" src="http://cdn.onlinewebfonts.com/svg/img_534539.png">Мерчант</h6>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
  export default {
      data(){
          return{

          }
      },
      computed:{
      },
      methods:{
          leftMenu(prop){
              this.$store.commit('changeLeftSideBar',prop)
          }

      }
  }
</script>
<style>
  .list-img{
    width: 30px;
    height:28px;
margin-right: 10px;
    padding-right: 2px;
  }
  .menu-list{
    padding-left:15px;
    border: 0px;
    background-color: inherit;
    text-align: left;
    font-style: normal;
    font-size: 18px;
    color: grey;
  }
  .left-menu{
    border-right: 1px solid lightgray ;
    border-top:1px solid lightgray;
    background-color:rgb(238, 238, 241);
    height: 100%;
    width: 280px;

      transition-duration: 2s;
  }

</style>

