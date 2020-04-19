<template>
  <div>
    <!-- <el-button-group>
      <el-button type="primary" icon="el-icon-circle-plus-outline" @click="add">新增</el-button>
      <el-button type="primary" icon="el-icon-delete" @click="del">删除</el-button>
      <el-button type="primary" icon="el-icon-edit-outline" @click="edit">编辑</el-button>
    </el-button-group>-->
    <el-table
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center'}"
      stripe
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" :index="indexMethod" label="序号" width="60"></el-table-column>
      <el-table-column
        v-for="item in cloumData"
        :key="item.name"
        :prop="item.prop"
        :label="item.label"
      >
        <template slot-scope="scope">
          <!-- type渲染类型，0默认，1图片，2标签，3按钮，4链接 -->
          <div v-if="item.type == 2">
            <div v-for="(val,ind ) in item.data" :key="val.name">
              <el-tag
                size="medium"
                :type="colors[ind]"
                v-if="scope.row[item.prop] == val.type"
              >{{val.name}}</el-tag>
            </div>
          </div>
          <div v-else-if="item.type==4">
            <a :href="scope.row[item.prop]">{{scope.row[item.prop]}}</a>
          </div>
          <div v-else-if="item.type==1">
            <img :src="scope.row[item.prop]" width="40" height="40" />
          </div>
          <div v-else-if="item.type==3">
            <el-button
              size="mini"
              v-for="(val,ind) in item.data"
              :type="colors[ind]"
              @click="val.func(scope.row)"
              :key="val.name"
            >{{val.name}}</el-button>
          </div>
          <div v-else>
            <div v-if="item.formatter">{{item.formatter(scope.row[item.prop])}}</div>
            <div v-else>{{scope.row[item.prop]}}</div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="curPage"
      :page-sizes="[10, 15, 20, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
      style="text-align: right;margin-top: 10px;"
    ></el-pagination>
  </div>
</template>
<script>
import { formatDate } from "@/assets/comJs";
export default {
  data() {
    return {
      colors: ["danger", "", "primary", "info", "success", "warning"],
      cloumData: [
        {
          label: "日期",
          prop: "date",
          type: 0,
          formatter: row => formatDate(row)
        },
        { label: "姓名", type: 0, prop: "name" },
        {
          label: "状态",
          prop: "status",
          type: 2,
          data: [
            { name: "已发布", type: 1 },
            { name: "未发布", type: 2 }
          ]
        },
        { label: "图片", type: 1, prop: "img" },
        { label: "地址", type: 0, prop: "address" },
        { label: "链接", type: 4, prop: "url" },
        {
          label: "操作",
          type: 3,
          data: [
            {
              name: "删除",
              func: row => {
                console.log(row);
              }
            },
            {
              name: "编辑",
              func: row => {
                console.log(row);
              }
            }
          ]
        }
      ],
      tableData: [
        {
          date: 1580659200567,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          status: 1
        },
        {
          date: 1580659200123,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          status: 2,
          img:
            "https://hbimg.huabanimg.com/322e523731a5022eed6c9da7a573ddee230d06b11bc5-lQSMDi_fw658"
        },
        {
          date: 1580659200012,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          url: "www.baidu.com"
        },
        {
          date: 1580659200034,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      pageSize: 10,
      curPage: 1
    };
  },
  methods: {
    indexMethod(index) {
      return index + 1;
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.curPage = val;
    }
    // add() {
    //   this.dialogTitle = "新增";
    //   this.dialogVisible = !this.dialogVisible;
    // },
    // edit() {
    //   if (this.tableRows) {
    //     this.dialogTitle = "编辑";
    //     this.dialogVisible = true;
    //   } else {
    //     this.$message("请先选择");
    //   }
    // },
    // del() {
    //   if (this.tableRows) {
    //     this.$confirm("确定要删除该条数据?", {
    //       confirmButtonText: "确定",
    //       cancelButtonText: "取消"
    //     })
    //       .then(() => {
    //         this.$store.commit("DEL_USER_LISTS", this.tableRows.id);
    //       })
    //       .catch(() => {});
    //   } else {
    //     this.$message("请先选择");
    //   }
    // },
    // reset(formName) {
    //   this.$refs[formName].resetFields();
    //   this.queryUserList = this.userLists;
    // }
  }
};
</script>