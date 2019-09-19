<template>
  <div class="error-message" v-show="message">
    {{ message }}
  </div>
</template>

<script>
export default {
    props: ['message']
}
</script>
