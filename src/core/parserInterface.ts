import {DataTable} from './tableType';

// Паттерн стратегия: в зависимости от выбранного режима показываются разные подсказки
// и используются разные парсеры.

class InputParser {
    // Функция, обрабатывающая пользовательский ввод.
    // Текст ошибки, если она брошена, должен быть показан в окне вывода тёмно-красным.
    public readonly parser: (userText: string) => DataTable;
    // Пример формата ввода для объяснения пользователю.
    public readonly inputPlaceholder: string;
    // То, что получается из примера ввода.
    public readonly outputPlaceholder: string;
    // Описание ожидаемого формата в виде html - может содержать ссылки, например.
    public readonly formatDescription: string;

    constructor(
        parser: (userText: string) => DataTable,
        inputPlaceholder: string,
        outputPlaceholder: string,
        formatDescription: string,
    ) {
        this.inputPlaceholder = inputPlaceholder;
        this.outputPlaceholder = outputPlaceholder;
        this.formatDescription = formatDescription;
        this.parser = parser;
    }
}

export default InputParser;
