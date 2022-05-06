<template>
  <div class="text-block">{{ menuItems }}</div>
</template>
<script>
export default {
  name: "MenuParser",
  props: { menuItems: String },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-block {
  white-space: pre;
}
</style>
