<!--
  Donation.vue
  Stratonea Income Tracker - Donation Prompt
  - Encourages users to support the free Income Tracker app for Ghanaian SMEs.
  - Mobile-first, touch-optimized, and accessible.
  - Follows Stratonea guidelines: clear comments, minimal code, and educational structure.
-->

<template>
  <div class="
     fixed bottom-24 left-1/2 -translate-x-1/2
      max-w-sm w-full 
      bg-white 
      rounded-lg shadow-lg 
      p-6 
      border border-primary-100
      z-40
      md:bottom-32 md:right-6 md:left-auto md:translate-x-0
    ">
    <!-- Header -->
    <div class="text-center mb-4">
      <h3 class="text-lg font-semibold text-gray-800 flex items-center justify-center gap-2">
        <span>💛</span>
        Enjoying Our Free Income Tracker App?
      </h3>
    </div>

    <!-- Message -->
    <p class="text-gray-600 text-sm mb-4">
      This tool is FREE for all Ghanaian SMEs to help you track your income easily.
    </p>

    <p class="text-gray-600 text-sm mb-4">
      If this app helps your business, consider a donation to help us keep it free and reach more people.
    </p>

    <!-- Mobile Money Details -->
    <div class="bg-gray-50 rounded-md p-4 mb-4">
      <h4 class="font-medium text-gray-700 mb-2">Support via Mobile Money:</h4>

      <!-- Number -->
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm text-gray-600">Number: 0594093926</span>
        <button @click="copyToClipboard('0594093926')"
          class="text-primary-600 text-sm hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1">
          <span class="flex items-center gap-1">
            <font-awesome-icon icon="fa-solid fa-copy" />
            Copy Number
          </span>
        </button>
      </div>

      <!-- USSD -->
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-600">(Dial *170# to send)</span>
        <button @click="copyToClipboard('*170#')"
          class="text-primary-600 text-sm hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1">
          <span class="flex items-center gap-1">
            <font-awesome-icon icon="fa-solid fa-copy" />
            Copy USSD
          </span>
        </button>
      </div>
    </div>

    <!-- Footer Message -->
    <p class="text-gray-600 text-sm text-center mb-2">
      Every bit helps us keep improving and supporting more Ghanaian businesses.
    </p>

    <p class="text-center text-gray-700 font-medium">
      Thank you for your support! 🙏
    </p>

    <!-- Close Button -->
    <button @click="closeDonation" class="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
      aria-label="Close donation prompt" type="button">
      <font-awesome-icon icon="fa-solid fa-times" />
    </button>
  </div>
</template>

<script setup lang="ts">
// ===== File-Level Documentation =====
/**
 * Donation.vue
 * - Donation prompt for the Income Tracker app.
 * - Encourages voluntary support via Mobile Money.
 * - All logic is UI-only and mobile-first.
 */

// ===== Imports =====
import { useToast } from '@/composables/useToast'

// ===== Emits =====
const emit = defineEmits<{
  (e: 'close'): void
}>()

const toast = useToast()

// ===== Main Logic =====
/**
 * Copies the given text to clipboard and shows a toast.
 */
async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard!')
  } catch (err) {
    toast.error('Failed to copy. Please try manually.')
  }
}

/**
 * Emits close event to parent.
 */
function closeDonation() {
  emit('close')
}
</script>

<style scoped>
/* Optional: Add fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.donation-card {
  animation: fadeIn 0.3s ease-out;
}
</style>