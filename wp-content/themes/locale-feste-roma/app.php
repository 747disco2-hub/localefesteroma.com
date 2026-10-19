<?php
/**
 * Shell WordPress per il bundle React esportato da Lovable.
 */

defined( 'ABSPATH' ) || exit;
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" href="<?php echo esc_url( get_template_directory_uri() . '/favicon.webp' ); ?>" type="image/webp">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="root"></div>
<script>window.localeFesteThemeUrl = <?php echo wp_json_encode( get_template_directory_uri() ); ?>;</script>
<?php wp_footer(); ?>
</body>
</html>
