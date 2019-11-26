<template>
  <el-container style="height:100%">
    <el-aside :class="[isCollapse?'aside64':'aside200']" style="background-color:#323844">
      <div style="text-align:center">
        <img
          style="height:60px;border-radius: 50%;"
          src="https://hbimg.huabanimg.com/322e523731a5022eed6c9da7a573ddee230d06b11bc5-lQSMDi_fw658"
          alt
        />
      </div>
      <el-menu
        background-color="#323844"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border-right:0"
        :default-active="this.$route.path"
        router
        :collapse="isCollapse"
      >
        <template v-for="(value,ind) in navMenus">
          <el-submenu :index="ind+''" v-if="value.children.length>0" :key="ind">
            <template slot="title">
              <i :class="value.icon"></i>
              <span>{{value.name}}</span>
            </template>
            <template v-for="(v,i) in value.children">
              <el-submenu :index="ind+'-'+i" v-if="v.children.length>0" :key="i">
                <template slot="title">{{v.name}}</template>
                <el-menu-item v-for="(item,inde) in v.children" :index="item.path" :key="inde">
                  <span slot="title">{{item.name}}</span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :key="i" :index="v.path">
                <span slot="title">{{v.name}}</span>
              </el-menu-item>
            </template>
          </el-submenu>
          <el-menu-item v-else :key="ind" :index="value.path">
            <i :class="value.icon"></i>
            <span slot="title">{{value.name}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="conHeader">
        <transition name="turn">
          <div style="float:left;margin-top: 8px;cursor: pointer;" @click="isCollapse=!isCollapse">
            <svg
              t="1574762957718"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1906"
              width="23"
              height="23"
            >
              <path
                d="M914.4 674.9H394.7c-25.2 0-45.6-22-45.6-48.9s20.4-48.9 45.6-48.9h519.7c25.2 0 45.6 22 45.6 48.9s-20.4 48.9-45.6 48.9z m0-228.1H394.7c-25.2 0-45.6-22-45.6-48.9s20.4-48.9 45.6-48.9h519.7c25.2 0 45.6 22 45.6 48.9s-20.4 48.9-45.6 48.9z m-3.3-219.9H115.3c-26.9 0-50.5-20.4-51.3-47.2-0.8-27.7 21.2-50.5 48.9-50.5h795.8c26.9 0 50.5 20.4 51.3 47.2 0.8 27.7-21.2 50.5-48.9 50.5zM291.3 674.1V349.9L64 512l227.3 162.1c0 0.8 0 0.8 0 0z m-178.4 123h795.8c26.9 0 50.5 20.4 51.3 47.2 0.8 27.7-21.2 50.5-48.9 50.5H115.3c-26.9 0-50.5-20.4-51.3-47.2-0.8-27.7 21.2-50.5 48.9-50.5z"
                p-id="1907"
                fill="#909399"
              />
            </svg>
          </div>
        </transition>
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
          @tab-click="tab=>this.$router.push({path: tab.name})"
        >
          <el-tab-pane
            v-for="(item) in editableTabs"
            :key="item.name"
            :closable="item.close"
            :label="item.title"
            :name="item.name"
          ></el-tab-pane>
        </el-tabs>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      editableTabsValue: "/dashboard",
      editableTabs: [
        {
          name: "/dashboard",
          title: "首页",
          close: false
        }
      ],
      isCollapse: false
    };
  },
  computed: mapState(["navMenus"]),
  mounted() {
    this.$store.dispatch("getNavMenu");
    this.curTab(this.$route);
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
        console.log(that.screenWidth);
        console.log(that._isMobile());
      })();
    };
  },
  watch: {
    $route(to, from) {
      this.curTab(to);
    }
  },
  methods: {
    curTab(cur) {
      var flag = this.editableTabs.some(v => v.name == cur.path);
      if (!flag)
        this.editableTabs.push({
          title: cur.meta.title,
          name: cur.path,
          close: true
        });
      this.editableTabsValue = cur.path;
    },
    removeS() {
      sessionStorage.removeItem("user");
      this.$router.push({ path: "/login" });
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
      this.$router.push({ path: activeName });
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
.aside200 {
  width: 200px !important;
}
.aside64 {
  width: 64px !important;
}
.turn-enter-active {
  animation: turn-in .5s;
}
.turn-leave-active {
  animation: turn-in .5s reverse;
}
@keyframes turn-in {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
</style>