<template>
  <div>
    <samp></samp>

    <p class="taimer-text">
      {{ message }}:
      <span v-if="hour"> {{ hour }} часов </span>
      {{ minutes }} минут {{ seconds }} секунд
    </p>
  </div>
</template>

<script setup>
import { useTimer } from '@/servives/useTimer'

const props = defineProps({
  lesons: {
    type: Array,
    default: []
  }
})

const timetable = [
  [
    { time: '08:00', message: 'До начала занятий' },
    { time: '08:45', message: 'Перемена через' },
    { time: '08:50', message: 'Урок через' },
    { time: '09:35', message: 'Перемена через' }
  ],
  [
    { time: '09:45', message: 'Урок через' },
    { time: '10:30', message: 'Перемена через' },
    { time: '10:35', message: 'Урок через' },
    { time: '11:20', message: 'Перемена через' }
  ],
  [
    { time: '11:50', message: 'Урок через' },
    { time: '12:35', message: 'Перемена через' },
    { time: '12:40', message: 'Урок через' },
    { time: '13:25', message: 'Перемена через' }
  ],
  [
    { time: '13:35', message: 'Урок через' },
    { time: '14:20', message: 'Перемена через' },
    { time: '14:25', message: 'Урок через' },
    { time: '15:10', message: 'Перемена через' }
  ],
  [
    { time: '15:20', message: 'Урок через' },
    { time: '16:05', message: 'Перемена через' },
    { time: '16:10', message: 'Урок через' },
    { time: '16:55', message: 'Перемена через' }
  ],
  [
    { time: '17:05', message: 'Урок через' },
    { time: '17:50', message: 'Перемена через' },
    { time: '17:55', message: 'Урок через' },
    { time: '18:40', message: 'Перемена через' }
  ],
  [
    { time: '18:50', message: 'Урок через' },
    { time: '19:35', message: 'Перемена через' },
    { time: '19:40', message: 'Урок через' },
    { time: '20:25', message: 'Перемена через' }
  ]
]

function getTaims(timeList, taims) {
  return taims.reduce((acc, element) => [...acc, ...timeList[element - 1]], [])
}

const { hour, minutes, seconds, message } = new useTimer(
  getTaims(timetable, props.lesons)
)
</script>

<style scoped>
.taimer-text {
  color: white;
  font-size: 16px;

  background: #253334;
  border-radius: 5px;

  margin-top: 5px;
  padding: 10px 15px;
}
</style>
