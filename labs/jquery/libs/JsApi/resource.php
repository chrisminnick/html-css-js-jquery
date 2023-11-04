<?php
/**
 * StatusNet - the distributed open-source microblogging tool
 * Copyright (C) 2010, StatusNet, Inc.
 *
 * A sample module to show best practices for StatusNet plugins
 *
 * PHP version 5
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @category  JavaScript API
 * @package   StatusNet
 * @author    Arunoda Susiripala <arunoda.susiripala@gmail.com>
 * @copyright 2010 StatusNet, Inc.
 * @license   http://www.fsf.org/licensing/licenses/agpl-3.0.html AGPL 3.0
 * @link      http://status.net/
 */

if (!defined('STATUSNET')) {
	exit(1);
}

/**
 * Loads the additional resources need to work with the api
 *
 */

class ResourceAction extends Action {
	
	var $resource_base;
	var $endpoint;
		
	function prepare($args) {
		
		$dir = dirname(__FILE__);
		$filename = $dir . "/resources/" . $args['file'];
		if($args['file'] == 'icon.jpg') { //loads the icon
			
			header("Content-type: image/jpeg");
			$handle = fopen($filename, "rb");
			$contents = fread($handle, filesize($filename));
			echo $contents;
			fclose($handle);
		} else if ($args['file'] == 'jquery-1.4.2.min.js') { //loads jquery
			
			header("Content-type: text/javascript");
			include_once $filename;
		} else if ($args['file'] == 'proxy.php') { //loads the proxy which used to do communication
			
			$STATUSNET_URL = $this->getStatusNetPathWhenProxyLoads();
			
			include_once $filename;
		} else if ($args['file'] == 'statusnet-js-api.css') { //loads the css
			
			header("Content-type: text/css");
			include_once $filename;
		}
	}
	
	function getStatusNetPathWhenProxyLoads() {
		$url = "http";
		if($_SERVER['HTTPS']) $url .= "s";
		$url .= '://' . $_SERVER['HTTP_HOST'];
		$url .= $_SERVER['REQUEST_URI'];
		$snPath = preg_replace("/\/js\/resource\/proxy\.php.*/", "", $url);

		return $snPath;
	}
	
}
