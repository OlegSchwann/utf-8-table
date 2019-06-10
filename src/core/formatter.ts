import {DataTable, StringTable} from './tableType';

class AdvancedTable {

    private readonly table: StringTable;
    private readonly columnWidth: number[];

    constructor(t: DataTable) {
        this.table = this.convertCellToString(t);
        this.columnWidth = this.getColumnWidth(this.table);
    }

    /*
    Главный метод, возвращает таблицу.
    ┏━┯━━━┯━┓
    ┃1│2  │3┃
    ┠─┼───┼─┨
    ┃4│-5-│6┃
    ┠─┼───┼─┨
    ┃7│8  │9┃
    ┗━┷━━━┷━┛
     */
    public toString(): string {
        const thickLine: string[] = this.columnWidth.map(
            (width: number): string => {
                return '━'.repeat(width);
            });

        const thinLine: string[] = this.columnWidth.map(
            (width: number): string => {
                return '─'.repeat(width);
            });

        const topLine: string = '┏' + thickLine.join('┯') + '┓\n';

        const middleLine: string = '┠' + thinLine.join('┼') + '┨\n';

        const bottomLine: string = '┗' + thickLine.join('┷') + '┛\n';

        const dataRows: string[] =
            this.table.map((row: string[]): string => {
                return '┃' + row.map((s: string, i: number): string => {
                    return s.padStart(this.columnWidth[i], ' ');
                }).join('│') + '┃\n';
            });

        // noinspection UnnecessaryLocalVariableJS
        const finalTable = topLine + dataRows.join(middleLine) + bottomLine;

        return finalTable;

    }

    // Вычисление ширины столбца в символах:
    // [1,  3,1]
    // ┏━┯━━━┯━┓
    // ┃4│aaa│6┃
    // ┗━┷━━━┷━┛
    // noinspection JSMethodCanBeStatic
    private getColumnWidth(t: StringTable): number[] {
        const rowLength = t[0].length;
        const columnWidth = new Array<number>(rowLength);
        columnWidth.fill(0);

        for (let i = 0; i < rowLength; i++) { // для каждого столбца
            // tslint:disable-next-line:prefer-for-of
            for (let j = 0; j < t.length; j++) {
                columnWidth[i] = Math.max(columnWidth[i], t[j][i].length);
            }
        }
        return columnWidth;
    }

    // noinspection JSMethodCanBeStatic
    private convertCellToString(t: DataTable): StringTable {
        // Проверка, что все строки одинаковой длинны.
        const rowLength = t[0].length;
        for (let i = 1; i < t.length; i++) {
            if (t[i].length !== rowLength) {
                throw new Error(`Strings must be the same length:\n` +
                    `row 0 length = ${rowLength},\n` +
                    `row ${i} length = ${t[i].length}.`);
            }
        }

        // Приведение к строке всех клеток.
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < t.length; i++) {
            for (let j = 0; j < rowLength; j++) {
                t[i][j] = t[i][j].toString();
            }
        }

        return t as StringTable;
    }
}

export default AdvancedTable;
