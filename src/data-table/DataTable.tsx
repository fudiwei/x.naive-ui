/* @jsxImportSource vue */
import type { VNode, Slots, PropType, SlotsType, ExtractPublicPropTypes } from 'vue';
import type {
    DataTableColumn as _NDataTableColumn,
    DataTableBaseColumn as NDataTableBaseColumn,
    DataTableSelectionColumn as NDataTableSelectionColumn,
    DataTableExpandColumn as NDataTableExpandColumn,
    DataTableInst as NDataTableInst
} from 'naive-ui';
import type {
    RowData as NDataTableRowData,
    TableColumnGroup as NDataTableGroupColumn,
    SummaryRowData as NDataTableSummaryRow,
    SummaryCell as NDataTableSummaryCell,
    SortOrder as NDataTableSortOrders,
    RenderExpandIcon as NDataTableRenderExpandIcon,
    RenderFilter as NDataTableRenderFilter,
    RenderFilterIcon as NDataTableRenderFilterIcon,
    RenderFilterMenu as NDataTableRenderFilterMenu,
    RenderSorter as NDataTableRenderSorter,
    RenderSorterIcon as NDataTableRenderSorterIcon
} from 'naive-ui/es/data-table/src/interface';
import { defineComponent, ref, computed } from 'vue';
import { NDataTable, dataTableProps as defaultNDataTableProps } from 'naive-ui';

import { isEmptyVNode, flattenVNodeChildren } from '../_utils/v-node';
import { getVProp, getVPropAsBoolean, getVPropAsNumber, normalizeVProps } from '../_utils/v-prop';
import { getVSlot, resolveVSlot, mergeVSlots } from '../_utils/v-slot';
import { objectOmitter } from '../_utils/internal';
import * as logger from '../_utils/logger';
import ComponentDataTableColumn from './DataTableColumn';
import ComponentDataTableSummaryRow from './DataTableSummaryRow';
import ComponentDataTableSummaryCell from './DataTableSummaryCell';

type NDataTableColumn<T = any> = _NDataTableColumn<T> & { __X_COLUMN?: NDataTableColumn<T> };

export type DataTableRowData = NDataTableRowData;
export type DataTableColumn<T extends DataTableRowData = any> = {
    type?: 'selection' | 'expand';
    children?: DataTableColumn<T>[];
} & Partial<Omit<NDataTableBaseColumn<T>, 'type'>> &
    Partial<Omit<NDataTableSelectionColumn<T>, 'type'>> &
    Partial<Omit<NDataTableExpandColumn<T>, 'type'>> &
    Partial<Omit<NDataTableGroupColumn<T>, 'type' | 'children'>>;
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
export type DataTableRenderExpandIconParams = {
    expanded: boolean;
};
export type DataTableRenderFilterParams<T extends DataTableRowData = any> = {
    column: DataTableColumn<T>;
    active: boolean;
    show: boolean;
};
export type DataTableRenderFilterIconParams<T extends DataTableRowData = any> = {
    column: DataTableColumn<T>;
    active: boolean;
    show: boolean;
};
export type DataTableRenderFilterMenuParams<T extends DataTableRowData = any> = {
    column: DataTableColumn<T>;
    hide: () => void;
};
export type DataTableRenderSorterParams<T extends DataTableRowData = any> = {
    column: DataTableColumn<T>;
    order: NDataTableSortOrders;
};
export type DataTableRenderSorterIconParams<T extends DataTableRowData = any> = {
    column: DataTableColumn<T>;
    order: NDataTableSortOrders;
};
export type DataTableRenderSummaryParams<T extends DataTableRowData = any> = {
    pageData: T[];
};

const _propsMakeGeneric = <T extends DataTableRowData = any>() => {
    const restProps = objectOmitter(defaultNDataTableProps, 'columns');
    return {
        ...restProps,
        columns: {
            type: Array as PropType<DataTableColumn<T>[] | NDataTableColumn<T>[]>,
            default: () => [] as T[]
        }
    } as const;
};
const _props = _propsMakeGeneric();

export type DataTableProps<T extends DataTableRowData = any> = ExtractPublicPropTypes<
    ReturnType<typeof _propsMakeGeneric<T>>
>;
export type DataTableInstance = NDataTableInst & {
    $forwardComponent: NDataTableInst;
};

function convertVNodesToColumns<T extends NDataTableRowData>(
    vnodes: VNode[],
    depth: number = 1
): NDataTableColumn<T>[] {
    const temp = [] as NDataTableColumn<T>[];

    vnodes = flattenVNodeChildren(vnodes) as VNode[];
    vnodes.forEach((vnode, index) => {
        const vKey = vnode.key as string | number | null;
        const vProps = vnode.props || {};
        const vSlots = (vnode.children || {}) as Slots;
        const restProps = objectOmitter(vProps, 'children', 'render', 'renderExpand');

        if (vnode.type === ComponentDataTableColumn) {
            if (__DEV__ && !vProps.type && vKey == null) {
                logger.warning('Each {0} should have a unique `key` prop.', ComponentDataTableColumn.name);
            }

            let column: NDataTableColumn<T> = {
                ...normalizeVProps(restProps),
                key: vKey ?? `__X_DATATABLE_COLUMN_${depth}_${index}`,
                ellipsis: getVPropAsBoolean(vProps, 'ellipsis'),
                expandable: getVPropAsBoolean(vProps, 'expandable'),
                filterMultiple: getVPropAsBoolean(vProps, 'filter-multiple'),
                multiple: getVPropAsBoolean(vProps, 'multiple'),
                resizable: getVPropAsBoolean(vProps, 'resizable'),
                sorter: getVPropAsBoolean(vProps, 'sorter'),
                tree: getVPropAsBoolean(vProps, 'tree'),
                colSpan: (() => {
                    const colSpan = getVProp(vProps, 'col-span');
                    return typeof colSpan === 'string' || typeof colSpan === 'number' ? () => +colSpan : colSpan;
                })(),
                rowSpan: (() => {
                    const rowSpan = getVProp(vProps, 'row-span');
                    return typeof rowSpan === 'string' || typeof rowSpan === 'number' ? () => +rowSpan : rowSpan;
                })()
            };

            if (vSlots['default']) {
                const children = convertVNodesToColumns<T>(vSlots['default'](), depth + 1);
                if (children && children.length > 0) {
                    (column as NDataTableGroupColumn<T>).children = children as NDataTableBaseColumn<T>[];
                }
            }

            column = populateColumnRenders<T>(column, vSlots, true);
            temp.push(column);
        } else if (__DEV__ && !isEmptyVNode(vnode)) {
            logger.warning(
                'Each child component in {0} should be {1}.',
                ComponentDataTable.name,
                ComponentDataTableColumn.name
            );
        }
    });

    return temp;
}

function convertVNodesToSummaryRows<T extends NDataTableRowData>(
    vnodes: VNode[],
    options: { pageData: T[] }
): NDataTableSummaryRow[] {
    const temp = [] as NDataTableSummaryRow[];

    vnodes = flattenVNodeChildren(vnodes) as VNode[];
    vnodes.forEach((vnode) => {
        const vSlots = (vnode.children || {}) as Slots;

        if (vnode.type === ComponentDataTableSummaryRow) {
            const summaryRow: NDataTableSummaryRow = {};
            const { pageData } = options;

            if (vSlots['default']) {
                const children = flattenVNodeChildren(vSlots['default']({ pageData })) as VNode[];
                convertVNodesToSummaryCells(children, { summaryRow, pageData });
            }

            temp.push(summaryRow);
        } else if (__DEV__ && !isEmptyVNode(vnode)) {
            logger.warning(
                'Each child component in `summary` slot of {0} should be {1}.',
                ComponentDataTable.name,
                ComponentDataTableSummaryRow.name
            );
        }
    });

    return temp;
}

function convertVNodesToSummaryCells<T extends NDataTableRowData>(
    vnodes: VNode[],
    options: { summaryRow: NDataTableSummaryRow; pageData: T[] }
): NDataTableSummaryCell[] {
    const temp = [] as NDataTableSummaryCell[];

    vnodes.forEach((vnode) => {
        const vKey = vnode.key as string | number | null;
        const vProps = vnode.props || {};
        const vSlots = (vnode.children || {}) as Slots;
        const restProps = objectOmitter(vProps, 'rowSpan', 'colSpan', 'value');

        if (vnode.type === ComponentDataTableSummaryCell) {
            if (__DEV__ && vKey == null) {
                logger.warning(
                    'Each {0} should have a `key` prop related to a column.',
                    ComponentDataTableSummaryCell.name
                );
            }

            const { summaryRow, pageData } = options;
            summaryRow[vKey as string] = {
                ...normalizeVProps(restProps),
                rowSpan: getVPropAsNumber(vProps, 'row-span'),
                colSpan: getVPropAsNumber(vProps, 'col-span'),
                value: vSlots['default']?.({ pageData }) ?? vProps.value
            };
        } else if (__DEV__ && !isEmptyVNode(vnode)) {
            logger.warning(
                'Each child component in {0} should be {1}.',
                ComponentDataTableSummaryRow.name,
                ComponentDataTableSummaryCell.name
            );
        }
    });

    return temp;
}

function populateColumnRenders<T extends NDataTableRowData>(
    column: NDataTableColumn<T>,
    ctxSlots: Slots,
    ctxSingle = false
): NDataTableColumn<T> {
    if (!column.__X_COLUMN) {
        const copy = column;
        column = { ...copy };
        column.__X_COLUMN = copy;
    }

    (column as NDataTableBaseColumn<T>).title = resolveColumnRender<T>(column, ctxSlots, ctxSingle);
    (column as NDataTableBaseColumn<T>).render = resolveCellRender<T>(column, ctxSlots, ctxSingle);
    (column as NDataTableExpandColumn<T>).renderExpand = resolveExpandRender<T>(column, ctxSlots, ctxSingle)!;
    (column as NDataTableBaseColumn<T>).renderFilter = resolveFilterRender<T>(column, ctxSlots, ctxSingle);
    (column as NDataTableBaseColumn<T>).renderFilterIcon = resolveFilterIconRender<T>(column, ctxSlots, ctxSingle);
    (column as NDataTableBaseColumn<T>).renderFilterMenu = resolveFilterMenuRender<T>(column, ctxSlots, ctxSingle);
    (column as NDataTableBaseColumn<T>).renderSorter = resolveSorterRender<T>(column, ctxSlots, ctxSingle);
    (column as NDataTableBaseColumn<T>).renderSorterIcon = resolveSorterIconRender<T>(column, ctxSlots, ctxSingle);
    return column;
}

function resolveColumnRender<T extends NDataTableRowData>(
    column: NDataTableColumn<T>,
    ctxSlots: Slots,
    ctxSingle = false
) {
    const fallback = (column as NDataTableBaseColumn<T>).title;
    if (ctxSingle) {
        return resolveVSlot(ctxSlots['title']) || fallback;
    } else {
        return () => {
            const slot = getVSlot(ctxSlots, 'render-column');
            const params: DataTableRenderColumnParams = {
                column: (column.__X_COLUMN ?? column) as DataTableColumn<T>
            };
            const vnodes = slot?.(params);
            if (!isEmptyVNode(vnodes)) {
                return vnodes;
            } else if (typeof fallback === 'function') {
                return fallback(column as NDataTableBaseColumn);
            } else {
                return fallback;
            }
        };
    }
}

function resolveCellRender<T extends NDataTableRowData>(
    column: NDataTableColumn<T>,
    ctxSlots: Slots,
    ctxSingle = false
) {
    const fallback = (column as NDataTableBaseColumn<T>).render;
    return (rowData: T, rowIndex: number) => {
        const slot = getVSlot(ctxSlots, 'render-cell');
        if (slot) {
            const params: DataTableRenderCellParams = {
                column: (column.__X_COLUMN ?? column) as DataTableColumn<T>,
                rowData: rowData,
                rowIndex: rowIndex,
                value: rowData?.[(column as NDataTableBaseColumn<T>).key]
            };
            const vnodes = slot(params);
            if (ctxSingle || !isEmptyVNode(vnodes)) {
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

function resolveExpandRender<T extends NDataTableRowData>(
    column: NDataTableColumn<T>,
    ctxSlots: Slots,
    ctxSingle = false
) {
    if ('type' in column && column.type !== 'expand') {
        return;
    }

    const fallback = (column as NDataTableExpandColumn<T>).renderExpand;
    return (rowData: T, rowIndex: number) => (
        <div class="n-data-table__expand">
            {(() => {
                const slot = getVSlot(ctxSlots, 'render-expand');
                if (slot) {
                    const params: DataTableRenderExpandParams = {
                        rowData: rowData,
                        rowIndex: rowIndex
                    };
                    const vnodes = slot(params);
                    if (ctxSingle || !isEmptyVNode(vnodes)) {
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

function resolveFilterRender<T extends NDataTableRowData>(
    column: NDataTableColumn<T>,
    ctxSlots: Slots,
    ctxSingle = false
) {
    const fallback = (column as NDataTableBaseColumn<T>).renderFilter;
    const slot = getVSlot(ctxSlots, 'render-filter');
    if (!slot && ctxSingle) {
        return fallback;
    }

    return (e: Parameters<NDataTableRenderFilter>[0]) => {
        const params: DataTableRenderFilterParams = {
            column: (column.__X_COLUMN ?? column) as DataTableColumn<T>,
            active: e.active,
            show: e.show
        };
        const vnodes = slot?.(params);
        if (ctxSingle || !isEmptyVNode(vnodes)) {
            return vnodes;
        }

        return fallback?.(e);
    };
}

function resolveFilterIconRender<T extends NDataTableRowData>(
    column: NDataTableColumn<T>,
    ctxSlots: Slots,
    ctxSingle = false
) {
    const fallback = (column as NDataTableBaseColumn<T>).renderFilterIcon;
    const slot = getVSlot(ctxSlots, 'render-filter-icon');
    if (!slot && ctxSingle) {
        return fallback;
    }

    return (e: Parameters<NDataTableRenderFilterIcon>[0]) => {
        const params: DataTableRenderFilterIconParams = {
            column: (column.__X_COLUMN ?? column) as DataTableColumn<T>,
            active: e.active,
            show: e.show
        };
        const vnodes = slot?.(params);
        if (ctxSingle || !isEmptyVNode(vnodes)) {
            return vnodes;
        }

        return fallback?.(e);
    };
}

function resolveFilterMenuRender<T extends NDataTableRowData>(
    column: NDataTableColumn<T>,
    ctxSlots: Slots,
    ctxSingle = false
) {
    const fallback = (column as NDataTableBaseColumn<T>).renderFilterMenu;
    const slot = getVSlot(ctxSlots, 'render-filter-menu');
    if (!slot && ctxSingle) {
        return fallback;
    }

    return (e: Parameters<NDataTableRenderFilterMenu>[0]) => {
        const params: DataTableRenderFilterMenuParams = {
            column: (column.__X_COLUMN ?? column) as DataTableColumn<T>,
            hide: e.hide
        };
        const vnodes = slot?.(params);
        if (ctxSingle || !isEmptyVNode(vnodes)) {
            return vnodes;
        }

        return fallback?.(e);
    };
}

function resolveSorterRender<T extends NDataTableRowData>(
    column: NDataTableColumn<T>,
    ctxSlots: Slots,
    ctxSingle = false
) {
    const fallback = (column as NDataTableBaseColumn<T>).renderSorter;
    const slot = getVSlot(ctxSlots, 'render-sorter');
    if (!slot && ctxSingle) {
        return fallback;
    }

    return (e: Parameters<NDataTableRenderSorter>[0]) => {
        const params: DataTableRenderSorterParams = {
            column: (column.__X_COLUMN ?? column) as DataTableColumn<T>,
            order: e.order
        };
        const vnodes = slot?.(params);
        if (ctxSingle || !isEmptyVNode(vnodes)) {
            return vnodes;
        }

        return fallback?.(e);
    };
}

function resolveSorterIconRender<T extends NDataTableRowData>(
    column: NDataTableColumn<T>,
    ctxSlots: Slots,
    ctxSingle = false
) {
    const fallback = (column as NDataTableBaseColumn<T>).renderSorterIcon;
    const slot = getVSlot(ctxSlots, 'render-sorter-icon');
    if (!slot && ctxSingle) {
        return fallback;
    }

    return (e: Parameters<NDataTableRenderSorterIcon>[0]) => {
        const params: DataTableRenderSorterParams = {
            column: (column.__X_COLUMN ?? column) as DataTableColumn<T>,
            order: e.order
        };
        const vnodes = slot?.(params);
        if (ctxSingle || !isEmptyVNode(vnodes)) {
            return vnodes;
        }

        return fallback?.(e);
    };
}

const ComponentDataTable = (<T extends DataTableRowData = any>() => {
    return defineComponent({
        name: 'XNDataTable',

        components: {
            NDataTable
        },

        props: _props as ReturnType<typeof _propsMakeGeneric<T>>,

        slots: Object as SlotsType<{
            'default': NonNullable<unknown>;
            'loading': NonNullable<unknown>;
            'empty': NonNullable<unknown>;
            'summary': NonNullable<unknown>;
            'render-column': DataTableRenderColumnParams<T>;
            'render-cell': DataTableRenderCellParams<T>;
            'render-expand': DataTableRenderExpandParams<T>;
            'render-expand-icon': DataTableRenderExpandIconParams;
            'render-filter': DataTableRenderFilterParams<T>;
            'render-filter-icon': DataTableRenderFilterIconParams<T>;
            'render-filter-menu': DataTableRenderFilterMenuParams<T>;
            'render-sorter': DataTableRenderSorterParams<T>;
            'render-sorter-icon': DataTableRenderSorterIconParams<T>;
        }>,

        setup(props, { attrs, slots, expose }) {
            const nRef = ref<NDataTableInst>();
            const nRefExposed: DataTableInstance = {
                clearFilters: (...args) => nRef.value!.clearFilters(...args),
                clearSorter: (...args) => nRef.value!.clearSorter(...args),
                downloadCsv: (...args) => nRef.value!.downloadCsv(...args),
                filter: (...args) => nRef.value!.filter(...args),
                filters: (...args) => nRef.value!.filters(...args),
                page: (...args) => nRef.value!.page(...args),
                // @ts-ignore: Function overloading
                scrollTo: (...args) => nRef.value!.scrollTo(...args),
                sort: (...args) => nRef.value!.sort(...args),
                get $forwardComponent() {
                    return nRef.value!;
                }
            };
            expose(nRefExposed);

            return () => {
                const mergedColumns = computed(() => {
                    const vnodes = slots['default']?.({});
                    if (isEmptyVNode(vnodes)) {
                        const forEach = (columns?: NDataTableColumn<T>[]) =>
                            columns?.map((column) => {
                                column = { ...column };

                                if ('children' in column) {
                                    // If there's no children, the prop must be unset, not be `undefined`.
                                    const children = forEach(column.children);
                                    if (children) {
                                        column.children = children as NDataTableBaseColumn<T>[];
                                    }
                                }

                                return populateColumnRenders<T>(column, slots);
                            });

                        return forEach(props.columns as NDataTableColumn<T>[]);
                    }

                    return convertVNodesToColumns(vnodes);
                });

                const mergedSummary = computed(() => {
                    const vnodes = slots['summary']?.({});
                    if (isEmptyVNode(vnodes)) {
                        return props.summary;
                    }

                    return (pageData: T[]) => convertVNodesToSummaryRows(vnodes, { pageData });
                });

                const mergedRenderExpandIcon = computed(() => {
                    const slot = getVSlot(slots, 'render-expand-icon');
                    if (!slot) {
                        return props.renderExpandIcon;
                    }

                    type Params = Parameters<NDataTableRenderExpandIcon>[0];
                    return (params: Params) => slot(params);
                });

                const mergedSlots = mergeVSlots(slots, {
                    'default': undefined,
                    'render-column': undefined,
                    'render-cell': undefined,
                    'render-expand': undefined,
                    'render-expand-icon': undefined,
                    'render-filter': undefined,
                    'render-filter-icon': undefined,
                    'render-filter-menu': undefined,
                    'render-sorter': undefined,
                    'render-sorter-icon': undefined
                });

                return (
                    <NDataTable
                        ref={nRef}
                        {...attrs}
                        {...props}
                        columns={mergedColumns.value}
                        summary={mergedSummary.value}
                        renderExpandIcon={mergedRenderExpandIcon.value}
                        v-slots={mergedSlots}
                    />
                );
            };
        }
    });
})();

export default ComponentDataTable;
