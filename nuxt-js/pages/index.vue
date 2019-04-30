<template>
  <div>
    <Header></Header>
  <div class="box">
    <div v-if="this.$store.state.leftMenu">
      <LeftMenu ></LeftMenu>
    </div>
    <Table v-if="leftSideBar ===1" ></Table>
    <Price v-else-if="leftSideBar ===2"></Price>
    <Merchant v-else-if="leftSideBar ===5"></Merchant>
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
.box {
  display: flex;
  justify-content: left;
  align-items: row;


  height: 1350px;
  flex-direction: row;
  width: 100%;
  background: url("https://www.syndex.eu/profiles/fabernovel/themes/custom/fabernovel_theme/logo-be-eu.svg") no-repeat ; ;
  background-color:rgb(217, 220, 226);
  -moz-background-size: 70%; /* Firefox 3.6+ */
  -webkit-background-size: 70%; /* Safari 3.1+ и Chrome 4.0+ */
  -o-background-size: 70%; /* Opera 9.6+ */
  background-size: 70%; /* Современные браузеры */

}
@media screen and (max-width: 900px){
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
  b-table{
    width: 100%;

  }
  .table{
    margin: 0px;
  }

  .left-menu{
    width: 100%;
  }

}



</style>

