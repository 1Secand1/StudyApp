<template>
  <header class="header">
    <div class="date-info">
      <h2>{{setCurrentDate(currentWeekDay)}}</h2>
      <pick-value-from-the-list
        listName="switch"
        type="radio"
        :elements="weekTypelist"
        :selected="weekType"
        v-model="weekType"
      />
    </div>
    <pick-value-from-the-list
      type="radio"
      :elements="weekDayFoListSelect"
      :selected="currentWeekDay"
      v-model="currentWeekDay"
    />
  </header>

  <ul class="time-section-list">
    <subject-card
      :cards="hasLessonPlan"
    />
  </ul>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

import subjectCard from '../components/SubjectСard.vue'
import pickValueFromTheList from '../components/pickValueFromTheList.vue'
import { daysOfTheWeek } from '../constants/weekDay.js'
import { lessonTimetable } from '../constants/lessonTimetable.js'

const currentWeekDay = ref(Object.keys(daysOfTheWeek)[new Date().getDay()-1])
const weekType = ref('numerator')

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
const weekDayFoListSelect = Object.entries(daysOfTheWeek).map((weekDay) => {
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
  // console.log(weekType);
}
function setCurrentDate(weekDay) {
  const date = new Date()
  if (!weekDay) return

  const months = ["Январья", "Февралья", "Марта", "Апрелья", "Майя", "Июнья", "Июлья", "Августа", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const weekdayNumber = daysOfTheWeek[weekDay].weekdayNumber

  const currentMonth = date.getMonth()
  const currentDateOfTheMonth = date.getDate()
  const currentYear = date.getFullYear()
  const currentWeekDay = date.getDay()

  const targetDateOfTheMonth = currentDateOfTheMonth - currentWeekDay + weekdayNumber;
  const setDate = new Date(currentYear, currentMonth, targetDateOfTheMonth)

  const setDateWeekdayDate = setDate.getDate();
  const setDateMonthNumber = setDate.getMonth()

  const setDateMonthName = months[setDateMonthNumber]

  return`${setDateWeekdayDate} ${setDateMonthName}`
}

const hasLessonPlan = computed(() => {
  return lessonTimetable[0].weeklyLessonPlan[currentWeekDay.value]
});
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