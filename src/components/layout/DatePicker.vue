<!--
  DatePicker.vue
  Minimal, mobile-first date picker for income entry.
  - Uses native input for best mobile/offline UX.
  - All props have safe defaults (always string, never undefined).
  - Clear comments for learning.
-->

<template>
    <div class="flex flex-col gap-1">
        <!-- Label for accessibility -->
        <label :for="id || ''" class="text-sm font-medium text-gray-700">
            {{ label }}
        </label>
        <!-- Native date input for mobile/offline -->
        <input :id="id || ''" type="date" :value="modelValue" @input="onInput"
            class="block w-full px-3 py-3 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 text-base bg-white shadow-sm"
            :max="maxDate || ''" :min="minDate || ''" :aria-label="label || ''" required />
        <!-- Show error if provided -->
        <p v-if="error" class="text-xs text-red-600 mt-1">{{ error }}</p>
    </div>
</template>

<script setup lang="ts">
// ===== Types & Interfaces =====
/**
 * Props for DatePicker
 * - modelValue: string (YYYY-MM-DD)
 * - label: string (field label)
 * - error: string (optional error message)
 * - minDate, maxDate: string (YYYY-MM-DD, optional)
 * - id: string (for accessibility, always required)
 */
withDefaults(
    defineProps<{
        modelValue: string
        label?: string
        error?: string
        minDate?: string
        maxDate?: string
        id?: string
    }>(),
    {
        label: 'Date',
        error: '',
        minDate: '',
        maxDate: '',
        id: 'date-picker'
    }
)

// ===== Main Logic =====
/**
 * Emits the new date value to the parent component.
 */
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value
    emit('update:modelValue', value)
}
</script>

<!--
    All styling via Tailwind utility classes for maintainability and mobile-first workflow.
  -->