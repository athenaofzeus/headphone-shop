<template>
<div class="work-area__bottom">
    <div class="work-area__bottom-header work-area__bottom-header_mrgn"> {{ leftBotHeader }}</div>
    <div class="work-area__choice-area">
        <span class="work-area__arrow work-area__arrow_left">
            <img class="work-area__arrow-left work-area__arrow-icon" :src="require(`../../public/img/left_bottom/arrow.svg`)" alt="icon">
        </span>

        <div class="work-area__choice-box" v-for="item in fileNames" :key="item">
            <img class="work-area__prod-chice-img" alt="img" :src="require(`../../public/img/left_bottom/products/${item}.jpg`)">
        </div>
        
        <span class="work-area__arrow work-area__arrow_right">
            <img class="work-area__arrow-right work-area__arrow-icon" :src="require(`../../public/img/left_bottom/arrow.svg`)" alt="icon">
        </span>
    </div>
</div>
</template>

<script>
export default {
  name: "choice-area",
  data () {
    return {
      imgSrc : '../../public/img/left_bottom/products/',
      fileNames : ['blue', 'orange', 'red'],
      leftBotHeader: 'Our Latest colour collection 2021', //перенос строки после 2 слова
    }
  }
};
</script>
