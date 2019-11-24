<template>
    <el-container style="height:100%">
        <el-aside width="200px" style="background-color:#323844">
            <div style="text-align:center">
                <img
                    style="height:60px;border-radius: 50%;"
                    src="https://hbimg.huabanimg.com/322e523731a5022eed6c9da7a573ddee230d06b11bc5-lQSMDi_fw658"
                    alt/>
            </div>
            <el-menu
                background-color="#323844"
                text-color="#fff"
                active-text-color="#ffd04b"
                style="border-right:0"
                :default-active="this.$route.path"
                router
                >
                <template v-for="(value,ind) in navMenus">
                    <el-submenu :index="ind+''" v-if="value.children.length>0" :key="ind">
                        <template slot="title">
                            <i :class="value.icon"></i>
                            {{value.name}}
                        </template>
                        <template v-for="(v,i) in value.children">
                            <el-submenu :index="ind+'-'+i" v-if="v.children.length>0" :key="i">
                                <template slot="title">{{v.name}}</template>
                                <el-menu-item v-for="(item,inde) in v.children" :index="item.path" :key="inde">{{item.name}}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :key="i" :index="v.path">{{v.name}}</el-menu-item>
                        </template>
                    </el-submenu>
                    <el-menu-item v-else :key="ind" :index="value.path">
                        <i :class="value.icon"></i>
                        {{value.name}}
                    </el-menu-item>
                </template>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header class="conHeader">
                <div style="text-align: right;">
                    <span>欢迎！张张你大爷</span>
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-left: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>消息</el-dropdown-item>
                            <el-dropdown-item>设置</el-dropdown-item>
                            <el-dropdown-item @click.native="removeS">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-main>
                <el-tabs
                    type="card"
                    v-model="editableTabsValue"
                    @tab-remove="removeTab"
                    @tab-click="tab=>this.$router.push({path: tab.name})">
                    <el-tab-pane
                        v-for="(item, index) in editableTabs"
                        :key="item.name"
                        :closable="item.close" 
                        :label="item.title"
                        :name="item.name"></el-tab-pane>
                </el-tabs>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    import {mapState, mapActions} from "vuex";
    export default {
        data() {
            return {
              editableTabsValue: '/dashboard', 
              editableTabs: [{
                name:'/dashboard',
                title:'首页',
                close:false
              }]
            }
        },
        computed : mapState(["navMenus"]),
        mounted() {
            this.$store.dispatch("getNavMenu");
            this.curTab(this.$route)
        },
        watch : {
            $route(to, from) {
                this.curTab(to)
            }
        },
        methods : {
            curTab(cur){
                var flag = this.editableTabs.some(v => (v.name == cur.path))
                if (!flag) this.editableTabs.push({title:cur.meta.title, name:cur.path, close:true});
                this.editableTabsValue = cur.path;
            },
            removeS() {
                sessionStorage.removeItem("user");
                this.$router.push({path: "/login"});
            },
            removeTab(cur) {
                let tabs = this.editableTabs;
                let activeName = this.editableTabsValue;
                if (activeName === cur) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === cur) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            activeName = nextTab.name;
                        }
                    });
                }
                this.editableTabsValue = activeName;
                this.$router.push({path:activeName})
                this.editableTabs = tabs.filter(tab => tab.name !== cur);
            }
        }
    };
</script>
<style>
    .conHeader {
        font-size: 12px;
        line-height: 60px;
        background-color: #232730;
        color: #fff;
    }

</style>