<template>
  <div class="mt-[167px] mb-[80px] grid grid-cols-12 grid-rows-1 gap-4 w-[1440px] mx-auto">
    <div className="col-span-7">
      <span class="font-extrabold text-6xl text-[#E8EAEC]"> Reservation <br />Form </span>
      <div class="text-lg text-[#484848] mt-[16px] mb-[33px]">
        Sample reservation form to be provided for the concept and further design...
      </div>
      <router-link to="/" class="font-semibold text-lg text-[#484848]">Go To Home</router-link>
    </div>
    <div className="col-span-5 col-start-8 bg-[#EFF0F2] p-[30px] rounded-[10px]">
      <div className="grid grid-cols-5 grid-rows-1 gap-1">
        <div class="w-[100px] h-[100px] bg-[#C2C6CC] rounded-md"></div>
        <div className="col-span-4">
          <p class="text-base font-bold text-[#484848]">Fully Furnished Apartment</p>
          <p class="text-sm text-[#9A9A9A] border-b border-[#E0E2E6] pb-[7px] mb-[10px]">
            100 Smart Street, LA, USA
          </p>
          <div className="grid grid-cols-3 grid-rows-1 gap-4">
            <div class="text-sm font-semibold text-[#9A9A9A]">1 Bedroom</div>
            <div class="text-sm font-semibold text-[#9A9A9A]">1 Bathroom</div>
            <div class="text-sm font-semibold text-[#9A9A9A]">1 Parking</div>
          </div>
        </div>
      </div>
      <div class="price-details my-[46px]">
        <p class="font-bold text-lg mb-[16px]">Price Details</p>
        <ul>
          <li>Short Period: $ 1000</li>
          <li>Medium Period: $ 2000</li>
          <li>Long Period: $ 2000</li>
        </ul>
      </div>
    </div>
    <!-- <div class="sheet-container col-span-12 row-start-2">
      <h2>Google Sheet Data:</h2>
      <table class="sheet-table">
        <thead>
          <tr>
            <th v-for="(header, index) in sheetData[0]" :key="index">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in sheetData.slice(1)" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const sheetData = ref([])

const fetchSheetData = async () => {
  try {
    const apiKey = 'AIzaSyCD0ztQzO3ju1uibxdpYmkQyNClSg-1zj4'
    const spreadsheetId = '1HKRQDHkM3ZlRcNWw8janafFquGG0PzAk-KQST1dKXMM'
    const range = 'V2.0' // Thay đổi tùy vào phạm vi bạn muốn lấy

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`

    const response = await axios.get(url)
    // Xử lý dữ liệu để thay thế các ô trống bằng "-"
    sheetData.value = response.data.values.map((row: any[]) =>
      row.map(cell => (cell === undefined || cell === '' ? '-' : cell))
    )
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error)
  }
}

// Gọi hàm fetchSheetData để lấy dữ liệu
fetchSheetData()
</script>

<style scoped>
.sheet-container {
  padding: 1rem;
  max-width: 100%;
  overflow-x: auto;
}

.sheet-table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

.sheet-table th,
.sheet-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border: 1px solid #ddd;
}

.sheet-table th {
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
}

.sheet-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.sheet-table tr:hover {
  background-color: #ddd;
}

ul > li {
  color: #9a9a9a;
  font-weight: 400;
  font-size: 16px;
}
</style>