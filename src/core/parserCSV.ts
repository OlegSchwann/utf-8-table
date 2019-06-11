import {DataTable} from './tableType';
import InputParser from './parserInterface';

// Для режима 'CSV'

const inputPlaceholder: string = `\
Moscow,55.7558° N , 37.6173° E
 London,51.5074° N ,00.1278° W
New York,40.7128° N , 74.0060° W
`;


const outputPlaceholder: string = `\
┏━━━━━━━━┯━━━━━━━━━━┯━━━━━━━━━━┓
┃Moscow  │55.7558° N│37.6173° E┃
┠────────┼──────────┼──────────┨
┃London  │51.5074° N│00.1278° W┃
┠────────┼──────────┼──────────┨
┃New York│40.7128° N│74.0060° W┃
┗━━━━━━━━┷━━━━━━━━━━┷━━━━━━━━━━┛
`;

const formatDescription: string = `\
Write down your data: each row starts at the beginning of the line, cells separated by comma.`;

const parser = (userText: string): DataTable => {
    // TODO: проверки?
    const clearedString: string = userText.trim().replace(/\t/, '    ');
    return clearedString
        .split(/\s*\n\s*/)
        .map((row) => {
            return row.split(/\s*,\s*/);
        });
};

const parserCSV = new InputParser(
    parser,
    inputPlaceholder,
    outputPlaceholder,
    formatDescription,
);

export default parserCSV;
