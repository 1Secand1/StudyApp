<template>
  <ul 
    :class="getCurrentClass('selection-list')"
    @click="selectDayOfTheWeek"
  >
    <li
      :class="pickItemClass(name)"
      v-for="({name, textValue}) in elements"
      :data-weekday="name"
      :key="name"
    >
      {{ textValue }}
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['getElement'])
const props = defineProps({
  type: {
    type: String,
    default: 'radio',
    validator(value) {
      return ['radio', 'select'].includes(value)
    }
  },
  listName: {
    type: String,
    default: undefined
  },
  elements: [Array],
  selected: [Array]
})

const selectedWeekdays = ref(props.selected)

function getCurrentClass(userClass, active = true) {
  const { listName } = props;
  const selectedClass = !listName ? userClass : `${listName}-${userClass}`;
  return {
    [selectedClass]: active,
  };
}
function pickItemClass(pickItemName) {
  return [
    getCurrentClass('selection-list__item'),
    getCurrentClass("active",selectedWeekdays.value.includes(pickItemName))
  ]
}
function radio(weekDay) {
  selectedWeekdays.value = weekDay
}
function select(weekDay) {
  if (!selectedWeekdays.value.includes(weekDay)) {
    selectedWeekdays.value.push(weekDay)
  } else {
    selectedWeekdays.value = selectedWeekdays.value.filter(
      (item) => item !== weekDay
    )
  }
}
function selectDayOfTheWeek({ target }) {
  const { tagName, dataset } = target
  if (tagName !== 'LI') return

  if (props.type === 'radio') {
    radio(dataset.weekday)
  } else {
    select(dataset.weekday)
  }

  emit('getElement', selectedWeekdays.value)

}


onMounted(() => {
  emit('getElement', props.selected)
})
</script>

<style scoped>
.selection-list{
  display: flex;
  flex-wrap: wrap;

  gap: 5px;
  margin-top: 20px;

  list-style: none;
}

.selection-list__item {
  text-align: center;
  cursor: pointer;
  flex: 1;
  background: #253334;
  color: white;
  padding: 10px;
  border-radius: 5px;
} 

.active {
  background: #623df6;
}
</style>
