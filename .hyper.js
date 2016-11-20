module.exports = {
  config: {
    fontSize: 12,
    fontFamily: `
      "Source Code Pro for Powerline",
      Menlo,
      "DejaVu Sans Mono",
      "Lucida Console",
      monospace`,
    cursorColor: 'rgba(248,28,229,0.8)',
    cursorShape: 'BLOCK', // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    foregroundColor: '#fff',
    backgroundColor: '#000',
    borderColor: '#333',

    css: `
      .terms_terms {
        background: url(file://~/sierra-2.jpg) center;
        background-size: cover;
      }
    `,

    termCSS: `
      x-screen {
        background: transparent !important;
      }

      x-row {
        font-weight: 100 !important;
      }

      /*
      x-row span {
        color: rgb(255, 64, 129);
        font-weight: 100;
      }
      */
    `,

    padding: '0px 0px 16px 0px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#ffff00',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#00ffff',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00ffff',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: false,
    // bellSoundURL: 'http://example.com/bell.mp3',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: true,

    ////////////////////////////////////////////////////////////////////////////////
    // Advanced Options
    // https://hyper.is/#cfg
    ////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////////
    // PLUGIN SETTINGS
    ////////////////////////////////////////////////////////////////////////////////

    // hyper-material
    // https://github.com/dotcypress/hyper-material

    // hyperterm-material-theme
    // https://github.com/nauzethc/hyperterm-material-theme
    // materialTheme: 'teal',
    // materialSyntax: 'dark',

    // hyperline
    // https://www.npmjs.com/package/hyperline
    hyperline: {
      color: 'blue'
    },

    // hyperterm-visor
    // https://github.com/CWSpear/hyperterm-visor
    visor: {
      hotkey: 'CommandOrControl+Shift+Z'
      // position: 'top', // top, left, right, bottom
      // width: 200, // Optional, defaults to half of viewable area for horizontal positions, 100% for vertical
      // height: 900 // Optional, defaults to half of viewable area for vertical positions, 100% for horizontal
    },

    // hyperterm-1password
    // https://github.com/sibartlett/hyperterm-1password

  },

  // MOAR PLUGINS: https://github.com/bnb/awesome-hyper
  plugins: [
    "hyper-material",
    // "hyperterm-material-theme",
    "hyperline",
    "hyperterm-visor",
    "hyperterm-1password"
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
