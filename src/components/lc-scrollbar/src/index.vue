<template>
  <div class="scrollBar_main shadow" @click="goTop">
    <el-icon class="top_icon">
      <CaretTop />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'ScrollBar'
  })
  const props = defineProps({
    // 目标元素的id或者class
    target: {
      type: String,
      default: 'body',
      require: true
    },
    // 滚动到哪个距离出现电梯导航
    visibilityHeight: {
      type: Number,
      default: 200
    }
  })
  // 点击后前往页面顶部
  const goTop = () => {
    const targetDom = document.querySelector(props.target) as HTMLElement
    targetDom.children[0].scrollIntoView({
      behavior: 'smooth'
    })
  }
  onMounted(() => {
    const scrollBar = document.querySelector('.scrollBar_main') as HTMLDivElement
    const targetDom = document.querySelector(props.target) as HTMLElement
    // 监听滚动事件，当滚动到visibilityHeight距离时显示bar，否则隐藏
    targetDom.addEventListener('scroll', () => {
      if (targetDom.scrollTop > props.visibilityHeight) {
        scrollBar.setAttribute('style', 'opacity:1')
      } else if (targetDom.scrollTop <= props.visibilityHeight) {
        scrollBar.setAttribute('style', 'opacity:0')
      }
    })
  })
</script>
