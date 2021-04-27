import Vue from 'vue'
import {
  Alert,
  Button,
  Select,
  Option,
  Input,
  Tag,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Dialog,
  Message,
  Loading,
  Popover
} from 'element-ui'
import '../assets/styles/element-variables.scss'

Vue.use(Alert)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dialog)
Vue.use(Popover)

Vue.use(Loading.directive);

Vue.prototype.$message = Message;
