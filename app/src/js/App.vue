<template>
  <div>
    <header class="l-header header">
      <div class="title">
        <h1>Hello world</h1>
      </div>
    </header>
    <div class="l-container">
      <div class="l-section section">
        <h2>{{ message }}</h2>
        <input type="text" v-model="message">
        <a v-on:click="show_error('aタグ')" class="btn btn-primary btn-medium">aタグボタン</a>
        <button v-on:click="show_error('buttonタグ')" class="btn btn-primary btn-medium">buttonタグボタン</button>
        <ErrorMessage v-show="error_message" :message="error_message"/>
      </div>
    </div>
  </div>
</template>

<script>
  import ErrorMessage from './components/ErrorMessage.vue'

  export default {
    data: function() {
      return {
        message: "Hello world!",
        error_message: null
      }
    },
    components: {
      ErrorMessage
    },
    methods: {
      show_error: function (tag) {
        this.error_message = `${tag}を押しても何もおきません`
      }
    }
  }
</script>
