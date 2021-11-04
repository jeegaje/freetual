<template>
  <div class="container">
    <Navbar/>
    <div class="d-flex flex-column align-items-center">
      <h2>Masuk</h2>
      <p>Masukkan Email dan Pasword dengan Benar</p>
      <div class="w-25">
        <input class="form-control mb-2" placeholder="Email">
        <input class="form-control mb-3" placeholder="Password">
      </div>
      <button type="button" class="btn btn-primary mb-4">Masuk</button>
      <p>Belum Punya Akun ? 
        <a href="/register">Daftar Sekarang</a>
      </p>
      <p>
        <a href="#">Lupa Kata Sandi</a>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Login',
  components: {
    Navbar
  }
}
</script>
