<template>
  <div class="tinymce">
    <Editor id="tinymce" v-model="tinymceHtml" :init="init"></Editor>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";
//--------------------插入引入--------------------
import "tinymce/plugins/image"; // 插入上传图片插件
import "tinymce/plugins/media"; // 插入视频插件
import "tinymce/plugins/table"; // 插入表格插件
import "tinymce/plugins/link"; //超链接插件
import "tinymce/plugins/code"; //代码块插件
import "tinymce/plugins/lists"; // 列表插件
import "tinymce/plugins/contextmenu"; //右键菜单插件
import "tinymce/plugins/wordcount"; // 字数统计插件
import "tinymce/plugins/colorpicker"; //选择颜色插件
import "tinymce/plugins/textcolor"; //文本颜色插件
import "tinymce/plugins/fullscreen"; //全屏
import "tinymce/plugins/help";
import "tinymce/plugins/charmap";
import "tinymce/plugins/paste";
import "tinymce/plugins/print";
import "tinymce/plugins/preview";
import "tinymce/plugins/hr";
import "tinymce/plugins/anchor";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/spellchecker";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/autosave";
import "tinymce/plugins/fullpage";
import "tinymce/plugins/toc";

export default {
  data() {
    return {
      init: {
        selector: "Editor", //选择HTML元素
        language_url: "/static/tinymce/langs/zh_CN.js", //导入语言文件
        language: "zh_CN", //语言设置
        //disabled:true, //禁用
        skin_url: "/static/tinymce/skins/ui/oxide", //主题样式
        height: 500, //高度
        menubar: false, // 隐藏最上方menu菜单
        toolbar: true, // 隐藏工具栏
        branding: false, // 隐藏右下角水印
        statusbar: true, // 隐藏编辑器底部的状态栏
        elementpath: false, //隐藏底栏的元素路径
        plugins:
          "lists image media table wordcount code fullscreen help  toc fullpage autosave nonbreaking insertdatetime visualchars visualblocks searchreplace spellchecker pagebreak link charmap paste print preview hr anchor",
        toolbar: [
          "newdocument undo redo | formatselect visualaid|cut copy paste selectall| bold italic underline strikethrough |codeformat blockformats| superscript subscript  | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent |  removeformat ",
          "code  bullist numlist | lists image media table link |fullscreen help toc fullpage restoredraft nonbreaking insertdatetime visualchars visualblocks searchreplace spellchecker pagebreak anchor charmap  pastetext print preview hr"
        ],
        images_upload_handler: function(blobInfo, succFun, failFun) {
          var xhr, formData;
          xhr = new XMLHttpRequest();
          xhr.withCredentials = false;
          xhr.open("POST", "https://httpbin.org/post");
          xhr.onload = function() {
            var json;
            if (xhr.status != 200) {
              failFun("HTTP Error: " + xhr.status);
              return;
            }
            json = JSON.parse(xhr.responseText);
            if (!json || !json.files.file) {
              failFun("Invalid JSON: " + xhr.responseText);
              return;
            }
            succFun(json.files.file);
          };
          formData = new FormData();
          formData.append('file', blobInfo.blob(), blobInfo.filename());
          xhr.send(formData);
        },
        file_picker_callback: function(callback, value, meta) {
          var input = document.createElement("input");
          input.setAttribute("type", "file");
          // input.setAttribute("accept", "image/*"); //限制上传的文件类型
          input.onchange = function() {
            var file = this.files[0];
            var reader = new FileReader();
            reader.onload = function() {
              var id = "blobid" + new Date().getTime();
              var blobCache = tinymce.activeEditor.editorUpload.blobCache;
              var base64 = reader.result.split(",")[1];
              var blobInfo = blobCache.create(id, file, base64);
              blobCache.add(blobInfo);             
              callback(blobInfo.blobUri(), { text: file.name });
            };
            reader.readAsDataURL(file);
          };
          input.click();
        }
      },
      tinymceHtml: "hello,world"
    };
  },

  components: {
    Editor
  },

  mounted() {
    tinymce.init({});
  }
};
</script>

<style scoped>
</style>