<template>
  <div class="container">
    <div class="title"></div>
    <div class="doc">
      <button @click="retrieveRandomPhotoAlbum">Spin up the API</button>
      <button @click="$router.push('/')">To the Landing page</button>
    </div>
    <div v-if="loading" class="loader">
    </div>
    <template v-if="albumData">
      <div v-for="(photo,index) in albumData" :key="index" class="photo-details-container">
        <div class="photo-detail">
          <div class="name">Album id: </div>
          <div class="value"> {{photo.albumId}} </div>
        </div>
        <div class="photo-detail">
          <div class="name">Photo id:</div>
          <div class="value"> {{photo.id}} </div>
        </div>
        <div class="photo-detail">
          <div class="name">Photo title:</div>
          <div class="value"> {{photo.title}} </div>
        </div>
        <div class="photo-detail">
          <div class="name">Thumbnail:</div>
          <img class="thumbnail" :src="photo.thumbnailUrl">
        </div>
        <div class="photo-detail">
          <div class="name">Photo:</div>
          <img class="picture" :src="photo.url">
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        albumData: null
      }
    },
    methods: {
      getRandomInt () {
        return Math.floor(Math.random() * Math.floor(100))
      },
      retrieveRandomPhotoAlbum () {
        this.loading = true
        fetch(`https://jsonplaceholder.typicode.com/albums/${this.getRandomInt()}/photos`)
          .then(response => response.json())
          .then(response => {
            this.loading = false
            this.albumData = response
          })
      }
    }
  }
</script>

<style scoped>
  .container {
    margin: 32px;
  }
  .title {
    color: #888;
    font-size: 18px;
    font-weight: initial;
    letter-spacing: .25px;
    margin-top: 10px;
  }

  .photo-details-container { 
    width: 30%;
    padding: 16px;
    border: solid 2px #2c3e50;
    border-radius: 25px;
    margin-top: 8px;
  }

  .photo-detail {
    display: flex;
    margin-bottom: 6px;
  }

  .photo-detail .name {
    color: #6a6a6a;
    margin-right: 6px;
  }

  .photo-detail .value {
    color: #35495e;
    font-weight: bold;
  }
  .photo-detail .thumbnail{
    border-radius: 50%;
    max-height: 100px;
  }
  .photo-detail .picture{
    border-radius: 25px;
    max-height: 200px;
  }
  .loader,
  .loader:after {
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }
  .loader {
    margin: 16px;
    font-size: 10px;
    position: relative;
    border-top: 2px solid red;
    border-right: 2px solid orange;
    border-bottom: 2px solid orangered;
    border-left: 2px solid gold;
    transform: translateZ(0);
    animation: loading 1.1s infinite linear;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


</style>
