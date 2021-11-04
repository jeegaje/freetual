<template>
  <div>
      <header class="d-flex justify-content-between align-items-center row py-5">
        <div class="col-3">
          <input class="form-control" placeholder="Search">
        </div>
        <div class="w-50">
          <h1 class="text-center fw-bold"><a href="/" class="text-decoration-none text-dark">HOLIYEY</a></h1>
          <ul class="nav mb-2 justify-content-center mb-md-0">
            <li><a href="/education" class="nav-link px-2 link-dark">Education</a></li>
            <li><a href="/nature" class="nav-link px-2 link-dark">Nature</a></li>
            <li><a href="/marine" class="nav-link px-2 link-dark">Marine</a></li>
            <li><a href="/halal" class="nav-link px-2 link-dark">Halal Tourism</a></li>
          </ul>
        </div>
        <div class="d-flex justify-content-end col-3">
          <a href="/login"><button type="button" class="btn btn-outline-primary mr-1">Masuk</button></a>
          <a href="/register"><button type="button" class="btn btn-primary">Daftar</button></a>
        </div>
      </header>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

