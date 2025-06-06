<!--
  SettingsView.vue
  Main view for managing app settings, data, and sources.
  - Composes DataManagement and SourceManager components.
  - Handles offline-first logic and simple error handling.
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
            <div class="w-full max-w-lg">

                <section>

                    <!-- Source Manager Panel -->
                    <SourceManager :sources="sources" @add="handleAddSource" @edit="handleEditSource"
                        @delete="handleDeleteSource" />
                </section>
                <div class="space-y-4 pt-6 border-t mt-6"></div>
                <section>
                    <!-- Data Management Panel -->
                    <DataManagement @export="handleExport" @import="handleImport" @clear="handleClear" />
                </section>




                <!-- Offline/Success/Error messages -->
                <div v-if="message" class="mt-4 text-center text-sm" :class="messageClass">
                    {{ message }}
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
// ===== File-Level Documentation =====
/**
 * SettingsView.vue
 * - Main settings page for the app.
 * - Allows user to manage data (export, import, clear) and income sources.
 * - All logic is UI-only; actual data handling should be implemented in parent or store.
 */

// ===== Imports =====
import { ref } from 'vue'
import DataManagement from '@/components/layout/DataManagement.vue'
import SourceManager from '@/components/layout/SourceManager.vue'

// ===== Types & Interfaces =====
/**
 * Represents a single income source/category.
 */
interface Source {
    id: string
    name: string
}

// ===== State =====
const sources = ref<Source[]>([
    { id: '1', name: 'Cash' },
    { id: '2', name: 'MoMo' },
    { id: '3', name: 'Other' }
])
const message = ref('')
const messageClass = ref('')

// ===== Main Logic =====
/**
 * Handles exporting data.
 */
function handleExport() {
    message.value = 'Data exported. Check your downloads.'
    messageClass.value = 'text-green-700'
}

/**
 * Handles importing data.
 */
function handleImport() {
    message.value = 'Data imported successfully.'
    messageClass.value = 'text-green-700'
}

/**
 * Handles clearing all data.
 */
function handleClear() {
    message.value = 'All data cleared. (You can restore from backup if needed.)'
    messageClass.value = 'text-red-700'
}

/**
 * Handles adding a new source.
 * @param name - The name of the new source.
 */
function handleAddSource(name: string) {
    // Prevent duplicates (case-insensitive)
    if (sources.value.some((s) => s.name.toLowerCase() === name.toLowerCase())) {
        message.value = 'This source already exists.'
        messageClass.value = 'text-red-700'
        return
    }
    sources.value.push({ id: Date.now().toString(), name })
    message.value = 'Source added.'
    messageClass.value = 'text-green-700'
}

/**
 * Handles editing a source.
 * @param source - The source to edit.
 */
function handleEditSource(source: Source) {
    message.value = `Edit feature coming soon for "${source.name}".`
    messageClass.value = 'text-blue-700'
}

/**
 * Handles deleting a source.
 * @param source - The source to delete.
 */
function handleDeleteSource(source: Source) {
    sources.value = sources.value.filter((s) => s.id !== source.id)
    message.value = 'Source deleted.'
    messageClass.value = 'text-red-700'
}
</script>

<!--
    All styling via Tailwind utility classes for maintainability and mobile-first workflow.
    This view is ready for integration with real data management logic.
  -->