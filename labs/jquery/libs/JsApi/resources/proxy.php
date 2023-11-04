<?php

function sendRequest($endpoint,$isPost=false){
                $res=null;
                if(function_exists('curl_init')){
                	if($isPost){
                		$parts=explode("?", $endpoint);
                		
                		$ch = curl_init($parts[0]);
				        //curl_setopt($ch, CURLOPT_HEADER, 0);
				        curl_setopt($ch, CURLOPT_POST, 1);
				        curl_setopt($ch, CURLOPT_POSTFIELDS, $parts[1]);
				        //var_dump($parts[1]);
				        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
				        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
				        $res = curl_exec($ch);       
				        curl_close($ch);
                	}
                	else{
                		$ch = curl_init("$endpoint");
				        //curl_setopt($ch, CURLOPT_HEADER, 0);
				        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
				        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
				        $res = curl_exec($ch);       
				        curl_close($ch);
                	}
                }
                else{
                        $res=file($endpoint);
                        $res=implode("\n",$res);
                }
                
                return $res;
}

//the url which we are proxying (where client ask from us to get the response from)
$url=urldecode($_GET['url']);
//inorder to work great with the signature
$url=str_replace('+',"%2B" , $url);

//checking for the request domain
//inorder to prevent from public proxy effect
if($url == preg_replace("/^" . str_replace("/", "\/", $STATUSNET_URL) . "/", "", $url)) {
  die ("You are not allowed to be here");
}

if(isset($_GET['act']) && $_GET['act']=='json'){
	$callback=($_GET['callback'])?$_GET['callback']:"";
	$isPost=(isset($_GET['isPost']))?true:false;
	$resp=sendRequest($url,$isPost);
	//used to check normal string or a (json array|object)
	$decoded=json_decode($resp);
	//var_dump($decoded,$resp);
	if(isset($decoded)){
		echo "$callback($resp)";
	}
	else{
		//inorder to recieve non-json responses
		
		echo "$callback('$resp')";
	}
	
}
else{
	
	//echo $url;
	echo sendRequest($url);
}

