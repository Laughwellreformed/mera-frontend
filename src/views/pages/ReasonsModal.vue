<template>
  <CModal v-model:visible="visibleReasonsModal" title="Reasons">
    <CModalBody>
      <ul>
        <li v-for="(reason, index) in reasons" :key="index">{{ reason }}</li>
      </ul>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="visibleReasonsModal = false">Close</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import { ref } from 'vue'

const visibleReasonsModal = ref(false)
const reasons = ref([])

const openReasonsModal = (siteReasons) => {
  reasons.value = siteReasons
  visibleReasonsModal.value = true
}
</script>