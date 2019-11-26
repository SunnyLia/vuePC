<template>
  <div>
    <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
      <el-form-item label="姓名" prop="user">
        <el-input v-model="formInline.user" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="region">
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option v-for="(v,i) in address" :label="v.province" :value="v.province" :key="i"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期" prop="date">
        <el-date-picker
          v-model="formInline.date"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">筛选</el-button>
        <el-button @click="reset('formInline')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-button-group>
      <el-button type="primary" icon="el-icon-circle-plus-outline" @click="add">新增</el-button>
      <el-button type="primary" icon="el-icon-delete" @click="del">删除</el-button>
      <el-button type="primary" icon="el-icon-edit-outline" @click="edit">编辑</el-button>
    </el-button-group>
    <el-button-group style="float:right">
      <el-button type="primary" icon="el-icon-download" @click="excel">导出</el-button>
    </el-button-group>
    <el-table
      :data="queryUserList"
      stripe
      border
      highlight-current-row
      @current-change="handleChange"
      style="width: 100%"
      :cell-style="{'text-align':'center'}"
      :header-cell-style="{'text-align':'center'}"
    >
      <el-table-column type="index" label="序列" :index="indexMethod" width="70"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column sortable prop="date" label="日期"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-tag size="medium" v-if="scope.row.status==1">已发布</el-tag>
          <el-tag type="info" size="medium" v-else>未发布</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="formInline.currentPage"
      :page-sizes="[10, 15, 20, 50]"
      :page-size="formInline.currentSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="queryUserList.length"
      style="text-align: right;margin-top: 10px;"
    ></el-pagination>
    <Dialog1
      v-if="dialogVisible"
      :fatInform="tableRows"
      :elOption="address"
      @diaShow="add"
      :dialogTitle="dialogTitle"
    ></Dialog1>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Dialog1 from "./dialog";
import { tableToExcel } from "../assets/comJs";
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
        date: "",
        currentPage: 1,
        currentSize: 10
      },
      queryUserList:[],
      tableRows: null, //选中的行
      dialogVisible: false,
      dialogTitle: "新增"
    };
  },
  created() {
    this.$store.dispatch("getAddress");
    this.$store.dispatch("getUserLists");
  },
  computed: mapState(["address", "userLists","filterQuery"]),
  watch:{
    userLists(val){
      this.queryUserList=val;
    },
    filterQuery(val){
      this.queryUserList=val;
    },
  },
  methods: {
    excel(){
      let lists = this.userLists
      lists.unshift({
        name:"姓名",
        date:'日期',
        address:'地址',
        status:'状态'
      })
      tableToExcel(lists);
    },
    onSubmit() {
      this.formInline.currentPage = 1;
      this.$store.commit("FILTER_QUERY", this.formInline);
    },
    indexMethod(index) {
      return index + 1;
    },
    handleSizeChange(val) {
      this.formInline.currentSize = val;
    },
    handleCurrentChange(val) {
      this.formInline.currentPage = val;
    },
    handleChange(val) {
      this.tableRows = val;
    },
    add() {
      this.dialogTitle = "新增";
      this.dialogVisible = !this.dialogVisible;
    },
    edit() {
      if (this.tableRows) {
        this.dialogTitle = "编辑";
        this.dialogVisible = true;
      } else {
        this.$message("请先选择");
      }
    },
    del() {
      if (this.tableRows) {
        this.$confirm("确定要删除该条数据?", {
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        })
          .then(() => {
            this.$store.commit("DEL_USER_LISTS", this.tableRows.id);
          })
          .catch(() => {});
      } else {
        this.$message("请先选择");
      }
    },
    reset(formName) {
      this.$refs[formName].resetFields();
      this.queryUserList=this.userLists;
    }
  },
  components: {
    Dialog1
  }
};
</script>
<style scoped>
</style>