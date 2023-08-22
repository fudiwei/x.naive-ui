import type { PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type {
    DataTableColumn as NDataTableColumn,
    DataTableBaseColumn as NDataTableBaseColumn,
    DataTableSelectionColumn as NDataTableSelectionColumn,
    DataTableExpandColumn as NDataTableExpandColumn,
    DataTableInst as NDataTableInst
} from 'naive-ui';
import type { RowData as NDataTableRowData } from 'naive-ui/es/data-table/src/interface';
import { defineComponent, computed } from 'vue';
import { NDataTable, dataTableProps as defaultNDataTableProps } from 'naive-ui';

import { COMLIB_PREFIX } from '../_utils/const';
import { isEmptyVNodes } from '../_utils/vue';
import ComponentEmpty from '../empty/Empty';

export type DataTableRowData = NDataTableRowData;
export type DataTableColumn<T extends DataTableRowData = any> = Partial<Omit<NDataTableBaseColumn<T>, 'type'>> &
    Partial<Omit<NDataTableSelectionColumn<T>, 'type'>> &
    Partial<Omit<NDataTableExpandColumn<T>, 'type'>> & { type?: 'selection' | 'expand' };
export type DataTableColumns<T extends DataTableRowData = any> = DataTableColumn<T>[];
export type DataTableRenderColumnParams<T extends DataTableRowData = any> = {
    column: DataTableColumn<T>;
};
export type DataTableRenderCellParams<T extends DataTableRowData = any> = {
    column: DataTableColumn<T>;
    rowData: T;
    rowIndex: number;
};
export type DataTableRenderExpandParams<T extends DataTableRowData = any> = {
    rowData: T;
    rowIndex: number;
};

const _propsMakeGeneric = <T extends NDataTableRowData = any>() => {
    const {
        columns: __1, // dropped
        ...rest
    } = defaultNDataTableProps;
    return {
        ...rest,
        columns: {
            type: Array as PropType<DataTableColumn<T>[]>,
            default: () => [] as T[]
        },
        emptyText: {
            type: String as PropType<string>
        }
    } as const;
};
const _props = _propsMakeGeneric();

export type DataTableProps = ExtractPublicPropTypes<typeof _props>;
export type DataTableInstance = NDataTableInst;

export default (<T extends DataTableRowData = any>() => {
    return defineComponent({
        name: `${COMLIB_PREFIX}DataTable`,

        components: {
            NDataTable,

            ComponentEmpty
        },

        props: _props as ReturnType<typeof _propsMakeGeneric<T>>,

        slots: Object as SlotsType<{
            loading: NonNullable<unknown>;
            empty: NonNullable<unknown>;
            renderColumn: DataTableRenderColumnParams<T>;
            renderCell: DataTableRenderCellParams<T>;
            renderExpand: DataTableRenderExpandParams<T>;
        }>,

        setup(props, { attrs, slots }) {
            const nColumns = computed(() => {
                return props.columns?.map((col) => {
                    let renderColumn = (col as NDataTableBaseColumn<T>).title;
                    let renderCell = (col as NDataTableBaseColumn<T>).render;
                    let renderExpand = (col as unknown as NDataTableExpandColumn<T>).renderExpand;

                    if (slots['renderColumn']) {
                        const temp = renderColumn;
                        renderColumn = () => {
                            const vnodes = slots.renderColumn!({
                                column: col as DataTableColumn<T>
                            });
                            if (!isEmptyVNodes(vnodes)) {
                                return vnodes;
                            } else if (typeof temp === 'function') {
                                return temp(col as NDataTableBaseColumn);
                            } else {
                                return temp;
                            }
                        };
                    }

                    if (slots['renderCell']) {
                        const temp = renderCell;
                        renderCell = (rowData, rowIndex) => {
                            const vnodes = slots.renderCell!({
                                column: col as DataTableColumn<T>,
                                rowData: rowData,
                                rowIndex: rowIndex
                            });
                            if (!isEmptyVNodes(vnodes)) {
                                return vnodes;
                            } else if (typeof temp === 'function') {
                                return temp(rowData, rowIndex);
                            } else {
                                return rowData[(col as NDataTableBaseColumn).key];
                            }
                        };
                    }

                    if (slots['renderExpand']) {
                        const temp = renderExpand;
                        renderExpand = (rowData, rowIndex) => {
                            const vnodes = slots.renderExpand!({
                                rowData: rowData,
                                rowIndex: rowIndex
                            });
                            if (!isEmptyVNodes(vnodes)) {
                                return vnodes;
                            } else if (typeof temp === 'function') {
                                return temp(rowData, rowIndex);
                            }
                        };
                    }

                    return Object.assign(col, {
                        title: renderColumn,
                        render: renderCell,
                        renderExpand: (rowData: T, rowIndex: number) => (
                            <div class="n-data-table__expand">{renderExpand(rowData, rowIndex)}</div>
                        )
                    }) as NDataTableColumn<T>;
                });
            });

            const nSlots = computed(() => {
                const temp = {
                    ...slots,
                    empty: slots['empty'] || (() => <ComponentEmpty description={props.emptyText} />),
                    renderColumn: undefined,
                    renderCell: undefined,
                    renderExpand: undefined
                };
                delete temp['renderColumn'];
                delete temp['renderCell'];
                delete temp['renderExpand'];
                return temp;
            });

            return () => <NDataTable {...attrs} {...props} columns={nColumns.value} v-slots={nSlots.value} />;
        }
    });
})();
