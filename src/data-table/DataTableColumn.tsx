/* @jsxImportSource vue */
/* @jsxRuntime automatic */
import type { ExtractPropTypes, PropType, SlotsType } from 'vue';
import { defineComponent } from 'vue';
import type {
  DataTableBaseColumn as NDataTableBaseColumn,
  DataTableColumn as NDataTableColumn,
  DataTableSelectionColumn as NDataTableSelectionColumn
} from 'naive-ui';

import type {
  DataTableRenderCellParams,
  DataTableRenderExpandParams,
  DataTableRenderFilterIconParams,
  DataTableRenderFilterMenuParams,
  DataTableRenderFilterParams,
  DataTableRenderSorterIconParams,
  DataTableRenderSorterParams,
  DataTableRowData
} from './DataTable';

const _props = {
  type: {
    type: String as PropType<'selection' | 'expand'>
  },
  fixed: {
    type: [Boolean, String] as PropType<Required<NDataTableColumn>['fixed']>
  },
  width: {
    type: [Number, String] as PropType<number | string>
  },
  maxWidth: {
    type: [Number, String] as PropType<number | string>
  },
  minWidth: {
    type: [Number, String] as PropType<number | string>
  },
  resizable: {
    type: Boolean as PropType<boolean>
  },
  align: {
    type: String as PropType<Required<NDataTableColumn>['align']>
  },
  allowExport: {
    type: Boolean as PropType<boolean>
  },
  title: {
    type: String as PropType<string>
  },
  titleAlign: {
    type: String as PropType<Required<NDataTableColumn>['titleAlign']>
  },
  titleColSpan: {
    type: Number as PropType<number>
  },
  titleRowSpan: {
    type: Number as PropType<number>
  },
  colSpan: {
    type: [Number, Function] as PropType<number | Required<NDataTableBaseColumn>['colSpan']>
  },
  rowSpan: {
    type: [Number, Function] as PropType<number | Required<NDataTableBaseColumn>['rowSpan']>
  },
  ellipsis: {
    type: [Boolean, Object] as PropType<boolean | Required<NDataTableBaseColumn>['ellipsis']>
  },
  tree: {
    type: Boolean as PropType<boolean>
  },
  multiple: {
    type: Boolean as PropType<boolean>
  },
  options: {
    type: Array as PropType<Required<NDataTableSelectionColumn>['options']>
  },
  disabled: {
    type: Function as PropType<Required<NDataTableSelectionColumn>['disabled']>
  },
  filter: {
    type: [String, Boolean, Function] as PropType<Required<NDataTableBaseColumn>['filter']>
  },
  filterMode: {
    type: String as PropType<Required<NDataTableBaseColumn>['filterMode']>
  },
  filterMultiple: {
    type: Boolean as PropType<boolean>
  },
  filterOptions: {
    type: Array as PropType<Required<NDataTableBaseColumn>['filterOptions']>
  },
  filterOptionValue: {
    type: String as PropType<Required<NDataTableBaseColumn>['filterOptionValue']>
  },
  filterOptionValues: {
    type: Array as PropType<Required<NDataTableBaseColumn>['filterOptionValues']>
  },
  defaultFilterOptionValue: {
    type: String as PropType<Required<NDataTableBaseColumn>['defaultFilterOptionValue']>
  },
  defaultFilterOptionValues: {
    type: Array as PropType<Required<NDataTableBaseColumn>['defaultFilterOptionValues']>
  },
  sorter: {
    type: [String, Boolean, Function] as PropType<Required<NDataTableBaseColumn>['sorter']>
  },
  sortOrder: {
    type: String as PropType<Required<NDataTableBaseColumn>['sortOrder']>
  },
  defaultSortOrder: {
    type: String as PropType<Required<NDataTableBaseColumn>['defaultSortOrder']>
  }
} as const;

export type DataTableColumnProps = ExtractPropTypes<typeof _props>;

export default (<T extends DataTableRowData = any>() => {
  return defineComponent({
    name: 'XNDataTableColumn',

    props: _props,

    slots: Object as SlotsType<{
      'default': NonNullable<unknown>;
      'title': NonNullable<unknown>;
      'render-cell': DataTableRenderCellParams<T>;
      'render-expand': DataTableRenderExpandParams<T>;
      'render-filter': DataTableRenderFilterParams<T>;
      'render-filter-icon': DataTableRenderFilterIconParams<T>;
      'render-filter-menu': DataTableRenderFilterMenuParams<T>;
      'render-sorter': DataTableRenderSorterParams<T>;
      'render-sorter-icon': DataTableRenderSorterIconParams<T>;
    }>,

    render() {
      return null;
    }
  });
})();
