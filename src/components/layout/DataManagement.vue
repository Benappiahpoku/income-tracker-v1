<!--
  DataManagement.vue
  Minimal, mobile-first data management panel for backup, restore, and clearing local data.
  - Provides buttons for exporting, importing, and clearing income data.
  - Emits events for parent to handle actual logic (keeps this component UI-only).
  - All code is clear, concise, and well-commented for learning.
  - Touch targets are large for Ghanaian mobile users.
  - Error messages and prompts are in simple English.
-->

<template>
    <div class="w-full bg-white rounded-lg shadow-md p-4">
        <h2 class="text-base font-bold text-gray-700 mb-2">Data Management</h2>
        <div class="flex flex-col gap-3">
            <!-- Export Data Button -->
            <button type="button" @click="emitExport"
                class="w-full py-3 rounded-lg bg-primary-600 text-white font-bold text-base active:bg-primary-700 transition min-h-[48px]"
                aria-label="Export data">
                Export Data
            </button>
            <!-- Import Data Button -->
            <button type="button" @click="emitImport"
                class="w-full py-3 rounded-lg bg-secondary text-white font-bold text-base active:bg-secondary-dark transition min-h-[48px]"
                aria-label="Import data">
                Import Data
            </button>
            <!-- Clear Data Button -->
            <button type="button" @click="emitClear"
                class="w-full py-3 rounded-lg bg-red-600 text-white font-bold text-base active:bg-red-700 transition min-h-[48px]"
                aria-label="Clear all data">
                Clear All Data
            </button>
        </div>
        <!-- Simple offline info -->
        <p class="text-xs text-gray-400 mt-4">
            All your data is stored on your device for offline use. Export regularly to keep a backup.
        </p>
    </div>
</template>

<script setup lang="ts">
// ===== Emits =====
/**
 * Emits:
 * - export: void (when user clicks Export Data)
 * - import: void (when user clicks Import Data)
 * - clear: void (when user clicks Clear All Data)
 */
const emit = defineEmits<{
    (e: 'export'): void
    (e: 'import'): void
    (e: 'clear'): void
}>()

// ===== Main Logic =====
/**
 * Emits export event to parent.
 */
function emitExport() {
    emit('export')
}

/**
 * Emits import event to parent.
 */
function emitImport() {
    emit('import')
}

/**
 * Emits clear event to parent.
 */
function emitClear() {
    // In a real app, parent should confirm with user before clearing!
    emit('clear')
}
</script>

<!--
    All styling via Tailwind utility classes for maintainability and mobile-first workflow.
    Touch targets are large for Ghanaian users.
  -->