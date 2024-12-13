<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit4f878774f7fdf9008b50200544ec238e
{
    public static $files = array (
        '0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => __DIR__ . '/..' . '/symfony/polyfill-mbstring/bootstrap.php',
        '2c102faa651ef8ea5874edb585946bce' => __DIR__ . '/..' . '/swiftmailer/swiftmailer/lib/swift_required.php',
    );

    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WMC\\SwiftmailerTwigBundle\\' => 26,
        ),
        'T' => 
        array (
            'Twig\\' => 5,
        ),
        'S' => 
        array (
            'Symfony\\Polyfill\\Mbstring\\' => 26,
            'Symfony\\Component\\DomCrawler\\' => 29,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WMC\\SwiftmailerTwigBundle\\' => 
        array (
            0 => __DIR__ . '/..' . '/wemakecustom/swiftmailer-twig-bundle',
        ),
        'Twig\\' => 
        array (
            0 => __DIR__ . '/..' . '/twig/twig/src',
        ),
        'Symfony\\Polyfill\\Mbstring\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-mbstring',
        ),
        'Symfony\\Component\\DomCrawler\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/dom-crawler',
        ),
    );

    public static $prefixesPsr0 = array (
        'T' => 
        array (
            'Twig_' => 
            array (
                0 => __DIR__ . '/..' . '/twig/twig/lib',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit4f878774f7fdf9008b50200544ec238e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit4f878774f7fdf9008b50200544ec238e::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit4f878774f7fdf9008b50200544ec238e::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}