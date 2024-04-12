import MPopover from './popover/index.vue';
import MSwitch from './switch/index.vue';
import MLoading from './loading/index.vue';
import CustomRadio from './customRadio/index.vue';
import MSelect from './select/index.vue';
import MEmpty from './empty/index.vue';
import MDrawer from './drawer/index.vue';
import timeTypeSelect from './dateTime/timeTypeSelect.vue';
import dateTimePicker from './dateTime/dateTimePicker.vue';
import TimeSelect from './dateTime/timeSelect.vue';
import daySelect from './dateTime/daySelect.vue';
import MStatistic from './statistic/index.vue';
import MSearchField from './searchField/index.vue';

const MComponents = {
  MPopover,
  MSwitch,
  MLoading,
  CustomRadio,
  MSelect,
  MEmpty,
  MDrawer,
  MStatistic,
  MSearchField,
  install: () => {},
};

function startsWith(string, query, position = 0) {
  return string.substr(position, query.length) === query;
}

MComponents.install = function (app) {
  Object.keys(MComponents).forEach((key) => {
    if (startsWith(key, 'M') || startsWith(key, 'C')) {
      const Component = MComponents[key];
      app.component(Component.name, Component);
    }
  });
  // // 自定义指令
  // Object.keys(directives).forEach((key) => {
  //   app.directive(key, directives[key]);
  // });
};

export {
  MPopover,
  MSwitch,
  MLoading,
  CustomRadio,
  MSelect,
  MEmpty,
  MDrawer,
  timeTypeSelect,
  dateTimePicker,
  TimeSelect,
  daySelect,
  MStatistic,
  MSearchField,
};
export default MComponents;
