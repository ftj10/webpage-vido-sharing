<script setup>
const images = [
    "https://tse2-mm.cn.bing.net/th/id/OIP-C.mamzsCDdxBAHDEhqDzeQZgHaEK?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    "https://imgheybox.max-c.com/bbs/2021/11/08/a1d571a3bb6b91a447d9166a51658808.jpeg?imageMogr2/thumbnail/!80p/format/jpg",
    "https://ts1.tc.mm.bing.net/th/id/R-C.8d49708d804392d771bd4e0eb78aacd9?rik=2ekArwX9gzyz7A&riu=http%3a%2f%2fwallpaperswide.com%2fdownload%2fsekiro_shadows_die_twice_divine_dragon-wallpaper-1920x1080.jpg&ehk=op3lFj%2fRLKJIdxcibHbOJDeyq6E0zrbOxacJvbMnPn8%3d&risl=&pid=ImgRaw&r=0",
    "https://tse4-mm.cn.bing.net/th/id/OIP-C.DzYzkIKLzGjgIeJHUECHdQHaEK?w=273&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    "https://media.altchar.com/prod/images/940_530/gm-d9aca072-2f2d-49a5-ae25-0e2504921135-elden-ring-4k-screenshot.jpg",
    "https://tse2-mm.cn.bing.net/th/id/OIP-C.M5hKKPUxsiG_verkUBdbDAHaEK?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
]
</script>


<template>
  <div class="carousel-container">
    <el-carousel 
      :interval="5000" 
      arrow="always" 
      indicator-position="none"
     :style="{ height: '380px', width: '800px' }" 
    >
      <el-carousel-item v-for="(img, index) in images" :key="index">
        <img 
          class="rounded w-full h-full object-cover object-center"
          :src="img"
          alt="Carousel Image"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
/* Override Element Plus styles */
.carousel-container :deep(.el-carousel__container) {
  height: 100%;
  width: 100%;
}

/* Optional: Style arrows
.carousel-container :deep(.el-carousel__arrow) {
  background: rgba(0, 0, 0, 0.3);
}
.carousel-container :deep(.el-carousel__arrow:hover) {
  background: rgba(0, 0, 0, 0.5);
} */
</style>
<!-- 

<template>
    <el-carousel :interval="5000" arrow="always" :style="{ height: '380px', width: '800px' }" indicator-position="none">
        <el-carousel-item>
            <img class="rounded"
                src="https://tse2-mm.cn.bing.net/th/id/OIP-C.mamzsCDdxBAHDEhqDzeQZgHaEK?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3">
        </el-carousel-item>

        <el-carousel-item>
            <img class="rounded"
                src="https://imgheybox.max-c.com/bbs/2021/11/08/a1d571a3bb6b91a447d9166a51658808.jpeg?imageMogr2/thumbnail/!80p/format/jpg">
        </el-carousel-item>


        <el-carousel-item>
            <img class="rounded"
                src="https://ts1.tc.mm.bing.net/th/id/R-C.8d49708d804392d771bd4e0eb78aacd9?rik=2ekArwX9gzyz7A&riu=http%3a%2f%2fwallpaperswide.com%2fdownload%2fsekiro_shadows_die_twice_divine_dragon-wallpaper-1920x1080.jpg&ehk=op3lFj%2fRLKJIdxcibHbOJDeyq6E0zrbOxacJvbMnPn8%3d&risl=&pid=ImgRaw&r=0">
        </el-carousel-item>


        <el-carousel-item>
            <img class="rounded" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.DzYzkIKLzGjgIeJHUECHdQHaEK?w=273&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3">
        </el-carousel-item>

        <el-carousel-item>
            <img class="rounded" src="https://media.altchar.com/prod/images/940_530/gm-d9aca072-2f2d-49a5-ae25-0e2504921135-elden-ring-4k-screenshot.jpg">
        </el-carousel-item>

                <el-carousel-item>
            <img class="rounded" src="https://tse2-mm.cn.bing.net/th/id/OIP-C.M5hKKPUxsiG_verkUBdbDAHaEK?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3">
        </el-carousel-item>

    </el-carousel>
</template> -->