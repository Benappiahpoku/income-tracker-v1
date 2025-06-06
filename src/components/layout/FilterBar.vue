<!--
  FilterBar.vue
  Minimal, mobile-first filter/search bar for income lists.
  - Allows filtering by source and searching by text.
  - Emits 'filter' and 'search' events for parent components.
  - All code is clear, concise, and well-commented for learning.
-->

<template>
    <div class="flex flex-col sm:flex-row gap-2 items-center w-full py-2">
        <!-- Filter by Source -->
        <select v-model="selectedSource" @change="emitFilter"
            class="w-full sm:w-36 rounded-lg border border-gray-300 px-4 py-2 text-base focus:ring-primary-500 focus:border-primary-500"
            aria-label="Filter by source">
            <option value="">All Sources</option>
            <option value="Cash">Cash</option>
            <option value="MoMo">MoMo</option>
            <option value="Other">Other</option>
        </select>

        <!-- Search Input -->
        <input v-model="searchText" @input="emitSearch" type="search" inputmode="search" autocomplete="off"
            class="w-full sm:w-49 rounded-lg border border-gray-300 px-3 py-2 text-base focus:ring-primary-500 focus:border-primary-500"
            placeholder="Search by name or description" aria-label="Search" />
    </div>
</template>

<script setup lang="ts">
// ===== Types & Interfaces =====
/**
 * Emits:
 * - filter: string (selected source)
 * - search: string (search text)
 */

// ===== State =====
import { ref, watch } from 'vue'

const selectedSource = ref('')
const searchText = ref('')

// ===== Emits =====
const emit = defineEmits<{
    (e: 'filter', source: string): void
    (e: 'search', text: string): void
}>()

// ===== Main Logic =====
/**
 * Emits the selected source to the parent.
 */
function emitFilter() {
    emit('filter', selectedSource.value)
}

/**
 * Emits the search text to the parent.
 */
function emitSearch() {
    emit('search', searchText.value)
}

// Optionally, emit on mount for initial state
watch(selectedSource, emitFilter)
watch(searchText, emitSearch)
</script>

<!--
    All styling via Tailwind utility classes for maintainability and mobile-first workflow.
  -->