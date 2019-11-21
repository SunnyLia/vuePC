<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-date-picker
          v-model="formInline.date1"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-button-group>
      <el-button type="primary" icon="el-icon-circle-plus-outline">新增</el-button>
      <el-button type="primary" icon="el-icon-delete">删除</el-button>
      <el-button type="primary" icon="el-icon-edit-outline">编辑</el-button>
    </el-button-group>
    <el-table
      :data="tableData"
      stripe
      border
      highlight-current-row
      @current-change="handleCurrentChange1"
      style="width: 100%"
      :cell-style="{'text-align':'center'}"
      :header-cell-style="{'text-align':'center'}"
    >
      <el-table-column type="selection" width="55" fixed></el-table-column>
      <el-table-column type="index" label="序列" :index="indexMethod" width="70"></el-table-column>
      <el-table-column sortable prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 15, 20, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      style="text-align: right;margin-top: 10px;"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
        date1: ""
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      currentPage4: 1
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    indexMethod(index) {
      return index * 2;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleCurrentChange1(val) {
      this.currentRow = val;
    }
  }
};
</script>
<style scoped>
</style>