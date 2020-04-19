<template>
  <el-form
    :inline="true"
    :model="formInline"
    class="demo-form-inline"
    :rules="rules"
    ref="ruleForm"
  >
    <el-form-item label="姓名" prop="user">
      <el-input v-model="formInline.user" placeholder="请输入"></el-input>
    </el-form-item>
    <el-form-item label="事务单号" prop="num" ref="num">
      <el-input v-model="formInline.num" placeholder="请输入" :disabled="formInline.checked"></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="tel">
      <el-input v-model="formInline.tel" placeholder="请输入"></el-input>
    </el-form-item>
    <el-form-item label="身份证号" prop="card">
      <el-input v-model="formInline.card" placeholder="请输入"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" prop="value">
      <el-select v-model="formInline.value" multiple placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
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
      <el-checkbox v-model="formInline.checked" ref="isDeal">是否处理</el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import validate from "@/directive/validator";
export default {
  data() {
    return {
      options: [
        {
          value: "选项18",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      formInline: {
        user: "",
        value: [],
        checked: false,
        date: "",
        num: "",
        tel: "",
        card: ""
      },
      rules: {
        // user: [{ validator: validate.name, trigger: "blur" }],
        // num: [{ validator: validate.name, trigger: "blur" }],
        // date1: [
        //   {
        //     type: "date",
        //     required: true,
        //     message: "请选择日期",
        //     trigger: "change"
        //   }
        // ],
        // date2: [
        //   {
        //     type: "date",
        //     required: true,
        //     message: "请选择日期",
        //     trigger: "change"
        //   }
        // ],
        // value: [{ validator: validate.name, trigger: "change" }]
        // desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  watch: {
    "formInline.checked": function(newValue) {
      if (newValue) {
        this.$refs.num.clearValidate();
        this.rules.num = [];
      } else {
        this.rules.num = [{ validator: validate.name, trigger: "blur" }];
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
  //   watch:{
  //       checked:(old)=>{
  //           if(old){

  //           }
  //       }
  //   }
};
</script>
<style lang="less">
.demo-form-inline {
  .el-form-item {
    margin-right: 30px;
  }
}
</style>