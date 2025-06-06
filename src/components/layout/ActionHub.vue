<!--
  ActionHub.vue
  Stratonea Income Tracker - Floating Action Bar
  - Provides quick access to core actions: Home, Add Income, Share via WhatsApp, Download PDF.
  - Mobile-first, touch-optimized, and accessible for Ghanaian users.
  - Follows Stratonea guidelines: minimal code, clear comments, and educational structure.
-->

<template>
  <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
    <!-- Desktop View -->
    <div class="hidden md:flex justify-center items-center h-16 max-w-7xl mx-auto px-4">
      <div class="flex space-x-8 items-center">
        <!-- Home Link -->
        <router-link to="/" class="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
          <font-awesome-icon icon="fa-solid fa-home" class="text-xl" />
          <span>Home</span>
        </router-link>

        <!-- Add Income Button -->
        <button @click="handleNewIncome" class="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
          <font-awesome-icon icon="fa-solid fa-plus-circle" class="text-xl" />
          <span>New Income</span>
        </button>

        <!-- Share via WhatsApp Button -->
        <button @click="shareWhatsApp" class="flex items-center space-x-2 text-green-600 hover:text-green-700">
          <font-awesome-icon icon="fa-brands fa-whatsapp" class="text-xl" />
          <span>Share WhatsApp</span>
        </button>

        <!-- Download PDF Button -->
        <button @click="downloadPDF" class="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
          <font-awesome-icon icon="fa-solid fa-download" class="text-xl" />
          <span>Download PDF</span>
        </button>
      </div>
    </div>

    <!-- Mobile View -->
    <div class="md:hidden flex justify-around items-center h-16">
      <!-- Home Link -->
      <router-link to="/" class="text-primary-600 hover:text-primary-700">
        <font-awesome-icon icon="fa-solid fa-home" class="text-2xl" />
      </router-link>

      <!-- Add Income Button -->
      <button @click="handleNewIncome" class="text-primary-600 hover:text-primary-700">
        <font-awesome-icon icon="fa-solid fa-plus-circle" class="text-2xl" />
      </button>

      <!-- Share via WhatsApp Button -->
      <button @click="shareWhatsApp" class="text-green-600 hover:text-green-700">
        <font-awesome-icon icon="fa-brands fa-whatsapp" class="text-2xl" />
      </button>

      <!-- Download PDF Button -->
      <button @click="downloadPDF" class="text-primary-600 hover:text-primary-700">
        <font-awesome-icon icon="fa-solid fa-download" class="text-2xl" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// ===== File-Level Documentation =====
/**
 * ActionHub.vue
 * - Floating action bar for quick navigation and actions in the Income Tracker app.
 * - Provides Home, Add Income, WhatsApp share, and PDF download actions.
 * - Emits events for WhatsApp sharing and PDF download.
 * - Navigates to the new income entry view.
 */

// ===== Imports =====
import { useRouter } from 'vue-router'

// ===== Props & Emits =====
/**
 * Props for ActionHub.
 * - form: The current income form data (optional, for future extensibility)
 * - companyLogo: The company logo (optional, for future extensibility)
 */
withDefaults(
  defineProps<{
    form?: any
    companyLogo?: string | null
  }>(),
  {
    form: undefined,
    companyLogo: null
  }
)

const emit = defineEmits<{
  (e: 'download-pdf'): void
  (e: 'share-whatsapp'): void
}>()

// ===== Main Logic =====
/**
 * Emits WhatsApp share event to parent.
 */
function shareWhatsApp() {
  emit('share-whatsapp')
}

/**
 * Emits PDF download event to parent.
 */
function downloadPDF() {
  emit('download-pdf')
}

/**
 * Navigates to the new income entry page and refreshes.
 * This ensures a fresh form for the user.
 */
const router = useRouter()
async function handleNewIncome() {
  try {
    await router.push('/new-income')
    window.location.reload()
  } catch (error) {
    // Simple error message for Ghanaian users
    alert('Could not open new income form. Please try again.')
  }
}
</script>