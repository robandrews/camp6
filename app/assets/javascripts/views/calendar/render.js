var renderCalendar = function(){
  $('#calendar').fullCalendar({
  	header: {
  		left: 'prev,next today',
  		center: 'title',
  		right: 'month,agendaWeek,agendaDay'
  	},
  	defaultDate: '2014-01-12',
  	selectable: true,
  	selectHelper: true,
  	select: function(start, end) {
  		var title = prompt('Event Title:');
  		var eventData;
  		if (title) {
  			eventData = {
  				title: title,
  				start: start,
  				end: end
  			};
  			$('#calendar').fullCalendar('renderEvent', eventData, true);
  		}
  		$('#calendar').fullCalendar('unselect');
  	},
  	editable: true,
  	events: [
  		{
  			title: 'All Day Event',
  			start: '2014-01-01'
  		},
  		{
  			title: 'Long Event',
  			start: '2014-01-07',
  			end: '2014-01-10'
  		}
  	]
  });
}