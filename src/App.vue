<template>
<div>
   <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
</div>
</template>

<script type="text/javascript">
import FooterGuide from './components/FooterGuide/FooterGuide'
import {mapActions} from 'vuex'
export default {
    mounted () {
        this.$store.dispatch('getAddress') 
        this.getUserInfo()
        this.getShopInfo()

    },
    methods: {
      ...mapActions(['getUserInfo','getShopInfo'])  
    },
    components: {
        FooterGuide
    }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
</style>
