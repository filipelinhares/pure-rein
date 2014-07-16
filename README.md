# Pure Rein 0.1.0
Rein is a extension of [Pure](http://purecss.io/) buttons.

[Site](http://filipelinhares.github.io/pure-rein)

How to use?

Include Pure buttons and Pure rein in your file.

```
<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/buttons-min.css">  
<link rel="stylesheet" href="css/pure-rein.css">
```

Now you have all classes from Rein to use in your buttons.

#### Shape Classes

- rein-btn-pill
- rein-btn-circle
- rein-btn-3d
- rein-btn-block

#### Style Classes

- rein-btn-border
- rein-btn-glow
- rein-btn-rounded

#### Color Classes

- btn-primary
- btn-secondary
- btn-success
- btn-error
- btn-warning

## Contributing

We're using Sass and Gulp.

Assuming you have Ruby, Sass, NodeJS and NPM.

Fork -> clone

`npm install`

To install all dependencies.

Now you have gulp commands:

- `gulp lint` Sass lint in all files
- `gulp sass` Compile all scss/*.scss
- `gulp watch` Watch lint and scss commands

All files in your scss will be compiled into `dist/pure-rein.min.css`.

So create your awesome feature and make a pull request.

#### Sass Variables

`scss/_util.scss` has all variables of color and box-shadow (3d case).

```sass
$color-default  : rgb(216, 216, 216);
$color-primary  : rgb(34, 34, 34);
$color-secondary: rgb(66, 184, 221);
$color-success  : rgb(28, 184, 65);
$color-error    : rgb(202, 60, 60);
$color-warning  : rgb(223, 117, 20);

$bg-3d-default    : darken($color-default, 15%);
$bg-3d-primary    : darken($color-primary, 15%);
$bg-3d-secondary  : darken($color-secondary, 15%);
$bg-3d-success    : darken($color-success, 15%);
$bg-3d-error      : darken($color-error, 15%);
$bg-3d-warning    : darken($color-warning, 15%);
```

You can costumize all colors you own.

Found any problem? Please open an [issue](https://github.com/filipelinhares/pure-rein/issues).

## Author
[Filipe Linhars](http://twitter.com/ofilipelinhares)

## License
MIT