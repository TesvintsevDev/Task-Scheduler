import { CalendarMonth } from './CalendarMonth.js'

const $fullCalendar = document.getElementById('full-calendar')

for (let i = 0; i < 12; i++) {
    const $container = document.createElement("div")
    $container.classList.add('calendar')

    const calendar = new CalendarMonth($container, new Date().getFullYear(), i)

    $fullCalendar.append($container)
}