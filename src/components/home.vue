<template>
  <el-container style="height:100%">
    <el-aside width="200px" style="background-color:#323844">
      <img
        style="height:60px;border-radius: 50%;"
        src="https://hbimg.huabanimg.com/322e523731a5022eed6c9da7a573ddee230d06b11bc5-lQSMDi_fw658"
        alt
      />
      <el-menu
        background-color="#323844"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border-right:0"
        default-active="this.$route.path"
        router
      >
        <template v-for="(value,ind) in navMenus">
          <el-submenu :index="ind+''" v-if="value.lists.length>0" :key="ind">
            <template slot="title">
              <i :class="value.icon"></i>
              {{value.title}}
            </template>

            <el-menu-item-group>
              <template v-for="(v,i) in value.lists">
                <el-submenu :index="ind+'-'+i" v-if="v.listItems.length>0" :key="i">
                  <template slot="title">{{v.listName}}</template>
                  <el-menu-item
                    v-for="(item,inde) in v.listItems"
                    :index="item.url"
                    :key="inde"
                  >{{item.itemName}}</el-menu-item>
                </el-submenu>
                <el-menu-item v-else :key="i" :index="v.url">{{v.listName}}</el-menu-item>
              </template>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-else :key="ind" :index="value.url">
            <i :class="value.icon"></i>
            {{value.title}}
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="conHeader">
        <span>欢迎！张张你大爷</span>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-left: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState(["navMenus"]),
  mounted() {
    this.$store.dispatch("getNavMenu");
  }
};
</script>
<style>
.conHeader {
  text-align: right;
  font-size: 12px;
  line-height: 60px;
  background-color: #232730;
  color: #fff;
}
</style>