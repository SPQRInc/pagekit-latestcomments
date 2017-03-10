<div id="comments">
	<?php if ( isset($comments) && $comments ) : ?>
		<ul class="uk-list uk-list-line">
			<?php foreach ( $comments as $comment ) : ?>
				<li>
					<article class="uk-grid uk-grid-match" data-uk-grid-margin>
						<div>
							<h1 class="uk-h2">
								<a href="<?= $view->url(
									'@blog/id',
									[ 'id' => $comment->post_id ]
								); ?>#comment-<?= $comment->id; ?>"><?= $comment->post->title ?></a></h1>
							<?php if ( $widget->get( 'showmeta' ) ) : ?>
								<p class="uk-article-meta uk-margin-remove">
									<?= __(
										'Written by %name% on %date%',
										[
											'%name%' => $comment->author,
											'%date%' => '<time datetime="' . $comment->created->format(
													\DateTime::ATOM
												) . '" v-cloak>{{ "' . $comment->created->format(
													\DateTime::ATOM
												) . '" | date "longDate" }}</time>'
										]
									) ?>
								</p>
							<?php endif; ?>
							<?php if ( $widget->get( 'showcomment' ) ) : ?>
								<p>
									<?= $comment->content; ?>
								</p>
							<?php endif; ?>
						</div>
					</article>
				</li>
			<?php endforeach; ?>
		</ul>
	<?php else: ?>
		<div class="uk-alert uk-alert-large"
		     data-uk-alert="">
			<p>
				<?= __( 'There are no published comments to show.' ); ?>
			</p>
		</div>
	<?php endif; ?>
</div>