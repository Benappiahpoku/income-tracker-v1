// ===== File-Level Documentation =====
/**
 * index.ts
 * - Vue Router configuration for Stratonea Income Tracker.
 * - Defines all main app routes, including About and Contact.
 * - Uses layout system for consistent UI.
 * - Follows Stratonea guidelines: mobile-first, offline-first, clear comments.
 */

import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// ===== Main App Routes =====
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'new-income',
        name: 'new-income',
        component: () => import('../views/IncomeEntryView.vue')
      },
      {
        path: 'income-list',
        name: 'income-list',
        component: () => import('../views/IncomeListView.vue')
      },
      {
        path: 'export',
        name: 'export',
        component: () => import('../views/ExportView.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('../views/SettingsView.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/ContactView.vue')
      }
    ]
  },
  // ===== Error/Fallback Routes =====
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../layouts/ErrorLayout.vue'),
    children: [
      {
        path: '',
        name: 'not-found',
        component: () => import('../views/NotFoundView.vue')
      }
    ]
  }
]

// ===== Router Instance =====
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    // Handle scroll behavior with slow network in mind
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          resolve({ top: 0 })
        }
      }, 300) // Small delay for smoother transitions
    })
  }
})

export default router