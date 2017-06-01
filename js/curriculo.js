$(document).ready(function(){
	
	const container = $('.container');
	const loader = $('.loader');
	const botao = $('.botao-acesso');
	const curriculo = $('.curriculo');

	botao.on('click', function(){
		botao.fadeOut(200, function(){
			loader.fadeIn(2000, function(){
				setInterval(function(){
					container.fadeOut(200, function(){						
						curriculo.fadeIn(1000, function(){
							console.log('finish');
						});
					});
				}, 2000);				
			});			
		});
	});	
	
});