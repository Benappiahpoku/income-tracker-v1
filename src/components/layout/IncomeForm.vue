<!--
  IncomeForm.vue
  Minimal, mobile-first income entry form for Ghanaian users.
  - Uses only essential fields as per design.md and PRD.
  - All fields are controlled via v-model for parent integration.
  - Emits 'submit' event with form data.
  - Includes clear comments for learning and maintainability.
-->

<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
        <!-- Customer Name (optional) -->
        <div>
            <label for="customer" class="block text-sm font-medium text-gray-700">Customer Name (optional)</label>
            <input id="customer" v-model="form.customer" type="text" inputmode="text" autocomplete="off"
                class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g. Ama Serwaa" />
        </div>

        <!-- Amount (required, numeric keyboard on mobile) -->
        <div>
            <label for="amount" class="block text-sm font-medium text-gray-700">Amount (₵) <span
                    class="text-red-500">*</span></label>
            <input id="amount" v-model="form.amount" type="number" inputmode="decimal" min="0" step="0.01" required
                class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter amount" />
            <p v-if="errors.amount" class="text-xs text-red-600 mt-1">{{ errors.amount }}</p>
        </div>

        <!-- Description (optional) -->
        <div>
            <label for="description" class="block text-sm font-medium text-gray-700">Description (optional)</label>
            <input id="description" v-model="form.description" type="text" inputmode="text" autocomplete="off"
                class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g. Daily sales" />
        </div>

        <!-- Source (optional, simple select for now) -->
        <div>
            <label for="source" class="block text-sm font-medium text-gray-700">Source (optional)</label>
            <select id="source" v-model="form.source"
                class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-3 text-base focus:ring-primary-500 focus:border-primary-500">
                <option value="">Select source</option>
                <option value="Cash">Cash</option>
                <option value="MoMo">MoMo</option>
                <option value="Other">Other</option>
            </select>
        </div>

        <!-- Date (required, uses DatePicker component) -->
        <div>
           
            <DatePicker id="date" v-model="form.date" :maxDate="today" />
        </div>

        <!-- Submit Button -->
        <button type="submit"
            class="w-full py-3 rounded-lg bg-primary-600 text-white font-bold text-base mt-2 active:bg-primary-700 transition"
            :disabled="submitting">
            {{ submitting ? 'Saving...' : 'Submit' }}
        </button>
    </form>
</template>

<script setup lang="ts">
// ===== Imports =====
import { ref } from 'vue'
import DatePicker from './DatePicker.vue'

// ===== Types & Interfaces =====
/**
 * Income form data structure
 */
interface IncomeFormData {
    customer: string
    amount: string
    description: string
    source: string
    date: string
}

// ===== State =====
const today = new Date().toISOString().slice(0, 10) // YYYY-MM-DD

const form = ref<IncomeFormData>({
    customer: '',
    amount: '',
    description: '',
    source: '',
    date: today
})

const errors = ref<{ amount?: string }>({})
const submitting = ref(false)

// ===== Emits =====
const emit = defineEmits<{
    (e: 'submit', data: IncomeFormData): void
}>()

// ===== Main Logic =====
/**
 * Validates and emits the form data.
 */
function handleSubmit() {
    errors.value = {}
    // Validate amount
    if (!form.value.amount || isNaN(Number(form.value.amount)) || Number(form.value.amount) <= 0) {
        errors.value.amount = 'Please enter a valid amount.'
        return
    }
    submitting.value = true
    // Simulate async save (replace with real save logic)
    setTimeout(() => {
        emit('submit', { ...form.value })
        submitting.value = false
        // Optionally reset form here
    }, 500)
}
</script>

<!--
    All styling via Tailwind utility classes for maintainability and mobile-first workflow.
    Replace select options and add advanced logic as needed in future steps.
  -->