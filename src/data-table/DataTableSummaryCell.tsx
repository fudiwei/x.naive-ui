/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { PropType, SlotsType, ExtractPropTypes } from 'vue';
import { defineComponent } from 'vue';

import type { DataTableRowData, DataTableRenderSummaryParams } from './DataTable';

const _props = {
    rowSpan: {
        type: [String, Number] as PropType<string | number>
    },
    colSpan: {
        type: [String, Number] as PropType<string | number>
    },
    value: {
        type: String as PropType<string>
    }
} as const;

export type DataTableSummaryCellProps = ExtractPropTypes<typeof _props>;

export default (<T extends DataTableRowData = any>() => {
    return defineComponent({
        name: 'XNDataTableSummaryCell',

        props: _props,

        slots: Object as SlotsType<{
            default: NonNullable<DataTableRenderSummaryParams<T>>;
        }>,

        render() {
            return null;
        }
    });
})();
