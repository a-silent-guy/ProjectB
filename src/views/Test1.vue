<template>
  <div>
    This is Test Page
    <button @click="jump">跳转</button>
  </div>
</template>

<script>
export default {
  methods: {
    jump() {
      this.$router.push("/test1");
    },
  },
};
</script>
