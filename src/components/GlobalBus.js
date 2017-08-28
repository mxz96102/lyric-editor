/**
 * Created by mxz on 2017/7/18.
 */
import Vue from 'vue'

// Global bus is used to arrange global information communicate;
const GlobalBus = new Vue()
const data = new Map()

GlobalBus.set = (key, value) => {
  GlobalBus.$emit(key, value)
  data.set(key, value)
}

GlobalBus.get = (key) => data.get(key)

GlobalBus.onSet = (key, callback) => {
  GlobalBus.$on(key, callback.bind(this, data.get(key)))
}

export default GlobalBus
