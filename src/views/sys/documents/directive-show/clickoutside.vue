<template>
  <div class="text-2xl font-semibold">点击目标外(v-clickoutside)</div>
  <div class="mt-6">
    <span class="text-[20px] inline-block">应用场景：</span>
    <br />
    当点击目标元素外的时候会执行该指令的回调函数
    <br />
    <span class="text-[20px] mt-5 inline-block">用法说明:</span>
    <br />
    在需要的地方使用v-clickoutside指令
    <span class="text-red-700 bgc-lightgray">(指令的值为一个回调函数)</span>
    <br />
    <span class="text-[20px] mt-5 inline-block">示例:</span>
    <br />
    <pre class="w-[50rem]">
      <code>
        &lt;div <span class="text-red-700">v-clickoutside="clickoutside"</span>&gt;
            点我外面的任何地方都会+1
            { {num} }
        &lt;/div&gt;

        &lt;script setup lang="ts"&gt;
          const num = ref(0)
          const clickoutside = () => {
            num.value += 1
          }
        &lt;/script&gt;
      </code>
    </pre>
  </div>
  <div class="testbox" v-clickoutside="clickoutside">
    <div>点我外面的任何地方都会+1</div>
    <div class="mt-5">{{ num }}</div>
  </div>
</template>

<script setup lang="ts">
  import highlight from 'highlight.js'
  const num = ref(0)
  const clickoutside = () => {
    num.value += 1
  }
  onMounted(() => {
    highlight.highlightAll()
  })
</script>

<style scoped lang="less">
  .code {
    width: 500px;
    border-radius: 3px;
    padding: 5px 10px;
    background-color: #ccc;
    color: rgb(0, 132, 255);
  }

  .testbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    top: 100px;
    right: 100px;
    position: absolute;
    width: 20rem;
    height: 12rem;
    background-color: #fff;
  }
</style>
