import {RECEIVE_SHOPS , RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_USER_INFO,RESET_USER_INFO,RECEIVE_SHOP_INFO,
    RECEIVE_RATINGS,RECEIVE_GOODS,INCREMENT_FOOD_COUNT,DECREMENT_FOOD_COUNT,CLEAR_CART,RECEIVE_SEARCH_SHOPS} from './mutation-types'
import {reqAddress,reqFoodCategorys,reqShops,reqUserInfo,reqLogout,reqShopInfo,reqShopRatings,reqShopGoods, reqSearchShop} from '../api'

export default{
    async getAddress({commit,state}){//异步获取地址
        //发送异步请求
        const geohash = state.latitude+","+state.longittude
        const result = await reqAddress(geohash)
        //提交mutation
        if(result.code ==0){
            const address = result.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    async getCategory({commit}){//异步获取食品分类列表
        //发送异步请求
        const result = await reqFoodCategorys()
        //提交mutation
        if(result.code ==0){
            const categorys = result.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
    },
    async getShops({commit,state}){//异步获取商家列表
        //发送异步请求
        const result = await reqShops(state.latitude,state.longittude)
        //提交mutation
        if(result.code ==0){
            const shops = result.data
            commit(RECEIVE_SHOPS,{shops})
        }
    },
    saveUserInfo({commit},userInfo){//同步保存用户信息
        commit(RECEIVE_USER_INFO,{userInfo})
    },
     async getUserInfo({commit}){
        const result = await reqUserInfo()
        if(result.code===0){
            const userInfo = result.data
            commit(RECEIVE_USER_INFO,{userInfo})
        }
    },
    async logout({commit}){
        const result = await reqLogout()
        if(result.code===0){
            commit(RESET_USER_INFO)
        }
    },
    async getShopGoods({commit},callback){//发送异步请求获取商品列表
        const result = await reqShopGoods()
        if(result.code===0){
            const goods = result.data
            // console.log(goods)
            commit(RECEIVE_GOODS,{goods})
            callback && callback()
        }
    },
    async getShopRatings({commit},callback){//发送异步请求获取商家评论列表
        const result = await reqShopRatings()
        if(result.code===0){
            const ratings = result.data
            // console.log(ratings)
            commit(RECEIVE_RATINGS,{ratings})
            callback && callback()
        }
    },
    async getShopInfo({commit},callback){//发送异步请求获取商家信息
        const result = await reqShopInfo()
        if(result.code===0){
            const shopInfo = result.data
            // console.log(shopInfo)
            commit(RECEIVE_SHOP_INFO,{shopInfo})
            callback && callback()
        }
    },
    updateFoodCount({commit},{isAdd,food}){
        if(isAdd){
            commit(INCREMENT_FOOD_COUNT,{food})
        }else
        {
            commit(DECREMENT_FOOD_COUNT,{food})
        }
    },
    clearCart({commit}){
        commit(CLEAR_CART)
    },
    async getSearchShops({commit,state},keyword){//发送异步请求获取商品列表
        const geohash = state.latitude+","+state.longittude
        const result = await reqSearchShop(geohash,keyword)
        if(result.code===0){
            const searchShops = result.data
            console.log(searchShops)
            commit(RECEIVE_SEARCH_SHOPS,{searchShops})
        }
    },

}