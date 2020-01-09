<?php
/**
 * Plugin Name: Gutenberg Examples TypeScript.
 *
 * @package gutenberg-examples-with-typescript
 */
defined( 'ABSPATH' ) || exit;


function gutenberg_examples_with_typescript_register_block() {
	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
	wp_register_script(
		'gutenberg-examples-with-typescript',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
	register_block_type( 'gutenberg-examples-with-typescript/gutenberg-examples-with-typescript', array(
		'editor_script' => 'gutenberg-examples-with-typescript',
	) );
}
add_action( 'init', 'gutenberg_examples_with_typescript_register_block' );
