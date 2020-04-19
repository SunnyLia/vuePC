<template>
  <div>
    <el-button-group>
      <el-button
        type="primary"
        v-for="val in tableMsg.buttonData"
        :key="val.name"
        :icon="val.icon"
        @click="val.func"
      >{{val.name}}</el-button>
    </el-button-group>
    <el-table
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center'}"
      stripe
      :data="tableMsg.tableData"
      border
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" :index="indexMethod" label="序号" width="60"></el-table-column>
      <el-table-column
        v-for="item in tableMsg.cloumData"
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
            <a :href="scope.row[item.prop]" target="_blank">{{scope.row[item.prop]}}</a>
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
      :current-page="tableMsg.curPage"
      :page-sizes="[10, 15, 20, 50]"
      :page-size="tableMsg.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableMsg.tableData.length"
      style="text-align: right;margin-top: 10px;"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: ["danger", "", "primary", "info", "success", "warning"]
    };
  },
  props: ["tableMsg"],
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
  }
};
</script>