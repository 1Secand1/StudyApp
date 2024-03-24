<template>
  <header class="header">
    <div class="date-info">
      <h2>{{ targetDateByWeekday }}</h2>
      <pick-value-from-the-list
        listName="switch"
        type="radio"
        :elements="listOfWeekTypes"
        :selected="weekType"
        v-model="userWeekType"
      />
    </div>
    <pick-value-from-the-list
      type="radio"
      :elements="weekdayList"
      :selected="currentWeekDay"
      v-model="currentWeekDay"
    />
  </header>

  <ul class="time-section-list">
    <subject-card
      v-if="hasLessonPlan.length"
      :cards="hasLessonPlan"
    />
    <p v-else>
      На этот день занятий нету
    </p>
  </ul>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

import subjectCard from '../components/SubjectСard.vue'
import pickValueFromTheList from '../components/pickValueFromTheList.vue'
import { daysOfTheWeek } from '../constants/weekDay.js'
import { lessonTimetable } from '../constants/lessonTimetable.js'

const currentWeekDay = ref(getCurrentWeekDay())
const weekType = ref(determineWeekType())
const userWeekType = ref(determineWeekType())

const listOfWeekTypes = [
  {
    name: "numerator",
    textValue:"Числитель"
  },
  {
    name: "denominator",
    textValue:"Знаменатель"
  },
]
const weekdayList = getWeekdayList()

function determineWeekType() {
  const currentDate = new Date();
  // Дата установлена на первое января текущего года  
  const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
  const millisecondsPerWeek = 1000 * 3600 * 24 * 7;
  const weeksElapsed = (currentDate - startOfYear) / millisecondsPerWeek | 0

  return weeksElapsed % 2 === 0 ? "numerator" : "denominator";
}
function getWeekdayList() {
  const { sunday, ...otherDays } = daysOfTheWeek;

  return Object.entries(otherDays).map((weekDay) => {
    return {
      name: weekDay[0],
      textValue: weekDay[1].textValue
    };
  });
}
function getCurrentWeekDay() {
  return Object.keys(daysOfTheWeek)[new Date().getDay()]
}

const hasLessonPlan = computed(() => {
  return lessonTimetable[userWeekType.value].weeklyLessonPlan[currentWeekDay.value] || []
});

const targetDateByWeekday = computed(() => {
if (!currentWeekDay.value) throw new Error("Weekday is not defined");

const weekdayNumber = daysOfTheWeek[currentWeekDay.value].weekdayNumber;
if (weekdayNumber === undefined) throw new Error("Unknown day of the week");

const months = ["Январья", "Февралья", "Марта", "Апрелья", "Майя", "Июнья", "Июлья", "Августа", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const currentDate = new Date();

if ( userWeekType.value !== weekType.value) {
  currentDate.setDate(currentDate.getDate() + 7)
}

const daysToSubtract = currentDate.getDay() - weekdayNumber;
currentDate.setDate(currentDate.getDate() - daysToSubtract);

return `${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
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
  padding:5px 0;
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
  cursor: pointer;
  padding: 2px 5px;
  border-radius: 5px;
}
.switch-active {
  color: white;
  background: #623df6;
}
</style>