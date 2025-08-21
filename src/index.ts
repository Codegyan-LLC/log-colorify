export class Log {
    static success(msg: string) {
        console.log(`%c ${msg}`, 'color: green');
    }

    static danger(msg: string) {
        console.log(`%c ${msg}`, 'color: red');
    }

    static info(msg: string) {
        console.log(`%c ${msg}`, 'color: black; background: yellow');
    }

    static debug(msg: string) {
        console.log(`%c ${msg}`, 'color: gray');
    }

    static notice(msg: string) {
        console.log(`%c ${msg}`, 'color: cyan');
    }

    static warning(msg: string) {
        console.log(`%c ${msg}`, 'color: orange');
    }

    static error(msg: string) {
        console.log(`%c ${msg}`, 'color: red');
    }

    static critical(msg: string) {
        console.log(`%c ${msg}`, 'color: red; font-weight: bold;');
    }

    static alert(msg: string) {
        console.log(`%c ${msg}`, 'color: white; background-color: red; font-weight: bold;');
    }
}
