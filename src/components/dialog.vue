<template>
  <el-dialog
    :title="dialogTitle"
    :visible.sync="dialogFormVisible"
    width="400px"
    @close="hidePanel"
  >
    <el-form ref="formD1" :model="formD" style="padding-left:40px">
      <el-form-item label="姓名">
        <el-input v-model="formD.name" placeholder="请输入" style="width:217px"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-select v-model="formD.address" placeholder="请选择">
          <el-option v-for="(v,i) in elOption" :label="v.province" :value="v.province" :key="i"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发布">
        <el-switch v-model="formD.status" active-value="1" inactive-value="0"></el-switch>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer" ref="dibd">
      <el-button @click="hidePanel">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: true,
      formD: {
        name: "",
        address: "",
        status: "0"
      }
    };
  },
  props: ["fatInform", "elOption","dialogTitle"],
  mounted() {
    if (this.dialogTitle=="编辑") {
        this.formD = Object.assign({}, this.fatInform);
    } 
  },
  methods: {
    hidePanel() {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.$emit("diaShow");
    },
    confirm(){
        this.formD.date=this.getTime()
        if(this.dialogTitle == "编辑"){
            this.$store.commit("EDIT_USER_LISTS",this.formD)            
        }else{
            this.$store.commit("ADD_USER_LISTS",this.formD)
        }
        this.hidePanel()
    },
    getTime(){
        let date = new Date();
        return date.toLocaleDateString().replace(new RegExp("/","g"),"-")
    }
  }
};
</script>