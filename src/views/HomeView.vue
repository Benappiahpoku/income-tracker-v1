<!--
  HomeView.vue
  Stratonea Income Tracker - Home/Landing Page
  - Presents the main value proposition for the Income Tracker app.
  - Highlights Ghana-specific features: mobile-first, offline, WhatsApp sharing.
  - All code is clear, concise, and well-commented for learning.
  - Follows Stratonea guidelines: mobile-first, clear comments, minimal code, and educational structure.
-->

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- ===== Hero Section ===== -->
    <main class="w-full max-w-md mx-auto px-2 py-6 sm:max-w-lg sm:px-4 md:max-w-2xl lg:max-w-3xl">
      <!-- App Title & Tagline -->
      <section class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">
          Simple, Fast & Free Income Tracker
        </h1>
        <p class="text-xl text-gray-600 mb-8">Track Your Money, Even Without Internet</p>
        <p class="text-lg text-gray-500 mb-8">Record, Review, and Share Your Income Anytime, Anywhere in Ghana.</p>
        <router-link to="/new-income"
          class="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition duration-300">
          Add New Income
        </router-link>
      </section>

      <!-- ===== How It Works Section ===== -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 class="text-xl font-semibold mb-4">Enter Income Details</h3>
            <p class="text-gray-600">
              Quickly add your income, customer, and payment details on your phone.
            </p>
          </div>
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 class="text-xl font-semibold mb-4">Review & Save</h3>
            <p class="text-gray-600">
              Check your entry and save it securely, even if you’re offline.
            </p>
          </div>
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 class="text-xl font-semibold mb-4">Share or Export</h3>
            <p class="text-gray-600">
              Send your income record via WhatsApp or export it for your records.
            </p>
          </div>
        </div>
      </section>

      <!-- ===== Key Features Section ===== -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">100% Free</h3>
            <p class="text-gray-600">No Hidden Costs or Subscriptions</p>
          </div>
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Instant Access</h3>
            <p class="text-gray-600">No Sign-Up or Internet Needed</p>
          </div>
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Offline & WhatsApp Ready</h3>
            <p class="text-gray-600">Works without internet and lets you share via WhatsApp</p>
          </div>
        </div>
      </section>

      <!-- ===== Income List Section ===== -->
      <section class="mt-16 pt-16 border-t border-gray-200">
        <div class="max-w-5xl mx-auto">
          <IncomeListView />
        </div>
      </section>
      <Divider />

      <AppSwitcher type='income' />
    </main>
  </div>
</template>

<script setup lang="ts">
// ===== Imports =====
import Divider from '@/components/base/Divider.vue';
import IncomeListView from './IncomeListView.vue'
import AppSwitcher from '@/components/layout/AppSwitcher.vue';
</script>

<style scoped>
/* Highlight active router links for better navigation feedback */
.router-link-active {
  font-weight: bold;
}
</style>