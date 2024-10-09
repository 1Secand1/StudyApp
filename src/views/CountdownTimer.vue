<template>
  <p class="taimer">
    {{ message }}: {{ hour }} часов {{ minutes }} минут {{ seconds }} секунд
  </p>
</template>

<script setup>
import { useTimer } from '@/servives/useTimer'
const { hour, minutes, seconds, message } = new useTimer([
  { time: '08:00', message: 'До начала занятий' },
  { time: '08:45', message: 'До перемены' },
  { time: '08:50', message: 'До урока' },
  { time: '09:35', message: 'До перемены' },

  { time: '09:45', message: 'До урока' },
  { time: '10:30', message: 'До перемены' },
  { time: '10:35', message: 'До урока' },
  { time: '11:20', message: 'До перемены' },

  { time: '11:50', message: 'До урока' },
  { time: '12:35', message: 'До перемены' },
  { time: '12:40', message: 'До урока' },
  { time: '13:25', message: 'До перемены' },

  { time: '13:35', message: 'До урока' },
  { time: '14:20', message: 'До перемены' },
  { time: '14:25', message: 'До урока' },
  { time: '15:10', message: 'До перемены' },

  { time: '15:20', message: 'До урока' },
  { time: '16:05', message: 'До перемены' },
  { time: '16:10', message: 'До урока' },
  { time: '16:55', message: 'До перемены' },

  { time: '17:05', message: 'До урока' },
  { time: '17:50', message: 'До перемены' },
  { time: '17:55', message: 'До урока' },
  { time: '18:40', message: 'До перемены' },

  { time: '18:50', message: 'До урока' },
  { time: '19:35', message: 'До перемены' },
  { time: '19:40', message: 'До урока' },
  { time: '20:25', message: 'До окончания занятий' }
]);

</script>

<style>
.taimer {
  color: black;
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
}
</style>
