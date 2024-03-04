<template>
<div class="wrapper">
  <RouterView />
</div>

<nav class="navigation-menu">
  <ul class="navigation-menu__list wrapper">
     <li class="navigation-menu__item">
      <RouterLink 
        to=""
        class="navigation-menu__icon-link"
      >
        <svg-icon-loader 
          icon-name="undefined"
          viewBox="0 0 21 20"
          width="25"
          height="25" 
        />
        <h5 class="navigation-menu__icon-link-title">
          undefined
        </h5>
      </RouterLink>
    </li>

     <li class="navigation-menu__item">
      <RouterLink 
        to=""
        class="navigation-menu__icon-link"
      >
        <svg-icon-loader 
          icon-name="undefined"
          viewBox="0 0 21 20"
          width="25"
          height="25" 
        />
        <h5 class="navigation-menu__icon-link-title">
          undefined
        </h5>
      </RouterLink>
    </li>
  </ul>
</nav>
</template>

<script setup>
import SvgIconLoader from './components/icons/SvgIconLoader.vue'
</script>

<style scoped>
@import './assets/main.css';

.wrapper {
  max-width: 900px;
  margin-inline: auto;
  padding-inline: 16px;
}

.navigation-menu {
  display: none;
}

.navigation-menu__list {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 864px;

  width: 100%;
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;

  border-radius: 10px 10px 0 0;
  padding: 10px 20px;

  background: #253334;
  color: white;
}

.navigation-menu__item{
  display: grid;
}

.navigation-menu__icon-link {
  display: grid;

  fill: #676D75;
  color: #676D75;

  gap: 5px;
  justify-items: center;

  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
}

.navigation-menu__icon-link:hover{
  fill: #539DF3;
  color: #539DF3;
}

</style>
