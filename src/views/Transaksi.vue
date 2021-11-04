<template>
  <div class="container ">
    <Navbar/>
    <h3 class="text-center fw-bold">Akun Saya</h3>
    <div class="d-flex align-items-center ">
      <div class="mr-5">
        <div class="d-flex align-items-center mb-4">
          <img class="img-feedback mr-2" src="../assets/img-feedback.jpg" alt="" width="50px" height="50px">
          <h5 class="m-0">Ardhito Pramono</h5>
        </div>
        <a href="/account" class="account"><p>Data Profil</p></a>
        <a href="/account/pesanan" class="account"><p>Riwayat Pesanan</p></a>
        <a href="/account/transaksi" class="account"><p>Riwayat Transaksi</p></a>
      </div>

      <div class="card flex-fill my-5">
        <div class="card-body">
          <h4 class="mt-2 mb-5 border-bottom pb-3 text-center">Riwayat Transaksi</h4>
          <div class="text-center">
            Tidak ada transaksi
          </div>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Transaksi',
  components: {
    Navbar
  }
}
</script>
