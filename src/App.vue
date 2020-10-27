<template>
<div>
   <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
</div>
</template>

<script type="text/javascript">
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
    components: {
        FooterGuide
    }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
</style>
