<script setup lang="ts">
import DemoContainer from '../_common/demo-doc.vue';
import DemoCard from '../_common/demo-card.vue';
import SampleBasicDemo from './sample-basic/demo.vue';
import SampleBasicCodeJs from './sample-basic/code-js.vuecode';
import SampleBasicCodeTs from './sample-basic/code-ts.vuecode';
import SampleGroupDemo from './sample-group/demo.vue';
import SampleGroupCodeJs from './sample-group/code-js.vuecode';
import SampleGroupCodeTs from './sample-group/code-ts.vuecode';
import SampleRenderLabelDemo from './sample-renderlabel/demo.vue';
import SampleRenderLabelCodeJs from './sample-renderlabel/code-js.vuecode';
import SampleRenderLabelCodeTs from './sample-renderlabel/code-ts.vuecode';
import SampleRenderOptionDemo from './sample-renderoption/demo.vue';
import SampleRenderOptionCodeJs from './sample-renderoption/code-js.vuecode';
import SampleRenderOptionCodeTs from './sample-renderoption/code-ts.vuecode';
import SampleRenderTagDemo from './sample-rendertag/demo.vue';
import SampleRenderTagCodeJs from './sample-rendertag/code-js.vuecode';
import SampleRenderTagCodeTs from './sample-rendertag/code-ts.vuecode';
import SamplePersonPickerDemo from './sample-personpicker/demo.vue';
import SamplePersonPickerCodeJs from './sample-personpicker/code-js.vuecode';
import SamplePersonPickerCodeTs from './sample-personpicker/code-ts.vuecode';

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
                title: '选项组',
                anchor: 'group'
            },
            {
                title: '自定义选项渲染',
                anchor: 'custom-render-label'
            },
            {
                title: '给选项增加 Tooltip',
                anchor: 'custom-render-option'
            },
            {
                title: '自定义标签渲染',
                anchor: 'custom-render-tag'
            },
            {
                title: '选择人员',
                anchor: 'person-picker'
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
                        以模板形式改写 Naive-UI 官方文档示例「
                        <n-a href="//www.naiveui.com/zh-CN/os-theme/components/select#basic.vue" target="blank">
                            Select - 基础用法
                        </n-a>
                        」。
                    </p>
                </template>
                <template #demo>
                    <SampleBasicDemo />
                </template>
            </DemoCard>

            <DemoCard
                title="Group / 选项组"
                anchor="group"
                :js-code="$encode(SampleGroupCodeJs)"
                :ts-code="$encode(SampleGroupCodeTs)"
            >
                <template #content>
                    <p>
                        以模板形式改写 Naive-UI 官方文档示例「
                        <n-a href="//www.naiveui.com/zh-CN/os-theme/components/select#group.vue" target="blank">
                            Select - 选项组
                        </n-a>
                        」。
                    </p>
                    <p>
                        注意：任何非
                        <n-text type="info">&lt;x-n-select-option&gt;</n-text>
                        、
                        <n-text type="info">&lt;x-n-select-option-group&gt;</n-text>
                        类型的子元素，将被忽略。
                    </p>
                </template>

                <template #demo>
                    <SampleGroupDemo />
                </template>
            </DemoCard>

            <DemoCard
                title="Customized Option Rendering / 自定义选项渲染"
                anchor="custom-render-label"
                :js-code="$encode(SampleRenderLabelCodeJs)"
                :ts-code="$encode(SampleRenderLabelCodeTs)"
            >
                <template #content>
                    <p>
                        以插槽形式改写 Naive-UI 官方文档示例「
                        <n-a href="//www.naiveui.com/zh-CN/os-theme/components/select#custom-option.vue" target="blank">
                            Select - 自定义选项渲染
                        </n-a>
                        」。
                    </p>
                </template>
                <template #demo>
                    <SampleRenderLabelDemo />
                </template>
            </DemoCard>

            <DemoCard
                title="Add Tooltip to Option / 给选项增加 Tooltip"
                anchor="custom-render-option"
                :js-code="$encode(SampleRenderOptionCodeJs)"
                :ts-code="$encode(SampleRenderOptionCodeTs)"
            >
                <template #content>
                    <p>
                        以插槽形式改写 Naive-UI 官方文档示例「
                        <n-a href="//www.naiveui.com/zh-CN/os-theme/components/select#add-tooltip.vue" target="blank">
                            Select - 给选项增加 Tooltip
                        </n-a>
                        」。
                    </p>
                </template>
                <template #demo>
                    <SampleRenderOptionDemo />
                </template>
            </DemoCard>

            <DemoCard
                title="Customized Tag Rendering / 自定义标签渲染"
                anchor="custom-render-tag"
                :js-code="$encode(SampleRenderTagCodeJs)"
                :ts-code="$encode(SampleRenderTagCodeTs)"
            >
                <template #content>
                    <p>
                        以插槽形式改写 Naive-UI 官方文档示例「
                        <n-a href="//www.naiveui.com/zh-CN/os-theme/components/select#render-tag.vue" target="blank">
                            Select - 自定义标签渲染
                        </n-a>
                        」。
                    </p>
                </template>
                <template #demo>
                    <SampleRenderTagDemo />
                </template>
            </DemoCard>

            <DemoCard
                title="Select Person / 选择人员"
                anchor="person-picker"
                :js-code="$encode(SamplePersonPickerCodeJs)"
                :ts-code="$encode(SamplePersonPickerCodeTs)"
            >
                <template #content>
                    <p>
                        以插槽形式改写 Naive-UI 官方文档示例「
                        <n-a href="//www.naiveui.com/zh-CN/os-theme/components/select#render-person.vue" target="blank">
                            Select - 选择人员
                        </n-a>
                        」。
                    </p>
                </template>
                <template #demo>
                    <SamplePersonPickerDemo />
                </template>
            </DemoCard>
        </n-space>
    </DemoContainer>
</template>
