import axiosClient from "../axios";
import {createStore} from 'vuex'

const store=createStore({
    state:{
        user:{
            val:{},
        },
        count:0
    },
    getters:{},
    actions:{
        increment(commit){
            commit.commit('increment')
        },
        send({commit},user){
            commit('setUser',user)
        }
        
    },
    mutations:{
        increment(state){
            state.count++
        },
        setUser:(state,userData)=>{
/*            state.user.val=user.user
            console.log(state.user)*/
            state.user.val=userData.user
            console.log(state.user.val)
        }
    }
})
export default store;