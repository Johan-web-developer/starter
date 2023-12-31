const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

fs.readFile('test-file.txt', () => {
    console.log("I/O finished");
    console.log("-----------------");

    setTimeout(() => console.log('Timer 2 finished'), 0);
    setTimeout(() => console.log('Timer 3 finished'), 3000);
    setImmediate(() => console.log('Immediate 2 finished'));

    process.nextTick(() => console.log('Process.nextTick'));

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encriptado (pbkdf2Sync)');
    });

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encriptado (pbkdf2 async)');
    });

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encriptado (pbkdf2 async)');
    });
});
