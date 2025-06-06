<!--
  IncomeEntryView.vue
  Main view for entering a new income record.
  - Composes the IncomeForm and PreviewPanel components.
  - Handles offline-first logic and simple error handling.
  - Follows Stratonea guidelines: mobile-first, clear comments, minimal code, and educational structure.
-->

<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <!-- App Header (Stratonea logo + app name) -->
        <header class="flex items-center justify-between px-4 py-3 bg-primary-600 text-white shadow-md">
     
          
            <!-- App Name on the right -->
            <span class="text-lg font-bold tracking-wide">Income Tracker</span>
        </header>

        <!-- Main Content -->
        <main class="flex-1 flex flex-col items-center justify-start p-4 sm:p-8 md:py-10 md:px-0">
            <div class="w-full max-w-md md:max-w-xl lg:max-w-2xl">
                <!-- Show form or preview based on state -->
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h1 class="text-2xl font-bold text-gray-800 mb-6">New Income Entry</h1>

                    <!-- Form Content -->
                    <IncomeForm v-if="!showPreview" @submit="handleFormSubmit" />

                    <!-- Preview Panel -->
                    <PreviewPanel v-else :income="formData || { amount: '', date: '' }" @edit="showPreview = false"
                        @confirm="handleConfirm" />

                    <!-- Offline/Success/Error messages -->
                    <div v-if="message" class="mt-4 text-center text-sm" :class="messageClass">
                        {{ message }}
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
// ===== Imports =====
import { ref } from 'vue'
import IncomeForm from '@/components/layout/IncomeForm.vue'
import PreviewPanel from '@/components/layout/PreviewPanel.vue'

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

// ===== State =====
const showPreview = ref(false)
// Always ensure formData is either a valid IncomeEntry or null
const formData = ref<IncomeEntry | null>(null)
const message = ref('')
const messageClass = ref('')

// ===== Main Logic =====
/**
 * Handles form submission from IncomeForm.
 * @param data - The income entry data from the form.
 */
function handleFormSubmit(data: IncomeEntry) {
    formData.value = data
    showPreview.value = true
    message.value = ''
}

/**
 * Handles confirmation from PreviewPanel.
 * Simulates saving data offline and shows a success message.
 */
function handleConfirm() {
    // Simulate offline save (replace with real logic)
    message.value = 'Saved for when you\'re back online.'
    messageClass.value = 'text-green-700'
    showPreview.value = false
    // Optionally reset formData here if you want to clear the form
}
</script>

<!--
    All styling via Tailwind utility classes for maintainability and mobile-first workflow.
    This view is ready for integration with offline storage and sync logic.
  -->