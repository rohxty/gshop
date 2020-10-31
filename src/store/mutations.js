import Vue from 'vue'
import {RECEIVE_SHOPS , RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_USER_INFO,
    RESET_USER_INFO,RECEIVE_SHOP_INFO,RECEIVE_RATINGS,
    RECEIVE_GOODS,INCREMENT_FOOD_COUNT,DECREMENT_FOOD_COUNT,CLEAR_CART,RECEIVE_SEARCH_SHOPS} from './mutation-types'
export default{
    [RECEIVE_ADDRESS](state,{address}){
        state.address = address
    },
    [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state,{shops}){
        state.shops = shops
    },
    [RECEIVE_USER_INFO](state,{userInfo}){
        state.userInfo = userInfo
    },
    [RESET_USER_INFO](state){
        state.userInfo = {}
    },
    [RECEIVE_GOODS](state,{goods}){//更新商品列表
        state.goods = goods
    },
    [RECEIVE_RATINGS](state,{ratings}){//更新商品评论列表
        state.ratings = ratings
    },
    [RECEIVE_SHOP_INFO](state,{shopInfo}){//更新商家信息
        state.shopInfo = shopInfo
    },
    [INCREMENT_FOOD_COUNT](state,{food}){//更新商家信息
        // food.count++  新增属性没有数据绑定效果
        if(!food.count){
            // 对象 属性名 属性值
            Vue.set(food,'count',1)//让新增属性也有数据绑定
            // state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            state.cartFoods.push(food)
        }else{
            food.count++
        }
    },
    [DECREMENT_FOOD_COUNT](state,{food}){//更新商家信息
        if(food.count){
            food.count--
            if(food.count===0){
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
        }
    },
    [CLEAR_CART](state){
        state.cartFoods.forEach((food)=>food.count=0)
        state.cartFoods = []
    }
    ,
    [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
        state.searchShops = searchShops
    }
}