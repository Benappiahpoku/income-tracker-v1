<!--
  ExportView.vue
  Main view for exporting and sharing income data.
  - Composes ExportOptions and PreviewPanel components.
  - Handles offline-first logic and WhatsApp integration.
  - Follows Stratonea guidelines: mobile-first, clear comments, minimal code, and educational structure.
  - All error messages are in simple English.
-->

<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <!-- App Header (Stratonea logo + app name) -->
        <header class="flex items-center justify-between px-4 py-3 bg-primary-600 text-white shadow-md">
          
            <span class="text-lg font-bold tracking-wide">Income Tracker</span>
        </header>

        <!-- Main Content -->
        <main class="flex-1 flex flex-col items-center justify-start p-4 gap-4 sm:p-8 md:py-10 md:px-0">
            <div class="w-full max-w-lg">
                <!-- Export/Share Options -->
                <ExportOptions @export-pdf="handleExportPDF" @share-whatsapp="handleShareWhatsApp" />

                <!-- PreviewPanel for last income entry (mock for now) -->
                <PreviewPanel :income="lastIncome" @edit="handleEdit" @confirm="handleConfirm" />

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
import { ref } from 'vue'
import ExportOptions from '@/components/layout/ExportOptions.vue'
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

// ===== Mock Data =====
/**
 * Static/mock data for demonstration.
 * Replace with real data from storage or API in production.
 */
const lastIncome = ref<IncomeEntry>({
    customer: 'Ama',
    amount: '50',
    description: 'Sales',
    source: 'Cash',
    date: '2025-06-06'
})

// ===== State =====
const message = ref('')
const messageClass = ref('')

// ===== Main Logic =====
/**
 * Handles exporting data as PDF.
 */
function handleExportPDF() {
    // Simulate export logic (replace with real PDF export)
    message.value = 'PDF exported. Check your downloads.'
    messageClass.value = 'text-green-700'
}

/**
 * Handles sharing data via WhatsApp.
 */
function handleShareWhatsApp() {
    // Simulate WhatsApp sharing (replace with real integration)
    message.value = 'Shared via WhatsApp.'
    messageClass.value = 'text-green-700'
}

/**
 * Handles edit action from PreviewPanel.
 */
function handleEdit() {
    message.value = 'Edit feature coming soon.'
    messageClass.value = 'text-blue-700'
}

/**
 * Handles confirm action from PreviewPanel.
 */
function handleConfirm() {
    message.value = 'Export confirmed.'
    messageClass.value = 'text-green-700'
}
</script>

<!--
    All styling via Tailwind utility classes for maintainability and mobile-first workflow.
    This view is ready for integration with real export and WhatsApp logic.
  -->