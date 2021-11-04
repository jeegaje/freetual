<template>
  <div class="p-5">
    <div class="d-flex align-items-center">
      <div>
        <h1>
          <strong>{{ title }}</strong><br>
          Trip.
        </h1>
        <p>{{ content }}</p>
      </div>
      <img src="../assets/jumbotron.jpg" alt="" class="rounded" width="500px" height="250px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumbotronTour',
  props:{
    title: String,
    content: String
  }
}
</script>

