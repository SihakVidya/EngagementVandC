<template>
  <div class="logo">
    <span class="logo-text">V & C</span>
    <div class="logo-underline"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.logo {
  position: fixed;
  top: 24px;
  left: 24px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  color: #5a4a5a;
}

.logo-underline {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #d4a5a5 50%,
    transparent 100%
  );
  margin-top: 4px;
}

@media (max-width: 768px) {
  .logo {
    top: 16px;
    left: 16px;
  }

  .logo-text {
    font-size: 1rem;
    letter-spacing: 0.2em;
  }
}
</style>
