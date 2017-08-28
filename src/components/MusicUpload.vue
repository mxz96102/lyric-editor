<template>
  <div class="music-upload">
    <md-input-container>
      <md-file v-on:input="upload" accept="audio/mp3|audio/ogg"></md-file>
    </md-input-container>
    <md-button class="md-icon-button md-raised md-primary upload-btn">
      <md-icon>+</md-icon>
    </md-button>
  </div>
</template>

<script>
  import GlobalBus from './GlobalBus'

  export default {
    name: 'MusicUpload',
    data () {
      return {}
    },
    methods: {
      upload (e) {
        let music = document.querySelector('input[type="file"]').files[0]
        let reader = new FileReader()

        console.log(e)

        reader.onload = e => {
          console.log(e)
          GlobalBus.set('AudioSrc', e.srcElement.result)
        }

        reader.readAsDataURL(music)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .music-upload {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    border-radius: 50px;
    overflow: hidden;
  }
  .upload-btn {
    margin-top: -76px;
    margin-left: auto;
    pointer-events: none;
    cursor: pointer;
  }
  input {
    cursor: pointer;
  }
  .md-input-container {
    padding: 0;
    cursor: pointer;
  }
</style>
