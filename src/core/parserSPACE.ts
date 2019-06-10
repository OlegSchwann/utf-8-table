import InputParser from './parserInterface';
import {DataTable} from './tableType';

// Для режима 'JSON'

const inputPlaceholder: string = `\
Filesystem      Size  Used Avail Use% Mounted
udev            7,8G     0  7,8G   0% /dev
tmpfs           1,6G  2,1M  1,6G   1% /run
/dev/sda2       310G   85G  210G  29% /
/dev/sda6       150G   70G   80G  47% /media/sda6
`;


const outputPlaceholder: string = `\
┏━━━━━━━━━━┯━━━━┯━━━━┯━━━━━┯━━━━┯━━━━━━━━━━━┓
┃Filesystem│Size│Used│Avail│Use%│Mounted    ┃
┠──────────┼────┼────┼─────┼────┼───────────┨
┃udev      │7,8G│0   │7,8G │0%  │/dev       ┃
┠──────────┼────┼────┼─────┼────┼───────────┨
┃tmpfs     │1,6G│2,1M│1,6G │1%  │/run       ┃
┠──────────┼────┼────┼─────┼────┼───────────┨
┃/dev/sda2 │310G│85G │210G │29% │/          ┃
┠──────────┼────┼────┼─────┼────┼───────────┨
┃/dev/sda6 │150G│70G │80G  │47% │/media/sda6┃
┗━━━━━━━━━━┷━━━━┷━━━━┷━━━━━┷━━━━┷━━━━━━━━━━━┛
`;

const formatDescription: string = `\
Write down your data in the most obvious way: each row starts at the beginning of the line, cells separated by spaces.`;

const parser = (userText: string): DataTable => {
    // TODO: проверки?
    const clearedString: string = userText.trim().replace(/\t/, '    ');
    return clearedString.split(/\n\r?/).map((row) => row.split(/\s+/));
};

const parserSPACE = new InputParser(
    parser,
    inputPlaceholder,
    outputPlaceholder,
    formatDescription,
);

export default parserSPACE;
