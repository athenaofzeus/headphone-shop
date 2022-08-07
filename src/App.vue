<template>
  <div class="work-area">
    <div class="work-area__left-block work-area__left-block_mrgn">
      <topAdvert />
      <oldCollection />
    </div>
  </div>
</template>

<script>
import topAdvert from '@/components/top-left';
import oldCollection from '@/components/old-collection';
export default {
  name: "work-area",
  components: {
    topAdvert,
    oldCollection
  }
};
</script>
