<template>
    <div class="content">
        <div class="table-box">
            <div class="table-head">
             <h6>Мои счета</h6>
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
                return this.$store.state.table_1
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
.table-head{
    text-indent: 15px;
    color: #F5F5F5;
    text-align: left;
    padding: 12px;
    width: 100%;
    background-color: rgb(90, 93, 97);
}
.content{
    width: 100%;
    height: 100%;
    background-color:rgb(217, 220, 226);
}
.table-box{
    overflow-x:hidden;
    background-color: white;
   margin: 20px;
    padding: 0px;
    width: 100%;
    -webkit-box-shadow: 3px 3px 12px -5px rgba(18,1,18,1);
    -moz-box-shadow: 3px 3px 12px -5px rgba(18,1,18,1);
    box-shadow: 3px 3px 12px -5px rgba(18,1,18,1);
}
</style>