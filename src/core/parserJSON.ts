import {DataTable} from './tableType';
import InputParser from './parserInterface';

// Для режима 'JSON'

const inputPlaceholder: string = `\
[[    "place", "time, ms", "need acceleration"],
 ["on server",        255,                true],
 ["on client",       3040,               false]]
`;

const outputPlaceholder: string = `\
┏━━━━━━━━━┯━━━━━━━━┯━━━━━━━━━━━━━━━━━┓
┃place    │time, ms│need acceleration┃
┠─────────┼────────┼─────────────────┨
┃on server│     255│             true┃
┠─────────┼────────┼─────────────────┨
┃on client│    3040│            false┃
┗━━━━━━━━━┷━━━━━━━━┷━━━━━━━━━━━━━━━━━┛
`;

const formatDescription: string = `\
<a href="https://en.wikipedia.org/wiki/JSON">JavaScript Object Notation</a> is human-readable file format \
that uses text to transmit data and array types. It is a very common. Write down your data as in the example.\
`;

const parser = (userText: string): DataTable => {
    // TODO: добавить проверку?
    return JSON.parse(userText);
};

const parserJSON = new InputParser(
    parser,
    inputPlaceholder,
    outputPlaceholder,
    formatDescription,
);

export default parserJSON;
