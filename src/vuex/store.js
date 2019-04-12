import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nowUser:{
            uid:'',
            phone:'',
            userName:'未知名',
            password:''
        },
        publishFind:[
            // {
            //     author:'',
            //     time:'',
            //     label:'',
            //     title:'',
            //     describe:'',
            //     coverImg:'',
            //     p_content:[]
            // }
        ]  
    },
    getters: {
      
    },
    mutations: {
        setUser (state,obj){
            state.nowUser.userName=obj.userName;
            state.nowUser.phone=obj.phone;
            state.nowUser.password=obj.password;
        },
        addPage (state,obj){
            state.publishFind.push(obj);
        }
    },
    actions: {
       
    }
})
