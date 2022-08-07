<template>
    <div class="work-area__top">
        <div class="work-area__active half-container">
        
        <headLine />
        
        <div class="work-area__top-adv-block">
            <img :src="require('../../public/img/top_adv/prod_img.png')" alt="headphones" class="work-area__top-prod">
            <div class="work-area__top-discript">

                <div class="work-area__first-sent">{{ headers[0] }}</div>

                <div class="work-area__sec-sent">{{ headers[0] }}</div>

                <div class="work-area__prices">
                    <div class="work-area__price-new work-area__price-new_mrgn">{{ newPrice }}</div>
                    <div class="work-area__line-menu"></div>
                    <div class="work-area__price-old work-area__price-old_mrgn">{{ oldPrice }}</div>
                </div>

                <button class="work-area__buy-btn work-area__buy-btn_mrgn">{{ button }}</button>
            </div>
        </div>
        </div>
    </div>
</template>


<script>
import headLine from '@/components/header-line';
export default {
  name: "top-area",
  data () {
    return {
      imgSrc : '../../public/img/top_adv/products/prod_img.png',
      leftBotHeader: 'Our Latest \n colour collection 2021', //перенос строки после 2 слова
      headers : ['Hear it. Feel it', 'Move \n with the \n music'],
      newPrice : '$ 435',
      oldPrice : '$ 465',
      button : 'BUY NOW'
    }
  },
  components : {
    headLine
  }
};
</script>