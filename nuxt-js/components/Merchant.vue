<template>
    <div class="content">
        <div  class="table-box">
            <div class="table-head">
                <h6>Мои транзакции</h6>
            </div>
        <table class="table table-hover">
            <thead>
            <tr id="column-table">
                <th scope="col">ID ЗАЯВКИ </th>
                <th scope="col" >САТУС</th>
                <th scope="col">СУМА К ЗАЧИСЛЕНИЮ</th>
                <th scope="col">СУМА К ОПЛАТЕ</th>
                <th scope="col">ДЕТАЛИ</th>
                <th scope="col">ВРЕМЬЯ СОЗДАНИЯ</th>

            </tr>
            </thead>
            <tbody v-for="tab in tableData " v-bind:key="tab.id">
            <tr >
                <th scope="row">{{tab.id}}</th>
                <td><p id="status_1" v-bind:style='{ background: colorActiv(tab.status)}' >{{tab.status}}</p></td>
                <td>{{tab.price1}}</td>
                <td>{{tab.price2}}</td>
                <td>{{tab.details}}</td>
                <td>{{tab.time}}</td>
            </tr>


            </tbody>
        </table>
        </div>

    </div>
</template>
<script>
    export default {
computed:{
    tableData(){
        return this.$store.state.table
    }
},
methods:{
colorActiv( prop) {
               if (prop === 'заявка отклонена') {

                   return 'red'}
                   else if (prop === 'заявка подтвержденна') {
                   return "blue"
               }
                    else if (prop === 'в обработке') {
                    return 'gray'}
                    }
}
    }
</script>
<style>
    #status_1{
         padding: 3px;
         color: white;
         border-radius: 5px;
     }

#column-table{
    background-color: darkgrey;
    opacity: 0.2;
    font-style: normal;

}
</style>