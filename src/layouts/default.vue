<!--
  default.vue
  Stratonea Income Tracker - Main Layout
  - Provides the global layout for all main pages.
  - Includes network status indicator, navigation, donation modal, footer, and the ActionHub bar.
  - Follows Stratonea guidelines: mobile-first, offline-first, clear comments, and educational structure.
  - ActionHub bar is placed at the bottom for global access to core actions.
-->

<template>
  <div class="min-h-screen bg-gray-50 pb-16">
    <!-- Network status indicator for Ghana's intermittent connectivity -->
    <OfflineIndicator v-if="!networkInfo.isOnline" />

    <!-- Main Navigation Bar -->
    <Navigation />

    <!-- Main Content Area -->
    <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <router-view />
    </main>

    <!-- Donation Modal (shows every 7 days) -->
    <Donation v-if="showDonation" @close="handleDonationClose" />

    <!-- Footer -->
    <Footer />

    <!-- ===== [New Feature] START: ActionHub Bar ===== -->
    <!--
      ActionHub provides quick access to Home, Add Income, WhatsApp Share, and PDF Download.
      Placing it here ensures it is always visible on all main pages, as per Stratonea guidelines.
    -->
    <ActionHub @download-pdf="handleDownloadPDF" @share-whatsapp="handleShareWhatsApp" />
    <!-- ===== [New Feature] END: ActionHub Bar ===== -->
  </div>
</template>

<script setup lang="ts">
// ===== File-Level Documentation =====
/**
 * default.vue
 * - Main layout for the Income Tracker app.
 * - Wraps all main views and provides global UI elements.
 * - Ensures ActionHub bar is always visible for navigation and quick actions.
 */

// ===== File-Level Imports =====
import { useNetworkStatus } from '@/composables/useNetworkStatus'
import { ref } from 'vue'
import OfflineIndicator from '@/components/base/OfflineIndicator.vue'
import Navigation from '@/components/layout/Navigation.vue'
import Footer from '@/components/layout/Footer.vue'
import Donation from '@/components/donation/Donation.vue'
import ActionHub from '@/components/layout/ActionHub.vue'

// ===== Constants & Config =====
// Keys for localStorage to track donation modal state
const DONATION_MODAL_KEY = 'stratonea_donation_last_closed'
const DONATION_MODAL_FIRST_SEEN_KEY = 'stratonea_first_seen'
const DONATION_MODAL_INTERVAL = 7 * 24 * 60 * 60 * 1000 // 7 days in ms

// ===== Helper Functions =====

/**
 * Returns the timestamp (ms) of the user's first visit.
 * If not set, sets it to now and returns now.
 * This ensures we know when the user first started using the app.
 */
function getOrSetFirstSeen(): number {
  let firstSeen = localStorage.getItem(DONATION_MODAL_FIRST_SEEN_KEY)
  if (!firstSeen) {
    const now = Date.now()
    localStorage.setItem(DONATION_MODAL_FIRST_SEEN_KEY, now.toString())
    return now
  }
  return parseInt(firstSeen, 10)
}

/**
 * Determines if the donation modal should be shown.
 * - Only show if at least 7 days have passed since first visit.
 * - After first show, only show every 7 days after last closed.
 */
function shouldShowDonationModal(): boolean {
  const now = Date.now()
  const firstSeen = getOrSetFirstSeen()

  // Only show if 7 days have passed since first visit
  if (now - firstSeen < DONATION_MODAL_INTERVAL) {
    // Not enough time has passed; don't show modal
    return false
  }

  // After first eligible show, only show every 7 days after last closed
  const lastClosed = localStorage.getItem(DONATION_MODAL_KEY)
  if (!lastClosed) return true // Never closed before, show after 7 days
  const lastClosedTime = parseInt(lastClosed, 10)
  return isNaN(lastClosedTime) || now - lastClosedTime > DONATION_MODAL_INTERVAL
}

/**
 * Records the current time as the last time the donation modal was closed.
 * This prevents the modal from showing again until another 7 days have passed.
 */
function recordDonationModalClosed(): void {
  localStorage.setItem(DONATION_MODAL_KEY, Date.now().toString())
}

// ===== Main Logic =====

// Controls whether the donation modal is visible
const showDonation = ref(shouldShowDonationModal())

/**
 * Handles closing the donation modal.
 * - Records the close time.
 * - Hides the modal.
 */
function handleDonationClose() {
  recordDonationModalClosed()
  showDonation.value = false
}

// Get network info for offline indicator
const { networkInfo } = useNetworkStatus()

// ===== [New Feature] START: ActionHub Event Handlers =====
/**
 * Handles PDF download event from ActionHub.
 * - Implement PDF export logic or show a simple message for now.
 */
function handleDownloadPDF() {
  // TODO: Replace with real PDF export logic
  alert('Download PDF feature coming soon!')
}

/**
 * Handles WhatsApp share event from ActionHub.
 * - Implement WhatsApp sharing logic or show a simple message for now.
 */
function handleShareWhatsApp() {
  // TODO: Replace with real WhatsApp sharing logic
  alert('Share via WhatsApp feature coming soon!')
}
// ===== [New Feature] END: ActionHub Event Handlers =====
</script>

<style>
/* Add any additional global styles here */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>