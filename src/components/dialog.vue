<template>
  <el-dialog :title="fatInform ? '编辑':'新增'" :visible.sync="dialogFormVisible" width="400px">
    <el-form :model="formInline" style="padding-left:40px">
      <el-form-item label="姓名">
        <el-input v-model="formInline.user" placeholder="请输入" style="width:217px"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option v-for="(v,i) in elOption" :label="v.province" :value="v.province" :key="i"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发布">
        <el-switch v-model="formInline.status"></el-switch>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: true,
      formInline: {
        user: "",
        region: "",
        status: false
      }
    };
  },
  props:["fatInform","elOption"],
  mounted(){
      
  }
};
</script>