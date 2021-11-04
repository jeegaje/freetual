<template>
  <div class="container">
    <Navbar />
    <h3 class="text-center fw-bold">Akun Saya</h3>
    <div class="d-flex align-items-center">
      <div class="mr-5">
        <div class="d-flex align-items-center mb-4">
          <img
            class="img-feedback mr-2"
            src="../assets/img-feedback.jpg"
            alt=""
            width="50px"
            height="50px"
          />
          <h5 class="m-0">Ardhito Pramono</h5>
        </div>
        <a href="/account" class="account"><p>Data Profil</p></a>
        <a href="/account/pesanan" class="account"><p>Riwayat Pesanan</p></a>
        <a href="/account/transaksi" class="account"
          ><p>Riwayat Transaksi</p></a
        >
      </div>

      <div class="card flex-fill my-5">
        <div class="card-body">
          <h4 class="mt-2 mb-5 border-bottom pb-3 text-center">
            Kelola Data Diri Anda
          </h4>
          <div class="row">
            <div class="col-3 fw-bold">
              <p>Nama</p>
              <p>Jenis Kelamin</p>
              <p>No. Handphone</p>
              <p>Email</p>
              <p>Password</p>
              <p>Alamat</p>
            </div>
            <div class="col-6">
              <p>Nama</p>
              <p>Jenis Kelamin</p>
              <p>No. Handphone</p>
              <p>Email</p>
              <p>Password</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                sed pariatur rerum, quas perferendis non magni, ipsum earum
                corporis ex, quibusdam dicta nemo itaque eligendi! Quasi
                molestiae earum iste distinctio.
              </p>
            </div>
            <div class="col-3 border-left">
              <div class="d-flex flex-column align-items-center">
                <img
                  class="img-feedback mb-2"
                  src="../assets/img-feedback.jpg"
                  alt=""
                  width="150px"
                  height="150px"
                />
                <a href="">Edit Foto Profil</a>
              </div>
            </div>
          </div>
          <a href="/"
            ><button type="button" class="btn btn-primary mt-5">
              Edit Data Profil
            </button></a
          >
        </div>
      </div>
    </div>
    <div v-for="user in users" :key="user.email">
      <h4>{{user.email}}</h4>
      <h3>{{ user.id }}</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "Account",
  components: {
    Navbar,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    setUsers(user) {
      this.users = user;
    },
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => this.setUsers(response.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>
