<!--
  ExportOptions.vue
  Minimal, mobile-first export/share options for income data.
  - Lets user export as PDF or share via WhatsApp.
  - Emits 'export-pdf' and 'share-whatsapp' events for parent to handle.
  - All code is clear, concise, and well-commented for learning.
  - Touch targets are large for Ghanaian mobile users.
-->

<template>
    <div class="flex flex-col sm:flex-row gap-3 w-full py-2">
        <!-- Export as PDF Button -->
        <button type="button" @click="emitExportPDF"
            class="w-full sm:w-auto flex-1 py-3 rounded-lg bg-primary-600 text-white font-bold text-base active:bg-primary-700 transition min-h-[48px]"
            aria-label="Export as PDF">
            Export as PDF
        </button>
        <!-- Share via WhatsApp Button -->
        <button type="button" @click="emitShareWhatsApp"
            class="w-full sm:w-auto flex-1 py-3 rounded-lg bg-green-600 text-white font-bold text-base active:bg-green-700 transition min-h-[48px]"
            aria-label="Share via WhatsApp">
            Share via WhatsApp
        </button>
    </div>
</template>

<script setup lang="ts">
// ===== Emits =====
/**
 * Emits:
 * - export-pdf: void (when user clicks Export as PDF)
 * - share-whatsapp: void (when user clicks Share via WhatsApp)
 */
const emit = defineEmits<{
    (e: 'export-pdf'): void
    (e: 'share-whatsapp'): void
}>()

// ===== Main Logic =====
/**
 * Emits export-pdf event to parent.
 */
function emitExportPDF() {
    emit('export-pdf')
}

/**
 * Emits share-whatsapp event to parent.
 */
function emitShareWhatsApp() {
    emit('share-whatsapp')
}
</script>

<!--
    All styling via Tailwind utility classes for maintainability and mobile-first workflow.
    Buttons use large touch targets for Ghanaian users.
  -->