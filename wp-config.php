<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'js-framework' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
	define('AUTH_KEY',         '4kr=, `kB%{*]n|t5`WW,nmjbI+F{---A[llwRp[3-.vOOQafiC2_Grg*G`{uno7');
	define('SECURE_AUTH_KEY',  '.<zU4&x#QNZ0 CuC2M- -;OWgM@Cldy|AS(Z5vf:w-EDkOeU:x5p+uTy,Xlo69A!');
	define('LOGGED_IN_KEY',    '$u+2il+#N3aKTvaF&w+YeqSGWOW5|<^Om2GxL|/c(h(23wY;T%RIk_b4L>adz|+X');
	define('NONCE_KEY',        'e5q]}|kvIV)gRjeA:(Z~pV,0:I[vnpz=/=~#XOX1,|Sy@w/YGb(gN#jUL4ahVtwG');
	define('AUTH_SALT',        'lSc6](1YZ<Y=k8y-lHEPQo*abM/^Y[NA;|rGMja_B<g,obD&foRq0iX+d--[KkKC');
	define('SECURE_AUTH_SALT', '!Q`oG0)0W_4<8d+@2duU~+-yz<7P_z2|NvR8>.PwqpB,?l0??n+lhwtQ}zg]3^Vb');
	define('LOGGED_IN_SALT',   '76VR]PF;oyLq1x1:`|-)4Pr(sF#!%kWIJ>&XU2+}W@}.}_[JFju[rm63u/S3c*h*');
	define('NONCE_SALT',       '5V/GKUQf!}k 1%nLWuq]%T,:^Vj4gfwpZAaC:s-MpDED|M1ndkMSIx8v,va+w*[N');

define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
