<script setup lang="ts">
import DemoContainer from '../_common/demo-doc.vue';
import DemoCard from '../_common/demo-card.vue';
import SampleBasicDemo from './sample-basic/demo.vue';
import SampleBasicCodeJs from './sample-basic/code-js.vuecode';
import SampleBasicCodeTs from './sample-basic/code-ts.vuecode';
import SampleColumnDemo from './sample-column/demo.vue';
import SampleColumnCodeJs from './sample-column/code-js.vuecode';
import SampleColumnCodeTs from './sample-column/code-ts.vuecode';
import SampleExpandDemo from './sample-expand/demo.vue';
import SampleExpandCodeJs from './sample-expand/code-js.vuecode';
import SampleExpandCodeTs from './sample-expand/code-ts.vuecode';
import SampleColumnGroupDemo from './sample-columngroup/demo.vue';
import SampleColumnGroupCodeJs from './sample-columngroup/code-js.vuecode';
import SampleColumnGroupCodeTs from './sample-columngroup/code-ts.vuecode';
import SampleSummaryDemo from './sample-summary/demo.vue';
import SampleSummaryCodeJs from './sample-summary/code-js.vuecode';
import SampleSummaryCodeTs from './sample-summary/code-ts.vuecode';
import SampleIconsDemo from './sample-icons/demo.vue';
import SampleIconsCodeJs from './sample-icons/code-js.vuecode';
import SampleIconsCodeTs from './sample-icons/code-ts.vuecode';
import SampleNestedDemo from './sample-nested/demo.vue';
import SampleNestedCodeJs from './sample-nested/code-js.vuecode';
import SampleNestedCodeTs from './sample-nested/code-ts.vuecode';
import SampleEmptyDemo from './sample-empty/demo.vue';
import SampleEmptyCodeJs from './sample-empty/code-js.vuecode';
import SampleEmptyCodeTs from './sample-empty/code-ts.vuecode';

const $encode = window.encodeURIComponent;
</script>

<template>
    <DemoContainer
        :catalog="[
            {
                title: '基础用法',
                anchor: 'basic'
            },
            {
                title: '自定义渲染列头',
                anchor: 'column'
            },
            {
                title: '可展开',
                anchor: 'expand'
            },
            {
                title: '表头分组',
                anchor: 'column-group'
            },
            {
                title: '总结栏',
                anchor: 'summary'
            },
            {
                title: '自定义图标',
                anchor: 'icons'
            },
            {
                title: '嵌套表格',
                anchor: 'nested-table'
            },
            {
                title: '空表格',
                anchor: 'empty'
            }
        ]"
    >
        <n-space vertical :size="20">
            <DemoCard
                title="Basic / 基础用法"
                anchor="basic"
                :js-code="$encode(SampleBasicCodeJs)"
                :ts-code="$encode(SampleBasicCodeTs)"
            >
                <template #content>
                    <p>
                        分别以模板和插槽形式改写 Naive-UI 官方文档示例「
                        <n-a href="//www.naiveui.com/zh-CN/os-theme/components/data-table#basic.vue" target="blank">
                            DataTable - 基础用法
                        </n-a>
                        」。
                    </p>
                </template>
                <template #demo>
                    <SampleBasicDemo />
                </template>
            </DemoCard>

            <DemoCard
                title="Customized Column Header Rendering / 自定义渲染列头"
                anchor="column"
                :js-code="$encode(SampleColumnCodeJs)"
                :ts-code="$encode(SampleColumnCodeTs)"
            >
                <template #content>
                    <p>
                        分别以模板和插槽形式改写 Naive-UI 官方文档示例「
                        <n-a
                            href="//www.naiveui.com/zh-CN/os-theme/components/data-table#render-header.vue"
                            target="blank"
                        >
                            DataTable - 自定义渲染列头
                        </n-a>
                        」。
                    </p>
                </template>
                <template #demo>
                    <SampleColumnDemo />
                </template>
            </DemoCard>

            <DemoCard
                title="Expand Rows / 可展开"
                anchor="expand"
                :js-code="$encode(SampleExpandCodeJs)"
                :ts-code="$encode(SampleExpandCodeTs)"
            >
                <template #content>
                    <p>
                        分别以模板和插槽形式改写 Naive-UI 官方文档示例「
                        <n-a href="//www.naiveui.com/zh-CN/os-theme/components/data-table#expand.vue" target="blank">
                            DataTable - 可展开
                        </n-a>
                        」。
                    </p>
                </template>
                <template #demo>
                    <SampleExpandDemo />
                </template>
            </DemoCard>

            <DemoCard
                title="Group Header / 表头分组"
                anchor="column-group"
                :js-code="$encode(SampleColumnGroupCodeJs)"
                :ts-code="$encode(SampleColumnGroupCodeTs)"
            >
                <template #content>
                    <p>
                        以模板形式改写 Naive-UI 官方文档示例「
                        <n-a
                            href="//www.naiveui.com/zh-CN/os-theme/components/data-table#group-header.vue"
                            target="blank"
                        >
                            DataTable - 表头分组
                        </n-a>
                        」。
                    </p>
                </template>
                <template #demo>
                    <SampleColumnGroupDemo />
                </template>
            </DemoCard>

            <DemoCard
                title="Summary / 总结栏"
                anchor="summary"
                :js-code="$encode(SampleSummaryCodeJs)"
                :ts-code="$encode(SampleSummaryCodeTs)"
            >
                <template #content>
                    <p>
                        以模板形式改写 Naive-UI 官方文档示例「
                        <n-a href="//www.naiveui.com/zh-CN/os-theme/components/data-table#summary.vue" target="blank">
                            DataTable - 总结栏
                        </n-a>
                        」。
                    </p>
                </template>
                <template #demo>
                    <SampleSummaryDemo />
                </template>
            </DemoCard>

            <DemoCard
                title="Customized Icons / 自定义图标"
                anchor="icons"
                :js-code="$encode(SampleIconsCodeJs)"
                :ts-code="$encode(SampleIconsCodeTs)"
            >
                <template #content>
                    <p>
                        以模板形式改写 Naive-UI 官方文档示例「
                        <n-a
                            href="//www.naiveui.com/zh-CN/os-theme/components/data-table#custom-filter-menu.vue"
                            target="blank"
                        >
                            DataTable - 自定义图标
                        </n-a>
                        」。
                    </p>
                </template>
                <template #demo>
                    <SampleIconsDemo />
                </template>
            </DemoCard>

            <DemoCard
                title="Nested Table / 嵌套表格"
                anchor="nested-table"
                :js-code="$encode(SampleNestedCodeJs)"
                :ts-code="$encode(SampleNestedCodeTs)"
            >
                <template #demo>
                    <SampleNestedDemo />
                </template>
            </DemoCard>

            <DemoCard
                title="Empty / 空表格"
                anchor="empty"
                :js-code="$encode(SampleEmptyCodeJs)"
                :ts-code="$encode(SampleEmptyCodeTs)"
            >
                <template #demo>
                    <SampleEmptyDemo />
                </template>
            </DemoCard>
        </n-space>
    </DemoContainer>
</template>
