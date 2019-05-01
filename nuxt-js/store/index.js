import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        table:[
            {
                id:12,
                status:"заявка подтвержденна",
                price1:"+150.0 USD",
                price2:'8055.0 THB',
                details:"forioooo.com",
                time:'1.08.1958 15:35:52'
            },
            {
                id:13,
                status:"заявка отклонена",
                price1:"+150.0 USD",
                price2:'8055.0 THB',
                details:"forioooo.com",
                time:'1.08.1958 15:35:52'
            },
            {
                id:14,
                status:"в обработке",
                price1:"+150.0 USD",
                price2:'8055.0 THB',
                details:"forioooo.com",
                time:'1.08.1958 15:35:52'
            }

        ],
        table_1:[
            {
                id:1,
                status:"заявка отклонена",
                price1:"+150.0 USD",
                price2:'80dc55.0 THB',
                details:"forioooo.com",
                time:'1.08.1958 15:35:52'
            },
            {
                id:2,
                status:"заявка подтвержденна",
                price1:"+10.0 USD",
                price2:'8055.0 THB',
                details:"forioooo.com",
                time:'1.08.1958 15:35:52'
            },
            {
                id:3,
                status:"в обработке",
                price1:"+50.0 USD",
                price2:'8000005.0 THB',
                details:"forioooo.com",
                time:'1.08.1958 15:35:52'
            }

        ],
      leftMenu:true,
        language:'РУС',
        lang: {
            rus: 'РУС',
            eng: 'ENG'
        },
        leftBar:0
    },
    mutations: {
        changeLeftSideBar(state,prop){
            state.leftBar = prop;
        },
        changeLanguage (state,prop) {

            if(prop === "rus"){
                state.language = state.lang.rus
                console.log("sff");
            }
            else if(prop ==="eng"){
                state.language = state.lang.eng
            }

        }
    }
})

export default store