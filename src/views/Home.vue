<template>
  <div class="container">
    
    <Navbar/>
    <Jumbotron/>
    <h4 class="text-center fw-bold mb-5 animate__animated animate__fadeInDown animate__delay-1s">The Best Place in the Years</h4>
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
            <h5 class="card-title text-center fw-bold">Museum Mpu Tantular</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary py-auto">Jelajahi</a>
          </div>
        </div>
    </div>

    <h4 class="text-center fw-bold py-5 mt-5 mb-5">Costumer Feedback</h4>
    <div class="d-flex justify-content-between">
      <div class="d-flex flex-column align-items-center w-25">
        <img class="img-feedback" src="../assets/img-feedback.jpg" alt="" width="200px" height="200px">
        <p class="text-center my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt, omnis non ullam.</p>
        <p class="font-italic fw-bold">- Ardhito Pramono -</p>
      </div>
      <div class="d-flex flex-column align-items-center w-25">
        <img class="img-feedback" src="../assets/img-feedback.jpg" alt="" width="200px" height="200px">
        <p class="text-center my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt, omnis non ullam.</p>
        <p class="font-italic fw-bold">- Ardhito Pramono -</p>
      </div>
      <div class="d-flex flex-column align-items-center w-25">
        <img class="img-feedback" src="../assets/img-feedback.jpg" alt="" width="200px" height="200px">
        <p class="text-center my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt, omnis non ullam.</p>
        <p class="font-italic fw-bold">- Ardhito Pramono -</p>
      </div>
    </div>

    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
          </a>
          <span class="text-muted">&copy; 2021 Holiyey</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
          <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
          <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Jumbotron from '@/components/Jumbotron.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Jumbotron
  }
}
</script>