<template>
  <p style="color: black; font-size: 30px; text-align: center; margin-top: 50px;">
     {{ hour }} часов {{ minutes }} минут {{ seconds }} секунд
  </p>
</template>

<script setup>
  import { useTimer } from '@/servives/useTimer';
  const { hour, minutes, seconds } = new useTimer(['9:00','10:00','12:00']);
</script>

<style></style>