<template>
  <div class="main">
    <vhead></vhead>
    <vabout></vabout>
    <vfoot></vfoot>
  </div>
</template>

<script>
import vhead from '../../components/common/Head'
import vfoot from '../../components/common/Foot'
import vabout from '../../components/about/About'

export default {
  components: {
    vhead,
    vfoot,
    vabout
  }
}
</script>

<style lang="stylus">
.main
  width 500px
  margin 0 auto
</style>
