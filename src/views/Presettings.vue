<template>
  <div class="wrapper">
      <section class="groupSelection">
        <div class="groupSelection__heder">
          <h2>Выбирите группу</h2>
          <input
            class="input"
            type="wrapper"
            placeholder="Введите название группы"
          />
        </div>
        <pickValueFromTheList
          class="rew"
          type="radio"
          :elements="groupList"
          :selected="groupCode"
          v-model="groupCode"
        >
        </pickValueFromTheList>
      </section>

    </div>
</template>

<script setup>
import { useUserSettings } from '@/stores/UserSettings'
import { storeToRefs } from 'pinia'
import pickValueFromTheList from '../components/pickValueFromTheList.vue'

import { computed, ref } from 'vue'

const store = useUserSettings()
const { groupCode, theme } = storeToRefs(store)

const groupList = [
  {
    name: 'исп-216',
    textValue: 'исп216'
  },
  {
    name: 'исп-216в',
    textValue: 'исп216в'
  },
  {
    name: 'исп-215',
    textValue: 'исп215'
  },
]
</script>
<style scoped>
.wrapper {
  max-width: 500px;
  display: grid;
  position: relative;
  place-items: center;

  margin-inline: auto;
  padding-inline: 16px;
}

.groupSelection {
  position: relative;
  max-width: 350px;
  width: 100%;

}

.groupSelection::after{
  position: absolute;
  width: 50px;
  height: 50px;
  content:" ";
  top: 50%;
  right:-20px;

  transform: translateX(100%);

  background-size: 50px;
  background-image:url(/public/arrow.svg);
  background-repeat: no-repeat;
  background-position: center center;

  cursor: pointer;
  transition:opacity 0.2s ease-in;
}

.groupSelection:hover::after {
  opacity: 0.8;
}

.groupSelection__heder{
  max-width: 350px;
  width: 100%;
}


.input {
  display: flex;
  width: 100%;
  padding: 8px 5px;
  margin-top: 10px;

  border: solid 1px gray;
  border-radius: 5px;
  padding: 5px 10px;
}

.button {
  height: min-content;
  
  margin-top: 10px;
  margin-left: 30px;
  padding: 8px;
  
  color: white;
  
  background: #4a4a4a;
  border: solid 1px gray;
  border-radius: 5px;

  cursor: pointer;
}

.rew {
  display: grid;
  
  padding-right: 10px;
  max-height: 70svh;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 10px;
  padding: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; /* цвет фона дорожки */
}

::-webkit-scrollbar-thumb {
  background: #888; /* цвет ползунка */
  border-radius: 100px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555; /* цвет ползунка при наведении */
}

* {
  scrollbar-width: thin; /* 'thin' для более узкого скроллбара или 'auto' для стандартной ширины */
  scrollbar-color: #888 #f1f1f1; /* цвет ползунка и дорожки */
}
</style>
