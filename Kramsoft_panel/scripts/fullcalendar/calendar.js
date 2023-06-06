﻿$(document).ready(function () {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: '2014-09-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        buttonText:
        {
            today: 'bugün',
            month: 'Ay',
            week: 'Hafta',
            day: 'Gün'
        },
        monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        monthNamesShort: ['Ock', 'Şbt', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Agst', 'Eyl', 'Ekm', 'Ksm', 'Arlk'],
        dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        events: [
				{
				    title: 'All Day Event',
				    start: '2014-09-01'
				},
				{
				    title: 'Long Event',
				    start: '2014-09-07',
				    end: '2014-09-10'
				},
				{
				    id: 999,
				    title: 'Repeating Event',
				    start: '2014-09-09T16:00:00'
				},
				{
				    id: 999,
				    title: 'Repeating Event',
				    start: '2014-09-16T16:00:00'
				},
				{
				    title: 'Conference',
				    start: '2014-09-11',
				    end: '2014-09-13'
				},
				{
				    title: 'Meeting',
				    start: '2014-09-12T10:30:00',
				    end: '2014-09-12T12:30:00'
				},
				{
				    title: 'Lunch',
				    start: '2014-09-12T12:00:00'
				},
				{
				    title: 'Meeting',
				    start: '2014-09-12T14:30:00'
				},
				{
				    title: 'Happy Hour',
				    start: '2014-09-12T17:30:00'
				},
				{
				    title: 'Dinner',
				    start: '2014-09-12T20:00:00'
				},
				{
				    title: 'Birthday Party',
				    start: '2014-09-13T07:00:00'
				},
				{
				    title: 'Click for Google',
				    url: 'http://google.com/',
				    start: '2014-09-28'
				}
			]
    });

});