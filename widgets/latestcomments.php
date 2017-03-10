<?php

use Pagekit\Application as App;
use Pagekit\Blog\Model\Comment;

return [
	'name' => 'spqr/latestcomments',
	
	'label' => 'Latest Blog Comments',
	
	'events' => [
		'view.scripts' => function( $event, $scripts ) use ( $app ) {
			
			$scripts->register(
				'widget-latestcomments',
				'latestcomments:app/bundle/widget-latestcomments.js',
				[ '~widgets' ]
			);
		}
	],
	
	'render' => function( $widget ) use ( $app ) {
		
		if(App::package('pagekit/blog')) {
			$comments =
				Comment::where( [ 'status = ?', 'created < ?' ], [ Comment::STATUS_APPROVED, new \DateTime ] )->related(
					'user', 'post'
				)->limit( $widget->get( 'count' ) )->orderBy( 'created', 'DESC' )->get();
			$config   = $widget->get( 'config' );
			
			if ( $comments ) {
				foreach ( $comments as $comment ) {
					$content = strip_tags( $comment->content );
					$length  = $widget->get('truncatecomment');
					
					if ( $length ) {
						if ( function_exists( 'mb_strpos' ) ) {
							if ( ( $pos = @mb_strpos( $content, ' ', $length ) ) > 0 ) {
								$content = mb_substr( $content, 0, $pos ) . '...';
							}
						} else {
							if ( ( $pos = @strpos( $content, ' ', $length ) ) > 0 ) {
								$content = substr( $content, 0, $pos ) . '...';
							}
						}
					}
					
					$comment->content = $content;
				}
			}
		}
		
		//date formatting;
		$app['view']->script('post', 'blog:app/bundle/post.js', 'vue');
		
		return $app->view( 'latestcomments/widget/latestcomments.php', compact( 'widget', 'comments' ) );
	}
];