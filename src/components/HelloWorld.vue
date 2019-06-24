<template>
  <div class="hello">
    <!-- <mt-progress :value="60">
      <div slot="start">0%</div>
      <div slot="end">100%</div>
    </mt-progress> -->
    <Card style="width:350px">
        <p slot="title">
            Classic film
        </p>
    </Card>
    <MintButton>测试</MintButton>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
