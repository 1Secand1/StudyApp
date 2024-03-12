<template>
<li 
  class="card" 
  v-for="cardInformation in cards" 
  :key="cardInformation.lessonNumber"
>
<div class="card-heder">
  <p>{{ bellSchedule[cardInformation.lessonNumber - 1].textName }} пара: </p> 
  <p>
    {{bellSchedule[cardInformation.lessonNumber - 1].startTime}} -
    {{bellSchedule[cardInformation.lessonNumber - 1].endTime}} 
  </p>
</div>

<article class="card-content">
  <h3>{{ cardInformation.subjectTitle }}</h3>
  <ul class="parameter-list">
    <li class="parameter-item">
      {{ cardInformation.meetingPlace }}
    </li>
    <li class="parameter-item">
      Аудитория {{ cardInformation.classroom }}
    </li>
    <li class="parameter-item">
      {{ cardInformation.teachersName}}
    </li>
    <li class="parameter-item">
      {{ cardInformation.typeOfLessons}}
    </li>
  </ul>
</article>
</li>
</template>

<script setup>
import { defineProps } from 'vue'
import { bellSchedule } from '../constants/bellSchedule.js'

defineProps(['cards'])
</script>

<style scoped>
.card{
  list-style-type: none;
}

.card-heder{
  display: flex;
  gap: 5px;
}

.card-content {
  margin-top: 5px;  
  padding: 15px;

  background: #253334;
  border-radius: 6px;
  color: white;
}

.parameter-list {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
  margin-top: 15px;

  list-style-type: none;
}

.parameter-item {
  display: flex;

  flex: 1 0 150px;

  border-radius: 5px;
  background: #505254;
  
  padding: 5px 10px;

  font-size: 12px;
  color: white;
}

.list-enter-active,
.list-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition:
    all 0.7s ease,
    transform 0.7s ease;
}

.list-leave-to,
.list-enter-from,
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

@media (max-width: 550px) and (min-width: 410px) {
  /* .parameter-item:last-child {
    min-width: 116px;
    flex: 0;
  } */
}
</style>
