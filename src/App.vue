<template>
  <div id="app">
    <md-toolbar md-theme="blue" class="md-whiteframe-1dp">
      <h2 class="md-title" style="flex: 1">Hake Lyric</h2>
    </md-toolbar>
    <md-card class="big-card">
      <MusicUpload></MusicUpload>
      <AudioUI></AudioUI>
    </md-card>
    <Toolbox></Toolbox>
  </div>
</template>

<script>
import AudioUI from './components/AudioUI'
import Toolbox from './components/Toolbox'
import MusicUpload from './components/MusicUpload'
import GlobalBus from './components/GlobalBus'

GlobalBus.set('isLoadMusic', false)

export default {
  name: 'app',
  components: {
    AudioUI,
    Toolbox,
    MusicUpload
  },
  data () {
    return {
      isLoadMusic: false
    }
  }
}
</script>

<style>
@import "../node_modules/vue-material/dist/vue-material.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.big-card {
  width: 790px;
  margin: 20px auto;
}

.md-toolbar {
  background: #00A8E8;
  color: white;
}
</style>
