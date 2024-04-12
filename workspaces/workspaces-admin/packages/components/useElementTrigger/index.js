import { useFormItem } from 'element-plus';

/**
 * 触发表单验证
 * @returns function
 */
export function useElementTrigger() {
  const { formItem } = useFormItem();

  const trigger = () => {
    formItem?.validate('change').catch(() => {});
    formItem?.validate('blur').catch(() => {});
  };

  return { trigger };
}
