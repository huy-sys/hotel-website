<template>
  <div class="search-results">
    <div class="search-header mb-8">
      <h1 class="text-2xl font-bold mb-4">10 Results Found</h1>
      <div class="flex gap-[9px]">
        <div class="fitler-tag">
          Apartments
          <div class="cursor-pointer ml-2"><IconDelete /></div>
        </div>
        <div class="fitler-tag">
          Houses
          <div class="cursor-pointer ml-2"><IconDelete /></div>
        </div>
        <div class="fitler-tag">
          Villas
          <div class="cursor-pointer ml-2"><IconDelete /></div>
        </div>
        <button
          class="px-[15px] py-[5px] flex items-center rounded-full border-[1px] mr-[25px] justify-center border-[#c9c9c9] hover:bg-[#c9c9c9]"
        >
          <IconFilter />
          <span class="font-semibold ml-[6px]">Filters</span>
        </button>
      </div>
    </div>

    <!-- Add your search results content here -->
    <div class="search-content">
      <!-- You can add property listing components here -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import IconDelete from '@/components/icons/IconDelete.vue'
import IconFilter from '@/components/icons/IconFilter.vue'

const route = useRoute()
const searchParams = ref({
  location: '',
  checkIn: '',
  checkOut: '',
  guests: 0
})

// Format date for display
const formatDate = (dateString: string) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString()
}

onMounted(() => {
  // Get search params from URL
  searchParams.value = {
    location: (route.query.location as string) || '',
    checkIn: (route.query.checkIn as string) || '',
    checkOut: (route.query.checkOut as string) || '',
    guests: Number(route.query.guests) || 0
  }

  // Here you can add logic to fetch search results based on searchParams
})
</script>

<style scoped>
.search-results {
  padding-top: 80px;
  padding-left: 80px;
}
.fitler-tag {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #484848;
  font-weight: 400;
  border-radius: 17px;
  background-color: #e0e2e6;
  padding: 5px 15px;
}
</style>
