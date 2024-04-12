<template>
  <div>
    <div class="font-16 mb20">班级列表:</div>
    <el-table :data="tableData">
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="sex" label="性别" />
    </el-table>
    <el-button class="mt20" type="primary" @click="dialogFormVisible = true">添加学生</el-button>

    <el-dialog v-model="dialogFormVisible" title="添加学生" width="500px" @open="resetForm(formElRef)">
      <el-form :model="form" :rules="rules" ref="formElRef">
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="form.name" autocomplete="off" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="性别：" prop="sex">
          <el-select v-model="form.sex" placeholder="选择性别">
            <el-option label="男" value="男" />
            <el-option label="女" value="女" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm(formElRef)">
            添加
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
const tableData = reactive([
  {
    name: '张三',
    sex: '男',
  },
  {
    name: '小红',
    sex: '女',
  },
]);

const dialogFormVisible = ref(false);
const form = reactive({
  name: '',
  sex: '',
});

const rules = reactive({
  name: [
    { required: true, message: '请输入学生姓名', trigger: 'change' },
  ],
  sex: [
    {
      required: true,
      message: '请选择学生性别',
      trigger: 'change',
    },
  ],
});

const formElRef = ref(null);

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      tableData.push(form);
      dialogFormVisible.value = false;
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};

</script>

<style lang="scss" scoped>

</style>
