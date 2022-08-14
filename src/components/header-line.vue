<template>
    <header class="work-area__header work-area__header_padding work-area__header_mrgn">
        <a href="#">
            <img :src="require('../../public/img/top_icons/logo.svg')" alt="logo" class="work-area__main-logo">
        </a>
        <div class="work-area__grope-logos">
            <input class="work-area__search-input" 
            :placeholder="placeHoldStr"
            v-model="userSearch"
            @keypress.enter="startSearch" 
            type="text" 
            v-show="searchPanelvisib">

            <span class="work-area__logo-ellips" 
                v-for="elem in iconNames" 
                :key="elem">
                <img :src="require(`../../public/img/top_icons/user_icon/${elem}.svg`)" 
                alt="loupe" 
                class="work-area__loupe-logo" 
                @click="openSearch(elem)" 
                v-if="elem != 'loupe' ? otherLogosVisib : true">
                <img :src="require('../../public/img/top_icons/user_icon/Ellipse.svg')" 
                alt="ellips" 
                class="work-area__ellips" 
                v-if="elem != 'loupe' ? otherLogosVisib : true">
            </span>

        </div>
        <div class="work-area__parent-menu">
            <img :src="require('../../public/img/top_icons/menu.png')" 
                alt="hamb_menu" 
                class="work-area__hamb-menu">
                <div class="work-area__menu-cover"
                    @mouseenter="callMenu"
                    @click="callMenu">
                </div>
        </div>
        <div class="hiddenMenu"
            v-if="menuVisib">
            <ul @mouseleave="leaveMenu">
                <li v-for="item in menuList" :key="item">{{ item }}</li>
            </ul>
        </div>
    </header>
</template>


<script>
export default {
  name: "heading",
  data () {
    return {
        path : '../../public/img/top_icons/',
        iconNames : ['loupe', 'store', 'account'],
        searchPanelvisib: false,
        otherLogosVisib: true,
        menuVisib : false,
        placeHoldStr : 'Press Enter to search',
        userSearch : '',
        menuList: ['Basket', 'New Collection']
    }
  },
  methods : {
    openSearch (element) {
        if (element == 'loupe') {
            this.searchPanelvisib = !this.searchPanelvisib;
            this.otherLogosVisib = !this.otherLogosVisib;
        }
    },
    startSearch(event) {
        //добавить поиск продуктов
        console.log(event.key)

    },
    callMenu() {
        this.menuVisib = !this.menuVisib;
    },
    leaveMenu () {
        this.menuVisib = false;
    }
  }
};
</script>