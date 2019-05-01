<template>
  <div>
    <Header></Header>
  <div class="box">
    <div v-if="this.$store.state.leftMenu">
      <LeftMenu ></LeftMenu>
    </div>
    <div  v-if="leftSideBar === 0" class="box-1" >
      <div class="box-syndex">
      <h1 style="padding-left:12px  " >Syndex</h1>
      <p> твоя платежная система</p>
    </div>
    </div>
    <Table v-else-if="leftSideBar ===1" ></Table>
    <Price v-else-if="leftSideBar ===3"></Price>
    <Merchant v-else-if="leftSideBar ===2"></Merchant>
  </div>
  </div>
</template>

<script>
import LeftMenu from '../components/LeftMenu.vue'
import Header from '../components/Header'
import Table from '../components/Table'
import Price from '../components/Price'
import Merchant from '../components/Merchant'
export default {
  components: {
      Header,
      Table,
    LeftMenu,
      Price,
      Merchant
  },
    computed:{
      leftSideBar(){
          return this.$store.state.leftBar
      },
      menu(){
          return this.$store.state.LeftMenu
      }
    },

    methods:{

    }
}
</script>

<style>
  .box-syndex{
    margin-top: 30px;

  }
  .box-1{
display: flex;
    justify-content: center;

    position: relative;
    margin-top: 110px;
    background-color: #7f828b;
    opacity: 0.3;
    width: 100%;
    height: 20%;

  }

.box {
  display: flex;
  justify-content: left;
  height: 1350px;
  flex-direction: row;
  width: 100%;
  background: url("https://www.microage.ca/mts/wp-content/uploads/sites/34/2018/09/storyblocks-vector-circuit-network-diagram-technology-background-design_HwjL1428G_SB_PM.jpg");
  -moz-background-size: 100%; /* Firefox 3.6+ */
  -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
  -o-background-size: 100%; /* Opera 9.6+ */
  background-size: 100%; /* Современные браузеры */

}
@media screen and (max-width: 900px){
  .nav-right{
    width: 100%;
    text-align: center;
  }
  #head{
    height: 100%;
  }

  .nav-img {
    margin-top: 25px;
    margin-left: 17px;
    width: 30px;
    height: 30px;
  }
  .icons{
    justify-content: left;
    display: flex;
    flex-direction:row;
  }

  .box{
    display: flex;
    justify-content: left;
    align-items: row;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color:rgb(217, 220, 226);

  }



  .table{
    margin: 0px;
  }

  .left-menu{
    width: 100%;
  }

}



</style>

