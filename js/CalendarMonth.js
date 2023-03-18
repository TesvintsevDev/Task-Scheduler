export class CalendarMonth {
    monthsList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    weekDaysList = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

    _date = new Date()

    constructor($container, currentYear = null, currentMonth = null) {

        this.$container = $container

        // Если параметры даты указади при создании экземпляра класса
        if (currentYear !== null) {
            this._date.setFullYear(currentYear)
        }

        if (currentMonth !== null) {
            this._date.setMonth(currentMonth)
        }

        // Создаем шапку и тело календаря
        this.calendarHead = this.createCalendarHead()
        this.$body = this.createCalendarBody()

        // Запускаем рендер при запуске
        this.render()

        // Добавляем в контейнер
        this.$container.append(this.calendarHead.$head)
        this.$container.append(this.$body)
    }

    // Сеттер месяца
    set month(value) {
        this._date.setMonth(value)
        this.render()
    }

    // Геттер месяца
    get month() {
        return this._date.getMonth()
    }

    // Сеттер года
    set year(value) {
        this._date.setFullYear(value)
        this.render()
    }

    // Геттер года
    get year() {
        return this._date.getFullYear()
    }

    // Проверка сегодняшнего дня
    checkToday(selectYear, selectMonth, selectDay) {
        const day = new Date().getDate()
        const month = new Date().getMonth()
        const year = new Date().getFullYear()

        if (day == selectDay && month == selectMonth && year == selectYear) return true
    }

    // Шапка календаря
    createCalendarHead() {
        const $head = document.createElement('div')
        const $month = document.createElement('div')
        const $year = document.createElement('div')

        $head.classList.add('calendar__head')
        $month.classList.add('calendar__month')
        $year.classList.add('calendar__year')

        $month.textContent = this.monthsList[this.month]
        $year.textContent = this.year

        $head.append($month)
        $head.append($year)

        return {
            $head,
            $month,
            $year
        }
    }

    // Тело календаря
    createCalendarBody() {
        const $body = document.createElement('div')
        $body.classList.add('calendar__body')
        return $body
    }

    // День недели
    createWeekDayCell(index) {
        const $weekDayCell = document.createElement('div')
        $weekDayCell.classList.add('calendar__cell', 'calendar__cell_week-day')
        $weekDayCell.textContent = this.weekDaysList[index]

        if (index > 4) {
            $weekDayCell.classList.add('calendar__cell_weekend')
        }

        return $weekDayCell
    }

    // Шапка с днями недели
    createCalendarWeekDays() {
        for (let i = 0; i < this.weekDaysList.length; i++) {
            this.$body.append(this.createWeekDayCell(i))
        }
    }

    // День
    createDayCell(index) {
        const firstDay = new Date(this.year, this.month, 0).getDay()
        const day = index - firstDay + 1
        const weekDay = new Date(this.year, this.month, day).getDay()

        const $dayCell = document.createElement('div')
        $dayCell.classList.add('calendar__cell', 'calendar__cell_day')
        $dayCell.textContent = day

        if (weekDay == 0 || weekDay == 6) {
            $dayCell.classList.add('calendar__cell_day-wekend')
        }

        if (this.checkToday(this.year, this.month, day)) {
            $dayCell.classList.add('calendar__cell_day-today')
        }

        return $dayCell

    }

    createCalendarBodyDays() {
        // Сетка календаря (дни недели)

        for (let i = 0; i < this.weekDaysList.length * 6; i++) {
            const firstDay = new Date(this.year, this.month, 0).getDay()
            const monthDaysCount = new Date(this.year, this.month + 1, 0).getDate()


            if (i >= firstDay && i < monthDaysCount + firstDay) {
                this.$body.append(this.createDayCell(i))
            } else {
                const $dayCell = document.createElement('div')
                $dayCell.classList.add('calendar__cell')
                this.$body.append($dayCell)
            }
        }
    }

    // Отрисовка
    render() {
        this.$body.innerHTML = ''

        // Устанавливаем параметры шапки
        this.calendarHead.$month.textContent = this.monthsList[this.month]
        this.calendarHead.$year.textContent = this.year

        this.$weekDays = this.createCalendarWeekDays()
        this.createCalendarBodyDays()
    }
}