<!--
  SourceManager.vue
  Minimal, mobile-first component for managing income sources/categories.
  - Lets user add, edit, and delete income sources (e.g., Cash, MoMo, Other).
  - Emits events for parent to handle actual data logic (UI-only).
  - All code is clear, concise, and well-commented for learning.
  - Touch targets are large for Ghanaian mobile users.
  - Error messages are in simple English.
-->

<template>
    <div class="w-full bg-white rounded-lg shadow-md p-4">
        <h2 class="text-base font-bold text-gray-700 mb-2">Manage Sources</h2>
        <!-- List of sources -->
        <ul class="flex flex-col gap-2 mb-4">
            <li v-for="source in sources" :key="source.id"
                class="flex items-center justify-between bg-gray-50 rounded px-3 py-2">
                <span class="text-gray-800">{{ source.name }}</span>
                <div class="flex gap-2">
                    <button type="button" @click="emitEdit(source)"
                        class="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-semibold min-h-[32px] min-w-[48px]"
                        aria-label="Edit source">
                        Edit
                    </button>
                    <button type="button" @click="emitDelete(source)"
                        class="px-2 py-1 rounded bg-red-100 text-red-700 text-xs font-semibold min-h-[32px] min-w-[48px]"
                        aria-label="Delete source">
                        Delete
                    </button>
                </div>
            </li>
        </ul>
        <!-- Add new source form -->
        <form @submit.prevent="handleAdd" class="flex gap-2">
            <input v-model="newSource" type="text" maxlength="20" required
                class="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-base focus:ring-primary-500 focus:border-primary-500"
                placeholder="Add new source" aria-label="New source name" />
            <button type="submit"
                class="py-2 px-4 rounded-lg bg-primary-600 text-white font-bold text-base active:bg-primary-700 transition min-h-[48px]"
                aria-label="Add source">
                Add
            </button>
        </form>
        <!-- Error message -->
        <p v-if="error" class="text-xs text-red-600 mt-2">{{ error }}</p>
    </div>
</template>

<script setup lang="ts">
// ===== Types & Interfaces =====
/**
 * Represents a single income source/category.
 */
interface Source {
    id: string
    name: string
}

// ===== Props =====
/**
 * Props:
 * - sources: Source[] (array of current sources)
 */
const props = defineProps<{
    sources: Source[]
}>()

// ===== Emits =====
/**
 * Emits:
 * - add: string (new source name)
 * - edit: Source (when user clicks Edit)
 * - delete: Source (when user clicks Delete)
 */
const emit = defineEmits<{
    (e: 'add', name: string): void
    (e: 'edit', source: Source): void
    (e: 'delete', source: Source): void
}>()

// ===== State =====
import { ref } from 'vue'
const newSource = ref('')
const error = ref('')

// ===== Main Logic =====
/**
 * Handles adding a new source.
 * Emits 'add' event if valid, otherwise shows error.
 */
function handleAdd() {
    // Simple validation: must not be empty or duplicate
    if (!newSource.value.trim()) {
        error.value = 'Please enter a source name.'
        return
    }
    // Check for duplicates (case-insensitive)
    const exists = (props.sources || []).some(
        (s: Source) => s.name.toLowerCase() === newSource.value.trim().toLowerCase()
    )
    if (exists) {
        error.value = 'This source already exists.'
        return
    }
    emit('add', newSource.value.trim())
    newSource.value = ''
    error.value = ''
}

/**
 * Emits the edit event for a source.
 */
function emitEdit(source: Source) {
    emit('edit', source)
}

/**
 * Emits the delete event for a source.
 */
function emitDelete(source: Source) {
    emit('delete', source)
}
</script>

<!--
    All styling via Tailwind utility classes for maintainability and mobile-first workflow.
    Touch targets are large for Ghanaian users.
  -->