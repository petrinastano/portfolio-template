
module.exports = function(data) {

	var template = '<div class="m-b-6 m-b-8-large">';
		template += '<a href="'+data.href+'" class="h3 font-family-1 hover-gray">';
		template += data.title;
		template += '</a>';
		template += '<p class="m-t-2 m-b-2">';
		template += data.text;
		template += '</p>',
		template += '<a href="'+data.href+'" class="font-family-1 font-weight-medium text-underline">';
		template += "Čítať ďalej";
		template += '</a>';
		template += '</div>';


    // return template
   	return  template;

}