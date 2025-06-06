<!--
  PreviewPanel.vue
  Minimal, mobile-first preview panel for reviewing income entry details before saving or exporting.
  - Receives an income entry object as a prop.
  - Emits 'edit' and 'confirm' events for parent to handle.
  - All code is clear, concise, and well-commented for learning.
  - Touch targets are large for Ghanaian mobile users.
-->

<template>
    <div class="w-full bg-white rounded-lg shadow-md p-4">
        <h2 class="text-base font-bold text-gray-700 mb-2">Preview Entry</h2>
        <div v-if="income" class="flex flex-col gap-2">
            <!-- Customer Name -->
            <div>
                <span class="font-medium text-gray-600">Customer:</span>
                <span class="ml-2 text-gray-800">{{ income.customer || 'No Name' }}</span>
            </div>
            <!-- Amount -->
            <div>
                <span class="font-medium text-gray-600">Amount:</span>
                <span class="ml-2 text-primary-700 font-bold">₵{{ income.amount }}</span>
            </div>
            <!-- Description -->
            <div>
                <span class="font-medium text-gray-600">Description:</span>
                <span class="ml-2 text-gray-800">{{ income.description || 'No description' }}</span>
            </div>
            <!-- Source -->
            <div>
                <span class="font-medium text-gray-600">Source:</span>
                <span class="ml-2 text-gray-800">{{ income.source || 'Unknown' }}</span>
            </div>
            <!-- Date -->
            <div>
                <span class="font-medium text-gray-600">Date:</span>
                <span class="ml-2 text-gray-800">{{ formatDate(income.date) }}</span>
            </div>
        </div>
        <!-- Action Buttons -->
        <div class="flex gap-3 mt-4">
            <button type="button" @click="emitEdit"
                class="flex-1 py-3 rounded-lg bg-gray-200 text-gray-800 font-bold text-base active:bg-gray-300 transition min-h-[48px]"
                aria-label="Edit entry">
                Edit
            </button>
            <button type="button" @click="emitConfirm"
                class="flex-1 py-3 rounded-lg bg-primary-600 text-white font-bold text-base active:bg-primary-700 transition min-h-[48px]"
                aria-label="Confirm entry">
                Confirm
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
// ===== Types & Interfaces =====
/**
 * Represents a single income entry.
 */
interface IncomeEntry {
    customer?: string
    amount: string
    description?: string
    source?: string
    date: string
}

// ===== Props =====
/**
 * Props:
 * - income: IncomeEntry (the entry to preview)
 */
defineProps<{
    income: IncomeEntry
}>()

// ===== Emits =====
/**
 * Emits:
 * - edit: void (when user clicks Edit)
 * - confirm: void (when user clicks Confirm)
 */
const emit = defineEmits<{
    (e: 'edit'): void
    (e: 'confirm'): void
}>()

// ===== Main Logic =====
/**
 * Emits the edit event to parent.
 */
function emitEdit() {
    emit('edit')
}

/**
 * Emits the confirm event to parent.
 */
function emitConfirm() {
    emit('confirm')
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