<template>
  <div class="recommend">推荐</div>
</template>

<script>
import { getRecommend } from '@/service/recommend'

export default {
  name: 'Recommend',
  async created() {
    const result = await getRecommend()
    console.log(result)
  },
}
</script>