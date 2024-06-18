# Log Colorify
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

The `Log colorify` provides a simple way to log messages with color-coded output in TypeScript.

## Features

- Supports multiple log levels: `success`, `danger`, `info`, `debug`, `notice`, `warning`, `error`, `critical`, `alert`.
- Each log level has its own distinct color for easy identification.
- Lightweight and easy to integrate into TypeScript projects.

## Installation

1. Make sure you have Node.js and npm installed on your machine.

2. Install the `Log colorify` module using npm:

   ```bash
   npm install codegyan-log-colorify
    ```

## Usages

Import the Log class into your TypeScript file and use the provided static methods to log messages:

```js
import { Log } from 'codegyan-log-colorify';

Log.success('This is a success message');
Log.debug('This is a debug message');
Log.info('This is an info message');
Log.notice('This is a notice message');
Log.warning('This is a warning message');
Log.error('This is an error message');
Log.critical('This is a critical message');
Log.alert('This is an alert message');

```

## License
This project is licensed under the **[MIT license](https://opensource.org/licenses/MIT)** - see the LICENSE file for details.

## Contributing
Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## Issues
If you encounter any issues or have suggestions, please open an issue on the GitHub repository