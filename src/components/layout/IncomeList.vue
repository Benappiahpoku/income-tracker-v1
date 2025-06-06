<!--
  IncomeList.vue
  Minimal, mobile-first list component for displaying income entries.
  - Receives an array of income entries as a prop.
  - Emits 'edit' and 'delete' events for parent to handle.
  - Optimized for Ghanaian users: large touch targets, clear layout, offline-friendly.
  - All code is clear, concise, and well-commented for learning.
-->

<template>
    <div class="flex flex-col gap-2 w-full">
        <!-- Show message if no income entries -->
        <div v-if="!incomes.length" class="text-center text-gray-500 py-8">
            No income entries found.
        </div>

        <!-- List of income entries -->
        <div v-for="income in incomes" :key="income.id"
            class="flex items-center justify-between bg-white rounded-lg shadow px-4 py-3">
            <!-- Main income info -->
            <div class="flex-1 min-w-0">
                <div class="font-bold text-base text-gray-800 truncate">
                    {{ income.customer || 'No Name' }}
                </div>
                <div class="text-sm text-gray-500 truncate">
                    {{ income.description || 'No description' }}
                </div>
                <div class="text-xs text-gray-400 mt-1">
                    {{ formatDate(income.date) }} &middot; {{ income.source || 'Unknown' }}
                </div>
            </div>
            <!-- Amount -->
            <div class="flex flex-col items-end ml-4">
                <span class="text-lg font-bold text-primary-600">₵{{ income.amount }}</span>
                <!-- Edit/Delete actions -->
                <div class="flex gap-2 mt-2">
                    <button type="button" @click="emitEdit(income)"
                        class="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-semibold min-h-[32px] min-w-[48px]"
                        aria-label="Edit income">
                        Edit
                    </button>
                    <button type="button" @click="emitDelete(income)"
                        class="px-2 py-1 rounded bg-red-100 text-red-700 text-xs font-semibold min-h-[32px] min-w-[48px]"
                        aria-label="Delete income">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
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

// ===== Props =====
/**
 * Props:
 * - incomes: IncomeEntry[] (array of income entries to display)
 */
defineProps<{
    incomes: IncomeEntry[]
}>()

// ===== Emits =====
/**
 * Emits:
 * - edit: IncomeEntry (when user clicks Edit)
 * - delete: IncomeEntry (when user clicks Delete)
 */
const emit = defineEmits<{
    (e: 'edit', entry: IncomeEntry): void
    (e: 'delete', entry: IncomeEntry): void
}>()

// ===== Main Logic =====
/**
 * Emits the edit event for the given income entry.
 */
function emitEdit(entry: IncomeEntry) {
    emit('edit', entry)
}

/**
 * Emits the delete event for the given income entry.
 */
function emitDelete(entry: IncomeEntry) {
    emit('delete', entry)
}

/**
 * Formats a date string (YYYY-MM-DD) to a more readable format.
 * @param date - The date string to format.
 * @returns Formatted date string (e.g., 06/06/2025)
 */
function formatDate(date: string): string {
    if (!date) return ''
    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
}
</script>

<!--
    All styling via Tailwind utility classes for maintainability and mobile-first workflow.
    Touch targets are large for Ghanaian users.
  -->