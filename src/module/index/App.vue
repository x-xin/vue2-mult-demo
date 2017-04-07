<template>
  <div>
    <vhead></vhead>
    <vindex></vindex>
    <vfoot></vfoot>
    <el-rate v-model="value1"></el-rate>
  </div>
</template>

<script>
import vhead from '../../components/common/Head'
import vfoot from '../../components/common/Foot'
import vindex from '../../components/index/Index'

export default {
  data () {
    return {
      value1: null
    }
  },
  components: {
    vhead,
    vfoot,
    vindex
  }
}
</script>

<style>

</style>
