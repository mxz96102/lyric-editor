<template>
  <div class="toolbox">
    <md-button @click="() => peak.player.play()" class="md-raised">播放</md-button>
    <md-button @click="() => peak.player.pause()" class="md-raised">暂停</md-button>
    <md-button class="md-raised">上一句</md-button>
    <md-button class="md-raised">下一句</md-button>
    <md-button @click="addTag" class="md-raised">添加</md-button>
  </div>
</template>

<script>
  import GlobalBus from './GlobalBus'
  import Point from '../module/Point'

  let count = 0

  export default {
    name: 'Toolbox',
    data () {
      return {}
    },
    computed: {
      peak: () => {
        return GlobalBus.get('peak')
      }
    },
    methods: {
      addTag () {
        console.log(GlobalBus.get('peak').points.getPoints())
        GlobalBus.get('peak').points.add(
          new Point(GlobalBus.get('peak').player.getCurrentTime(), '[' + (++count) + ']')
        )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
