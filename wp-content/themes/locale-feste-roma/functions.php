<?php
/**
 * Bootstrap del tema Locale Feste Roma.
 */

defined( 'ABSPATH' ) || exit;

function locale_feste_roma_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'custom-logo' );
}
add_action( 'after_setup_theme', 'locale_feste_roma_setup' );

function locale_feste_roma_assets() {
	$theme_uri = get_template_directory_uri();
	$theme_dir = get_template_directory();
	$css_file  = '/assets/index-dw9Q84lU.css';
	$js_file   = '/assets/index-CdaSCwH7.js';

	wp_enqueue_style(
		'locale-feste-roma-app',
		$theme_uri . $css_file,
		array(),
		filemtime( $theme_dir . $css_file )
	);

	wp_enqueue_script(
		'locale-feste-roma-app',
		$theme_uri . $js_file,
		array(),
		filemtime( $theme_dir . $js_file ),
		true
	);

}
add_action( 'wp_enqueue_scripts', 'locale_feste_roma_assets' );

function locale_feste_roma_module_script( $tag, $handle, $src ) {
	if ( 'locale-feste-roma-app' !== $handle ) {
		return $tag;
	}

	return '<script type="module" src="' . esc_url( $src ) . '" id="' . esc_attr( $handle ) . '-js"></script>';
}
add_filter( 'script_loader_tag', 'locale_feste_roma_module_script', 10, 3 );

/**
 * Sitemap delle route React: WordPress non le conosce come contenuti nativi.
 */
function locale_feste_roma_add_sitemap_route() {
	add_rewrite_rule( '^sitemap\\.xml$', 'index.php?locale_feste_sitemap=1', 'top' );
}
add_action( 'init', 'locale_feste_roma_add_sitemap_route' );

function locale_feste_roma_sitemap_query_var( $vars ) {
	$vars[] = 'locale_feste_sitemap';
	return $vars;
}
add_filter( 'query_vars', 'locale_feste_roma_sitemap_query_var' );

function locale_feste_roma_render_sitemap() {
	if ( ! get_query_var( 'locale_feste_sitemap' ) ) {
		return;
	}

	$paths = array(
		'/',
		'/festa-18-anni-roma',
		'/feste-private-roma',
		'/location-compleanni-roma',
		'/sala-feste-roma',
		'/blog',
		'/blog/quanto-costa-festa-privata-roma',
		'/blog/come-scegliere-location-compleanno',
		'/blog/festa-18-anni-cosa-sapere',
		'/blog/errori-organizzare-festa-privata',
		'/blog/sala-feste-vs-discoteca-compleanno',
		'/blog/numero-invitati-festa-privata',
		'/blog/festa-privata-roma-sud',
		'/blog/cosa-chiedere-preventivo-festa',
	);

	header( 'Content-Type: application/xml; charset=UTF-8' );
	echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
	echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
	foreach ( $paths as $path ) {
		echo "\t<url><loc>" . esc_url( home_url( $path ) ) . '</loc></url>' . "\n";
	}
	echo '</urlset>';
	exit;
}
add_action( 'template_redirect', 'locale_feste_roma_render_sitemap' );

function locale_feste_roma_robots_txt( $output ) {
	return $output . "\nSitemap: " . esc_url( home_url( '/sitemap.xml' ) ) . "\n";
}
add_filter( 'robots_txt', 'locale_feste_roma_robots_txt' );

function locale_feste_roma_flush_rewrites() {
	locale_feste_roma_add_sitemap_route();
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'locale_feste_roma_flush_rewrites' );
