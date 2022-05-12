<template>
    <div class="common-layout">
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <h1>Hello, This is BMC</h1>
                <el-row class="mb-4">
                    <el-button>Default</el-button>
                    <el-button type="primary">Primary</el-button>
                    <el-button type="success">Success</el-button>
                    <el-button type="info">Info</el-button>
                    <el-button type="warning">Warning</el-button>
                    <el-button type="danger">Danger</el-button>
                    <el-button>中文</el-button>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import "./index.less";
import { defineComponent } from "vue";
export default defineComponent({
    name: "App",
    setup() {},
});
</script>
