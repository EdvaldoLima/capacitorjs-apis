<template>
  <div class="home">
    <ul class="list">
      <li class="list__item" v-for="api in apis" :key="api">
        <router-link :to="api.page" class="list__item__link">{{ api.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return{
      apis: [
        { title:  "Geolocation", page: "geolocation" },
        { title:  "Camera", page: "camera" }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  .list{
    list-style: none;
    &__item{
      padding: 10px;
      &__link{
        text-decoration: none;
        color: $primary;
      }
    }
  }
}
</style>