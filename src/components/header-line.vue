<template>
    <header class="work-area__header work-area__header_padding work-area__header_mrgn">
        <img :src="require('../../public/img/top_icons/logo.svg')" alt="logo" class="work-area__main-logo">

        <div class="work-area__grope-logos">
            <span class="work-area__logo-ellips" v-for="elem in iconNames" :key="elem">
                <img :src="require(`../../public/img/top_icons/user_icon/${elem}.svg`)" alt="loupe" class="work-area__loupe-logo">
                <img :src="require('../../public/img/top_icons/user_icon/Ellipse.svg')" alt="ellips" class="work-area__ellips">
            </span>
        </div>

        <img :src="require('../../public/img/top_icons/hamb_menu.svg')" alt="hamb_menu" class="work-area__hamb-menu">
    </header>
</template>


<script>
export default {
  name: "heading",
  data () {
    return {
        path : '../../public/img/top_icons/',
        iconNames : ['loupe', 'store', 'account'],
    }
  }
};
</script>