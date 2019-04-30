<template>
  <div class="left-menu">
    <b-list-group >
      <b-list-group-item  variant="white" class="menu-list" button>This is a button too</b-list-group-item>
      <b-list-group-item  variant="white" class="menu-list" button>This is a button too</b-list-group-item>
      <b-list-group-item  variant="white" class="menu-list" button>This is a button too</b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
  export default {
      data(){
          return{

          }
      },
      methods:{

      }
  }
</script>
<style>
  .menu-list{
    border: 0px;
    background-color: inherit;
    text-align: left;
  }
  .left-menu{
    border-right: 1px solid lightgray ;
    border-top:1px solid lightgray;
    background-color:rgb(238, 238, 241);
    height: 100%;
    width: 280px;
  }

</style>

