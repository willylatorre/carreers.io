import Vue from 'vue'
import {
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
  Message
} from 'element-ui'
import '../assets/styles/element-variables.scss'

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

Vue.prototype.$message = Message;
