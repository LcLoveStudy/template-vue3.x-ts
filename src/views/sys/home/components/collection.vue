<template>
  <div class="grid phone:grid-cols-2 tablet:grid-cols-5 phone:gap-[16px] tablet:gap-4">
    <el-card
      shadow="hover"
      v-for="util in utilsOrigin"
      :key="util.name"
      @click="goUtils(util.link)"
      class="cursor-pointer"
    >
      <div class="phone:text-6xl tablet:text-xl text-sky-700 hover:underline underline-offset-4">
        {{ util.name }}
      </div>
      <div class="phone:mt-[8px] tablet:mt-2 phone:text-5xl tablet:text-sm">
        {{ util.introduce }}
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  const utilsOrigin = [
    {
      name: 'TailwindCss',
      link: 'https://tailwind.nodejs.cn/docs/installation',
      introduce: '原子化css框架,提供css原子类,可快速构建页面'
    },
    {
      name: 'ElementPlus',
      link: 'https://element-plus.org/zh-CN/',
      introduce: '基于 Vue 3,面向设计师和开发者的组件库'
    },
    {
      name: 'Animate.css',
      link: 'https://animate.style/',
      introduce: '一个纯css动画库'
    },
    {
      name: 'Iconfont',
      link: 'https://www.iconfont.cn/',
      introduce: '阿里巴巴图标库'
    },
    {
      name: 'Echarts',
      link: 'https://echarts.apache.org/zh/index.html',
      introduce: '一个基于 JavaScript 的开源可视化图表库'
    },
    {
      name: 'VueUse',
      link: 'https://vueuse.org/',
      introduce: '整合了Vue常用工具函数的Vue插件'
    },
    {
      name: 'Leaflet',
      link: 'https://leafletjs.cn/',
      introduce: '一个开源并且对移动端友好的交互式地图 JavaScript 库'
    },
    {
      name: 'Vue',
      link: 'https://cn.vuejs.org/',
      introduce: '易学易用，性能出色，适用场景丰富的 Web 前端框架'
    },
    {
      name: 'Eslint',
      link: 'https://www.tkcnn.com/eslint/',
      introduce: '可组装的 JavaScript 和 JSX 检查工具'
    },
    {
      name: 'Prettier',
      link: 'https://www.prettier.cn/',
      introduce: '一个“有态度”的代码格式化工具'
    },
    {
      name: 'Vite',
      link: 'https://www.vitejs.net/',
      introduce: '下一代前端开发与构建工具'
    },
    {
      name: '@lichang666/utils',
      link: 'https://lclovestudy.github.io/-lichang666/',
      introduce: '作者维护的常用工具库'
    }
  ]

  /** 点击去工具的官网 */
  const goUtils = (link: string) => {
    window.open(link)
  }
</script>
