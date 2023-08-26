import type { VNode, Slots, PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type {
    DataTableColumn as NDataTableColumn,
    DataTableBaseColumn as NDataTableBaseColumn,
    DataTableSelectionColumn as NDataTableSelectionColumn,
    DataTableExpandColumn as NDataTableExpandColumn,
    DataTableInst as NDataTableInst
} from 'naive-ui';
import type {
    RowData as NDataTableRowData,
    TableColumnGroup as NDataTableGroupColumn
} from 'naive-ui/es/data-table/src/interface';
import { defineComponent, ref, computed } from 'vue';
import { NDataTable, dataTableProps as defaultNDataTableProps } from 'naive-ui';

import { isEmptyVNode, isEmptyVNodes, flattenVNodeChildren } from '../_utils/v-node';
import { getVSlotRender, mergeVSlots } from '../_utils/v-slot';
import { getRestProps, getBooleanProp } from '../_utils/internal';
import * as logger from '../_utils/logger';
import ComponentEmpty from '../empty/Empty';
import ComponentDataTableColumn from './DataTableColumn';

export type DataTableRowData = NDataTableRowData;
export type DataTableColumn<T extends DataTableRowData = any> = Partial<Omit<NDataTableBaseColumn<T>, 'type'>> &
    Partial<Omit<NDataTableSelectionColumn<T>, 'type'>> &
    Partial<Omit<NDataTableExpandColumn<T>, 'type'>> &
    Partial<NDataTableGroupColumn<T>> & { type?: 'selection' | 'expand' };
export type DataTableColumns<T extends DataTableRowData = any> = DataTableColumn<T>[];
export type DataTableRenderColumnParams<T extends DataTableRowData = any> = {
    column: DataTableColumn<T>;
};
export type DataTableRenderCellParams<T extends DataTableRowData = any> = {
    column: DataTableColumn<T>;
    rowData: T;
    rowIndex: number;
    value?: any;
};
export type DataTableRenderExpandParams<T extends DataTableRowData = any> = {
    rowData: T;
    rowIndex: number;
};

const _propsMakeGeneric = <T extends NDataTableRowData = any>() => {
    const rest = getRestProps(defaultNDataTableProps, 'columns');
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

function convertVNodesToColumns<T extends NDataTableRowData = any>(vnodes: VNode[]): NDataTableColumn<T>[] {
    const temp = [] as NDataTableColumn<T>[];

    vnodes = flattenVNodeChildren(vnodes) as VNode[];
    vnodes.forEach((vnode, index) => {
        const vKey = vnode.key as string | number | null;
        const vProps = vnode.props || {};
        const vSlots = (vnode.children || {}) as Slots;
        const restProps = getRestProps(vProps, 'key', 'children', 'render', 'renderExpand');

        if (vnode.type === ComponentDataTableColumn) {
            if (!vProps.type && vKey == null) {
                logger.warning('Each "{0}" should have a unique `key` prop.', ComponentDataTableColumn.name);
            }

            const column: NDataTableColumn<T> = {
                ...restProps,
                key: vKey ?? `__X_DATATABLE_COLUMN_${index}`,
                ellipsis: getBooleanProp(vProps, 'ellipsis'),
                expandable: getBooleanProp(vProps, 'expandable'),
                filterMultiple: getBooleanProp(vProps, 'filterMultiple'),
                multiple: getBooleanProp(vProps, 'multiple'),
                resizable: getBooleanProp(vProps, 'resizable'),
                sorter: getBooleanProp(vProps, 'sorter'),
                tree: getBooleanProp(vProps, 'tree'),
                colSpan:
                    typeof vProps.colSpan === 'string' || typeof vProps.colSpan === 'number'
                        ? () => +vProps.colSpan
                        : vProps.colSpan,
                rowSpan:
                    typeof vProps.rowSpan === 'string' || typeof vProps.rowSpan === 'number'
                        ? () => +vProps.rowSpan
                        : vProps.rowSpan
            };

            (column as NDataTableBaseColumn<T>).title = renderTableColumn<T>(column, vSlots, true);
            (column as NDataTableBaseColumn<T>).render = renderTableCell<T>(column, vSlots, true);
            (column as NDataTableExpandColumn<T>).renderExpand = renderTableExpand<T>(column, vSlots, true)!;

            if (vSlots['default']) {
                const children = convertVNodesToColumns<T>(vSlots['default']());
                if (children && children.length > 0) {
                    (column as NDataTableGroupColumn<T>).children = children as NDataTableBaseColumn<T>[];
                }
            }

            temp.push(column);
        } else if (!isEmptyVNode(vnode)) {
            logger.warning('Each child component in "{0}" should be "{0}".', ComponentDataTableColumn.name);
        }
    });

    return temp;
}

function renderTableColumn<T extends NDataTableRowData = any>(
    column: NDataTableColumn<T>,
    ctxSlots: Slots,
    isTemplateStyle = false
) {
    const fallback = (column as NDataTableBaseColumn<T>).title;
    if (isTemplateStyle) {
        return getVSlotRender(ctxSlots['title']) || fallback;
    } else {
        return () => {
            const params: DataTableRenderColumnParams = {
                column: column as DataTableColumn<T>
            };
            const vnodes = ctxSlots['renderColumn']?.(params);
            if (!isEmptyVNodes(vnodes)) {
                return vnodes;
            } else if (typeof fallback === 'function') {
                return fallback(column as NDataTableBaseColumn);
            } else {
                return fallback;
            }
        };
    }
}

function renderTableCell<T extends NDataTableRowData = any>(
    column: NDataTableColumn<T>,
    ctxSlots: Slots,
    isTemplateStyle = false
) {
    const fallback = (column as NDataTableBaseColumn<T>).render;
    return (rowData: T, rowIndex: number) => {
        if (ctxSlots['renderCell']) {
            const params: DataTableRenderCellParams = {
                column: column as DataTableColumn<T>,
                rowData: rowData,
                rowIndex: rowIndex,
                value: rowData?.[(column as NDataTableBaseColumn<T>).key]
            };
            const vnodes = ctxSlots['renderCell'](params);
            if (isTemplateStyle || !isEmptyVNodes(vnodes)) {
                return vnodes;
            }
        }

        if (typeof fallback === 'function') {
            return fallback(rowData, rowIndex);
        } else {
            return rowData[(column as NDataTableBaseColumn<T>).key];
        }
    };
}

function renderTableExpand<T extends NDataTableRowData = any>(
    column: NDataTableColumn<T>,
    ctxSlots: Slots,
    isTemplateStyle = false
) {
    if ('type' in column && column.type !== 'expand') {
        return;
    }

    const fallback = (column as NDataTableExpandColumn<T>).renderExpand;
    return (rowData: T, rowIndex: number) => (
        <div class="n-data-table__expand">
            {(() => {
                if (ctxSlots['renderExpand']) {
                    const params: DataTableRenderExpandParams = {
                        rowData: rowData,
                        rowIndex: rowIndex
                    };
                    const vnodes = ctxSlots['renderExpand'](params);
                    if (isTemplateStyle || !isEmptyVNodes(vnodes)) {
                        return vnodes;
                    }
                }

                if (typeof fallback === 'function') {
                    return fallback(rowData, rowIndex);
                }
            })()}
        </div>
    );
}

export default (<T extends DataTableRowData = any>() => {
    return defineComponent({
        name: 'XNDataTable',

        components: {
            NDataTable,
            XNEmpty: ComponentEmpty
        },

        props: _props as ReturnType<typeof _propsMakeGeneric<T>>,

        slots: Object as SlotsType<{
            default: NonNullable<unknown>;
            loading: NonNullable<unknown>;
            empty: NonNullable<unknown>;
            renderColumn: DataTableRenderColumnParams<T>;
            renderCell: DataTableRenderCellParams<T>;
            renderExpand: DataTableRenderExpandParams<T>;
        }>,

        setup(props, { attrs, slots, expose }) {
            function populateColumns(columns?: NDataTableColumn<T>[]): NDataTableColumn<T>[] | undefined {
                const result = columns?.map((column) => {
                    column = Object.assign(column, {
                        title: renderTableColumn<T>(column, slots),
                        render: renderTableCell<T>(column, slots),
                        renderExpand: renderTableExpand<T>(column, slots)
                    });

                    if ('children' in column) {
                        const children = populateColumns(column.children);
                        if (children) {
                            column.children = children as NDataTableBaseColumn<T>[];
                        }
                    }

                    return column;
                });
                return result;
            }

            const nColumns = computed(() => {
                const vnodes = slots['default']?.({});
                if (isEmptyVNodes(vnodes)) {
                    return populateColumns(props.columns as NDataTableColumn<T>[]);
                }

                return convertVNodesToColumns(vnodes);
            });

            const nSlots = computed(() =>
                mergeVSlots(slots, {
                    empty: slots['empty'] || (() => <ComponentEmpty description={props.emptyText} />),
                    default: undefined,
                    renderColumn: undefined,
                    renderCell: undefined,
                    renderExpand: undefined
                })
            );

            const nRef = ref<NDataTableInst>();
            expose({
                filter: (filters) => nRef.value?.filter(filters),
                filters: (filters) => nRef.value?.filters(filters),
                clearFilter: () => nRef.value?.clearFilter(),
                clearFilters: () => nRef.value?.clearFilters(),
                sort: (columnKey, order) => nRef.value?.sort(columnKey, order),
                clearSorter: () => nRef.value?.clearSorter(),
                page: (page: number) => nRef.value?.page(page),
                scrollTo: (x, y) => nRef.value?.scrollTo(x, y)
            } as DataTableInstance);

            return () => (
                <NDataTable ref={nRef} {...attrs} {...props} columns={nColumns.value} v-slots={nSlots.value} />
            );
        }
    });
})();
