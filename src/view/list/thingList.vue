
<template>
  <div>
    <Form></Form>
    <Table :tableMsg="tableMsg"></Table>
  </div>
</template>

<script>
import Form from "@/components/form";
import Table from "@/components/table";
import { formatDate } from "@/assets/comJs";
export default {
  data() {
    return {
      tableMsg: {
        // <!-- type渲染类型，0默认，1图片，2标签，3按钮，4链接 -->
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
                name: "详情",
                func: row => {
                  console.log(row);
                }
              },
              {
                name: "处理",
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
        buttonData: [
          {
            name: "新增",
            icon: "el-icon-circle-plus-outline",
            func: row => {
              console.log(row);
            }
          },{
            name: "删除",
            icon: "el-icon-delete",
            func: row => {
              console.log(row);
            }
          },{
            name: "编辑",
            icon: "el-icon-edit-outline",
            func: row => {
              console.log(row);
            }
          }
        ],
        pageSize: 10,
        curPage: 1
      }
    };
  },
  // methods: {
    // add() {
    //   this.dialogTitle = "新增";
    //   this.dialogVisible = !this.dialogVisible;
    // }
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
  // },
  components: { Form, Table }
};
</script>  