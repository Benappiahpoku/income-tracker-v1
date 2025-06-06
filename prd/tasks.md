# Income Tracker Development Task List

## 1. Project Setup

- [ ] Initialize project repository
- [ ] Configure localForage for offline storage
- [ ] Setup basic mobile-responsive UI framework (Vue.js + Tailwind CSS or preferred stack)

## 2. Income Entry Screen

- [ ] Build form UI with fields:
  - Customer Name (optional)
  - Amount (₵) (required, numeric input)
  - Description (optional)
  - Source (dropdown with pre-filled and customizable options)
  - Date (auto-filled, editable date picker)
- [ ] Implement validation for required fields (Amount)
- [ ] Numeric keyboard for Amount input on mobile
- [ ] Save entry to localForage
- [ ] Clear form after successful save
- [ ] Add “Edit” and “Delete” functionality for existing entries

## 3. Income List / Dashboard Screen

- [ ] Display income entries in a scrollable list with:
  - Date, Customer, Amount
- [ ] Implement toggles for Today / Week / Month / All Time views
- [ ] Implement filter by income source dropdown
- [ ] Add search functionality (filter by customer name or description)
- [ ] Show total income amount for current view
- [ ] Implement simple line/bar chart for income trends

## 4. Export / Share Features

- [ ] Generate PDF of full income history with formatted table
- [ ] Preview PDF before sharing or downloading
- [ ] Implement WhatsApp share button (PDF or summary text)
- [ ] Export CSV functionality

## 5. Settings Screen

- [ ] Clear All Data button with confirmation prompt
- [ ] Manage income sources (add, edit, delete)
- [ ] About section with version and support info

## 6. Offline and Persistence

- [ ] Ensure all data persists after page reload or app restart
- [ ] Test offline functionality thoroughly

## 7. UI/UX Polish

- [ ] Responsive design for different mobile screen sizes
- [ ] Keyboard behavior for numeric inputs
- [ ] User feedback on save/edit/delete actions (toast notifications or alerts)

## 8. Testing & Debugging

- [ ] Write unit tests for key functions (data storage, filtering)
- [ ] Manual testing on mobile devices
- [ ] Bug fixes based on testing feedback

## 9. Documentation

- [ ] Write README with setup instructions
- [ ] Document key components and data flow

## File Structure and Components

/src
  /views
    IncomeEntryView.vue
    IncomeListView.vue
    ExportView.vue
    SettingsView.vue
  /components
    IncomeForm.vue
    DatePicker.vue
    IncomeList.vue
    FilterBar.vue
    IncomeChart.vue
    ExportOptions.vue
    PreviewPanel.vue
    DataManagement.vue
    SourceManager.vue
