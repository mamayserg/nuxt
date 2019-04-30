<template>
    <div class="content">
        <div class="table-box">
            <div class="table-head">
             <h6>Мои транзакции</h6>
            </div>
            <b-table  hover  :items="items"></b-table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                items: [
                    { ID_заявки : 40,Статус: 'Dickerson', Сума_к_зачислению: 'Macdonald',Сума_к_оплате: 'Macdonald',Детали: 'Done' ,Времья_Создания: '87-55' },
                    { ID_заявки : 40,Статус: 'Dickerson', Сума_к_зачислению: 'Macdonald',Сума_к_оплате: 'Macdonald',Детали: 'Done' ,Времья_Создания: '87-55' },
                    { ID_заявки : 40,Статус: 'Dickerson', Сума_к_зачислению: 'Macdonald',Сума_к_оплате: 'Macdonald',Детали: 'Done' ,Времья_Создания: '87-55' },
                    { ID_заявки : 40,Статус: 'Dickerson', Сума_к_зачислению: 'Macdonald',Сума_к_оплате: 'Macdonald',Детали: 'Done' ,Времья_Создания: '87-55' }
                ]
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