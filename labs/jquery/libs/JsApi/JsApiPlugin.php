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
    // This check helps protect against security problems;
    // your code file can't be executed directly from the web.
    exit(1);
}


class JsApiPlugin extends Plugin
{
  

    function initialize()
    {
        return true;
    }

    function cleanup()
    {
        return true;
    }


    /**
     * Load related modules when needed
     * LoadAction claas and the ResourceAction class
     * @param string $cls Name of the class to be loaded
     *
     * @return boolean hook value; true means continue processing, false means stop.
     */

    function onAutoload($cls)
    {
        $dir = dirname(__FILE__);

        switch ($cls)
        {
        case 'LoadAction':
            include_once $dir . '/' . strtolower(mb_substr($cls, 0, -6)) . '.php';
            return false;
        case 'ResourceAction':
            include_once $dir . '/' . strtolower(mb_substr($cls, 0, -6)) . '.php';
            return false;
        default:
            return true;
        }
    }

    /**
     * Map URLs to actions
     *
     * @param Net_URL_Mapper $m path-to-action mapper
     *
     * @return boolean hook value; true means continue processing, false means stop.
     */

    function onRouterInitialized($m)
    {
    	//the js api file is here
        $m->connect('js/api.js',
                    array('action' => 'load'));
        
        //resources
        $m->connect('js/resource/icon.jpg',
                    array('action' => 'resource', 'file' => 'icon.jpg'));
                    
       	$m->connect('js/resource/jquery-1.4.2.min.js',
                    array('action' => 'resource', 'file' => 'jquery-1.4.2.min.js'));
                    
        $m->connect('js/resource/proxy.php',
                    array('action' => 'resource', 'file' => 'proxy.php'));
                    
        $m->connect('js/resource/statusnet-js-api.css',
                    array('action' => 'resource', 'file' => 'statusnet-js-api.css'));
        return true;
    }


    function onPluginVersion(&$versions)
    {
        $versions[] = array('name' => 'Statunet JavaScript API',
                            'version' => STATUSNET_VERSION,
                            'author' => 'Arunoda Susiripala',
                            'homepage' => 'http://status.net/wiki/JavaScript_API',
                            'rawdescription' =>
                            _m('Pure JavaScript easy to use Client API with a widget library'));
        return true;
    }
}

