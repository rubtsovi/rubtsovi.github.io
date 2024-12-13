$(document).ready(function () {
	if(!$.cookie('accept-cookies')){
		$('#bg').after(
			$('<div>', {id: 'cookies-alert'}).append(
				$('<div>', {id: 'cookie-icon'}),
				$('<div>', {id: 'cookie-text'}).html('W trosce o najwyższą jakość usług, ta witryna używa plików cookie. Korzystając z naszej strony wyrażasz zgodę na używanie plików cookie, zgodnie z aktualnymi ustawieniami przeglądarki. Możesz je w każdej chwili zmienić, prawdopodobnie jednak będzie to miało wpływ na korzystanie z tej witryny. Szczegóły znajdziesz w <a href="#cookies">polityce plików cookie.</a> Dziękujemy!<br><a href="#" id="accept-cookie">Rozumiem. Zamknij</a>')
			)
		);
	}

	$('#accept-cookie').on('click', function (event) {
		event.preventDefault();
		$.cookie('accept-cookies', true, {expires: 30});
		$('#cookies-alert').animate({opacity: 0}, 400, function () {
            $('#cookies-alert').remove();
        })
    })

})

