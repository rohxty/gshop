export default{
    totalCount(state){
        return state.cartFoods.reduce((preTotal,food)=>preTotal+food.count,0)
    },
    totalPrice(state){
        return state.cartFoods.reduce((preTotal,food)=>preTotal+food.count*food.price,0)
    },
    satisfiedCount(state){
        return state.ratings.reduce((preTotal,rating)=>{
            const count = rating.rateType?0:1
            return preTotal+count
        },0)
    },
    dissatisfiedCount(state){
        return state.ratings.reduce((preTotal,rating)=>preTotal+rating.rateType,0)
      
    }
}