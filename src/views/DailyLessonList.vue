<template>
  <header class="header">
    <div class="date-info">
      <h2>1 марта</h2>
      <pick-value-from-the-list
        name="switch"
        type="radio"
        :elements="weekTypelist"
        selected="monday"
        @get-element=""
      />
    </div>
    <pick-value-from-the-list
      type="radio"
      :elements="weekDayFoListSelect"
      selected="monday"
      @get-element="showTheDaysLessons"
    />
  </header>

  <ul class="time-section-list">
    <time-section
      v-if="cards.length"
      class="test"
      :cards="cards"
    />
    <p v-else>
      Пар нету
    </p>
  </ul>
</template>

<script setup>
import { reactive } from 'vue'

import timeSection from '../components/SubjectСard.vue'
import pickValueFromTheList from '../components/pickValueFromTheList.vue'
import { daysOfTheWeek } from '../constants/weekDay.js'
import { lessonTimetable } from '../constants/lessonTimetable.js'

const cards = reactive([])
const weekTypelist = [
  {
    name: "numerator",
    textValue:"Числитель"
  },
  {
    name: "denominator",
    textValue:"Знаменатель"
  },
]

function showTheDaysLessons(weekDay) {
  const lessons = lessonTimetable[0].weeklyLessonPlan[weekDay]
 
  cards.length = 0
  cards.push(...lessons)
}

const weekDayFoListSelect = Object.entries(daysOfTheWeek).map((weekDay)=>{
  return {
    name: weekDay[0],
    textValue: weekDay[1].textValue
  }
})

</script>

<style scoped>
.box{
  display: block;
  width: 100px;
  height: 100px;
  background: #000;
}
.box-item{
  width: 10px;
  height: 10px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
background: red;
}

.header{
  position: sticky;
  top: 0;
  background: white;
}

.date-info{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.time-section-list {
  display: grid;

  gap: 20px;
  margin-top: 20px;
  margin-bottom: 100px;
}

.test {
  animation: fadeIn 2s ease-in-out;
}
</style>
