<template>
  <div>
    <Header></Header>
  <div class="box">
    <div v-if="this.$store.state.leftMenu">
      <LeftMenu></LeftMenu>
    </div>
    <Table></Table>
  </div>
  </div>
</template>

<script>
import LeftMenu from '../components/LeftMenu.vue'
import Header from '../components/Header'
import Table from '../components/Table'
export default {
  components: {
      Header,
      Table,
    LeftMenu
  },
    computed:{
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
  text-align: center;

  height: 1350px;
  flex-direction: row;
  width: 100%;
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

