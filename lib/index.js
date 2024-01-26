import { program } from 'commander';
import { append } from './kv.js';
program
    .command('kv')
    .description('Save a key/value pair')
    .option('-A', '--append <key>,<value>', 'appends a new value to an existing key')
    .argument('<key>', 'the key to append the value to')
    .argument('<value>', 'the value to append')
    .action((key, value) => {
    append(key, value).catch(err => {
        console.error(err);
        process.exit(1);
    });
});
