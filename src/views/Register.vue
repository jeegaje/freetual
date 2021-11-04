<template>
  <div class="container">
    <Navbar/>
    <div class="d-flex flex-column align-items-center">
      <h2>Daftar</h2>
      <p>Masukkan Informasi data diri dibawah ini</p>
      <div class="w-25">
        <input class="form-control mb-2" placeholder="Email">
        <input class="form-control mb-2" placeholder="Nama Lengkap">
        <input class="form-control mb-2" placeholder="No. Handphone">
        <input class="form-control mb-2" placeholder="Password">
        <input class="form-control mb-3" placeholder="Ulangi Password">
      </div>
      <button type="button" class="btn btn-primary">Daftar</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Register',
  components: {
    Navbar
  }
}
</script>
