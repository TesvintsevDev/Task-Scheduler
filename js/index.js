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

	// console.log($body);
}

// День недели
function createWeekDayCell(index) {
	const $weekDayCell = document.createElement('div');
	$weekDayCell.classList.add('calendar__cell', 'calendar__cell_week-day');
	$weekDayCell.textContent = weekDaysList[index]

	if (index > 4) {
		$weekDayCell.classList.add('calendar__cell_weekend')
	}

	return $weekDayCell
}

// Шапка с днями недели
function createCalendarWeekDays($body) {
	for (let i = 0; i < weekDaysList.length; i++) {
		$body.append(createWeekDayCell(i));
	}
}





// Отрисовка 

function render(selectMonth, selectYear) {
	$calendar.innerHTML = ''

	const $head = createCalendarHead(selectYear, selectMonth)
	$calendar.append($head)

	const $body = createCalendarBody()
	$calendar.append($body)

	createCalendarWeekDays($body)


}

render(currentDate.getFullYear(), currentDate.getMonth())