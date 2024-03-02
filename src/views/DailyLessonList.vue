<template>
  <header class="header">
    <div class="date-info">
      <h2>1 марта</h2>
      <pick-value-from-the-list
        listName="switch"
        type="radio"
        :elements="weekTypelist"
        :selected="weekType"
        @get-element="switchWeekType"
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
      :cards="cards"
    />
    <p v-else>
      Пар нету
    </p>
  </ul>
</template>

<script setup>
import { reactive, ref } from 'vue'

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
const weekType = 'numerator'
const weekDayFoListSelect = Object.entries(daysOfTheWeek)
  .map((weekDay) => {
    return {
      name: weekDay[0],
      textValue: weekDay[1].textValue
    }
  })


function showTheDaysLessons(weekDay) {
  const lessons = lessonTimetable[0].weeklyLessonPlan[weekDay]
 
  cards.length = 0
  cards.push(...lessons)
}
function switchWeekType(weekType) {
  console.log(weekType);
}

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
</style>

<style >
.switch-selection-list{
  display: flex;
  list-style: none;
  gap: 10px;
}
.switch-selection-list__item{
  padding: 2px 5px;
  border-radius: 5px;
}
.switch-active {
  color: white;
  background: #623df6;
}
</style>