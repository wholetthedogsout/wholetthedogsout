$('img').click(function(){
	$('.popout').show();
	$('.transparent-background').show();
	var url = this.getAttribute('data-url');
	$('.demo').attr('src', url);
});

$('.close').click(function(){
	$('.popout').hide();
	$('.transparent-background').hide();
	$('.demo').attr('src', "");
});