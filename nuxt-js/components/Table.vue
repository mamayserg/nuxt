<template>
        <div>
            <b-table hover  :items="items"></b-table>
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

</style>