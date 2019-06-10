<template>
    <main class="container">
        <label class="mode-selector-wrapper">
            <select v-model="parsingMode" class="mode-selector">
                <option value="JSON">JSON format</option>
                <option value="SPACE" selected>Spaces separation</option>
                <option value="CSV">Comma Separated Values</option>
            </select>
        </label>

        <label class="input-textarea-wrapper">
            <textarea class="input-textarea" :placeholder="inputPlaceholder" v-model.trim="userText"></textarea>
        </label>

        <div class="arrow"></div>

        <label class="output-textarea-wrapper">
            <textarea class="output-textarea" :placeholder="outputPlaceholder" v-model="resultTable" readonly></textarea>
        </label>

        <article class="format-description" v-html="formatDescription"></article>
    </main>
</template>

<script lang="ts">
    import parserInterface from '../core/parserInterface';
    import parserJSON from '../core/parserJSON';
    import parserSPACE from '../core/parserSPACE';
    import parserCSV from '../core/parserCSV';

    import AdvancedTable from '../core/formatter';

    import {Component, Vue} from 'vue-property-decorator';
    import {DataTable} from '@/core/tableType';

    @Component
    export default // noinspection UnterminatedStatementJS,UnterminatedStatementJS
    class InputOutputForm extends Vue {
        // Какие виды стратегий обработки пользовательского вывода доступны?
        private static readonly StrategyVariants: Record<string, parserInterface> = {
            JSON: parserJSON,
            SPACE: parserSPACE,
            CSV: parserCSV,
        };

        // Текущий ключ для StrategyVariants[].
        private parsingMode: string;

        // Баг статического анализатора: get'теры используются в вёрстке.
        // noinspection JSUnusedLocalSymbols
        private get inputPlaceholder(): string {
            return InputOutputForm.StrategyVariants[this.parsingMode].inputPlaceholder;
        }

        // noinspection JSUnusedLocalSymbols
        private get outputPlaceholder(): string {
            return InputOutputForm.StrategyVariants[this.parsingMode].outputPlaceholder;
        }

        // noinspection JSUnusedLocalSymbols
        private get formatDescription(): string {
            return InputOutputForm.StrategyVariants[this.parsingMode].formatDescription;
        }

        private userText: string = '';

        constructor() {
            super();
            this.parsingMode = 'SPACE';
        }

        // noinspection JSUnusedLocalSymbols
        private get resultTable(): string {

            if (this.userText.length === 0) {
                return '';
            }

            try {
                const parser = InputOutputForm.StrategyVariants[this.parsingMode].parser;
                const table: DataTable = parser(this.userText);
                return (new AdvancedTable(table)).toString();
            } catch (e) {
                return e.toString();
            }
        }
    }
</script>

<style scoped>
    /* region arrangement of elements */
    /* Использовалось https://css-tricks.com/snippets/css/complete-guide-grid/ */
    .container {
        display: grid;
        grid-template-columns: auto
            [input-textarea-start description-start] 30rem [input-textarea-end
            arrow-start] 2rem [arrow-end
            output-textarea-start] 30rem [output-textarea-end description-end] auto;
        grid-template-rows: [mode-selector-top] 4rem [input-textarea-top arrow-top output-textarea-top] 20rem [input-textarea-bottom arrow-bottom output-textarea-bottom description-top] 5rem [description-bottom] auto;
    }

    .mode-selector-wrapper {
        grid-column: input-textarea-start / input-textarea-end;
        grid-row: mode-selector-top / input-textarea-top;
    }

    .input-textarea-wrapper {
        grid-column: input-textarea-start / input-textarea-end;
        grid-row: input-textarea-top / input-textarea-bottom;
    }

    .arrow {
        grid-column: arrow-start / arrow-end;
        grid-row: arrow-top / arrow-bottom;
    }

    .output-textarea-wrapper {
        grid-column: output-textarea-start / output-textarea-end;
        grid-row: output-textarea-top / output-textarea-bottom;
    }

    .format-description {
        grid-column: description-start / description-end;
        grid-row: description-top / description-bottom;
    }

    /* endregion arrangement of elements */

    .mode-selector-wrapper {
        width: 20rem;
        height: 2rem;

        border: 1px solid #79b1fd;
        border-radius: 5px;
        overflow: hidden;

        background-image: url("./pseudo-selector-arrows.png");
        background-repeat: no-repeat;
        background-position: right center;
        background-color: #ffffff;
    }

    .mode-selector-wrapper:hover{
        background-image: url("./pseudo-selector-arrows-hover.png");
    }

    .mode-selector {
        -webkit-appearance: none;
        color: #1476fb;
        background: none;
        border: none;
        padding: 0.3rem;
        outline: none;
        width: 100%;
        height: 100%;
        font-size: 1rem;
    }

    .arrow {
        background-repeat: no-repeat;
        background-size: 1.5rem 1.5rem;
        background-position: center center;
    }

    @media screen and (max-width: 62.999rem) {
        .arrow {
            /* arrow-to-down */
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M7 9.586V3.949a1 1 0 0 1 2 0v5.637l1.344-1.344a1 1 0 0 1 1.414 1.414l-3.039 3.04a.997.997 0 0 1-1.438 0l-3.039-3.04a1 1 0 0 1 1.414-1.414L7 9.586z"></path></svg>');
        }
    }

    @media screen and (min-width: 63rem){
        .arrow {
            /* arrow-to-right */
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M12.696 7.256L9.657 4.217a1 1 0 0 0-1.415 1.414l1.344 1.344H3.949a1.001 1.001 0 0 0 0 2h5.637l-1.344 1.343a1.002 1.002 0 0 0 0 1.415c.391.39 1.024.39 1.415 0l3.039-3.04A.993.993 0 0 0 13 7.975a.997.997 0 0 0-.293-.708l-.011-.011z"></path></svg>');
        }
    }

    .format-description {
        padding: 0.5rem;
    }

    .input-textarea, .output-textarea {
        background-color: white;
        border: none;
        border-radius: 5px;
        resize: none;
        width: 100%;
        height: 100%;
        padding: 0.5rem;
        box-sizing: border-box;
    }

    .input-textarea:focus {
        outline: none;
        box-shadow: 0 0 0 1px #1476fb;
    }

    .output-textarea:focus {
        outline: none;
    }

    textarea::placeholder {
        color: #909090;
    }
</style>
