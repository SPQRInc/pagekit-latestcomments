<?php

use Pagekit\Application;


return [
	'name' => 'latestcomments',
	'type' => 'extension',
	'main' => function( Application $app ) {
		// bootstrap code
	},
	
	'autoload' => [
	],
	
	'nodes' => [
	],
	
	'widgets' => [
		'widgets/latestcomments.php'
	],
	'resources' => [
		'latestcomments:' => ''
	],
		
	'events' => [
	]
];