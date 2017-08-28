<template>
  <div class="audio-ui">
    <div class="peak-container">
    </div>
    <audio v-bind:src="audiosrc" class="peak-audio"></audio>
  </div>
</template>

<script>
import Peaks from 'peaks.js'
import GlobalBus from './GlobalBus'
import MdInput from '../../node_modules/vue-material/src/components/mdInputContainer/mdInput'

export default {
  components: {MdInput},
  name: 'audioUI',
  data () {
    return {
      audiosrc: ''
    }
  },
  computed: {
  },
  mounted () {
    let __this = this

    GlobalBus.onSet('AudioSrc', function () {
      setTimeout(__this.initAudio, 2000)
    })
  },
  methods: {
    initAudio () {
      document.querySelector('audio').src = GlobalBus.get('AudioSrc')

      let actx = new AudioContext()
      let peak = Peaks.init({
        container: document.querySelector('.peak-container'),
        mediaElement: document.querySelector('.peak-audio'),
        audioContext: actx,
        width: [750],
        zoomAdapter: 'static',
        overviewWaveformColor: 'rgba(52,138,167,0.8)',
        zoomWaveformColor: 'rgba(93, 211, 158, 1)',
        zoomLevels: [2048],
        playheadColor: 'rgba(197, 96, 55, 0.5)',
        playheadTextColor: '#05668D',
        axisLabelColor: '#FF9F1C'
      })

      GlobalBus.set('AudioContext', actx)

      peak.on('segments.ready', (e) => {
        GlobalBus.set('peak', peak)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .peak-container{
    width: 790px;
    margin: 0 auto;
    padding: 20px;
  }
</style>
