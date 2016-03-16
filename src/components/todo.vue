<template lang="jade">
.list
  ul
    li.item(v-for="todo in todos") {{todo}}
</template>

<script>
export default {
  props: ['todos']
}
</script>

<style lang="less">
.list {
  ul {
    margin-top: 20px;
  }
}
.item {
  font-size: 16px;
}
</style>