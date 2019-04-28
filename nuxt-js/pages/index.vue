<template>
  <div>
    <Header></Header>

  <section class="container">
    <div>

    <LeftMenu></LeftMenu>
    </div>
    <Table></Table>
  </section>
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
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: row;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

