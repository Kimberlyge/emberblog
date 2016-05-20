<?php
/*
Plugin Name: My custom post types
Author URI: https://github.com/oskarrough/ember-wordpress/
*/
function custom_post_type() {
    $labels = array(
        'name' => 'Posts',
        'singular_name' => 'post',
        'menu_name' => 'posts',
    );
    $args = array(
        'labels' => $labels,
        'show_in_rest'  => true,
        'rest_base' => 'posts',
    );
    register_post_type('post', $args);
}

add_action('init', 'custom_post_type');
?>
