<template lang="">
  <div />
</template>
<script>
export default {
  mounted(){
    window.addEventListener('workspace-id-key-sessionstorage-changed', () => {
      this.$store.dispatch('setWorkspaceId')
      this.$store.dispatch('setRepositoryId')
      this.$store.dispatch("fetchMembers")
    })
  },

}
</script>
<style lang="">
  
</style>