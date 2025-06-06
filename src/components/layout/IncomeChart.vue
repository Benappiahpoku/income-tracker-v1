<!--
  IncomeChart.vue
  Minimal, mobile-first SVG chart for visualizing income trends.
  - Uses static/mock data for now (replace with real data later).
  - No external chart libraries (keeps bundle small and offline-friendly).
  - All code is clear, concise, and well-commented for learning.
  - Touch targets and text are large for Ghanaian mobile users.
-->

<template>
    <div class="w-full bg-white rounded-lg shadow-md p-4">
        <h2 class="text-base font-bold text-gray-700 mb-2">Income Trend</h2>
        <!-- Simple SVG Bar Chart -->
        <svg viewBox="0 0 240 100" class="w-full h-32" aria-label="Income trend chart" role="img">
            <!-- X-axis -->
            <line x1="20" y1="90" x2="220" y2="90" stroke="#D1D5DB" stroke-width="2" />
            <!-- Y-axis -->
            <line x1="20" y1="10" x2="20" y2="90" stroke="#D1D5DB" stroke-width="2" />

            <!-- Bars (mock data) -->
            <g v-for="(item, i) in chartData" :key="item.label">
                <rect :x="30 + i * 35" :y="90 - item.value" width="20" :height="item.value" rx="4" :fill="barColor" />
                <!-- Value label above bar -->
                <text :x="40 + i * 35" :y="80 - item.value" text-anchor="middle" class="text-xs" fill="#374151">
                    {{ item.value }}
                </text>
                <!-- X-axis label -->
                <text :x="40 + i * 35" y="98" text-anchor="middle" class="text-xs" fill="#6B7280">
                    {{ item.label }}
                </text>
            </g>
        </svg>
        <!-- Offline-friendly note -->
        <p class="text-xs text-gray-400 mt-2">Chart is static and works offline. Replace with real data for live trends.
        </p>
    </div>
</template>

<script setup lang="ts">
// ===== Types & Interfaces =====
/**
 * Represents a single bar in the chart.
 */
interface ChartItem {
    label: string // e.g. "Mon", "Tue"
    value: number // e.g. 50 (height of bar)
}

// ===== Mock Data =====
/**
 * Static data for demonstration.
 * Replace with real data from parent or store in future.
 */
const chartData: ChartItem[] = [
    { label: 'Mon', value: 40 },
    { label: 'Tue', value: 60 },
    { label: 'Wed', value: 30 },
    { label: 'Thu', value: 80 },
    { label: 'Fri', value: 50 },
    { label: 'Sat', value: 70 },
    { label: 'Sun', value: 20 }
]

// ===== Constants & Config =====
const barColor = '#1F3A8A' // Stratonea primary blue

// ===== Main Logic =====
// No dynamic logic for now; all data is static for offline demo.
// Replace chartData with props or store data for live charts in future.
</script>

<!--
    All styling via Tailwind utility classes for maintainability and mobile-first workflow.
    SVG chart is lightweight and works offline.
  -->