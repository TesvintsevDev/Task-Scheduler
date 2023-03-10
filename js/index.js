const monthsList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const weekDaysList = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

// Выбранная дата

const currentDate = new Date()
const selectMonth = currentDate.getMonth()
const selectYear = currentDate.getFullYear()

const $calendar = document.getElementById('calendar')
// console.log($calendar);

// Проверка сегодняшнего дня

function checkToday(selectYear, selectMonth, currentDate) {
	const day = new Date().getDate()
	const month = new Date().getMonth()
	const year = new Date().getFullYear()

	if (day === currentDate && month === selectMonth && year === selectYear) return true
}

// Шапка календаря

function createCalendarHead(selectMonth, selectYear) {
	const $head = document.createElement('div')
	const $month = document.createElement('div')
	const $year = document.createElement('div')

	$head.classList.add('calendar__head')
	$month.classList.add('calendar__month')
	$year.classList.add('calendar__year')

	$month.textContent = monthsList[selectMonth]
	$year.textContent = selectYear

	$head.append($month)
	$head.append($year)

	return $head

	// console.log($head);
}

// Тело календаря

function createCalendarBody() {
	const $body = document.createElement('div')
	$body.classList.add('calendar__body')
	return $body

	console.log($body);
}





// Отрисовка 

function render(selectMonth, selectYear) {
	$calendar.innerHTML = ''

	const $head = createCalendarHead(selectYear, selectMonth)
	$calendar.append($head)

	const $body = createCalendarBody()
	$calendar.append($body)


}

render(currentDate.getFullYear(), currentDate.getMonth())