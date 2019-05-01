import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
      leftMenu:false,
        language:'РУС',
        lang: {
            rus: 'РУС',
            eng: 'ENG'
        },
        leftBar:''
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