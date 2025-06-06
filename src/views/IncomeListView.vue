<!--
  IncomeListView.vue
  Main view for displaying and managing the list of income entries.
  - Composes FilterBar, IncomeList, and IncomeChart components.
  - Handles offline-first logic, filtering, and simple error handling.
  - Follows Stratonea guidelines: mobile-first, clear comments, minimal code, and educational structure.
-->

<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <!-- App Header (Stratonea logo + app name) -->
        <header class="flex items-center justify-between px-4 py-3 bg-primary-600 text-white shadow-md">

            <span class="text-lg font-bold tracking-wide">Income Tracker</span>
        </header>

        <!-- Main Content -->
        <main class="flex-1 flex flex-col items-center justify-start p-4 gap-4 sm:p-8 md:py-10 md:px-0">
            <div class="w-full max-w-2xl">
                <!-- Filter/Search Bar -->
                <FilterBar @filter="handleFilter" @search="handleSearch" />



                <!-- Income List -->
                <IncomeList :incomes="filteredIncomes" @edit="handleEdit" @delete="handleDelete" />

                <div class="space-y-4 pt-6 border-t mt-6"></div>

                <!-- Income Chart (static/mock data for now) -->
                <IncomeChart />

                <!-- Offline/Success/Error messages -->
                <div v-if="message" class="mt-4 text-center text-sm" :class="messageClass">
                    {{ message }}
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
// ===== Imports =====
import { ref, computed } from 'vue'
import FilterBar from '@/components/layout/FilterBar.vue'
import IncomeList from '@/components/layout/IncomeList.vue'
import IncomeChart from '@/components/layout/IncomeChart.vue'


// ===== Types & Interfaces =====
/**
 * Represents a single income entry.
 */
interface IncomeEntry {
    id: string
    customer?: string
    amount: string
    description?: string
    source?: string
    date: string
}

// ===== Mock Data =====
/**
 * Static/mock data for demonstration.
 * Replace with real data from storage or API in production.
 */
const incomes = ref<IncomeEntry[]>([
    { id: '1', customer: 'Ama', amount: '50', description: 'Sales', source: 'Cash', date: '2025-06-06' },
    { id: '2', customer: 'Kwame', amount: '100', description: 'Consulting', source: 'MoMo', date: '2025-06-05' },
    { id: '3', customer: '', amount: '30', description: '', source: 'Other', date: '2025-06-04' }
])

// ===== State =====
const filterSource = ref('')
const searchText = ref('')
const message = ref('')
const messageClass = ref('')

// ===== Computed: Filtered Incomes =====
/**
 * Returns the filtered and searched list of incomes.
 */
const filteredIncomes = computed(() => {
    let result = incomes.value
    if (filterSource.value) {
        result = result.filter((i) => i.source === filterSource.value)
    }
    if (searchText.value) {
        const search = searchText.value.toLowerCase()
        result = result.filter(
            (i) =>
                (i.customer && i.customer.toLowerCase().includes(search)) ||
                (i.description && i.description.toLowerCase().includes(search))
        )
    }
    return result
})

// ===== Main Logic =====
/**
 * Handles filtering by source.
 * @param source - The selected source to filter by.
 */
function handleFilter(source: string) {
    filterSource.value = source
}

/**
 * Handles searching by text.
 * @param text - The search text.
 */
function handleSearch(text: string) {
    searchText.value = text
}

/**
 * Handles editing an income entry.
 * @param entry - The income entry to edit.
 */
function handleEdit(entry: IncomeEntry) {
    message.value = `Edit feature coming soon for "${entry.customer || 'No Name'}".`
    messageClass.value = 'text-blue-700'
}

/**
 * Handles deleting an income entry.
 * @param entry - The income entry to delete.
 */
function handleDelete(entry: IncomeEntry) {
    // Remove the entry from the incomes array
    incomes.value = incomes.value.filter((i) => i.id !== entry.id)
    message.value = 'Entry deleted. (Will sync when online)'
    messageClass.value = 'text-red-700'
}
</script>

<!--
    All styling via Tailwind utility classes for maintainability and mobile-first workflow.
    This view is ready for integration with offline storage and sync logic.
  -->