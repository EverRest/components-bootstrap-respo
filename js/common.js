$(document).ready(function() {
	
	//jQuery validation rules
	
	$('#question').validate({
		rules: {
			name: {
				required:true,
				minlength: 3
			},
			email: {
				required:true,
				email:true
			},
			question: {
				required:true,
				minlength:2
			}
		},
		messages: {
			name: {
				required: "Please entry your name",
				minlength: "You need to entry more symbols"
			},
			email: {
				required: "Please entry your email",
				email: "Please input information correctly"
			},
			question: {
				required: "Please entry your question",
				minlength: "You need to entry more symbols"
			}
		}
	});

	$('#join-news').validate({
		rules: {
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			required: "Please entry your email",
			email: "Please input information correctly"
		}
	});
});