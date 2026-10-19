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
	$css_file  = '/assets/index-DuurKns2.css';
	$js_file   = '/assets/index-pvWOLlkR.js';

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
