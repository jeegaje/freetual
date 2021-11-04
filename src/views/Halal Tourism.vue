<template>
  <div class="container">
    <Navbar/>
    <JumbotronTour title="Halal Tourism" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, neque. Modi veritatis assumenda laudantium! Nam incidunt ut vitae ipsum, corrupti ex provident amet alias atque ducimus, fugit temporibus ullam ad."/>

    <h4 class="text-center fw-bold mb-5 animate__animated animate__fadeInDown animate__delay-1s">Rekomendasi Wisata</h4>
    <div class="d-flex flex-row justify-content-between mb-5 animate__animated animate__fadeInDown animate__delay-1s">
        <div class="card" style="width: 18rem;">
          <img src="../assets/Education-1.jpg" class="card-img-top" alt="...">
          <div class="card-body d-flex flex-column align-items-center">
            <h5 class="card-title text-center fw-bold">Taman Pintar Yogyakarta</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary py-auto">Jelajahi</a>
          </div>
        </div>

        <div class="card" style="width: 18rem;">
          <img src="../assets/Education-2.jpg" class="card-img-top" alt="...">
          <div class="card-body d-flex flex-column align-items-center">
            <h5 class="card-title text-center fw-bold">Jatim Park 2</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary py-auto">Jelajahi</a>
          </div>
        </div>

        <div class="card" style="width: 18rem;">
          <img src="../assets/Education-3.jpg" class="card-img-top" alt="...">
          <div class="card-body d-flex flex-column align-items-center">
            <h5 class="card-title text-center fw-bold">Museum Geologi Bandung</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary py-auto">Jelajahi</a>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import JumbotronTour from '@/components/Jumbotron Tour.vue'

export default {
  name: 'Halal',
  components: {
    Navbar,
    JumbotronTour
  }
}
</script>
